# GDS-VERO npm release notes (for AI agents)

> **Purpose:** Tell external agents (Custom GPT, ChatGPT, Copilot without repo access) **what changed in published `@gds-vero/*` packages** so generated code matches the latest theme, typography, and agent rules.
>
> **Canonical stack rules** (imports, Chakra v3, tokens, component selection) live in **`GDS_FOR_LLM_AGENTS.md`**. Read that file first; use **this file** for **version-specific behavior** and upgrade guidance.
>
> **Maintainers:** On every npm publish batch, run **`pnpm gds:release-notes:prepare`** (appends undocumented versions from git + syncs). **`pnpm gds:release-notes:sync`** updates the version table and copies to `packages/react/` only.

---

## Current published versions

| Package | Version | npm |
|---------|---------|-----|
| `@gds-vero/theme` | **0.1.18** | https://www.npmjs.com/package/@gds-vero/theme |
| `@gds-vero/react` | **0.1.14** | https://www.npmjs.com/package/@gds-vero/react |
| `@gds-vero/create-app` | **0.1.13** | https://www.npmjs.com/package/@gds-vero/create-app |
| `@gds-vero/tokens` | 0.1.3 | https://www.npmjs.com/package/@gds-vero/tokens |
| `@gds-vero/icons` | 0.1.1 | https://www.npmjs.com/package/@gds-vero/icons |

*Last updated: 2026-06-11*

Verify live versions:

```bash
npm view @gds-vero/theme version
npm view @gds-vero/react version
```

---

## Recommended minimum for new apps

```bash
pnpm add @gds-vero/react@^0.1.14 @gds-vero/theme@^0.1.18 @gds-vero/icons@^0.1.1 @chakra-ui/react@^3.34.0 @emotion/react react react-dom
```

Or scaffold:

```bash
npm create @gds-vero/app@latest my-project
```

---

## Before generating code (agents)

1. Read **`GDS_FOR_LLM_AGENTS.md`** (rules, Chakra v3 mapping, component selection guide).
2. Read **this file** for version-specific changes below.
3. **Before any compound component JSX:** open the matching **GDS docs page** (e.g. `/accordion`) and match the **Basic** example — **never** use Chakra slot names from training data without verification.
4. If the user’s `package.json` pins **older** versions, apply **Upgrade guidance** and recommend bumping dependencies.
5. Assume **`GDSProvider`** wraps the app; use **semantic tokens** (`fg`, `bg.subtle`, `colorPalette="brand"`), not ad-hoc hex.
6. Docs with examples: https://tomiputto.github.io/gds-vero/

### Custom GPT / external assistants

Upload both files as **knowledge**:

- `GDS_FOR_LLM_AGENTS.md`
- `GDS_NPM_RELEASE_NOTES.md` (this file)

In **Instructions**, require checking release notes for current versions **and** opening GDS docs for each compound component before coding (Accordion → `/accordion`, Dialog → `/dialog`, …). Training-data Chakra APIs are not trusted.

`https://raw.githubusercontent.com/tomiputto/gds-vero/main/GDS_NPM_RELEASE_NOTES.md`

After npm install, copies may exist at:

- `node_modules/@gds-vero/react/GDS_FOR_LLM_AGENTS.md`
- `node_modules/@gds-vero/react/GDS_NPM_RELEASE_NOTES.md`

---

## Upgrade guidance (legacy projects)

| If installed | Agent behavior |
|--------------|----------------|
| `@gds-vero/theme` **&lt; 0.1.17** | Chakra compounds (`Dialog`, `Menu`, `Field`, `Table`, …) may render **~12px** body text. **Do not** patch with `fontSize="sm"` everywhere — recommend **upgrade to ≥ 0.1.18** and restart dev server. |
| `@gds-vero/theme` **&lt; 0.1.10** | Vero surface tokens (`bg.subtle` page, `Card variant="outline"`) may be missing or wrong — upgrade theme. |
| `@gds-vero/react` **&lt; 0.1.13** | Bundled agent guide lacks **Component selection guide** — use GitHub raw `GDS_FOR_LLM_AGENTS.md` or upgrade react. |
| `@gds-vero/react` **&lt; 0.1.11** | **`VeroMainHeader`** may be unavailable — use custom header or upgrade. |
| `@chakra-ui/react` **&lt; 3.34** | **`DatePicker`** compound unavailable — use Chakra ≥ 3.34 or plain `Input type="date"`. |
| Pagination looks too small | Use **`ButtonGroup size="md"`** with `Pagination` (theme typography applies via button recipe). |

