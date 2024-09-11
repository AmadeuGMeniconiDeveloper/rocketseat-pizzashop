import "./global.css";

import { RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { routes } from "./routes";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (
    <ThemeProvider storageKey="pizzashop-theme" defaultTheme="system">
      <HelmetProvider>
        <Toaster richColors />
        <Helmet titleTemplate="%s | pizza.shop" />
        <RouterProvider router={routes} />
      </HelmetProvider>
    </ThemeProvider>
  );
}
