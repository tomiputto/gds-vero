/**
 * Text styles use typography tokens from Figma (@gds/tokens).
 * Font family uses the literal value from tokens so it updates after sync.
 */
import { fonts as figmaFonts } from "./figma-tokens";

const bodyFont = figmaFonts.body ?? "system-ui, sans-serif";

export const textStyles = {
  /** Display – largest; Figma fontSizes 4xl */
  display: {
    fontFamily: bodyFont,
    fontSize: "4xl",
    fontWeight: "700",
    lineHeight: "1.1",
    letterSpacing: "-0.01em",
  },
  /** Headline; Figma fontSizes 3xl */
  headline: {
    fontFamily: bodyFont,
    fontSize: "3xl",
    fontWeight: "600",
    lineHeight: "1.2",
    letterSpacing: "-0.01em",
  },
  /** Title; Figma fontSizes xl */
  title: {
    fontFamily: bodyFont,
    fontSize: "xl",
    fontWeight: "600",
    lineHeight: "1.3",
  },
  /** Body; Figma fontSizes md, fontWeights normal */
  body: {
    fontFamily: bodyFont,
    fontSize: "md",
    fontWeight: "normal",
    lineHeight: "1.5",
  },
  /** Caption; Figma fontSizes sm */
  caption: {
    fontFamily: bodyFont,
    fontSize: "sm",
    fontWeight: "normal",
    lineHeight: "1.4",
  },
} as const;
