import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherApi {
  private apiKey = 'YOUR_API_KEY';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private readonly http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`
    );
  }
}
