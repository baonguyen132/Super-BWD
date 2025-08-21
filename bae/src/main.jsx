import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.scss";
import RouterCustome from "./router";
import { HelmetProvider } from "react-helmet-async";
import UserProvider from "./context/UserContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <UserProvider>
        <RouterCustome />
      </UserProvider>
    </HelmetProvider>
  </StrictMode>
);
