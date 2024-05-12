import { useQuery } from "@tanstack/react-query";
import DataGrid, { Column } from "react-data-grid";
import "react-data-grid/lib/styles.css";
import { getWeather } from "../api/getWeather";
import { Forecast, WeatherReport } from "../types/types";

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
  const { isLoading, data } = useQuery<WeatherReport>({
    queryKey: ["weather"],
    queryFn: getWeather,
  });

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <>
      <h1>{data?.temperature}</h1>
      <DataGrid columns={columns} rows={data?.forecast as Forecast[]} />
    </>
  );
};
