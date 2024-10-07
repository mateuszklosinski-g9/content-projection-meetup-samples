import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { WeatherApi } from '../shared/api/weather-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  standalone: true,
  providers: [WeatherApi],
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatTabsModule],
})
export class WeatherComponent implements OnInit {
  readonly navLinks = [
    {
      link: '/weather/temperature',
      label: 'Temperature',
      disabled: false,
    },
    {
      link: '/weather/humidity',
      label: 'Humidity',
      disabled: false,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
