import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { GamePage } from './game.page';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Device } from '@ionic-native/device/ngx';
import { APP_INITIALIZER } from '@angular/core';
import { fetchSettings } from '../app.module';
import { GamesService } from '../services/games.service';

describe('GamePage', () => {
	let component: GamePage;
	let fixture: ComponentFixture<GamePage>;

	// beforeEach(waitForAsync(() => {
	// 	TestBed.configureTestingModule({
	// 		declarations: [GamePage],
	// 		imports: [IonicModule.forRoot(), RouterTestingModule, TranslateModule.forRoot({
	// 			loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
	// 		}), HttpClientModule],
	// 		providers: [
	// 			{ provide: APP_INITIALIZER, useFactory: fetchSettings, deps: [GamesService], multi: true },
	// 			AuthService,
	// 			Device,
	// 		]
	// 	}).compileComponents();

	// 	fixture = TestBed.createComponent(GamePage);
	// 	component = fixture.componentInstance;
	// 	fixture.detectChanges();
	// }));

	// it('should create', () => {
	// 	expect(component).toBeTruthy();
	// });
});
