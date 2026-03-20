#!/usr/bin/env node
import { execSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Parse arguments ───────────────────────────────────────────────────────────

const args = process.argv.slice(2);
let projectName = null;
let forcePm = null; // "npm" | "pnpm" | null

for (const arg of args) {
  if (arg === "--npm") forcePm = "npm";
  else if (arg === "--pnpm") forcePm = "pnpm";
  else if (!arg.startsWith("--") && projectName === null) projectName = arg;
}

if (!projectName) {
  console.error("Usage: create-gds-app <project-name> [--npm | --pnpm]");
  process.exit(1);
}

// Validate name — must be a valid directory name
if (!/^[a-z0-9._-]+$/i.test(projectName)) {
  console.error(
    `Invalid project name "${projectName}". Use only letters, numbers, hyphens, underscores, and dots.`
  );
  process.exit(1);
}

// ── Resolve target directory ──────────────────────────────────────────────────

const targetDir = resolve(process.cwd(), projectName);

if (existsSync(targetDir)) {
  console.error(`Directory "${projectName}" already exists. Choose a different name.`);
  process.exit(1);
}

// ── Detect package manager ────────────────────────────────────────────────────

function detectPackageManager() {
  if (forcePm) return forcePm;
  try {
    execSync("which pnpm", { stdio: "ignore" });
    return "pnpm";
  } catch {
    return "npm";
  }
}

const pm = detectPackageManager();

// ── Copy template ─────────────────────────────────────────────────────────────

const templateDir = join(__dirname, "template");

console.log(`\nCreating project "${projectName}"…`);
mkdirSync(targetDir, { recursive: true });
cpSync(templateDir, targetDir, { recursive: true });

// Patch package.json: replace __PROJECT_NAME__ placeholder
const pkgPath = join(targetDir, "package.json");
const pkgContent = readFileSync(pkgPath, "utf-8").replace(/__PROJECT_NAME__/g, projectName);
writeFileSync(pkgPath, pkgContent);

// ── Install dependencies ──────────────────────────────────────────────────────

console.log(`Installing dependencies with ${pm}…\n`);
try {
  execSync(`${pm} install`, { cwd: targetDir, stdio: "inherit" });
} catch {
  console.error("\nInstall failed. Run the install command manually:");
  console.error(`  cd ${projectName} && ${pm} install`);
  process.exit(1);
}

// ── Done ──────────────────────────────────────────────────────────────────────

const runCmd = pm === "pnpm" ? "pnpm dev" : "npm run dev";
console.log(`
✓ Project "${projectName}" created!

Next steps:
  cd ${projectName}
  ${runCmd}

Happy building with GDS!
`);
