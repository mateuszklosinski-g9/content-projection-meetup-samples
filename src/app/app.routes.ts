import { Routes } from '@angular/router';
import { TemperatureComponent } from './live-demo/before/weather/temperature/temperature.component';
import { TemperatureComponent as AfterTemperatureComponent } from './live-demo/after/weather/temperature/temperature.component';
import { WeatherComponent } from './live-demo/before/weather/weather.component';
import { WeatherComponent as AfterWeatherComponent } from './live-demo/after/weather/weather.component';

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

export const afterRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'weather',
  },
  {
    path: 'weather',
    component: AfterWeatherComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'temperature',
      },
      {
        path: 'temperature',
        component: AfterTemperatureComponent,
      },
    ],
  },
];
