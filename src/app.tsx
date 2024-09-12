import "./global.css";

import { RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { routes } from "./routes";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";

export function App() {
  return (
    <ThemeProvider storageKey="pizzashop-theme" defaultTheme="system">
      <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop" />
        <QueryClientProvider client={queryClient}>
          <Toaster richColors />
          <RouterProvider router={routes} />
        </QueryClientProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}