---

## Release history (agent impact only)

### 2026-06-11 — react@0.1.14

#### @gds-vero/react@0.1.14

- feat(agents): add npm release notes and automated sync on publish
- chore: bump react and create-app versions for npm publish
- feat(theme,agents): expand typography recipes and component selection guide

---

### 2026-06-11 — theme@0.1.18, react@0.1.13, create-app@0.1.13

#### `@gds-vero/theme@0.1.18`

- **18px body typography** applied automatically to Chakra **slot recipes** (Dialog, Drawer, Menu, Popover, Tooltip, Field, Input, Select, Combobox, Table, Tabs, Toast, Steps, Accordion, …) via `@gds-vero/theme` — no per-component `fontSize` hacks in app code.
- Theme recipes split into maintainable batch files under `packages/theme/src/vero-*-slot-recipes.ts`.
- **`Toggle`** slot recipe — use with `Toggle.Root asChild` + `Button` / `IconButton` for toolbar pressed state (not for form on/off; use **Switch**).
- **`Switch.Label`** uses body typography.
- **`Pagination`:** page triggers often use `asChild` + buttons — set **`ButtonGroup size="md"`** ( `size="sm"` stays 12px).
- **`DatePicker`** theme slot recipe — requires **`@chakra-ui/react` ≥ 3.34**.
- **Intentional exceptions** (do not “fix” in app code): `Stat.ValueText` large numbers; `RatingGroup` md/lg star size; `Avatar` 2xs–sm caption initials; button size scale separate from body.

#### `@gds-vero/react@0.1.13`

- **`GDS_FOR_LLM_AGENTS.md`:** **Component selection guide** — Choose X not Y, task → component table, compact component index, published docs URL.
- Compliance checklist includes **component choice** (Dialog vs Drawer, Switch vs Toggle, etc.).

#### `@gds-vero/create-app@0.1.13`

- Scaffold template pins **`@gds-vero/theme@^0.1.18`**.

---

### 2026-06-10 — theme@0.1.9–0.1.10, react@0.1.11–0.1.12

#### `@gds-vero/theme@0.1.9` / `@gds-vero/theme@0.1.10`

- First **18px typography** fixes for **`Dialog`** and **`Alert`** (later releases extended to all compounds in 0.1.18).
- **Vero surface colors:** page `bg.subtle` (#EFF4F0), cards `Card.Root variant="outline"` white + green border — do not use `bg.muted` on content cards.

#### `@gds-vero/react@0.1.11` / `@gds-vero/react@0.1.12`

- **`VeroMainHeader`** export for vero.fi-style site header (`@gds-vero/react`).
- **GDS-VERO compliance review (mandatory for agents)** section in agent guide — delivery must report GDS compliance + accessibility.

#### `@gds-vero/create-app@0.1.12`

- Scaffold ships **`VeroMainHeader`** in app shell instead of generic header.
- Agent rules: `gds-compliance-review.mdc`, `gds-accessibility.mdc`, ESLint + `jsx-a11y`.

---

### 2026-06-10 — initial `@gds-vero/*` fork

- GDS forked as **GDS-VERO** with **`@gds-vero`** npm scope (not `@gdesignsystem`).
- **`GDSProvider`**, **`GDSButton`**, **`GDSText`**, **`GDSHeading`**, Chakra v3 + Figma tokens.
- Publish via **pnpm** from monorepo only (`pnpm gds:publish:*`) — `npm publish` breaks `workspace:*` deps.

---

## What agents should ignore

- Internal refactors (file splits, smoke tests, CI) unless they change public behavior above.
- Unpublished git commits — only **npm versions** and **`GDS_FOR_LLM_AGENTS.md`** bundled in `@gds-vero/react` count for external projects.

---

## Links

- **Stack rules:** `GDS_FOR_LLM_AGENTS.md` (repo root or `node_modules/@gds-vero/react/`)
- **Component docs:** https://tomiputto.github.io/gds-vero/
- **Repository:** https://github.com/tomiputto/gds-vero
