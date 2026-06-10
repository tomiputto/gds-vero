/**
 * Text styles use typography tokens from Figma (@gds-vero/tokens).
 * Font family uses the literal value from tokens so it updates after sync.
 */
import { fonts as figmaFonts } from "./figma-tokens";

const bodyFont = figmaFonts.body ?? "Arial, Helvetica, sans-serif";
const headingFont = figmaFonts.heading ?? bodyFont;

export const textStyles = {
  /** h1 – vero.fi 42px / semibold / line-height 1.25 */
  display: {
    fontFamily: headingFont,
    fontSize: "4xl",
    fontWeight: "semibold",
    lineHeight: "1.25",
  },
  /** h2 – vero.fi 34px */
  headline: {
    fontFamily: headingFont,
    fontSize: "3xl",
    fontWeight: "semibold",
    lineHeight: "1.25",
  },
  /** h3 – vero.fi 24px */
  title: {
    fontFamily: headingFont,
    fontSize: "2xl",
    fontWeight: "semibold",
    lineHeight: "1.25",
  },
  /** Body; vero.fi 18px / line-height 1.5 (all breakpoints) */
  body: {
    fontFamily: bodyFont,
    fontSize: "md",
    fontWeight: "normal",
    lineHeight: "1.5",
  },
  /** Caption; vero.fi secondary text */
  caption: {
    fontFamily: bodyFont,
    fontSize: "sm",
    fontWeight: "normal",
    lineHeight: "1.33",
  },
} as const;
