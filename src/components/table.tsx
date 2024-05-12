import { useQuery } from "@tanstack/react-query";
import DataGrid, { Column } from "react-data-grid";
import "react-data-grid/lib/styles.css";
import { getWeather } from "../api/getWeather";
import { Forecast, WeatherReport } from "../types/types";
import { useContext, useState } from "react";
import { WheatherContext } from "./weather-provider";

const columns: Column<Forecast>[] = [
  {
    key: "day",
    name: "Day",
  },
  {
    key: "temperature",
    name: "Temperature",
  },
  {
    key: "wind",
    name: "Wind",
  },
] as const;
export const Table = () => {
  const providedCity = useContext(WheatherContext);
  const [city, setCity] = useState(providedCity);
  const { isLoading, data } = useQuery<WeatherReport>({
    queryKey: ["weather", city],
    queryFn: getWeather(city),
  });

  return (
    <section>
      <div>City Picker</div>
      <input onBlur={(input) => setCity(input.target.value)}></input>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <h1>{data?.temperature}</h1>
          <DataGrid columns={columns} rows={data?.forecast as Forecast[]} />
        </>
      )}
    </section>
  );
};
