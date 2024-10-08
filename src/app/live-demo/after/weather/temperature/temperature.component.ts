import { Component, OnInit } from '@angular/core';
import { WeatherApi } from '../../shared/api/weather-api.service';
import { WeatherColumnComponent } from '../weather-column/weather-column.component';
import { WeatherRegion } from '../../shared/domain/weather-region.model';
import { Observable } from 'rxjs';
import { CityWeather } from '../../shared/domain/city-weather.model';
import { CommonModule } from '@angular/common';
import { TemperatureElementComponent } from './temperature-element/temperature-element.component';
import { ColumnContentDirective } from '../weather-column/shared/column-content.directive';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    WeatherColumnComponent,
    TemperatureElementComponent,
    ColumnContentDirective,
  ],
})
export class TemperatureComponent implements OnInit {
  readonly regions: { name: WeatherRegion; data: Observable<CityWeather[]> }[] =
    [
      { name: 'America', data: this.weatherApi.getWeatherForRegion('America') },
      { name: 'Europe', data: this.weatherApi.getWeatherForRegion('Europe') },
      { name: 'Asia', data: this.weatherApi.getWeatherForRegion('Asia') },
    ];

  constructor(private readonly weatherApi: WeatherApi) {}

  ngOnInit() {}
}
