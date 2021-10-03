import { Directive, TemplateRef } from '@angular/core';

@Directive({
	selector: '[flipFront]'
})
export class FlipFrontDirective {

	constructor(public template: TemplateRef<any>) { }

}
