import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Table } from "./components/table";
import { WeatherProvider } from "./components/weather-provider";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherProvider city="Barcelona">
        <Table />
        <Table />
      </WeatherProvider>
    </QueryClientProvider>
  );
}

export default App;
