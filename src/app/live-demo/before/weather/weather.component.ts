import { Component, OnInit } from '@angular/core';
import { WeatherApi } from '../shared/api/weather-api.service';
import { WeatherColumnComponent } from './weather-column/weather-column.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  standalone: true,
  providers: [WeatherApi],
  imports: [WeatherColumnComponent],
})
export class WeatherComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
