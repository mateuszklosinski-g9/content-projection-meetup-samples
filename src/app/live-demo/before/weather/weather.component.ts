import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  standalone: true,
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
      disabled: true,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
