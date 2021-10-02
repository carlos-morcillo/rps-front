import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { GameWizardPage } from '../game-wizard/game-wizard.page';
import { Game } from '../interfaces/Game';
import { GamesService } from '../services/games.service';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor(
		private _router: Router,
		private _modalController: ModalController,
		private _gamesSvc: GamesService
	) { }

	async newGame() {
		const modal = await this._modalController.create({
			component: GameWizardPage
		});
		await modal.present();

		const { data } = await modal.onWillDismiss();
		const game = await this._gamesSvc.create('TRADITIONAL', data).toPromise();
		this._router.navigate(['games', game.id]);

	}
}
