# @gds-vero/create-app

Scaffold a React + Vite app with GDS pre-wired.

## Create a project

**npm and pnpm `create` add a `create-` prefix to the name you pass.** Use `@gds-vero/app` (not `create-app`):

```bash
npm create @gds-vero/app@latest my-project
# or
pnpm create @gds-vero/app@latest my-project
```

Wrong (404 — resolves to `@gds-vero/create-create-app`):

```bash
npm create @gds-vero/create-app@latest my-project  # don't use this
```

**Direct CLI** (same package, no naming quirk):

```bash
npx create-gds-vero-app my-project
```

Published package name on npm: `@gds-vero/create-app`.

The scaffolded app includes **`VeroMainHeader`** (vero.fi site header) at the top of every page — not a generic GDS docs-style header.

## AI agent rules (automatic)

Each scaffolded project includes:

- `AGENTS.md` — canonical pointer for Claude Code and other agents
- `.cursor/rules/gds-llm-agents.mdc` — always-on Cursor rule
- `.cursor/rules/gds-compliance-review.mdc` — GDS-VERO compliance review + mandatory **Delivery audit report** (all categories, PASS / WARNING / FAIL)
- `.cursor/rules/gds-accessibility.mdc` — WCAG review + lint after UI changes
- `CLAUDE.md` — Claude Code supplement
- `.github/copilot-instructions.md` — GitHub Copilot
- `eslint` + `eslint-plugin-jsx-a11y` — `npm run lint` catches common a11y issues in JSX

All rules point agents to `node_modules/@gds-vero/react/GDS_FOR_LLM_AGENTS.md` after install.
