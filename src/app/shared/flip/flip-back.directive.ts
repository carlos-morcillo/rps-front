import { Directive, TemplateRef } from '@angular/core';

@Directive({
	selector: '[flipBack]'
})
export class FlipBackDirective {

	constructor(public template: TemplateRef<any>) { }

}
