import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CountryHumidity } from '../shared/country-humidity.model';

@Component({
  selector: 'app-humidity-element',
  templateUrl: './humidity-element.component.html',
  styleUrls: ['./humidity-element.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class HumidityElementComponent implements OnInit {
  @Input({ required: true }) country!: CountryHumidity;

  constructor() {}

  ngOnInit() {}
}
