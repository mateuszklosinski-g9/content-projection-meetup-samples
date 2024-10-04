import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WeatherColumnComponent } from './weather-column/weather-column.component';
import { RegionPipe } from './shared/region.pipe';
import { WeatherData } from './shared/weather-data.model';
import { WeatherApi } from './shared/weather-api.service';

@Component({
  selector: 'app-level-3',
  templateUrl: './level-3.component.html',
  styleUrls: ['./level-3.component.scss'],
  standalone: true,
  imports: [CommonModule, WeatherColumnComponent, RegionPipe],
})
export class Level2Component implements OnInit {
  weatherData$ = this.weatherApi.getAll();

  constructor(private readonly weatherApi: WeatherApi) {}

  ngOnInit() {}

  handleCityClick($event: any): void {}
}
