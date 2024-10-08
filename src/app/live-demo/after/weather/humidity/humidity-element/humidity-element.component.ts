import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CountryHumidity } from '../shared/country-humidity.model';
import { WeatherElementComponent } from '../../weather-element/weather-element.component';

@Component({
  selector: 'app-humidity-element',
  templateUrl: './humidity-element.component.html',
  styleUrls: ['./humidity-element.component.scss'],
  standalone: true,
  imports: [CommonModule, WeatherElementComponent],
})
export class HumidityElementComponent {
  @Input({ required: true }) country!: CountryHumidity;
}
