import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appColumnElement]',
  standalone: true,
})
export class ColumnElementDirective {
  constructor(public readonly template: TemplateRef<HTMLElement>) {}
}
