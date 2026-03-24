#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);

function usage() {
  console.log(`Usage:
  gds tokens sync [--in <path>] [--raw-out <path>] [--theme-out <path>]

Defaults:
  --in        .tmp/figma.variable_defs.json
  --raw-out   src/gds-tokens.raw.json
  --theme-out src/gds-theme-sync.generated.ts
`);
}

function readFlag(flag, fallback) {
  const idx = args.indexOf(flag);
  if (idx === -1) return fallback;
  return args[idx + 1] ?? fallback;
}

const command = `${args[0] ?? ""} ${args[1] ?? ""}`.trim();
if (command !== "tokens sync") {
  usage();
  process.exit(command ? 1 : 0);
}

const cwd = process.cwd();
const inFile = path.resolve(cwd, readFlag("--in", ".tmp/figma.variable_defs.json"));
const rawOut = path.resolve(cwd, readFlag("--raw-out", "src/gds-tokens.raw.json"));
const themeOut = path.resolve(cwd, readFlag("--theme-out", "src/gds-theme-sync.generated.ts"));

const GROUPS = new Set(["colors", "typography", "spacing", "effects"]);
const LIGHT_MODE_ORDER = ["Default", "default", "Light", "light", "Mode 1"];
const DARK_MODE_ORDER = ["Dark", "dark", "Mode 2"];

function pickModeValue(modes, order = LIGHT_MODE_ORDER) {
  if (!modes || typeof modes !== "object") return undefined;
  for (const k of order) {
    if (k in modes) return modes[k];
  }
  if (order === LIGHT_MODE_ORDER) {
    const firstKey = Object.keys(modes)[0];
    return firstKey ? modes[firstKey] : undefined;
  }
  return undefined;
}

function rgbaToHex(rgba) {
  const r = Math.round((rgba.r ?? 0) * 255);
  const g = Math.round((rgba.g ?? 0) * 255);
  const b = Math.round((rgba.b ?? 0) * 255);
  const a = rgba.a;
  const to2 = (n) => n.toString(16).padStart(2, "0");
  if (a === undefined || a === null || a >= 0.999) return `#${to2(r)}${to2(g)}${to2(b)}`.toLowerCase();
  return `#${to2(r)}${to2(g)}${to2(b)}${to2(Math.round(a * 255))}`.toLowerCase();
}

function normalizeValue(type, rawVal) {
  if (rawVal == null) return undefined;
  const val = rawVal?.value ?? rawVal?.resolvedValue ?? rawVal;
  if (String(type).toUpperCase() === "COLOR") {
    if (typeof val === "string") return val;
    if (val && typeof val === "object" && "r" in val && "g" in val && "b" in val) return rgbaToHex(val);
  }
  if (typeof val === "number") return String(val);
  if (typeof val === "string") return val;
  return typeof val === "object" ? JSON.stringify(val) : String(val);
}

