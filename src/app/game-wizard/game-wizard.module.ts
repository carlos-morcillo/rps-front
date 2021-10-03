import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GameWizardPageRoutingModule } from './game-wizard-routing.module';
import { GameWizardPage } from './game-wizard.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		GameWizardPageRoutingModule,
		TranslateModule.forChild()
	],
	declarations: [GameWizardPage]
})
export class GameWizardPageModule { }
