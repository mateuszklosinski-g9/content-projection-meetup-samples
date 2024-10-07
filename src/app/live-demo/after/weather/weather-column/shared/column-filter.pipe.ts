import { Pipe, PipeTransform } from '@angular/core';
import { CityWeather } from '../../../shared/domain/city-weather.model';

@Pipe({
  name: 'columnFilter',
  standalone: true,
})
export class ColumnFilterPipe implements PipeTransform {
  transform(
    value: unknown[] | null,
    filterPropName: string,
    cityFilter: string
  ): unknown[] {
    return value
      ? value?.filter((d) =>
          cityFilter
            ? ((<any>d)[filterPropName] as string)
                .toLowerCase()
                .startsWith(cityFilter.toLowerCase())
            : true
        )
      : [];
  }
}
