import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
	selector: 'app-games',
	templateUrl: './games.page.html',
	styleUrls: ['./games.page.scss'],
})
export class GamesPage {

	games$ = this._gamesSvc.get();

	constructor(
		private _gamesSvc: GamesService
	) { }

}
