import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "./features/layout/Layout";

import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "./features/pages/Homepage";

import Country from "./features/pages/Country";
import { useState } from "react";
import ErrorMessage from "./ui/ErrorMessage";

function App() {
  const queryClient = new QueryClient();
  const [queryOption, setQueryOption] = useState("all");

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <HashRouter>
          <Layout>
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
                path="/:region"
                element={
                  <Homepage
                    queryOption={queryOption}
                    setQueryOption={setQueryOption}
                  />
                }
              />
              <Route
                path="/#/country/:name"
                element={
                  <Country
                    queryOption={queryOption}
                    setQueryOption={setQueryOption}
                  />
                }
              />
              <Route path="/*" element={<ErrorMessage />} />
            </Routes>
          </Layout>
        </HashRouter>
      </>
    </QueryClientProvider>
  );
}

export default App;
