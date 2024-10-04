import { Component, OnInit } from '@angular/core';
import { WeatherColumnComponent } from '../weather-column/weather-column.component';
import { WeatherElementComponent } from '../weather-element/weather-element.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  standalone: true,
  imports: [WeatherColumnComponent, WeatherElementComponent],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
