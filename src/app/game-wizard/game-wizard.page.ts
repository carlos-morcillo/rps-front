import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Mode } from '../interfaces/Settings';
import { GamesService } from '../services/games.service';

@Component({
	selector: 'app-game-wizard',
	templateUrl: './game-wizard.page.html',
	styleUrls: ['./game-wizard.page.scss'],
})
export class GameWizardPage implements OnInit {

	availableNumberOfRounds: number[] = [1, 3, 5, 7, 9];
	mode: Mode = this._gamesSvc.settings.modes[0];

	form: FormGroup = this._fb.group({
		modeCode: [null, Validators.required],
		numberOrRounds: [null, Validators.required]
	});

	constructor(
		private _fb: FormBuilder,
		private _modalCtrl: ModalController,
		private _gamesSvc: GamesService
	) { }

	ngOnInit() {

	}

	dismiss(numberOfRounds: number) {
		this._modalCtrl.dismiss(numberOfRounds);
	}

}
