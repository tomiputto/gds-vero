# Instructions for AI agents (GDS)

All coding assistants (Cursor, Claude Code, Copilot, ChatGPT, etc.) working in this project **must** follow the canonical GDS rules in:

**`node_modules/@gdesignsystem/react/GDS_FOR_LLM_AGENTS.md`**

That file ships with `@gdesignsystem/react` and is the **single source of truth** for:

- Chakra UI **v3** APIs only (no v2 component names)
- Correct **import paths** (`@gdesignsystem/react` vs `@chakra-ui/react` vs `@gdesignsystem/icons`)
- **Semantic tokens** and GDS theme usage
- What **not** to mix in when building with GDS

**Before** generating or editing React/UI code, read `GDS_FOR_LLM_AGENTS.md` from the path above (after `pnpm install` / `npm install`).

## Auto-configured for this project

This app was scaffolded with `@gdesignsystem/create-app` and includes:

- **`AGENTS.md`** (this file) — read by Claude Code and other tools
- **`.cursor/rules/gds-llm-agents.mdc`** — always-on rule for Cursor
- **`.cursor/rules/gds-accessibility.mdc`** — mandatory WCAG review after UI changes
- **`CLAUDE.md`** — short pointer for Claude Code
- **`.github/copilot-instructions.md`** — GitHub Copilot in this repo

`CLAUDE.md` and Cursor rules are **supplements**; they do **not** replace `GDS_FOR_LLM_AGENTS.md`.

## Figma token sync (optional)

To sync design tokens from Figma into this app, see `pnpm gds:tokens:sync` in `package.json` and the GDS docs **Sync design tokens** guide.
