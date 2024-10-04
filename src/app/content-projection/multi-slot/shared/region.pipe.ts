import { Pipe, PipeTransform } from '@angular/core';
import { WeatherData } from './weather-data.model';

@Pipe({
  name: 'appRegion',
  standalone: true,
})
export class RegionPipe implements PipeTransform {
  transform(value: WeatherData[] | null, region: string): WeatherData[] {
    return value?.filter((wd) => wd.region === region) ?? [];
  }
}
