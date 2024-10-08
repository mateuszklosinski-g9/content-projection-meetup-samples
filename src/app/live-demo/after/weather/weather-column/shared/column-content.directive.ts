import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[appColumnContent]',
  standalone: true,
})
export class ColumnContentDirective {}
