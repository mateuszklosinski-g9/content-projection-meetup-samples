import { Component, Input } from '@angular/core';
import { WeatherApi } from '../../shared/api/weather-api.service';
import { WeatherRegion } from '../../shared/domain/weather-region.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CityWeather } from '../../shared/domain/city-weather.model';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { ColumnFilterPipe } from './shared/column-filter.pipe';

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
  @Input({ required: true }) set region(value: WeatherRegion) {
    this.regionName = value;
    this.cityWeather$ = this.weatherApi.getWeatherForRegion(value);
  }

  regionName = '';
  cityFilter = '';

  cityWeather$: Observable<CityWeather[]> | null = null;

  constructor(private readonly weatherApi: WeatherApi) {}
}
