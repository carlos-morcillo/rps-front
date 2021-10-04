import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesPage } from './games.page';

const routes: Routes = [
	{
		path: '',
		component: GamesPage
	},
	{
		path: ':id',
		loadChildren: () => import('../game/game.module').then(m => m.GamePageModule)
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class GamesPageRoutingModule { }
