/**
 * Reads SVG files from /icons (repo root) and generates GDS icon components
 * in packages/icons/src/icons/. Icons use currentColor so Figma token colors work.
 *
 * Usage: node scripts/svg-to-gds-icons.mjs
 * Env:   GDS_ICONS_SRC=icons (default)  – folder with .svg files
 *        GDS_ICONS_OUT=packages/icons/src/icons (default) – output folder
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");

const ICONS_SRC = path.resolve(REPO_ROOT, process.env.GDS_ICONS_SRC || "icons");
const ICONS_OUT = path.resolve(
  REPO_ROOT,
  process.env.GDS_ICONS_OUT || "packages/icons/src/icons"
);

function escapeForTemplateLiteral(str) {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$/g, "\\$");
}

function extractViewBox(svgContent) {
  const m = svgContent.match(/viewBox\s*=\s*["']([^"']+)["']/i);
  return m ? m[1].trim() : "0 0 24 24";
}

function extractInnerContent(svgContent) {
  const open = svgContent.indexOf("<svg");
  if (open === -1) return "";
  const start = svgContent.indexOf(">", open) + 1;
  const end = svgContent.lastIndexOf("</svg>");
  if (end === -1 || start >= end) return "";
  return svgContent.slice(start, end).trim();
}

function useCurrentColor(inner) {
  return inner
    .replace(/\bfill\s*=\s*["'][^"']*["']/gi, 'fill="currentColor"')
    .replace(/\bstroke\s*=\s*["'][^"']*["']/gi, 'stroke="currentColor"');
}

function svgHasStroke(inner) {
  return /\bstroke\s*=/i.test(inner);
}

function filenameToPascal(filename) {
  return filename
    .replace(/\.svg$/i, "")
    .split(/[-_\s]+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("");
}

function filenameToKebab(filename) {
  return filename.replace(/\.svg$/i, "").toLowerCase();
}

function generateIconFile(svgPath, outDir) {
  const basename = path.basename(svgPath);
  const raw = fs.readFileSync(svgPath, "utf-8");
  const viewBox = extractViewBox(raw);
  let inner = extractInnerContent(raw);
  if (!inner) return null;

  inner = useCurrentColor(inner);
  const innerEscaped = escapeForTemplateLiteral(inner);
  const componentName = filenameToPascal(basename) + "Icon";
  const kebabName = filenameToKebab(basename);
  const opts =
    svgHasStroke(inner) || /stroke\s*=\s*["']currentColor["']/i.test(inner)
      ? `{ viewBox: "${viewBox}", fill: "none", stroke: "currentColor" }`
      : `{ viewBox: "${viewBox}" }`;

  const content = `import { createGDSIcon } from "../create-icon";

const inner = \`${innerEscaped}\`;

export const ${componentName} = createGDSIcon(
  "${componentName}",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  ${opts}
);
`;

  const outPath = path.join(outDir, `${kebabName}.tsx`);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outPath, content, "utf-8");
  return { kebabName, componentName };
}

function main() {
  if (!fs.existsSync(ICONS_SRC)) {
    console.error("Icons source folder not found:", ICONS_SRC);
    process.exit(1);
  }

  const files = fs.readdirSync(ICONS_SRC).filter((f) => /\.svg$/i.test(f));
  const results = [];

  for (const file of files) {
    const svgPath = path.join(ICONS_SRC, file);
    try {
      const r = generateIconFile(svgPath, ICONS_OUT);
      if (r) results.push(r);
    } catch (err) {
      console.warn("Skip", file, err.message);
    }
  }

  results.sort((a, b) => a.kebabName.localeCompare(b.kebabName));

  const indexLines = results.map(
    (r) => `export { ${r.componentName} } from "./${r.kebabName}";`
  );
  const indexPath = path.join(ICONS_OUT, "index.ts");
  fs.writeFileSync(
    indexPath,
    indexLines.join("\n") + "\n",
    "utf-8"
  );

  const mainIndexPath = path.resolve(ICONS_OUT, "..", "index.ts");
  const mainIndexHeader = `/**
 * GDS Icons – icons for the design system.
 * Generated from /icons. Use color="fg", color="brand.fg" etc. for Figma tokens.
 */
export { createGDSIcon } from "./create-icon";
export type { GDSIconProps } from "./create-icon";
export {
`;
  const mainExports = results.map((r) => `  ${r.componentName},`).join("\n");
  const mainIndexFooter = `} from "./icons";
`;
  fs.writeFileSync(
    mainIndexPath,
    mainIndexHeader + mainExports + "\n" + mainIndexFooter,
    "utf-8"
  );

  console.log("Generated", results.length, "icons in", ICONS_OUT);
}

main();
