import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WeatherColumnComponent } from '../weather-column/weather-column.component';
import { WeatherApi } from '../../shared/api/weather-api.service';
import { WeatherRegion } from '../../shared/domain/weather-region.model';
import { Observable } from 'rxjs';
import { CityWeather } from '../../shared/domain/city-weather.model';
import { HumidityElementComponent } from './humidity-element/humidity-element.component';
import { ColumnContentDirective } from '../weather-column/shared/column-content.directive';
import { CountryHumidityPipe } from './shared/country-humidity.pipe';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    WeatherColumnComponent,
    HumidityElementComponent,
    ColumnContentDirective,
    CountryHumidityPipe,
  ],
})
export class HumidityComponent implements OnInit {
  readonly regions: { name: WeatherRegion; data: Observable<CityWeather[]> }[] =
    [
      { name: 'America', data: this.weatherApi.getWeatherForRegion('America') },
      { name: 'Europe', data: this.weatherApi.getWeatherForRegion('Europe') },
      { name: 'Asia', data: this.weatherApi.getWeatherForRegion('Asia') },
    ];

  constructor(private readonly weatherApi: WeatherApi) {}

  ngOnInit() {}
}
