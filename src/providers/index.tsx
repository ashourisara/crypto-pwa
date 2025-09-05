import React from "react";
import { BrowserRouter } from "react-router-dom";
import QueryClientProvider from "./QueryClientProvider";
import ContextProvider from "./ContextProvider";
import ThemeProvider from "./ThemeProvider";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <QueryClientProvider>
          <ContextProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </ContextProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default AppProviders;
