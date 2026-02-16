/**
 * Typography, spacing, and radii derived from Figma tokens.raw.json.
 * In the docs app a Vite plugin resolves this import from disk so font/tokens stay fresh.
 */
import tokensRaw from "@gdesignsystem/tokens/figma/tokens.raw.json";

type Raw = {
  typography?: Record<string, string>;
  spacing?: Record<string, string>;
  effects?: Record<string, string>;
};

const raw = tokensRaw as Raw;

function deriveFontSizes(): Record<string, string> {
  const out: Record<string, string> = {};
  const typography = raw.typography ?? {};
  for (const [k, v] of Object.entries(typography)) {
    if (k.startsWith("fontSizes/")) {
      const name = k.replace("fontSizes/", "");
      out[name] = typeof v === "string" ? `${v}px` : String(v);
    }
  }
  return out;
}

function deriveFontWeights(): Record<string, string> {
  const out: Record<string, string> = {};
  const typography = raw.typography ?? {};
  for (const [k, v] of Object.entries(typography)) {
    if (k.startsWith("fontWeights/")) {
      const name = k.replace("fontWeights/", "");
      out[name] = String(v);
    }
  }
  return out;
}

const FONT_FALLBACK = "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif";

/** Font families from Figma (e.g. fonts/body). Used by theme.tokens.fonts so textStyles use the synced font. */
function deriveFonts(): Record<string, string> {
  const typography = raw.typography ?? {};
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(typography)) {
    if (k.startsWith("fonts/")) {
      const name = k.replace("fonts/", "");
      const value = typeof v === "string" && v.trim() ? v.trim() : "";
      if (value) {
        // Append fallback so missing fonts don't fall back to Times/serif
        out[name] = value.includes(",") ? value : `${value}, ${FONT_FALLBACK}`;
      }
    }
  }
  // Fallback so theme always has a body font (e.g. if tokens.raw.json has no fonts/body yet)
  if (!out.body) out.body = FONT_FALLBACK;
  return out;
}

function deriveRadii(): Record<string, string> {
  const out: Record<string, string> = {};
  const effects = raw.effects ?? {};
  for (const [k, v] of Object.entries(effects)) {
    if (k.startsWith("Radii/")) {
      const name = k.replace("Radii/", "").replace("Global_tokens/", "");
      if (!name.includes("/")) {
        out[name] = v === "9999" ? "9999px" : `${v}px`;
      }
    }
  }
  return out;
}

function deriveSpacing(): Record<string, string> {
  const out: Record<string, string> = {};
  const spacing = raw.spacing ?? {};
  for (const [k, v] of Object.entries(spacing)) {
    if (k.startsWith("Size/") || k.startsWith("Spacing/")) {
      const name = k.replace("Size/", "").replace("Spacing/", "").replace(/_/g, ".");
      if (!name.includes("/") && (/\d/.test(name) || name.length < 10)) {
        out[name] = `${v}px`;
      }
    }
  }
  return out;
}

export const fontSizes = deriveFontSizes();
export const fontWeights = deriveFontWeights();
export const fonts = deriveFonts();
export const radii = deriveRadii();
export const spacing = deriveSpacing();
