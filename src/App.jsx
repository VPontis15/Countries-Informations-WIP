import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "./features/layout/Layout";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./features/pages/Homepage";
import CountryDetails from "./features/pages/CountryDetails";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path=":region" element={<Homepage />} />
              <Route path="country/:name" element={<CountryDetails />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </>
    </QueryClientProvider>
  );
}

export default App;
