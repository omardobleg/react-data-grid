import { WeatherReport } from "../types/types";

export const getWeather = (): Promise<WeatherReport> => {
  return fetch("https://goweather.herokuapp.com/weather/Barcelona").then(
    (data) => data.json()
  );
};
