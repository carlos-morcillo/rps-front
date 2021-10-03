import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GamePageRoutingModule } from './game-routing.module';
import { GamePage } from './game.page';
import { MomentModule } from 'ngx-moment';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		GamePageRoutingModule,
		MomentModule,
		SharedModule
	],
	declarations: [
		GamePage
	]
})
export class GamePageModule { }
