import { Component, OnInit } from '@angular/core';
import { WeatherColumnComponent } from './weather-column/weather-column.component';

@Component({
  selector: 'app-level-2',
  templateUrl: './level-2.component.html',
  styleUrls: ['./level-2.component.scss'],
  standalone: true,
  imports: [WeatherColumnComponent],
})
export class Level2Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  handleCityClick($event: any): void {}
}
