import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appColumnTitle]',
  standalone: true,
})
export class ColumnTitleDirective {
  constructor(public readonly template: TemplateRef<HTMLElement>) {}
}
