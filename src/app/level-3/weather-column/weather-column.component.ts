import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherData } from '../shared/weather-data.model';

@Component({
  selector: 'app-weather-column',
  templateUrl: './weather-column.component.html',
  styleUrls: ['./weather-column.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class WeatherColumnComponent implements OnInit {
  @Input() weatherData: WeatherData[] = [];

  @Output() readonly cityClick = new EventEmitter<string>();

  filter = '';

  constructor() {}

  ngOnInit() {}

  handleCityClick(city: string): void {
    this.cityClick.emit(city);
  }
}
