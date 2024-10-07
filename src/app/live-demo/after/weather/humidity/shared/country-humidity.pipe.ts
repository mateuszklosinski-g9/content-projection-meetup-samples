import { CityWeather } from './../../../shared/domain/city-weather.model';
import { Pipe, PipeTransform } from '@angular/core';
import { CountryHumidity } from './country-humidity.model';

@Pipe({
  name: 'appCountryHumidity',
  standalone: true,
})
export class CountryHumidityPipe implements PipeTransform {
  transform(citiesWeather: CityWeather[] | null): CountryHumidity[] {
    if (!citiesWeather) {
      return [];
    }

    const countries = citiesWeather
      .map((c) => c.country)
      .filter((v, i, a) => a.indexOf(v) === i);

    return countries.map((c) => {
      const citiesinCountry = citiesWeather.filter((cw) => cw.country === c);
      const humiditySum = citiesinCountry.reduce((a, b) => a + b.humidity, 0);
      const avgHumidity = humiditySum / citiesinCountry.length;

      return {
        name: c,
        humidity: avgHumidity,
      };
    });
  }
}
