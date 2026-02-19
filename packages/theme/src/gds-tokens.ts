/**
 * GDS design tokens for Chakra theme.
 * In the docs app a Vite plugin resolves this import from disk so tokens stay fresh.
 */
import tokensRaw from "@gdesignsystem/tokens/figma/tokens.raw.json";

const gdsColors = (tokensRaw as { colors?: Record<string, string> }).colors ?? {};

type FlatColors = Record<string, string>;

function flatToNestedTokens(flat: FlatColors): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(flat)) {
    const parts = key.split("/");
    let current = result;
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      if (!(part in current) || typeof (current as Record<string, unknown>)[part] !== "object") {
        (current as Record<string, unknown>)[part] = {};
      }
      current = (current as Record<string, unknown>)[part] as Record<string, unknown>;
    }
    const last = parts[parts.length - 1];
    (current as Record<string, unknown>)[last] = { value };
  }
  return result;
}

/**
 * Raw GDS color tokens as Chakra theme.tokens.colors (nested, with value wrapper).
 */
export const gdsColorTokens = flatToNestedTokens(gdsColors as FlatColors);

/**
 * Semantic color tokens that reference GDS raw tokens (nested for Chakra).
 * Use in theme as semanticTokens.colors so components can use color="fg", bg="bg.subtle", etc.
 * Option A dark mode: _light / _dark using existing inverted/gray tokens.
 */
export const gdsSemanticColors = {
  fg: {
    // Light theme: use dark text (gray.fg) so readable on white. Dark theme: use light text (text.fg_inverted).
    // Raw text.fg from Figma is often light (#fafafa); we need dark for light mode.
    DEFAULT: { value: { _light: "{colors.gray.fg}", _dark: "{colors.text.fg_inverted}" } },
    muted: { value: { _light: "{colors.text.fg_muted}", _dark: "{colors.text.fg_subtle}" } },
    subtle: { value: { _light: "{colors.text.fg_subtle}", _dark: "{colors.gray.400}" } },
    inverted: { value: "{colors.text.fg_inverted}" },
    error: { value: "{colors.text.fg_error}" },
    warning: { value: "{colors.text.fg_warning}" },
    success: { value: "{colors.text.fg_success}" },
    info: { value: "{colors.text.fg_info}" },
  },
  bg: {
    // Light mode: explicit values so bg resolves (avoid white fallback). Dark: gray scale.
    DEFAULT: { value: { base: "#ffffff", _light: "#ffffff", _dark: "{colors.bg.inverted}" } },
    default: { value: { base: "#ffffff", _light: "#ffffff", _dark: "{colors.bg.inverted}" } },
    subtle: { value: { base: "#fafafa", _light: "#fafafa", _dark: "{colors.gray.950}" } },
    muted: { value: { base: "#f4f4f5", _light: "#f4f4f5", _dark: "{colors.gray.900}" } },
    emphasized: { value: { base: "#e4e4e7", _light: "#e4e4e7", _dark: "{colors.gray.800}" } },
    inverted: { value: "{colors.bg.inverted}" },
    panel: { value: { base: "#ffffff", _light: "#ffffff", _dark: "{colors.gray.900}" } },
    error: { value: "{colors.bg.error}" },
    warning: { value: "{colors.bg.warning}" },
    success: { value: "{colors.bg.success}" },
    info: { value: "{colors.bg.info}" },
  },
  border: {
    // Light mode: explicit light grays so borders stay light (never black). Dark: gray scale.
    DEFAULT: { value: { base: "#e4e4e7", _light: "#e4e4e7", _dark: "{colors.border.inverted}" } },
    default: { value: { base: "#e4e4e7", _light: "#e4e4e7", _dark: "{colors.border.inverted}" } },
    subtle: { value: { base: "#f0f0f2", _light: "#f0f0f2", _dark: "{colors.gray.800}" } },
    muted: { value: { base: "#e8e8ec", _light: "#e8e8ec", _dark: "{colors.gray.700}" } },
    emphasized: { value: { base: "#d4d4d8", _light: "#d4d4d8", _dark: "{colors.gray.600}" } },
    inverted: { value: "{colors.border.inverted}" },
    error: { value: "{colors.border.error}" },
    warning: { value: "{colors.border.warning}" },
    success: { value: "{colors.border.success}" },
    info: { value: "{colors.border.info}" },
  },
  focusRing: {
    value: "{colors.brand.primary.focusRing}",
  },
  // Brand palette for components (Button, Badge, etc.) — maps to GDS brand/primary
  brand: {
    solid: { value: "{colors.brand.primary.base}" },
    contrast: { value: "{colors.brand.primary.onPrimary}" },
    fg: { value: "{colors.brand.primary.base}" },
    muted: { value: "{colors.brand.primary.muted}" },
    subtle: { value: "{colors.brand.primary.subtle}" },
    emphasized: { value: "{colors.brand.primary.hover}" },
    focusRing: { value: "{colors.brand.primary.focusRing}" },
    border: { value: "{colors.brand.primary.base}" },
  },
} as const;
