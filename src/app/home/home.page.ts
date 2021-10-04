import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PickerController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { GameWizardPage } from '../game-wizard/game-wizard.page';
import { GamesService } from '../services/games.service';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	availableLanguages = [{
		code: 'es',
		name: 'SPANISH'
	}, {
		code: 'en',
		name: 'ENGLISH'
	}];

	language = this.availableLanguages.find(o => o.code === this._translateSvc.currentLang ?? this._translateSvc.defaultLang);

	constructor(
		private _router: Router,
		private _modalCtlr: ModalController,
		private _pickerCtrl: PickerController,
		private _translateSvc: TranslateService,
		private _gamesSvc: GamesService
	) { }

	async newGame() {
		const modal = await this._modalCtlr.create({
			component: GameWizardPage
		});
		await modal.present();

		const { data } = await modal.onWillDismiss();
		if (data) {
			const game = await this._gamesSvc.create(data.modeCode, data.numberOfRounds).toPromise();
			this._router.navigate(['games', game.id]);
		}
	}

	async selectLanguage() {
		const picker = await this._pickerCtrl.create({
			columns: [{
				name: 'Language',
				options: this.availableLanguages.map(o => ({
					text: this._translateSvc.instant('LANGUAGES.' + o.name),
					value: o.code,
				}))
			}],
			buttons: [
				{
					text: this._translateSvc.instant('GENERIC.BUTTONS.CANCEL'),
					role: 'cancel'
				},
				{
					text: this._translateSvc.instant('GENERIC.BUTTONS.OK'),
					handler: (value) => {
						this.language = this.availableLanguages.find(o => o.code === value.Language.value);
						this._translateSvc.use(this.language.code ?? 'es');
					}
				}
			]
		});

		await picker.present();

	}
}
