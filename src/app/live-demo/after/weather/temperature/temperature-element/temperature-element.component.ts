import { Component, Input, OnInit } from '@angular/core';
import { CityWeather } from '../../../shared/domain/city-weather.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temperature-element',
  templateUrl: './temperature-element.component.html',
  styleUrls: ['./temperature-element.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TemperatureElementComponent implements OnInit {
  @Input({ required: true }) city!: CityWeather;

  constructor() {}

  ngOnInit() {}
}
