import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Mode, State } from '../interfaces/Settings';
import { Action } from '../interfaces/Action';
import { GamesService } from '../services/games.service';

@Component({
	selector: 'app-game',
	templateUrl: './game.page.html',
	styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

	id: string;
	game$: Observable<any>;
	states: State[] = this._gamesSvc.settings.states;
	mode: Mode = this._gamesSvc.settings.modes[0];
	actions: Action[] = this._gamesSvc.settings.actions.filter(o => this.mode.allowedActionCodes.indexOf(o.code) > -1);

	constructor(
		private _gamesSvc: GamesService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.route.queryParams.subscribe(params => {
			this.id = params['id'] ?? null;
			// this.game$ = this._gamesSvc.find(this.id);
		});
	}

	addRound(action: Action) {
		// TODO: Mover acción al centro y quitar el resto
		// TODO: Crear ronda con observable
		// Anunciar resultados
		// Si ha terminado, anunciarlo
	}

}
