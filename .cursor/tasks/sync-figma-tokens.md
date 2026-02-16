# Sync Figma Tokens (GDS)

This task synchronizes design tokens from the currently selected Figma frame
into:

packages/tokens/figma/tokens.raw.json

**Automated flow:** When the user says "sync figma tokens" (or "sync tokens", "update tokens from figma"), the AI should do all steps automatically:

1) Call Figma MCP tool **get_variable_defs** (no nodeId = current Figma selection).
2) Save the full JSON result to **.tmp/figma.variable_defs.json** (overwrite if exists).
3) Run **pnpm gds:tokens:sync** — writes packages/tokens/figma/tokens.raw.json from the temp file.
4) Confirm update and show total token count (and optionally which groups: colors, typography, spacing, effects).

The user does not need to manually save the MCP output; the AI writes it and runs the sync.
