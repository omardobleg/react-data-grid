export interface WeatherReport {
  temperature: string;
  wind: string;
  description: string;
  forecast: Forecast[];
}

export interface Forecast {
  day: string;
  temperature: string;
  wind: string;
}
