# GDS Monorepo

This is the GDS (GDS Design System) monorepo — a React design system built on Chakra UI v3.

**All agents (Claude, Cursor, Copilot, etc.):** the binding UI/stack rules live in **`GDS_FOR_LLM_AGENTS.md`**. Read that file before generating or editing UI code. This file (`CLAUDE.md`) is only a short monorepo overview; **`AGENTS.md`** at the repo root points every assistant to the same canonical doc.

## Packages

- `packages/react` — `@gdesignsystem/react`: GDSProvider, GDSButton, GDSText, GDSHeading
- `packages/theme` — `@gdesignsystem/theme`: Chakra theme with semantic tokens
- `packages/icons` — `@gdesignsystem/icons`: Icon components
- `packages/tokens` — `@gdesignsystem/tokens`: Raw design tokens
- `packages/create-app` — `create-gds-app`: App scaffolding CLI

## Building UI with GDS

**Mandatory:** follow **`GDS_FOR_LLM_AGENTS.md`** in full for any UI/React work. It is the canonical reference; summaries below can drift — trust the markdown file in the repo root.

## Key rules (summary)

- Wrap app root with `GDSProvider` from `@gdesignsystem/react`
- Import Chakra components from `@chakra-ui/react`, not from `@gdesignsystem/react`
- Use semantic tokens: `color="fg"`, `bg="bg.default"`, `colorPalette="brand"`
- Use `@gdesignsystem/icons` for icons
- Never use Chakra v2 names: `Divider`, `FormControl`, `Modal`, `Select`, `Alert`, etc.

## Stack

- React 18+, Chakra UI 3.x, Emotion
- pnpm workspaces
- TypeScript
- Vitest for tests
