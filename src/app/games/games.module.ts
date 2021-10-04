import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GamesPageRoutingModule } from './games-routing.module';
import { GamesPage } from './games.page';
import { MomentModule } from 'ngx-moment';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		GamesPageRoutingModule,
		MomentModule,
		TranslateModule.forChild()
	],
	declarations: [GamesPage]
})
export class GamesPageModule { }
