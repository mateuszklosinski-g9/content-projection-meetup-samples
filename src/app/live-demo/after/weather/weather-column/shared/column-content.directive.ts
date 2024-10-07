import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appColumnContent]',
  standalone: true,
})
export class ColumnContentDirective {
  constructor(public readonly templateRef: TemplateRef<unknown>) {}
}
