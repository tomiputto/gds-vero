import fs from "node:fs";
import path from "node:path";

const IN_FILE =
  process.env.FIGMA_MCP_VARS_FILE || ".tmp/figma.variable_defs.json";

const OUT_FILE =
  process.env.GDS_TOKENS_RAW_OUT || "packages/tokens/figma/tokens.raw.json";

/**
 * Heuristiikat:
 * - Variable nimi (figma) oletetaan olevan muodossa: "colors/text/fg" tai "typography/fontSizes/xs" tms.
 * - Meidän output haluaa: top-level group = colors|typography|spacing|effects
 *   ja key = loput pathista "text/fg"
 *
 * - Value:
 *   - COLOR: pyritään saamaan hex (#RRGGBB) tai #RRGGBBAA jos alpha
 *   - FLOAT/NUMBER: stringiksi (kuten nykyisessä tiedostossa "12", "24")
 *   - STRING: sellaisenaan
 *
 * - Modes:
 *   - Light: "Default"/"Light"/"Mode 1" ensisijaisesti → key (esim. "bg/default").
 *   - Dark: jos Figma antaa "Dark"/"dark"/"Mode 2", kirjoitetaan myös key_dark (esim. "bg/default_dark").
 *   - Flat MCP payload (yksi arvo per nimi): vain light, ei _dark-avaimia.
 */

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

function pickModeValueLight(modes) {
  return pickModeValue(modes, LIGHT_MODE_ORDER);
}

function pickModeValueDark(modes) {
  return pickModeValue(modes, DARK_MODE_ORDER);
}

// convert rgba object {r,g,b,a} (0..1) => hex
function rgbaToHex(rgba) {
  const r = Math.round((rgba.r ?? 0) * 255);
  const g = Math.round((rgba.g ?? 0) * 255);
  const b = Math.round((rgba.b ?? 0) * 255);
  const a = rgba.a;

  const to2 = (n) => n.toString(16).padStart(2, "0");

  // if alpha is undefined or 1, output #RRGGBB
  if (a === undefined || a === null || a >= 0.999) {
    return `#${to2(r)}${to2(g)}${to2(b)}`.toLowerCase();
  }

  const alpha = Math.round(a * 255);
  return `#${to2(r)}${to2(g)}${to2(b)}${to2(alpha)}`.toLowerCase();
}

function normalizeValue(type, rawVal) {
  if (rawVal == null) return undefined;

  // MCP payloadit vaihtelee: joskus { value: ... }, joskus suoraan arvo
  const val = rawVal?.value ?? rawVal?.resolvedValue ?? rawVal;

  // Color voi tulla stringinä "#ffffff" tai objektina {r,g,b,a}
  if (type?.toUpperCase?.() === "COLOR") {
    if (typeof val === "string") return val;
    if (val && typeof val === "object" && "r" in val && "g" in val && "b" in val) {
      return rgbaToHex(val);
    }
  }

  // numerot stringiksi (kuten nykyisessä tokens.raw.jsonissa)
  if (typeof val === "number") return String(val);

  if (typeof val === "string") return val;

  // jos tulee jokin monimutkainen olio (esim. effect), yritä säilyttää stringinä jos se jo on
  // muuten JSON-stringify fallback
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

function inferGroupFromKey(key, value, type) {
  if (type === "COLOR" || /^(text\/|bg\/|border\/|gray\/|red\/|pink\/|purple\/|cyan\/|blue\/|teal\/|green\/|yellow\/|orange\/|white|blackAlpha\/|brand\/)/.test(key))
    return "colors";
  if (/^(fonts\/|fontSizes\/|fontWeights\/)/.test(key) || /\/font-/.test(key))
    return "typography";
  if (/^(Spacing\/|Size\/|Large Sizes\/)/.test(key) || /^var\(--/.test(key))
    return "spacing";
  if (/^(Radii\/|Shadows\/|Blurs\/)/.test(key) || type === "EFFECT")
    return "effects";
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
      const modesRaw =
        v.modes ||
        v.valuesByMode ||
        v.modeValues ||
        v.values ||
        {};

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

  // Figma MCP get_variable_defs returns a flat object: { "variable/name": value, ... }
  // Map each key to a group-prefixed name so buildTokensRaw can route it.
  if (payload && typeof payload === "object" && !Array.isArray(payload)) {
    return Object.entries(payload).map(([key, value]) => {
      const type = inferTypeFromValue(value);
      const group = inferGroupFromKey(key, value, type);
      const name = group ? `${group}/${key}` : key;
      return {
        name,
        type,
        modes: { Default: value },
      };
    });
  }

  return [];
}

function buildTokensRaw(vars) {
  const out = {
    colors: {},
    typography: {},
    spacing: {},
    effects: {},
  };

  for (const v of vars) {
    if (!v.name) continue;

    // hyväksy muodot:
    // "colors/text/fg" -> group=colors, key=text/fg
    // "colors.text/fg" -> group=colors, key=text/fg (varmuuden vuoksi)
    const normalizedName = v.name.replaceAll(".", "/").replaceAll("\\", "/");
    const parts = normalizedName.split("/").filter(Boolean);
    const group = parts[0];

    if (!GROUPS.has(group)) continue;

    const key = parts.slice(1).join("/");
    if (!key) continue;

    const lightVal = pickModeValueLight(v.modes);
    const value = normalizeValue(v.type, lightVal);

    if (value === undefined) continue;

    out[group][key] = value;

    const darkVal = pickModeValueDark(v.modes);
    if (darkVal !== undefined) {
      const darkValue = normalizeValue(v.type, darkVal);
      if (darkValue !== undefined) {
        out[group][`${key}_dark`] = darkValue;
      }
    }
  }

  // deterministinen key order: sortataan jokaisen groupin avaimet
  for (const g of Object.keys(out)) {
    const entries = Object.entries(out[g]).sort(([a], [b]) =>
      a.localeCompare(b, "en")
    );
    out[g] = Object.fromEntries(entries);
  }

  return out;
}

function main() {
  if (!fs.existsSync(IN_FILE)) {
    console.error(`Missing input file: ${IN_FILE}`);
    console.error(
      `Save Cursor get_variable_defs output JSON to ${IN_FILE} and rerun.`
    );
    process.exit(1);
  }

  const payload = JSON.parse(fs.readFileSync(IN_FILE, "utf8"));
  const vars = parseVariables(payload);
  const tokensRaw = buildTokensRaw(vars);

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(tokensRaw) + "\n", "utf8");

  const count =
    Object.values(tokensRaw).reduce((sum, group) => sum + Object.keys(group).length, 0);
  const darkCount = Object.values(tokensRaw).reduce(
    (sum, group) => sum + Object.keys(group).filter((k) => k.endsWith("_dark")).length,
    0
  );

  console.log(`✅ Updated ${OUT_FILE} (${count} tokens${darkCount ? `, ${darkCount} dark` : ""})`);
}

main();
