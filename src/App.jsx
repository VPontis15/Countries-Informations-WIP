import { QueryClient, QueryClientProvider } from "react-query";
import Countries from "./features/main/Countries";
import Layout from "./features/layout/Layout";
import Input from "./ui/Input";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Layout>
          <Input />
          <Countries />
        </Layout>
      </>
    </QueryClientProvider>
  );
}

export default App;
