import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Device } from '@ionic-native/device/ngx';
import { GamesService } from './services/games.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
	declarations: [
		AppComponent
	],
	entryComponents: [],
	imports: [
		BrowserModule,
		IonicModule.forRoot({
			backButtonText: ''
		}),
		AppRoutingModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (createTranslateLoader),
				deps: [HttpClient]
			},
			defaultLanguage: 'es'
		})
	],
	providers: [
		Device,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		{ provide: APP_INITIALIZER, useFactory: fetchSettings, deps: [GamesService], multi: true }
	],
	bootstrap: [AppComponent],
})
export class AppModule { }

export function fetchSettings(gameService: GamesService) {
	return (): Promise<any> => {
		return gameService.fetchSettings();
	}
}