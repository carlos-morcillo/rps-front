import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameWizardPage } from './game-wizard.page';

const routes: Routes = [
	{
		path: '',
		component: GameWizardPage
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class GameWizardPageRoutingModule { }
