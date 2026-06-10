# GDS Monorepo

This is the GDS (GDS Design System) monorepo — a React design system built on Chakra UI v3.

**All agents (Claude, Cursor, Copilot, etc.):** the binding UI/stack rules live in **`GDS_FOR_LLM_AGENTS.md`**. Read that file before generating or editing UI code. This file (`CLAUDE.md`) is only a short monorepo overview; **`AGENTS.md`** at the repo root points every assistant to the same canonical doc.

## Architecture docs

- **`GDS_ARCHITECTURE.md`** / **`GDS_ARKKITEHTUURI.md`** — full monorepo architecture (keep both in sync; see `.cursor/rules/architecture-docs.mdc`).

## Packages

- `packages/react` — `@gds-vero/react`: GDSProvider, GDSButton, GDSText, GDSHeading
- `packages/theme` — `@gds-vero/theme`: Chakra theme with semantic tokens
- `packages/icons` — `@gds-vero/icons`: Icon components
- `packages/tokens` — `@gds-vero/tokens`: Raw design tokens
- `packages/create-app` — `create-gds-vero-app`: App scaffolding CLI

## Building UI with GDS

**Mandatory:** follow **`GDS_FOR_LLM_AGENTS.md`** in full for any UI/React work. It is the canonical reference; summaries below can drift — trust the markdown file in the repo root.

## Key rules (summary)

- Wrap app root with `GDSProvider` from `@gds-vero/react`
- Import Chakra components from `@chakra-ui/react`, not from `@gds-vero/react`
- Use semantic tokens: `color="fg"`, `bg="bg.default"`, `colorPalette="brand"`
- Use `@gds-vero/icons` for icons
- Never use Chakra v2 names: `Divider`, `FormControl`, `Modal`, `Select`, `Alert`, etc.

## Stack

- React 18+, Chakra UI 3.x, Emotion
- pnpm workspaces
- TypeScript
- Vitest for tests
