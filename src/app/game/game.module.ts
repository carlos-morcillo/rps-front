import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GamePageRoutingModule } from './game-routing.module';
import { GamePage } from './game.page';
import { MomentModule } from 'ngx-moment';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		GamePageRoutingModule,
		TranslateModule.forChild(),
		MomentModule,
		SharedModule
	],
	declarations: [
		GamePage
	]
})
export class GamePageModule { }
