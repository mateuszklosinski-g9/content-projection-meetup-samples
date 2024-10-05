import { Pipe, PipeTransform } from '@angular/core';
import { CityWeather } from '../../../shared/domain/city-weather.model';

@Pipe({
  name: 'columnFilter',
  standalone: true,
})
export class ColumnFilterPipe implements PipeTransform {
  transform(value: CityWeather[] | null, cityFilter: string): CityWeather[] {
    return value
      ? value?.filter((d) =>
          cityFilter
            ? d.name.toLowerCase().startsWith(cityFilter.toLowerCase())
            : true
        )
      : [];
  }
}
