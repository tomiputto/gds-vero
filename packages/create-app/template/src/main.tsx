import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GDSProvider } from "@gdesignsystem/react";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GDSProvider>
      <App />
    </GDSProvider>
  </StrictMode>
);
