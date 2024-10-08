import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { WeatherRegion } from '../domain/weather-region.model';
import { CityWeather } from '../domain/city-weather.model';
import { OpenWeatherResponse } from './models/open-weather-response.model';

@Injectable()
export class WeatherApi {
  private apiKey = 'b67cc69c8f8b856367ed3696458d007c';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/group';

  private cityIdsByRegion: Record<WeatherRegion, number[]> = {
    America: [
      5128581, // New York
      5368361, // Los Angeles
      4887398, // Chicago
      4699066, // Houston
      5308655, // Phoenix
      4560349, // Philadelphia
      4726206, // San Antonio
      5391811, // San Diego
      4684888, // Dallas
      5392171, // San Jose
      4164138, // Miami
      5809844, // Seattle
      5419384, // Denver
      4167147, // Orlando
      4508722, // Columbus
      4671654, // Austin
      4990729, // Detroit
      5304391, // Tucson
      5332921, // Sacramento
      5391959, // San Francisco
    ],
    Europe: [
      2643743, // London, UK
      2950159, // Berlin, Germany
      3117735, // Madrid, Spain
      3169070, // Rome, Italy
      2988507, // Paris, France
      2761369, // Vienna, Austria
      756135, // Warsaw, Poland
      2759794, // Amsterdam, Netherlands
      2800866, // Brussels, Belgium
      2673730, // Stockholm, Sweden
      2618425, // Copenhagen, Denmark
      3110469, // Barcelona, Spain
      6455259, // Lyon, France
      3067696, // Prague, Czech Republic
      3054643, // Budapest, Hungary
      3165523, // Milan, Italy
      2761367, // Salzburg, Austria
      292223, // Hamburg, Germany
      2964574, // Dublin, Ireland
      2988506, // Paris, France
    ],
    Asia: [
      1850147, // Tokyo, Japan
      1816670, // Beijing, China
      1275339, // Mumbai, India
      1835848, // Seoul, South Korea
      1609350, // Bangkok, Thailand
      1642911, // Jakarta, Indonesia
      1701668, // Manila, Philippines
      1880252, // Singapore
      1735161, // Kuala Lumpur, Malaysia
      1581130, // Hanoi, Vietnam
      1174872, // Karachi, Pakistan
      1185241, // Dhaka, Bangladesh
      1796236, // Shanghai, China
      1792947, // Guangzhou, China
      1273294, // Delhi, India
      1261481, // Chennai, India
      1283240, // Kathmandu, Nepal
      1259229, // Kolkata, India
      1172451, // Lahore, Pakistan
      1282027, // Yangon, Myanmar
    ],
  };

  constructor(private readonly http: HttpClient) {}

  getWeatherForCity(city: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`
    );
  }

  getWeatherForRegion(region: WeatherRegion): Observable<CityWeather[]> {
    const ids = this.cityIdsByRegion[region];

    return this.http
      .get<OpenWeatherResponse>(
        `${this.apiUrl}?id=${ids}&units=metric&appid=${this.apiKey}`
      )
      .pipe(
        map((response) =>
          response.list.map((city) => ({
            name: city.name,
            country: city.sys.country,
            temperature: city.main.temp,
            humidity: city.main.humidity,
            pressure: city.main.pressure,
          }))
        ),
        delay(500)
      );
  }
}
