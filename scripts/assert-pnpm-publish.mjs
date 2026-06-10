#!/usr/bin/env node
/**
 * GDS workspace packages must be published with pnpm (not npm publish).
 * npm leaves workspace:* in dependencies and breaks npm/pnpm consumers.
 */
const ua = process.env.npm_config_user_agent ?? "";

if (!ua.includes("pnpm")) {
  console.error(
    "\n@gds-vero packages must be published with pnpm from the monorepo:\n"
  );
  console.error("  pnpm --filter @gds-vero/react publish --access public");
  console.error("  pnpm --filter @gds-vero/theme publish --access public");
  console.error("\nnpm publish leaves workspace:* in package.json and breaks installs.\n");
  process.exit(1);
}
