import { Component, ContentChild, HostBinding, Input, TemplateRef } from '@angular/core';
import { FlipBackDirective } from './flip-back.directive';
import { FlipFrontDirective } from './flip-front.directive';

@Component({
	selector: 'flip',
	templateUrl: './flip.component.html',
	styleUrls: ['./flip.component.scss']
})
export class FlipComponent {

	@HostBinding('class.active') @Input() active: boolean = false;
	@ContentChild(FlipFrontDirective, { read: TemplateRef }) flipFrontTpt: FlipFrontDirective;
	@ContentChild(FlipBackDirective, { read: TemplateRef }) flipBackTpt: FlipFrontDirective;

}
