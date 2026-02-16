#!/usr/bin/env node
/**
 * Merge Figma MCP variable defs into existing tokens, then run sync.
 * Usage: node scripts/figma-sync-with-mcp.mjs [path-to-mcp-json]
 * - If path given: read current tokens.raw.json, flatten; read MCP JSON; merge (MCP overrides); write .tmp/figma.variable_defs.json; run sync.
 * - If no path: run sync only (reads existing .tmp/figma.variable_defs.json).
 * Env: FIGMA_MCP_VARS_FILE, GDS_TOKENS_RAW_OUT (passed through to figma-mcp-to-tokens-raw.mjs).
 */

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const repoRoot = path.resolve(process.cwd());
const TOKENS_RAW = path.join(
  repoRoot,
  "packages/tokens/figma/tokens.raw.json"
);
const IN_FILE =
  process.env.FIGMA_MCP_VARS_FILE ||
  path.join(repoRoot, ".tmp/figma.variable_defs.json");
const MCP_FILE = process.argv[2];

function flattenTokensRaw(tokensRaw) {
  const flat = {};
  for (const [group, obj] of Object.entries(tokensRaw)) {
    if (!obj || typeof obj !== "object") continue;
    for (const [k, v] of Object.entries(obj)) {
      if (k.endsWith("_dark")) continue;
      flat[k] = v;
    }
  }
  return flat;
}

function main() {
  if (MCP_FILE) {
    if (!fs.existsSync(MCP_FILE)) {
      console.error(`MCP file not found: ${MCP_FILE}`);
      process.exit(1);
    }
    const mcp = JSON.parse(fs.readFileSync(MCP_FILE, "utf8"));
    let flat;
    if (fs.existsSync(TOKENS_RAW)) {
      const tokensRaw = JSON.parse(fs.readFileSync(TOKENS_RAW, "utf8"));
      flat = flattenTokensRaw(tokensRaw);
    } else {
      flat = {};
    }
    for (const [k, v] of Object.entries(mcp)) {
      flat[k] = v;
    }
    const outDir = path.dirname(IN_FILE);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(IN_FILE, JSON.stringify(flat, null, 2), "utf8");
  }

  execSync("node scripts/figma-mcp-to-tokens-raw.mjs", {
    stdio: "inherit",
    cwd: repoRoot,
    env: { ...process.env, FIGMA_MCP_VARS_FILE: IN_FILE },
  });
}

main();
