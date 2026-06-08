#!/usr/bin/env node
/**
 * GDS workspace packages must be published with pnpm (not npm publish).
 * npm leaves workspace:* in dependencies and breaks npm/pnpm consumers.
 */
const ua = process.env.npm_config_user_agent ?? "";

if (!ua.includes("pnpm")) {
  console.error(
    "\n@gdesignsystem packages must be published with pnpm from the monorepo:\n"
  );
  console.error("  pnpm --filter @gdesignsystem/react publish --access public");
  console.error("  pnpm --filter @gdesignsystem/theme publish --access public");
  console.error("\nnpm publish leaves workspace:* in package.json and breaks installs.\n");
  process.exit(1);
}
