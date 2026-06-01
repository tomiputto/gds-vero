# Figma token source (GDS)

Tähän kansioon tuodaan Figmasta exportatut tokenit (JSON).
Älä muokkaa käsin, vaan päivitä exportin kautta.

Esim:
- tokens.json
- typography.json
- colors.json
- spacing.json

**Syncing Figma → GDS (monorepo):** To get Figma changes into the app:

1. **Change tokens in Figma** (e.g. set brand/primary/base to a new color).
2. **Export variable defs** — run Figma MCP **get_variable_defs** (frame with your variables selected) and save to **`.tmp/figma.mcp_latest.json`**, or ask an agent to “sync tokens”.
3. **Run sync:** `pnpm gds:tokens:sync:from-mcp` — merges the selection into existing `packages/tokens/figma/tokens.raw.json`. Alternatively, if you already have `.tmp/figma.variable_defs.json`, run `pnpm gds:tokens:sync`.
4. **Restart the dev server** — the GDS theme reads `tokens.raw.json` at startup. If values still look stale, clear Vite cache: `rm -rf apps/docs/node_modules/.vite` then `pnpm dev`.

If you only “regenerate” tokens.raw.json by hand or from another export, make sure the file you edit is **`packages/tokens/figma/tokens.raw.json`**; the theme imports that file directly.
