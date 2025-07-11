import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <AppRoutes />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);
