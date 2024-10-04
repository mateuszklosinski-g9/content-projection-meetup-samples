import { Component, OnInit } from '@angular/core';
import { WeatherColumnComponent } from '../weather-column/weather-column.component';
import { WeatherElementComponent } from '../weather-element/weather-element.component';
import { WeatherData } from '../shared/weather-data.model';
import { RegionPipe } from '../shared/region.pipe';
import { ColumnElementDirective } from '../weather-element/column-element.directive';
import { ColumnTitleDirective } from '../weather-element/column-title.directive';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  standalone: true,
  imports: [
    WeatherColumnComponent,
    WeatherElementComponent,
    RegionPipe,
    ColumnElementDirective,
    ColumnTitleDirective,
  ],
})
export class ParentComponent implements OnInit {
  weatherData: WeatherData[] = [];
  regions = ['America', 'Europe', 'Asia'];

  constructor() {}

  ngOnInit() {}

  handleCityClick($event: any): void {}
}
