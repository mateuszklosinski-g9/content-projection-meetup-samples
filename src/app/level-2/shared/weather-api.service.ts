import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WeatherData } from './weather-data.model';

@Injectable()
export class WeatherApi {
  getForRegion(region: string): Observable<WeatherData[]> {
    return of([]);
  }
}
