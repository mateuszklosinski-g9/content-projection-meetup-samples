import { Routes } from '@angular/router';
import { TemperatureComponent } from './live-demo/before/weather/temperature/temperature.component';
import { WeatherComponent } from './live-demo/before/weather/weather.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'weather',
  },
  {
    path: 'weather',
    component: WeatherComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'temperature',
      },
      {
        path: 'temperature',
        component: TemperatureComponent,
      },
    ],
  },
];
