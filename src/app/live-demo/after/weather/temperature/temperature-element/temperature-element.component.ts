import { Component, Input } from '@angular/core';
import { CityWeather } from '../../../shared/domain/city-weather.model';
import { CommonModule } from '@angular/common';
import { WeatherElementComponent } from '../../weather-element/weather-element.component';

@Component({
  selector: 'app-temperature-element',
  templateUrl: './temperature-element.component.html',
  styleUrls: ['./temperature-element.component.scss'],
  standalone: true,
  imports: [CommonModule, WeatherElementComponent],
})
export class TemperatureElementComponent {
  @Input({ required: true }) city!: CityWeather;
}
