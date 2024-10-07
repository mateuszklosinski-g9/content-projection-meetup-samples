import { Component, OnInit } from '@angular/core';
import { WeatherApi } from '../../shared/api/weather-api.service';
import { WeatherColumnComponent } from '../weather-column/weather-column.component';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss'],
  standalone: true,
  providers: [WeatherApi],
  imports: [WeatherColumnComponent],
})
export class TemperatureComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
