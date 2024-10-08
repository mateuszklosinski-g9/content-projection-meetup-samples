import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'columnFilter',
  standalone: true,
})
export class ColumnFilterPipe implements PipeTransform {
  transform(
    value: any[] | null,
    filterPropName: string,
    cityFilter: string
  ): any[] {
    return value
      ? value?.filter((d) =>
          cityFilter
            ? d[filterPropName]
                .toLowerCase()
                .startsWith(cityFilter.toLowerCase())
            : true
        )
      : [];
  }
}
