import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherApi } from '../shared/weather-api.service';
import { WeatherData } from '../shared/weather-data.model';

@Component({
  selector: 'app-weather-column',
  templateUrl: './weather-column.component.html',
  styleUrls: ['./weather-column.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class WeatherColumnComponent implements OnInit {
  @Input() set key(value: string) {
    this.weatherApi.getForRegion(value).subscribe((data) => {
      this.weatherData = data;
    });
  }

  @Output() readonly cityClick = new EventEmitter<string>();

  weatherData: WeatherData[] = [];
  filter = '';

  constructor(private readonly weatherApi: WeatherApi) {}

  ngOnInit() {}

  handleCityClick(city: string): void {
    this.cityClick.emit(city);
  }
}
