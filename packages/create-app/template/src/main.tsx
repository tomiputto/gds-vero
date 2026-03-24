import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { gdsTheme } from "@gdesignsystem/theme";
import { gdsSyncedTheme } from "./gds-theme-sync.generated";
import App from "./App.tsx";

const system = createSystem(defaultConfig, gdsTheme, gdsSyncedTheme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
