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
const nested = flatToNestedTokens(gdsColors as FlatColors) as any;

function ensureColorToken(path: string, valueRef: string) {
  const parts = path.split(".");
  let current = nested;
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    current[part] ??= {};
    current = current[part];
  }
  const last = parts[parts.length - 1];
  current[last] ??= { value: valueRef };
}

/**
 * Chakra v3 `colorPalette="brand"` requires a palette scale at:
 * theme.tokens.colors.brand.{50..900} (plus optional focusRing).
 *
 * Our Figma export currently provides brand tokens under:
 * colors.brand.primary.(base|hover|active|muted|subtle|focusRing|onPrimary)
 * but not a 50..900 scale. We create one here as an adapter.
 */
nested.brand ??= {};
// If dark-mode brand tokens are not provided, fall back to light tokens.
ensureColorToken("brand.primary.base_dark", "{colors.brand.primary.base}");
ensureColorToken("brand.primary.hover_dark", "{colors.brand.primary.hover}");
ensureColorToken("brand.primary.active_dark", "{colors.brand.primary.active}");
ensureColorToken("brand.primary.subtle_dark", "{colors.brand.primary.subtle}");
ensureColorToken("brand.primary.muted_dark", "{colors.brand.primary.muted}");
ensureColorToken("brand.primary.onPrimary_dark", "{colors.brand.primary.onPrimary}");
ensureColorToken("brand.primary.bg_dark", "{colors.brand.primary.bg}");
ensureColorToken("brand.primary.focusRing_dark", "{colors.brand.primary.focusRing}");

// Palette scale uses light/dark variants when available.
nested.brand["50"] = { value: { _light: "{colors.brand.primary.subtle}", _dark: "{colors.brand.primary.subtle_dark}" } };
nested.brand["100"] = { value: { _light: "{colors.brand.primary.muted}", _dark: "{colors.brand.primary.muted_dark}" } };
nested.brand["200"] = { value: { _light: "{colors.brand.primary.muted}", _dark: "{colors.brand.primary.muted_dark}" } };
nested.brand["300"] = { value: { _light: "{colors.brand.primary.base}", _dark: "{colors.brand.primary.base_dark}" } };
nested.brand["400"] = { value: { _light: "{colors.brand.primary.base}", _dark: "{colors.brand.primary.base_dark}" } };
nested.brand["500"] = { value: { _light: "{colors.brand.primary.base}", _dark: "{colors.brand.primary.base_dark}" } };
nested.brand["600"] = { value: { _light: "{colors.brand.primary.hover}", _dark: "{colors.brand.primary.hover_dark}" } };
nested.brand["700"] = { value: { _light: "{colors.brand.primary.active}", _dark: "{colors.brand.primary.active_dark}" } };
nested.brand["800"] = { value: { _light: "{colors.brand.primary.active}", _dark: "{colors.brand.primary.active_dark}" } };
nested.brand["900"] = { value: { _light: "{colors.brand.primary.active}", _dark: "{colors.brand.primary.active_dark}" } };

// Helps recipes that read colors.colorPalette.focusRing
nested.brand["focusRing"] = { value: { _light: "{colors.brand.primary.focusRing}", _dark: "{colors.brand.primary.focusRing_dark}" } };

export const gdsColorTokens = nested as never;

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
    value: { _light: "{colors.brand.primary.focusRing}", _dark: "{colors.brand.primary.focusRing_dark}" },
  },
  // Brand palette for components (Button, Badge, etc.) — maps to GDS brand/primary
  brand: {
    solid: { value: { _light: "{colors.brand.primary.base}", _dark: "{colors.brand.primary.base_dark}" } },
    contrast: { value: { _light: "{colors.brand.primary.onPrimary}", _dark: "{colors.brand.primary.onPrimary_dark}" } },
    fg: { value: { _light: "{colors.brand.primary.base}", _dark: "{colors.brand.primary.base_dark}" } },
    muted: { value: { _light: "{colors.brand.primary.muted}", _dark: "{colors.brand.primary.muted_dark}" } },
    subtle: { value: { _light: "{colors.brand.primary.subtle}", _dark: "{colors.brand.primary.subtle_dark}" } },
    emphasized: { value: { _light: "{colors.brand.primary.hover}", _dark: "{colors.brand.primary.hover_dark}" } },
    focusRing: { value: { _light: "{colors.brand.primary.focusRing}", _dark: "{colors.brand.primary.focusRing_dark}" } },
    border: { value: { _light: "{colors.brand.primary.base}", _dark: "{colors.brand.primary.base_dark}" } },
  },
} as const;
