// packages/theme/src/theme.ts
import { defineConfig } from "@chakra-ui/react";
import { fontSizes as figmaFontSizes, fontWeights as figmaFontWeights, fonts as figmaFonts, radii as figmaRadii, spacing as figmaSpacing } from "./figma-tokens";
import { textStyles } from "./textStyles";
import { gdsColorTokens, gdsSemanticColors } from "./gds-tokens";
import { veroRecipes, veroSlotRecipes } from "./vero-recipes";

const fontSizesTokens = Object.fromEntries(
  Object.entries(figmaFontSizes).map(([k, v]) => [k, { value: v }])
);
const fontWeightsTokens = Object.fromEntries(
  Object.entries(figmaFontWeights).map(([k, v]) => [k, { value: v }])
);
const fontsTokens = Object.fromEntries(
  Object.entries(figmaFonts).map(([k, v]) => [k, { value: v }])
);
const radiiTokens = Object.fromEntries(
  Object.entries(figmaRadii).map(([k, v]) => [k, { value: v }])
);
const spacingTokens = Object.fromEntries(
  Object.entries(figmaSpacing).map(([k, v]) => [k, { value: v }])
);

// IMPORTANT: This is a config *extension*, not a full replacement.
export const gdsTheme = defineConfig({
  theme: {
    textStyles,
    tokens: {
      colors: gdsColorTokens as never,
      fonts: fontsTokens as never,
      fontSizes: fontSizesTokens as never,
      fontWeights: fontWeightsTokens as never,
      radii: radiiTokens as never,
      spacing: spacingTokens as never,
    },
    semanticTokens: {
      colors: gdsSemanticColors,
    },
    recipes: veroRecipes as never,
    slotRecipes: veroSlotRecipes as never,
  },
  globalCss: {
    html: {
      colorPalette: "brand",
      fontFamily: figmaFonts.body ?? "Arial, Helvetica, sans-serif",
      fontSize: "md",
      lineHeight: "1.5",
      color: "fg",
      bg: "bg.subtle",
    },
    body: {
      bg: "bg.subtle",
      color: "fg",
      fontFamily: figmaFonts.body ?? "Arial, Helvetica, sans-serif",
      fontSize: "md",
      lineHeight: "1.5",
    },
    a: {
      color: "brand.solid",
      textDecoration: "underline",
      textUnderlineOffset: "2px",
      _hover: {
        color: "brand.emphasized",
      },
    },
  },
});
