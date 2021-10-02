import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-game-wizard',
	templateUrl: './game-wizard.page.html',
	styleUrls: ['./game-wizard.page.scss'],
})
export class GameWizardPage implements OnInit {

	availableNumberOfRounds: number[] = [1, 3, 5, 7, 9];

	constructor(
		private _modalCtrl: ModalController
	) { }

	ngOnInit() {
	}

	dismiss(numberOfRounds: number) {
		this._modalCtrl.dismiss(numberOfRounds);
	}

}
