# @gdesignsystem/create-app

Scaffold a React + Vite app with GDS pre-wired.

## Create a project

**npm and pnpm `create` add a `create-` prefix to the name you pass.** Use `@gdesignsystem/app` (not `create-app`):

```bash
npm create @gdesignsystem/app@latest my-project
# or
pnpm create @gdesignsystem/app@latest my-project
```

Wrong (404 — resolves to `@gdesignsystem/create-create-app`):

```bash
npm create @gdesignsystem/create-app@latest my-project  # don't use this
```

**Direct CLI** (same package, no naming quirk):

```bash
npx create-gds-app my-project
```

Published package name on npm: `@gdesignsystem/create-app`.

## AI agent rules (automatic)

Each scaffolded project includes:

- `AGENTS.md` — canonical pointer for Claude Code and other agents
- `.cursor/rules/gds-llm-agents.mdc` — always-on Cursor rule
- `CLAUDE.md` — Claude Code supplement
- `.github/copilot-instructions.md` — GitHub Copilot

All rules point agents to `node_modules/@gdesignsystem/react/GDS_FOR_LLM_AGENTS.md` after install.
