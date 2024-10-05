export interface OpenWeatherResponse {
  cnt: number;
  list: OpenWeatherResponseCity[];
}

export interface OpenWeatherResponseCity {
  sys: { country: string };
  main: { temp: number; pressure: number; humidity: number };
  name: string;
}
