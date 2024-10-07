import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { ColumnFilterPipe } from './shared/column-filter.pipe';
import { ColumnContentDirective } from './shared/column-content.directive';

@Component({
  selector: 'app-weather-column',
  templateUrl: './weather-column.component.html',
  styleUrls: ['./weather-column.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    LoaderComponent,
    ColumnFilterPipe,
  ],
})
export class WeatherColumnComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) data: unknown[] = [];
  @Input({ required: true }) filterPropName = '';

  @ContentChild(ColumnContentDirective, { read: TemplateRef })
  readonly contentTemplate: TemplateRef<any> | null = null;

  cityFilter = '';
}
