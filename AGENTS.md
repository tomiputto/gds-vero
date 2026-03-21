# Instructions for AI agents (GDS)

All coding assistants and autonomous agents (Cursor, Claude Code, Copilot, ChatGPT, etc.) working in this repository **must** follow the canonical GDS rules in:

**[`GDS_FOR_LLM_AGENTS.md`](./GDS_FOR_LLM_AGENTS.md)**

That file is the **single source of truth** for:

- Chakra UI **v3** APIs only (no v2 component names)
- Correct **import paths** (`@gdesignsystem/react` vs `@chakra-ui/react` vs `@gdesignsystem/icons`)
- **Semantic tokens** and GDS theme usage
- What **not** to mix in when the user wants GDS

**Before** generating or editing React/UI code here, use `GDS_FOR_LLM_AGENTS.md` as mandatory context. Shorter summaries in `CLAUDE.md`, `.cursor/GDS_CHAKRA_V3_PROMPT.txt`, or other snippets **do not** replace it.

## Repo-specific pointers

- **`CLAUDE.md`** — monorepo layout and package roles (supplementary only).
- **`.cursor/rules/gds-llm-agents.mdc`** — Cursor: always apply GDS agent rules.
- **`.cursor/rules/figma-tokens.mdc`** — only the Figma → `tokens.raw.json` sync workflow.
