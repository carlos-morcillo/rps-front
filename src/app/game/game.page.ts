import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Subject, timer } from 'rxjs';
import { delay, map, switchMap, tap } from 'rxjs/operators';
import { Action } from '../interfaces/Action';
import { Game } from '../interfaces/Game';
import { Mode, State } from '../interfaces/Settings';
import { GamesService } from '../services/games.service';

@Component({
	selector: 'app-game',
	templateUrl: './game.page.html',
	styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit, OnDestroy {

	timeToPlay: number = 5000;
	alertsDelay: number = 3000;

	id: string;
	game: Game;
	states: State[] = this._gamesSvc.settings.states;
	mode: Mode = this._gamesSvc.settings.modes[0];
	actions: Action[] = this._gamesSvc.settings.actions.filter(o => this.mode.allowedActionCodes.indexOf(o.code) > -1);
	roundResult: string;
	showGameResult: boolean = false;

	userActionSbj = new Subject<Action>();
	machineActionSbj = new Subject<Action>();

	result$ = combineLatest(
		// TODO: Cuenta atrás
		this.userActionSbj.pipe(
			tap(o => console.log('El jugador ha jugado con ' + o.name))
		),
		timer(Math.random() * this.timeToPlay).pipe(
			tap(_ => console.log('La máquina va ha jugar')),
			map(_ => this.randomAction()),
			tap(o => console.log('La máquina ha jugado con ' + o.name)),
		), (userAction: Action, machineAction: Action) => ({ userAction, machineAction })).pipe(
			map(o => ({ resultCode: this.getRoundResult(o.userAction, o.machineAction), userActionCode: o.userAction.code, machineActionCode: o.machineAction.code })),
			tap(o => {
				this.roundResult = o.resultCode;
			}),
			switchMap(o => {
				return this._gamesSvc.saveRound(this.id, o);
			}),
			delay(this.alertsDelay),
			tap(o => {
				this.roundResult = null;
			}),
			tap(o => {
				this.game = o;
				if (this.game.resultCode) {
					this.showGameResult = true;
				}
			})
		);

	constructor(
		private route: ActivatedRoute,
		private _gamesSvc: GamesService
	) { }

	async ngOnInit() {
		this.route.params.subscribe(async (params) => {
			this.id = params['id'] ?? null;
			try {
				this.game = await this._gamesSvc.find(this.id).toPromise();
			} catch (error) {
				// TODO: controlar errores
				debugger;
			}
		});

		this.result$.subscribe();
	}

	ngOnDestroy() {
		// TODO: Desuscribirse
	}

	play(action: Action) {
		this.userActionSbj.next(action);
	}

	addRound(action: Action) {
		// TODO: Mover acción al centro y quitar el resto
		// TODO: Crear ronda con observable
		// Anunciar resultados
		// Si ha terminado, anunciarlo
	}

	/**
	 * Devuelve una acción al azar del juego
	 *
	 * @return {*} 
	 * @memberof GamePage
	 */
	randomAction() {
		const index = Math.floor(Math.random() * this.actions.length);
		console.log(index);

		const action = this.actions[index];
		console.log(action);
		return action;
	}

	/**
	 * Obtiene el resultado de la ronda respecto al jugador
	 *
	 * @param {Action} userAction
	 * @param {Action} machineAction
	 * @return {*}  {*}
	 * @memberof GamePage
	 */
	getRoundResult(userAction: Action, machineAction: Action): any {
		if (userAction.code === machineAction.code) {
			console.log('TIE');
			return 'TIE';
		} else if (userAction.strongAgainst.indexOf(machineAction.code) > -1) {
			console.log('VICTORY');
			return 'VICTORY';
		} else {
			console.log('DEFEAT');
			return 'DEFEAT';
		}
	}

	showSummary() {
		this.showGameResult = false;
	}

}
