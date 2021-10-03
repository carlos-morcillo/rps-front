import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { merge, Subject, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Game } from '../interfaces/Game';
import { GamesService } from '../services/games.service';

@Component({
	selector: 'app-games',
	templateUrl: './games.page.html',
	styleUrls: ['./games.page.scss'],
})
export class GamesPage {

	now = moment.now();

	refresh$ = new Subject();

	games$ = merge(
		timer(0),
		this.refresh$
	).pipe(
		switchMap(_ => this._gamesSvc.get())
	);

	constructor(
		private _gamesSvc: GamesService
	) { }

	/**
	 * Elimina el historial de juegos o un juego en particular
	 *
	 * @memberof GamesPage
	 */
	async delete(game?: Game) {
		if (confirm(game ? 'DELETE_GAME?' : 'CLEAR_HISTORY?')) {
			await this._gamesSvc.delete(game.id ?? null);
			this.refresh$.next();
		}
	}

}
