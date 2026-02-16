// packages/theme/src/system.ts
import { createSystem, defaultConfig } from "@chakra-ui/react";
import { gdsTheme } from "./theme";

// Merge defaultConfig first, then apply GDS overrides
export const system = createSystem(defaultConfig, gdsTheme);
