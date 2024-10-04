import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  ContentChildren,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColumnTitleDirective } from '../weather-element/column-title.directive';
import { ColumnElementDirective } from '../weather-element/column-element.directive';

@Component({
  selector: 'app-weather-column',
  templateUrl: './weather-column.component.html',
  styleUrls: ['./weather-column.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class WeatherColumnComponent {
  @ContentChild(ColumnTitleDirective, { read: TemplateRef })
  readonly titleTemplate: TemplateRef<HTMLElement> | null = null;

  filter = '';

  @ContentChildren(ColumnElementDirective, { read: TemplateRef })
  readonly elementTemplates?: QueryList<TemplateRef<HTMLElement> | null>;
}
