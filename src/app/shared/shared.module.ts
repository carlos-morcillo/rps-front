import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmazingAlertComponent } from './amazing-alert/amazing-alert.component';

@NgModule({
	declarations: [
		AmazingAlertComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		AmazingAlertComponent
	]
})
export class SharedModule { }
