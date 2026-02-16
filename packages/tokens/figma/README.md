# Figma token source (GDS)

Tähän kansioon tuodaan Figmasta exportatut tokenit (JSON).
Älä muokkaa käsin, vaan päivitä exportin kautta.

Esim:
- tokens.json
- typography.json
- colors.json
- spacing.json

**Syncing Figma → GDS:** To get Figma changes (e.g. brand.primary.base from teal to yellow) into the app:

1. **Change tokens in Figma** (e.g. set brand/primary/base to yellow/600).
2. **Export variable defs from Figma** — run Figma MCP **get_variable_defs** (with the file/frame that has your variables selected) and **save the JSON to `.tmp/figma.variable_defs.json`** in the repo root.
3. **Run sync:** `pnpm gds:tokens:sync` — this reads `.tmp/figma.variable_defs.json` and writes `packages/tokens/figma/tokens.raw.json`.
4. **Restart the dev server** — the GDS theme reads `tokens.raw.json` at startup, so a restart picks up the new colors (and font). If the font or other tokens still don’t update, clear Vite’s cache: `rm -rf apps/docs/node_modules/.vite` then `pnpm dev`.

If you only “regenerate” tokens.raw.json by hand or from another export, make sure the file you edit is **`packages/tokens/figma/tokens.raw.json`**; the theme imports that file directly.
