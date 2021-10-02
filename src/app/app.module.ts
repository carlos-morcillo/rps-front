import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Device } from '@ionic-native/device/ngx';
import { GamesService } from './services/games.service';

@NgModule({
	declarations: [
		AppComponent
	],
	entryComponents: [],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		HttpClientModule
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