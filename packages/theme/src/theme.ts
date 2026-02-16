// packages/theme/src/theme.ts
import { defineConfig } from "@chakra-ui/react";
import { fontSizes as figmaFontSizes, fontWeights as figmaFontWeights, fonts as figmaFonts, radii as figmaRadii, spacing as figmaSpacing } from "./figma-tokens";
import { textStyles } from "./textStyles";
import { gdsColorTokens, gdsSemanticColors } from "./gds-tokens";

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
    recipes: {
      input: {
        variants: {
          variant: {
            outline: {
              bg: "bg.default",
              borderWidth: "1px",
              borderColor: "border",
              focusVisibleRing: "inside",
              focusRingColor: "var(--focus-color)",
            },
          },
        },
      },
      nativeSelect: {
        variants: {
          variant: {
            outline: {
              field: {
                bg: "bg.default",
                borderWidth: "1px",
                borderColor: "border",
                focusVisibleRing: "inside",
                "--focus-color": "colors.colorPalette.focusRing",
              },
            },
          },
        },
      } as never,
      checkboxCard: {
        base: {
          root: {
            bg: "bg.default",
          },
        },
        variants: {
          variant: {
            outline: {
              root: {
                bg: "bg.default",
              },
            },
          },
        },
      } as never,
    },
  },
  globalCss: {
    html: {
      colorPalette: "brand",
      // Use literal value from tokens so font always updates after sync (no token resolution)
      fontFamily: figmaFonts.body ?? "system-ui, sans-serif",
    },
  },
});
