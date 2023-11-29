import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "./features/layout/Layout";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./features/pages/Homepage";

import Country from "./features/pages/Country";
import { useState } from "react";

function App() {
  const queryClient = new QueryClient();
  const [queryOption, setQueryOption] = useState("all");

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route
                index
                element={
                  <Homepage
                    queryOption={queryOption}
                    setQueryOption={setQueryOption}
                  />
                }
              />
              <Route
                path=":region"
                element={
                  <Homepage
                    queryOption={queryOption}
                    setQueryOption={setQueryOption}
                  />
                }
              />
              <Route
                path="country/:name"
                element={
                  <Country
                    queryOption={queryOption}
                    setQueryOption={setQueryOption}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </Layout>
      </>
    </QueryClientProvider>
  );
}

export default App;
