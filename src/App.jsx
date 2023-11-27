import { QueryClient, QueryClientProvider } from "react-query";
import Countries from "./features/main/countries";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Countries />
      </div>
    </QueryClientProvider>
  );
}

export default App;
