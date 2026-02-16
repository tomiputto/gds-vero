# Sync Figma Tokens (GDS)

This task synchronizes design tokens from the currently selected Figma frame into:

packages/tokens/figma/tokens.raw.json

**Automated flow:** When the user says "sync figma tokens" (or "sync tokens", "update tokens from figma"), the AI should do all steps automatically:

1) Call Figma MCP tool **get_variable_defs** (no nodeId = current Figma selection).
2) Save the full JSON result to **.tmp/figma.mcp_latest.json** (overwrite if exists).
3) Run **pnpm gds:tokens:sync:from-mcp** — merges MCP result into existing tokens (selection overrides only; other tokens unchanged), then runs sync to update tokens.raw.json.
4) Confirm update and show total token count from the script output.

The user does not need to manually save anything. Changes are visible locally right away (restart dev server if theme doesn’t pick up new values).
