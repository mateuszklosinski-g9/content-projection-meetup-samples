import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-poorly-designed',
  templateUrl: './poorly-designed.component.html',
  styleUrls: ['./poorly-designed.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class PoorlyDesignedComponent {
  americaWeather = [
    { city: 'New York', temperature: '22°C', condition: 'Sunny' },
    { city: 'Los Angeles', temperature: '25°C', condition: 'Cloudy' },
  ];
  europeWeather = [
    { city: 'London', temperature: '18°C', condition: 'Rainy' },
    { city: 'Paris', temperature: '20°C', condition: 'Sunny' },
  ];
  asiaWeather = [
    { city: 'Tokyo', temperature: '23°C', condition: 'Sunny' },
    { city: 'Beijing', temperature: '19°C', condition: 'Cloudy' },
  ];

  americaFilter = '';
  europeFilter = '';
  asiaFilter = '';

  handleAmericaClick(city: string) {
    console.log('America city clicked:', city);
  }

  handleEuropeClick(city: string) {
    console.log('Europe city clicked:', city);
  }

  handleAsiaClick(city: string) {
    console.log('Asia city clicked:', city);
  }

  filterAmericaWeather() {
    return this.americaWeather.filter((weather) =>
      weather.city.toLowerCase().includes(this.americaFilter.toLowerCase())
    );
  }

  filterEuropeWeather() {
    return this.europeWeather.filter((weather) =>
      weather.city.toLowerCase().includes(this.europeFilter.toLowerCase())
    );
  }

  filterAsiaWeather() {
    return this.asiaWeather.filter((weather) =>
      weather.city.toLowerCase().includes(this.asiaFilter.toLowerCase())
    );
  }
}