function inferTypeFromValue(val) {
  if (val == null) return "UNKNOWN";
  if (typeof val === "string") {
    if (/^#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/.test(val)) return "COLOR";
    if (/^Effect\(/.test(val)) return "EFFECT";
    if (/^Font\(/.test(val)) return "TEXT";
  }
  if (typeof val === "number") return "FLOAT";
  return "UNKNOWN";
}

function inferGroupFromKey(key, type) {
  if (type === "COLOR" || /^(text\/|bg\/|border\/|gray\/|red\/|pink\/|purple\/|cyan\/|blue\/|teal\/|green\/|yellow\/|orange\/|white|blackAlpha\/|brand\/)/.test(key)) return "colors";
  if (/^(fonts\/|fontSizes\/|fontWeights\/)/.test(key) || /\/font-/.test(key)) return "typography";
  if (/^(Spacing\/|Size\/|Large Sizes\/)/.test(key) || /^var\(--/.test(key)) return "spacing";
  if (/^(Radii\/|Shadows\/|Blurs\/)/.test(key) || type === "EFFECT") return "effects";
  return null;
}

function parseVariables(payload) {
  const list =
    Array.isArray(payload) ? payload :
    Array.isArray(payload?.variables) ? payload.variables :
    Array.isArray(payload?.variableDefs) ? payload.variableDefs :
    Array.isArray(payload?.data) ? payload.data :
    null;

  if (list) {
    return list.map((v) => {
      const name = v.name || v.variableName || v.key || "";
      const type = v.type || v.resolvedType || v.valueType || "UNKNOWN";
      const modesRaw = v.modes || v.valuesByMode || v.modeValues || v.values || {};
      let modes = {};
      if (Array.isArray(modesRaw)) {
        for (const m of modesRaw) {
          const modeName = m.modeName || m.name || m.mode || "Default";
          modes[modeName] = m.value ?? m.resolvedValue ?? m;
        }
      } else if (modesRaw && typeof modesRaw === "object") {
        modes = modesRaw;
      }
      return { name, type, modes };
    });
  }

  if (payload && typeof payload === "object" && !Array.isArray(payload)) {
    return Object.entries(payload).map(([key, value]) => {
      const type = inferTypeFromValue(value);
      const group = inferGroupFromKey(key, type);
      const name = group ? `${group}/${key}` : key;
      return { name, type, modes: { Default: value } };
    });
  }

  return [];
}

function buildTokensRaw(vars) {
  const out = { colors: {}, typography: {}, spacing: {}, effects: {} };
  for (const v of vars) {
    if (!v.name) continue;
    const normalizedName = v.name.replaceAll(".", "/").replaceAll("\\", "/");
    const parts = normalizedName.split("/").filter(Boolean);
    const group = parts[0];
    if (!GROUPS.has(group)) continue;
    const key = parts.slice(1).join("/");
    if (!key) continue;
    const lightVal = pickModeValue(v.modes, LIGHT_MODE_ORDER);
    const value = normalizeValue(v.type, lightVal);
    if (value === undefined) continue;
    out[group][key] = value;
    const darkVal = pickModeValue(v.modes, DARK_MODE_ORDER);
    if (darkVal !== undefined) {
      const darkValue = normalizeValue(v.type, darkVal);
      if (darkValue !== undefined) out[group][`${key}_dark`] = darkValue;
    }
  }
  for (const g of Object.keys(out)) {
    out[g] = Object.fromEntries(Object.entries(out[g]).sort(([a], [b]) => a.localeCompare(b, "en")));
  }
  return out;
}

function flatToNestedTokens(flat) {
  const result = {};
  for (const [key, value] of Object.entries(flat || {})) {
    const parts = key.split("/");
    let current = result;
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      if (!(part in current) || typeof current[part] !== "object") current[part] = {};
      current = current[part];
    }
    current[parts[parts.length - 1]] = { value };
  }
  return result;
}

function ensureColorToken(root, dotPath, valueRef) {
  const parts = dotPath.split(".");
  let current = root;
  for (let i = 0; i < parts.length - 1; i++) {
    current[parts[i]] ??= {};
    current = current[parts[i]];
  }
  current[parts[parts.length - 1]] ??= { value: valueRef };
}

function buildSyncedThemeTokens(tokensRaw) {
  const nested = flatToNestedTokens(tokensRaw.colors || {});
  nested.brand ??= {};
  ensureColorToken(nested, "brand.primary.base_dark", "{colors.brand.primary.base}");
  ensureColorToken(nested, "brand.primary.hover_dark", "{colors.brand.primary.hover}");
  ensureColorToken(nested, "brand.primary.active_dark", "{colors.brand.primary.active}");
  ensureColorToken(nested, "brand.primary.subtle_dark", "{colors.brand.primary.subtle}");
  ensureColorToken(nested, "brand.primary.muted_dark", "{colors.brand.primary.muted}");
  ensureColorToken(nested, "brand.primary.onPrimary_dark", "{colors.brand.primary.onPrimary}");
  ensureColorToken(nested, "brand.primary.bg_dark", "{colors.brand.primary.bg}");
  ensureColorToken(nested, "brand.primary.focusRing_dark", "{colors.brand.primary.focusRing}");

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
  nested.brand.focusRing = { value: { _light: "{colors.brand.primary.focusRing}", _dark: "{colors.brand.primary.focusRing_dark}" } };

  const semanticColors = {
    fg: {
      DEFAULT: { value: { _light: "{colors.gray.fg}", _dark: "{colors.text.fg_inverted}" } },
      muted: { value: { _light: "{colors.text.fg_muted}", _dark: "{colors.text.fg_subtle}" } },
      subtle: { value: { _light: "{colors.text.fg_subtle}", _dark: "{colors.gray.400}" } },
      inverted: { value: "{colors.text.fg_inverted}" },
      error: { value: "{colors.text.fg_error}" },
      warning: { value: "{colors.text.fg_warning}" },
      success: { value: "{colors.text.fg_success}" },
      info: { value: "{colors.text.fg_info}" }
    },
    bg: {
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
      info: { value: "{colors.bg.info}" }
    },
    border: {
      DEFAULT: { value: { base: "#e4e4e7", _light: "#e4e4e7", _dark: "{colors.border.inverted}" } },
      default: { value: { base: "#e4e4e7", _light: "#e4e4e7", _dark: "{colors.border.inverted}" } },
      subtle: { value: { base: "#f0f0f2", _light: "#f0f0f2", _dark: "{colors.gray.800}" } },
      muted: { value: { base: "#e8e8ec", _light: "#e8e8ec", _dark: "{colors.gray.700}" } },
      emphasized: { value: { base: "#d4d4d8", _light: "#d4d4d8", _dark: "{colors.gray.600}" } },
      inverted: { value: "{colors.border.inverted}" },
      error: { value: "{colors.border.error}" },
      warning: { value: "{colors.border.warning}" },
      success: { value: "{colors.border.success}" },
      info: { value: "{colors.border.info}" }
    },
    focusRing: { value: { _light: "{colors.brand.primary.focusRing}", _dark: "{colors.brand.primary.focusRing_dark}" } },
    brand: {
      solid: { value: { _light: "{colors.brand.primary.base}", _dark: "{colors.brand.primary.base_dark}" } },
      contrast: { value: { _light: "{colors.brand.primary.onPrimary}", _dark: "{colors.brand.primary.onPrimary_dark}" } },
      fg: { value: { _light: "{colors.brand.primary.base}", _dark: "{colors.brand.primary.base_dark}" } },
      muted: { value: { _light: "{colors.brand.primary.muted}", _dark: "{colors.brand.primary.muted_dark}" } },
      subtle: { value: { _light: "{colors.brand.primary.subtle}", _dark: "{colors.brand.primary.subtle_dark}" } },
      emphasized: { value: { _light: "{colors.brand.primary.hover}", _dark: "{colors.brand.primary.hover_dark}" } },
      focusRing: { value: { _light: "{colors.brand.primary.focusRing}", _dark: "{colors.brand.primary.focusRing_dark}" } },
      border: { value: { _light: "{colors.brand.primary.base}", _dark: "{colors.brand.primary.base_dark}" } }
    }
  };

  return { nestedColors: nested, semanticColors };
}

function writeSyncedTheme(themePath, nestedColors, semanticColors) {
  const out = `/* Auto-generated by \`gds tokens sync\`. Do not edit by hand. */
import { defineConfig } from "@chakra-ui/react";

export const gdsSyncedTheme = defineConfig({
  theme: {
    tokens: {
      colors: ${JSON.stringify(nestedColors, null, 2)} as never
    },
    semanticTokens: {
      colors: ${JSON.stringify(semanticColors, null, 2)}
    }
  }
});
`;
  fs.mkdirSync(path.dirname(themePath), { recursive: true });
  fs.writeFileSync(themePath, out, "utf8");
}

if (!fs.existsSync(inFile)) {
  console.error(`Missing input file: ${inFile}`);
  console.error("Save get_variable_defs output to that path and run again.");
  process.exit(1);
}

const payload = JSON.parse(fs.readFileSync(inFile, "utf8"));
const vars = parseVariables(payload);
const tokensRaw = buildTokensRaw(vars);
const { nestedColors, semanticColors } = buildSyncedThemeTokens(tokensRaw);

fs.mkdirSync(path.dirname(rawOut), { recursive: true });
fs.writeFileSync(rawOut, `${JSON.stringify(tokensRaw, null, 2)}\n`, "utf8");
writeSyncedTheme(themeOut, nestedColors, semanticColors);

const count = Object.values(tokensRaw).reduce((sum, group) => sum + Object.keys(group).length, 0);
console.log(`✅ Synced ${count} tokens`);
console.log(`- raw tokens: ${path.relative(cwd, rawOut)}`);
console.log(`- theme override: ${path.relative(cwd, themeOut)}`);
