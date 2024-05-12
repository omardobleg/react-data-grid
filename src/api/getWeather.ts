import { WeatherReport } from "../types/types";

export const getWeather =
  (city = "Barcelona") =>
  (): Promise<WeatherReport> => {
    return fetch(`https://goweather.herokuapp.com/weather/${city}`).then(
      (data) => data.json()
    );
  };
