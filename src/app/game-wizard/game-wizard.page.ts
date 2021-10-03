import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonSlides, ModalController } from '@ionic/angular';
import { Mode } from '../interfaces/Settings';
import { GamesService } from '../services/games.service';

@Component({
	selector: 'app-game-wizard',
	templateUrl: './game-wizard.page.html',
	styleUrls: ['./game-wizard.page.scss'],
})
export class GameWizardPage implements OnInit, AfterViewInit {

	availableNumberOfRounds: number[] = [1, 3, 5, 7, 9];
	modes: Mode[] = this._gamesSvc.settings.modes;

	form: FormGroup = this._fb.group({
		modeCode: [null, Validators.required],
		numberOrRounds: [null, Validators.required]
	});

	@ViewChild(IonSlides) slides: IonSlides;

	constructor(
		private _fb: FormBuilder,
		private _modalCtrl: ModalController,
		private _gamesSvc: GamesService
	) { }

	ngOnInit() {
		// Si solo hay un modo, lo establecemos
		if (this.modes.length === 1) {
			this.form.get('modeCode').patchValue(this.modes[0].code);
		}
	}

	ngAfterViewInit() {
		this.slides.lockSwipeToNext(true);
	}

	next() {
		this.slides.lockSwipeToNext(false);
		this.slides.slideNext();
		this.slides.lockSwipeToNext(true);
	}

	dismiss(numberOfRounds: number) {
		this._modalCtrl.dismiss(numberOfRounds);
	}

}
