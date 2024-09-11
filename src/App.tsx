import "./global.css";

import { RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { routes } from "./routes";
import { Toaster } from "sonner";

export function App() {
  return (
    <HelmetProvider>
      <Toaster richColors />
      <Helmet titleTemplate="%s | pizza.shop" />
      <RouterProvider router={routes} />
    </HelmetProvider>
  );
}
