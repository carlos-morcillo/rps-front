import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'amazing-alert',
	templateUrl: './amazing-alert.component.html',
	styleUrls: ['./amazing-alert.component.scss'],
})
export class AmazingAlertComponent implements OnInit {

	@Input() content: string;

	constructor() { }

	ngOnInit() { }

}
