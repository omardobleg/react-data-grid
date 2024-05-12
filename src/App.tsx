import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Table } from "./components/table";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Table />
    </QueryClientProvider>
  );
}

export default App;
