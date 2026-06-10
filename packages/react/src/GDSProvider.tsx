import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@gds-vero/theme";

export function GDSProvider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
