import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-element',
  templateUrl: './weather-element.component.html',
  styleUrls: ['./weather-element.component.scss'],
  standalone: true,
})
export class WeatherElementComponent {
  @Input({ required: true }) title!: string;
}
