import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";

// Tämä skripti ajetaan pnpm:llä paketin kansiosta (packages/tokens).
// Repo-root on kaksi tasoa ylempänä.
const repoRoot = resolve(process.cwd(), "../..");

const inputPath = join(repoRoot, "packages/tokens/figma/tokens.raw.json");
const outDir = join(repoRoot, "packages/tokens/dist");

type Raw = {
  colors?: Record<string, string>;
  typography?: Record<string, unknown>;
  spacing?: Record<string, unknown>;
  effects?: Record<string, unknown>;
};

function toSafeKey(key: string) {
  return key.replaceAll("/", "__");
}

function main() {
  const rawText = readFileSync(inputPath, "utf8");
  const raw = JSON.parse(rawText) as Raw;

  mkdirSync(outDir, { recursive: true });

  const colors = raw.colors ?? {};
  const colorsByKey: Record<string, string> = {};
  for (const [k, v] of Object.entries(colors)) {
    colorsByKey[toSafeKey(k)] = v;
  }

  const colorsTs = `/* AUTO-GENERATED. DO NOT EDIT. */
export const colors = ${JSON.stringify(colors, null, 2)} as const;

export const colorsSafe = ${JSON.stringify(colorsByKey, null, 2)} as const;
`;
  writeFileSync(join(outDir, "colors.ts"), colorsTs, "utf8");

  const typography = (raw.typography ?? {}) as Record<string, string>;
  const fontSizes: Record<string, string> = {};
  const fontWeights: Record<string, string> = {};
  for (const [k, v] of Object.entries(typography)) {
    if (k.startsWith("fontSizes/")) {
      const name = k.replace("fontSizes/", "");
      fontSizes[name] = typeof v === "string" ? `${v}px` : String(v);
    } else if (k.startsWith("fontWeights/")) {
      const name = k.replace("fontWeights/", "");
      fontWeights[name] = String(v);
    }
  }

  const typographyTs = `/* AUTO-GENERATED from Figma. DO NOT EDIT. */
/** Figma typography tokens (fontSizes in px, fontWeights as number string) */
export const typography = ${JSON.stringify(typography, null, 2)} as const;

export const fontSizes = ${JSON.stringify(fontSizes, null, 2)} as const;
export const fontWeights = ${JSON.stringify(fontWeights, null, 2)} as const;
`;
  writeFileSync(join(outDir, "typography.ts"), typographyTs, "utf8");

  const effects = (raw.effects ?? {}) as Record<string, string>;
  const radii: Record<string, string> = {};
  for (const [k, v] of Object.entries(effects)) {
    if (k.startsWith("Radii/")) {
      const name = k.replace("Radii/", "").replace("Global_tokens/", "");
      if (!name.includes("/")) {
        radii[name] = v === "9999" ? "9999px" : `${v}px`;
      }
    }
  }

  const radiiTs = `/* AUTO-GENERATED from Figma. DO NOT EDIT. */
/** Figma radius tokens (border radius in px) */
export const radii = ${JSON.stringify(radii, null, 2)} as const;
`;
  writeFileSync(join(outDir, "radii.ts"), radiiTs, "utf8");

  const spacingRaw = (raw.spacing ?? {}) as Record<string, string>;
  const spacing: Record<string, string> = {};
  for (const [k, v] of Object.entries(spacingRaw)) {
    if (k.startsWith("Size/") || k.startsWith("Spacing/")) {
      const name = k.replace("Size/", "").replace("Spacing/", "").replace(/_/g, ".");
      if (!name.includes("/") && (/\d/.test(name) || name.length < 10)) {
        spacing[name] = `${v}px`;
      }
    }
  }

  const spacingTs = `/* AUTO-GENERATED from Figma. DO NOT EDIT. */
/** Figma spacing tokens (padding, margin, gap in px) */
export const spacing = ${JSON.stringify(spacing, null, 2)} as const;
`;
  writeFileSync(join(outDir, "spacing.ts"), spacingTs, "utf8");

  const indexTs = `/* AUTO-GENERATED. DO NOT EDIT. */
export * from "./colors";
export * from "./typography";
export * from "./radii";
export * from "./spacing";
`;
  writeFileSync(join(outDir, "index.ts"), indexTs, "utf8");

  // src/index.ts re-export dist
  writeFileSync(join(repoRoot, "packages/tokens/src/index.ts"), `export * from "../dist/index";\n`, "utf8");

  console.log("GDS tokens built:", outDir);
}

main();
