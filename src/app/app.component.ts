import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {
	constructor(
		private _translateSvc: TranslateService
	) {
		this._translateSvc.setDefaultLang('es');
		this._translateSvc.use('en');
	}
}
