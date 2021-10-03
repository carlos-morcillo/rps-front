import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmazingAlertComponent } from './amazing-alert/amazing-alert.component';
import { FlipComponent } from './flip/flip.component';
import { FlipBackDirective } from './flip/flip-back.directive';
import { FlipFrontDirective } from './flip/flip-front.directive';

@NgModule({
	declarations: [
		AmazingAlertComponent,
		FlipComponent,
		FlipBackDirective,
		FlipFrontDirective
	],
	imports: [
		CommonModule
	],
	exports: [
		AmazingAlertComponent,
		FlipComponent,
		FlipFrontDirective,
		FlipBackDirective
	]
})
export class SharedModule { }
