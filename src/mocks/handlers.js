import { http, HttpResponse } from "msw";

const cities = {
  Madrid: {
    temperature: "25 °C",
    wind: "4 km/h",
    description: "Partly cloudy",
    forecast: [
      {
        day: "1",
        temperature: "12 °C",
        wind: "9 km/h",
      },
      {
        day: "2",
        temperature: "13 °C",
        wind: "10 km/h",
      },
      {
        day: "3",
        temperature: "18 °C",
        wind: "5 km/h",
      },
    ],
  },
  Barcelona: {
    temperature: "31 °C",
    wind: "4 km/h",
    description: "Partly cloudy",
    forecast: [
      {
        day: "12",
        temperature: "20 °C",
        wind: "9 km/h",
      },
      {
        day: "13",
        temperature: "19 °C",
        wind: "10 km/h",
      },
      {
        day: "14",
        temperature: " °C",
        wind: "5 km/h",
      },
    ],
  },
};
export const handlers = [
  http.get("https://goweather.herokuapp.com/weather/:city", ({ params }) => {
    // ...and respond to them using this JSON response.
    const { city } = params;
    return HttpResponse.json(cities[city] ?? cities["Barcelona"]);
  }),
];
