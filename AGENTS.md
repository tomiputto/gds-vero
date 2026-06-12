# Instructions for AI agents (GDS)

All coding assistants and autonomous agents (Cursor, Claude Code, Copilot, ChatGPT, etc.) working in this repository **must** follow the canonical GDS rules in:

**[`GDS_FOR_LLM_AGENTS.md`](./GDS_FOR_LLM_AGENTS.md)**

That file is the **single source of truth** for:

- Chakra UI **v3** APIs only (no v2 component names)
- Correct **import paths** (`@gds-vero/react` vs `@chakra-ui/react` vs `@gds-vero/icons`)
- **Semantic tokens** and GDS theme usage
- What **not** to mix in when the user wants GDS

**Before** generating or editing React/UI code here, use `GDS_FOR_LLM_AGENTS.md` as mandatory context. Shorter summaries in `CLAUDE.md`, `.cursor/GDS_CHAKRA_V3_PROMPT.txt`, or other snippets **do not** replace it.

## Projects that install GDS from npm (not this monorepo)

The guide is bundled with **`@gds-vero/react`** at:

`node_modules/@gds-vero/react/GDS_FOR_LLM_AGENTS.md`

Configure your assistant with a rule that **requires** following that file for all GDS UI work (see the copy-paste block under **“After install: make agents follow this file”** in `GDS_FOR_LLM_AGENTS.md`).

## Repo-specific pointers

- **`GDS_ARCHITECTURE.md`** / **`GDS_ARKKITEHTUURI.md`** — monorepo architecture (EN/FI pair).
- **`GDS_NPM_RELEASE_NOTES.md`** — npm version changes for Custom GPT / external agents (bundled in `@gds-vero/react`).
- **`GDS_CUSTOM_GPT_INSTRUCTIONS.md`** — copy-paste Custom GPT Instructions (Delivery audit report + preview workflow).
- **`CLAUDE.md`** — monorepo layout and package roles (supplementary only).
- **`.cursor/rules/gds-llm-agents.mdc`** — Cursor: always apply GDS agent rules.
- **`.cursor/rules/gds-compliance-review.mdc`** — Cursor: mandatory GDS-VERO compliance review + **Delivery audit report** after every UI change.
- **`.cursor/rules/gds-accessibility.mdc`** — Cursor: mandatory WCAG 2.1 AA review + lint after UI changes.
- **`.cursor/rules/figma-tokens.mdc`** — only the Figma → `tokens.raw.json` sync workflow.
- **`.cursor/rules/architecture-docs.mdc`** — keep architecture docs in sync when structure, packages, Code Connect, create-app, or publish workflow changes.
