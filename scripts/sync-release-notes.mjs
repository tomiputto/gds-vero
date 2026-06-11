#!/usr/bin/env node
/**
 * Keeps GDS_NPM_RELEASE_NOTES.md in sync with package.json versions and
 * packages/react/GDS_NPM_RELEASE_NOTES.md.
 *
 * Usage:
 *   node scripts/sync-release-notes.mjs              # sync version table + copy (step 2)
 *   node scripts/sync-release-notes.mjs --append       # also append release section for unpublished versions (step 1)
 *   node scripts/sync-release-notes.mjs --append --dry-run
 */
import { execSync } from "node:child_process";
import { copyFileSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const RELEASE_NOTES = join(ROOT, "GDS_NPM_RELEASE_NOTES.md");
const REACT_COPY = join(ROOT, "packages/react/GDS_NPM_RELEASE_NOTES.md");

const PUBLISHABLE = [
  { key: "theme", dir: "packages/theme" },
  { key: "react", dir: "packages/react" },
  { key: "create-app", dir: "packages/create-app" },
  { key: "tokens", dir: "packages/tokens" },
  { key: "icons", dir: "packages/icons" },
];

const args = process.argv.slice(2);
const append = args.includes("--append");
const dryRun = args.includes("--dry-run");

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function readLocalVersions() {
  return Object.fromEntries(
    PUBLISHABLE.map(({ key, dir }) => {
      const { name, version } = readJson(join(ROOT, dir, "package.json"));
      return [key, { name, version, dir }];
    })
  );
}

function readNpmVersion(name) {
  try {
    return execSync(`npm view ${name} version`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return null;
  }
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function semverGt(a, b) {
  const pa = a.split(".").map(Number);
  const pb = b.split(".").map(Number);
  for (let i = 0; i < 3; i++) {
    const diff = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (diff !== 0) return diff > 0;
  }
  return false;
}

function versionDocumented(content, name, version) {
  const short = name.replace("@gds-vero/", "");
  return [`${name}@${version}`, `${short}@${version}`, `\`${name}@${version}\``].some(
    (needle) => content.includes(needle)
  );
}

function packagesNeedingReleaseSection(content, local, npmVersions) {
  return PUBLISHABLE.map(({ key }) => key).filter((key) => {
    const { name, version } = local[key];
    if (versionDocumented(content, name, version)) return false;
    const npm = npmVersions[name];
    if (!npm) return true;
    return semverGt(version, npm);
  });
}

function gitCommitSubjects(packageDir, sinceDate) {
  try {
    const since = sinceDate ? `--since=${sinceDate}T00:00:00` : "";
    const out = execSync(
      `git log ${since} --format=%s -- ${packageDir}`,
      { encoding: "utf8", cwd: ROOT, stdio: ["ignore", "pipe", "ignore"] }
    ).trim();
    if (!out) return [];
    const seen = new Set();
    return out
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean)
      .filter((s) => {
        if (seen.has(s)) return false;
        seen.add(s);
        return true;
      })
      .slice(0, 8);
  } catch {
    return [];
  }
}

function parsePreviousReleaseDate(content) {
  const match = content.match(/^### (\d{4}-\d{2}-\d{2})/m);
  return match?.[1] ?? null;
}

function buildReleaseSection(date, keys, local, sinceDate) {
  const titleParts = keys.map((key) => {
    const { name, version } = local[key];
    const short = name.replace("@gds-vero/", "");
    return `${short}@${version}`;
  });
  const lines = [`### ${date} — ${titleParts.join(", ")}`, ""];

  for (const key of keys) {
    const { name, version, dir } = local[key];
    lines.push(`#### ${name}@${version}`, "");
    const subjects = gitCommitSubjects(dir, sinceDate);
    if (subjects.length === 0) {
      lines.push(
        "- *(Add agent-relevant bullets for this release — edit `GDS_NPM_RELEASE_NOTES.md`.)*",
        ""
      );
    } else {
      for (const subject of subjects) {
        lines.push(`- ${subject}`);
      }
      lines.push("");
    }
  }

  lines.push("---", "");
  return lines.join("\n");
}

function insertReleaseSection(content, section) {
  const marker = "## Release history (agent impact only)";
  const idx = content.indexOf(marker);
  if (idx === -1) throw new Error(`Missing "${marker}" in ${RELEASE_NOTES}`);
  const insertAt = idx + marker.length + 1;
  return content.slice(0, insertAt) + "\n" + section + content.slice(insertAt);
}

function buildVersionTable(local) {
  const rows = PUBLISHABLE.map(({ key }) => {
    const { name, version } = local[key];
    const bold = key === "theme" || key === "react" || key === "create-app";
    const ver = bold ? `**${version}**` : version;
    const slug = name.replace("@gds-vero/", "");
    return `| \`${name}\` | ${ver} | https://www.npmjs.com/package/@gds-vero/${slug} |`;
  });
  return [
    "## Current published versions",
    "",
    "| Package | Version | npm |",
    "|---------|---------|-----|",
    ...rows,
    "",
    `*Last updated: ${todayIso()}*`,
  ].join("\n");
}

function readChakraMinVersion() {
  const theme = readJson(join(ROOT, "packages/theme/package.json"));
  const dep = theme.dependencies?.["@chakra-ui/react"] ?? "^3.34.0";
  const m = dep.match(/(\d+\.\d+\.\d+)/);
  return m?.[1] ?? "3.34.0";
}

function updateRecommendedInstall(content, local) {
  const react = local.react.version;
  const theme = local.theme.version;
  const icons = local.icons.version;
  const chakra = readChakraMinVersion();
  const install = `pnpm add @gds-vero/react@^${react} @gds-vero/theme@^${theme} @gds-vero/icons@^${icons} @chakra-ui/react@^${chakra} @emotion/react react react-dom`;
  return content.replace(
    /```bash\npnpm add @gds-vero\/react@[^\n]+\n```/,
    "```bash\n" + install + "\n```"
  );
}

function syncVersionBlocks(content, local) {
  const table = buildVersionTable(local);
  let next = content.replace(
    /## Current published versions[\s\S]*?\*Last updated: \d{4}-\d{2}-\d{2}\*/,
    table
  );
  next = updateRecommendedInstall(next, local);
  return next;
}

function main() {
  let content = readFileSync(RELEASE_NOTES, "utf8");
  const local = readLocalVersions();

  if (append) {
    const npmVersions = Object.fromEntries(
      PUBLISHABLE.map(({ key }) => {
        const { name } = local[key];
        return [name, readNpmVersion(name)];
      })
    );
    const needs = packagesNeedingReleaseSection(content, local, npmVersions);
    if (needs.length === 0) {
      console.log("release-notes: no new package versions to append (already documented).");
    } else {
      const sinceDate = parsePreviousReleaseDate(content);
      const section = buildReleaseSection(todayIso(), needs, local, sinceDate);
      content = insertReleaseSection(content, section);
      console.log(
        `release-notes: appended section for ${needs.map((k) => local[k].name + "@" + local[k].version).join(", ")}`
      );
    }
  }

  content = syncVersionBlocks(content, local);

  if (dryRun) {
    console.log("release-notes: dry-run — no files written.");
    return;
  }

  writeFileSync(RELEASE_NOTES, content, "utf8");
  copyFileSync(RELEASE_NOTES, REACT_COPY);
  console.log(`release-notes: updated ${RELEASE_NOTES}`);
  console.log(`release-notes: copied → packages/react/GDS_NPM_RELEASE_NOTES.md`);
}

main();
