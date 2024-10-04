import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherData } from '../shared/weather-data.model';

@Component({
  selector: 'app-weather-element',
  templateUrl: './weather-element.component.html',
  styleUrls: ['./weather-element.component.scss'],
  standalone: true,
})
export class WeatherElementComponent implements OnInit {
  @Input() weatherData?: WeatherData;

  @Output() readonly cityClick = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  handleCityClick(city: string): void {
    this.cityClick.emit(city);
  }
}
