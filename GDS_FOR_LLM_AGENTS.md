# GDS for LLM agents

> **Canonical rules for all assistants:** This file is the single source of truth for GDS UI/stack when working in this repo. It is referenced from **`AGENTS.md`**, **`CLAUDE.md`**, and **`.cursor/rules/gds-llm-agents.mdc`** so Cursor, Claude, Copilot, ChatGPT, and other agents apply the same rules.

This document is the canonical reference for AI agents (e.g. ChatGPT, Copilot) when a user asks to build a website, app, or UI **using GDS**. Follow it so that only GDS and its stack are used.

---

## CRITICAL: Chakra v3 only (for MCP / context injection)

**When generating any React UI code for GDS, you MUST use Chakra UI v3 component names only.** Do **not** use Chakra v2 names; they are not exported by `@chakra-ui/react` v3 and will cause "doesn't provide an export named X" errors.

**NEVER import these from `@chakra-ui/react` (they do not exist in v3):**  
`Divider`, `Card`, `CardHeader`, `CardBody`, `CardFooter`, `FormControl`, `FormLabel`, `FormErrorMessage`, `FormHelperText`, `Table`, `Thead`, `Tbody`, `Tr`, `Th`, `Td`, `TableContainer`, `Modal`, `ModalOverlay`, `ModalContent`, `ModalHeader`, `ModalBody`, `ModalFooter`, `ModalCloseButton`, `Tab`, `TabList`, `TabPanel`, `TabPanels`, `Select`, `Alert`, `AlertIcon`, `AlertTitle`, `AlertDescription`, `Collapse`

**Always use these (v3):**

- **Forms:** `Field.Root`, `Field.Label`, `Field.HelperText`, `Field.ErrorText` (never `FormControl`, `FormLabel`, `FormErrorMessage`, `FormHelperText`)
- **Cards:** `Card.Root`, `Card.Header`, `Card.Body`, `Card.Footer`, `Card.Title`, `Card.Description` (never standalone `Card`, `CardHeader`, `CardBody`, `CardFooter`)
- **Dividers:** `Separator` (never `Divider`)
- **Tables:** `Table.Root`, `Table.Header`, `Table.Row`, `Table.ColumnHeader`, `Table.Body`, `Table.Cell` (never `Table`, `Thead`, `Tbody`, `Tr`, `Th`, `Td`)

**If you deliver this file via MCP or as context to an LLM:** Include the section **"Chakra v3 API — do not use these names"** (below) early in the context so the model sees the full mapping before generating code.

---

## What GDS is

- **GDS** (GDS Design System) is a React design system built on **Chakra UI v3** with a custom theme and Figma-derived tokens.
- **npm packages (use only these for UI when building with GDS):**
  - `@gds-vero/react` – React provider and wrappers. Exports `GDSProvider`, `GDSButton`, etc.
  - `@gds-vero/theme` – Chakra theme (semantic tokens: `fg`, `bg.default`, `brand`, etc.).
  - `@gds-vero/icons` – Icon set (e.g. `CheckIcon`, `StarIcon`, `XIcon`). Use with Chakra `Icon` or as components.
  - `@gds-vero/tokens` – Optional. Only add if the app needs raw token files or token values directly; most apps do not need it.
- **Stack:** React 18+, Chakra UI 3.x, Emotion. Use **only** Chakra UI components + GDS packages for UI. Do **not** use MUI, Tailwind component libraries, or other design systems when the user asks for GDS.

---

## When to use GDS

Use this stack when the user says they want to build something **with GDS-VERO**, **using GDS**, **GDS design system**, **gds-vero**, or similar. Then use **only** the packages and rules below for the UI layer.

---

## Install

```bash
pnpm add @gds-vero/react @gds-vero/theme @gds-vero/icons @chakra-ui/react @emotion/react react react-dom
```

(Use `npm` or `yarn` if the user’s project uses those; the package names stay the same.)

### After install: make agents follow this file (npm / pnpm / yarn)

The same guide is **published inside** `@gds-vero/react`. After install you have:

- `node_modules/@gds-vero/react/GDS_FOR_LLM_AGENTS.md` — canonical stack rules
- `node_modules/@gds-vero/react/GDS_NPM_RELEASE_NOTES.md` — **npm version changes** (for Custom GPT / external agents)

**External agents (Custom GPT, etc.):** upload **both** files as knowledge. Paste **Instructions** from **`GDS_CUSTOM_GPT_INSTRUCTIONS.md`** (repo root) — knowledge alone does not reliably enforce the Delivery audit report. Check release notes for current `@gds-vero/*` versions before generating code. Raw URLs:

- https://raw.githubusercontent.com/tomiputto/gds-vero/main/GDS_FOR_LLM_AGENTS.md
- https://raw.githubusercontent.com/tomiputto/gds-vero/main/GDS_NPM_RELEASE_NOTES.md
- https://github.com/tomiputto/gds-vero/blob/main/GDS_CUSTOM_GPT_INSTRUCTIONS.md (Custom GPT Instructions — copy step 2)

**`npm create @gds-vero/app@latest`** scaffolds `AGENTS.md`, `.cursor/rules/gds-llm-agents.mdc`, `.cursor/rules/gds-compliance-review.mdc`, `.cursor/rules/gds-accessibility.mdc`, `CLAUDE.md`, `.github/copilot-instructions.md`, and ESLint + `jsx-a11y` (`npm run lint`) so agents follow GDS rules, verify design-system compliance, and catch common accessibility issues automatically.

For other projects, agents do **not** read `node_modules` automatically. Add a **project rule** (Cursor, Claude Code, or your editor’s equivalent) so every UI task uses it. Example text to paste:

> **GDS / Chakra UI:** For any React UI in this project, follow the canonical rules in **`node_modules/@gds-vero/react/GDS_FOR_LLM_AGENTS.md`** (Chakra v3 only, correct imports from `@gds-vero/react` vs `@chakra-ui/react` vs `@gds-vero/icons`, semantic tokens). If that path is missing, run install and ensure `@gds-vero/react` is a dependency.

You can copy that file into your repo (e.g. `docs/GDS_FOR_LLM_AGENTS.md`) and point the rule there instead, if you prefer a stable path without `node_modules`.

---

## Minimal app setup

1. Wrap the app root with `GDSProvider` (from `@gds-vero/react`).
2. Use Chakra UI components from `@chakra-ui/react` (Box, Button, Text, Input, etc.).
3. Use semantic token props: `color="fg"`, `color="fg.muted"`, `bg="bg.default"`, `bg="bg.subtle"`, `colorPalette="brand"` on components that support it (Button, Badge, etc.).
4. Use icons from `@gds-vero/icons` (e.g. `CheckIcon`, `XIcon`) with `color` set to a token (e.g. `color="fg.muted"`) or let them inherit.

**Import rule:** `GDSProvider`, `GDSButton`, `GDSText`, `GDSHeading`, `VeroMainHeader`, `VeroAppShell`, `VeroPageLayout` come from `@gds-vero/react`. All Chakra UI compound components (`Field`, `Card`, `Input`, `Button`, `Separator`, `Box`, `Text`, etc.) must be imported from `@chakra-ui/react`. Importing `Field` or other Chakra components from `@gds-vero/react` will cause "doesn't provide an export named X" errors.

**Minimal example:**

```tsx
import { GDSProvider } from "@gds-vero/react";
import { Button, Box, Text } from "@chakra-ui/react";
import { CheckIcon } from "@gds-vero/icons";

function App() {
  return (
    <GDSProvider>
      <Box bg="bg.default" color="fg" p="4">
        <Text mb="2">Hello, GDS</Text>
        <Button colorPalette="brand">
          <CheckIcon /> Primary action
        </Button>
      </Box>
    </GDSProvider>
  );
}
```

---

## Rules (must follow when building with GDS)

- Use **only** Chakra UI + GDS packages (`@gds-vero/react`, `@gds-vero/theme`, `@gds-vero/icons`) for the UI. Do not add Material UI, Ant Design, Tailwind UI, or other component libraries.
- Use **semantic tokens** for colors and backgrounds: `fg`, `fg.muted`, `bg.default`, `bg.subtle`, `border.muted`, `colorPalette="brand"`, etc.
- Use **`@gds-vero/icons`** for icons (e.g. `CheckIcon`, `StarIcon`, `XIcon`, `SearchIcon`, `MenuIcon`, `UserIcon`, `ArrowRightIcon`, `ChevronDownIcon`, `PencilIcon`, `TrashIcon`, `PlusIcon`, `InfoIcon`, `TriangleAlertIcon`, `LogOutIcon`). Over 1500 icons available — full list at [GDS Icons docs](https://github.com/tomiputto/gds-vero#readmestyles/icons). Do not use `react-icons` or other icon sets for UI when building with GDS unless the user explicitly asks. Icon names are PascalCase with `Icon` suffix matching Lucide icon names (e.g. Lucide `arrow-right` → `ArrowRightIcon`).
- The root of the React tree must be wrapped in **`GDSProvider`** from `@gds-vero/react`.
- **Forms:** Use Chakra v3 **Field** API from `@chakra-ui/react`: `Field.Root`, `Field.Label`, `Field.HelperText`, `Field.ErrorText`. Do **not** use `FormControl`, `FormLabel`, `FormHelperText`, or `FormErrorMessage` — they are not exported in Chakra v3 and will cause runtime errors.
- **Tables:** Use Chakra v3 **Table** compound component: `Table.Root`, `Table.Header`, `Table.Row`, `Table.ColumnHeader`, `Table.Body`, `Table.Cell`. Do **not** use `Table`, `Thead`, `Tbody`, `Tr`, `Th`, `Td`, or `TableContainer` — they are not exported in Chakra v3 and will cause runtime errors. Use `Table.ScrollArea` for scrollable tables; use `textAlign="end"` instead of `isNumeric`.
- **Cards:** Use `Card.Root`, `Card.Header`, `Card.Body`, `Card.Footer`, `Card.Title`, `Card.Description`. Do **not** use standalone `Card`, `CardHeader`, `CardBody`, or `CardFooter` — they are not exported in Chakra v3.
- **Dividers:** Use `Separator`. Do **not** use `Divider` — it is not exported in Chakra v3.

### Vero surfaces (GDS-VERO)

Use **semantic tokens** — do not hardcode hex unless the user explicitly asks:

| Surface | Token | Value |
|---------|--------|--------|
| Page / canvas background | `bg="bg.subtle"` | `#EFF4F0` |
| Cards and white panels | `bg="bg.default"` via `Card.Root variant="outline"` | `#ffffff` |
| Borders on cards and outlined components | `borderColor="border.emphasized"` (card recipe default) | `#C9E0CA` |

- App shell: `Theme` or page wrapper with `bg="bg.subtle"`.
- Cards: `Card.Root variant="outline"` — do **not** override with `bg="bg.muted"` or ad-hoc borders.
- Site header on vero.fi-style apps: `VeroMainHeader` from `@gds-vero/react`.

---

## Typography

GDS defines **named text styles** in the theme (`@gds-vero/theme`): `display`, `headline`, `title`, `body`, `caption`. Use them on **`GDSText`** via `textStyle="body"` etc.

- **Do not** use `textStyle="md"` or `textStyle="sm"` on `GDSText` — those are **font size token names**, not GDS text styles, and sizing will look inconsistent.
- **`GDSHeading`** wraps Chakra `Heading`. **`as`** sets semantics (`h1`–`h6`); **`size`** sets visual scale from the **vero.fi heading recipe** in `@gds-vero/theme`. They are independent unless you omit `size` — then `GDSHeading` defaults `size` from `as` (see table). Do **not** use `textStyle` on `GDSHeading`.
- **vero.fi heading scale** (`packages/theme` → `heading` recipe):

| `GDSHeading` `size` | px | Match with `as` |
|---------------------|-----|-----------------|
| `4xl` | **42px** | **`h1`** — page title |
| `3xl` | **34px** | **`h2`** — major section |
| `2xl` | **24px** | **`h3`** — subsection |
| `xl` | **20px** | **`h4`** — same as **`Card.Title`** |
| `lg` | 16px | `h5` |
| `md` | 14px | `h6` |

- **Page title:** `<GDSHeading as="h1">` (defaults to **42px**) or explicit `size="4xl"`. Do **not** use `size="xl"` or `size="2xl"` for `h1` — those are h4/h3 sizes and look too small next to content.
- **Inside `Card`:** use **`Card.Title`** / **`Card.Description`** — not `GDSHeading` (see **Card — verified pattern**).
- Hierarchy example: page `<GDSHeading as="h1">`; section `<GDSHeading as="h2">`; subsection `<GDSHeading as="h3">`; body `GDSText textStyle="body"`; secondary `GDSText textStyle="caption" color="fg.muted"`.
- Optional: `fontSize="md"` on `GDSText` uses the Figma **type scale** (`xs`–`4xl`) when you need a specific step, separate from `textStyle`.

### Theme typography — Chakra components (automatic)

**`@gds-vero/theme` (≥ `0.1.17`)** overrides Chakra **recipes** and **slot recipes** so compound components use **vero.fi body typography (18px / `textStyle: "body"`)** instead of Chakra defaults (`textStyle: "sm"` ≈ 12px, `textStyle: "xs"` ≈ 10–12px). Apps wrapped in **`GDSProvider`** get this without per-component `fontSize` props.

**Agents do not need to patch theme typography in app code** when using standard Chakra compounds (`Dialog`, `Menu`, `Field`, `Table`, `Tabs`, `Toast`, `Select`, …). Upgrade the theme package and restart the dev server if typography looks like 12px.

**Agents must still:**

- Use **`GDSText`** / **`GDSHeading`** for **page layout** copy — for **`Card`**, use **`Card.Title`** / **`Card.Description`** (theme sizes the title); use **`GDSText`** only inside **`Card.Body`** for extra body text.
- Avoid **`textStyle="sm"`** or **`textStyle="md"`** on **`GDSText`** (those are Chakra size names, not GDS text styles).
- **Pagination:** use **`ButtonGroup size="md"`** with `IconButton` — star/page buttons take typography from the **button** recipe; `size="sm"` stays 12px.
- **DatePicker:** requires **`@chakra-ui/react` ≥ 3.34** (component + theme slot recipe).

**Global defaults** (from theme `globalCss`): `html` / `body` use **`fontSize: "md"`** (18px) and **`bg.subtle`** page background.

#### Coverage (theme slot/recipe batches)

| Area | Components | Notes |
|------|------------|--------|
| Overlays | `Dialog`, `Drawer`, `Alert`, `Menu`, `Popover`, `Tooltip`, `HoverCard`, `FloatingPanel` | Dialog/drawer/floating-panel titles → **20px (`xl`)** |
| Navigation / data | `Tabs`, `Table`, `Breadcrumb`, `Pagination` (slots), `DataList` | Pagination triggers often `asChild` → use button **md** |
| Feedback | `Toast`, `Progress`, `ProgressCircle`, `EmptyState`, `Status` | EmptyState titles scale by size; stat **values** stay large |
| Pickers / tags | `DatePicker`, `ColorPicker`, `Tag` | DatePicker needs Chakra ≥ 3.34 |
| Content | `Accordion`, `Collapsible`, `Steps`, `Timeline`, `Stat`, `Card` | Stat **`valueText`** keeps xl/2xl/3xl for numbers |
| Inline / text | `Badge`, `Kbd`, `Code`, `Blockquote`, `List`, `Avatar`, `SegmentGroup`, `Link`, `Heading` | Avatar **2xs–sm** initials use **caption** (fits circle) |
| Forms | `Field`, `Input`, `Textarea`, `Select`, `Combobox`, `Checkbox`, … incl. **xs** sizes | See `vero-form-slot-recipes.ts` |
| Misc | `FileUpload`, `Slider`, `ActionBar`, `RatingGroup` (xs stars only), `Toggle` | Rating **md/lg** star size unchanged; Toggle often uses `asChild` + `Button` **md** |

#### Intentional exceptions (do not “fix” in app code)

- **`Stat.ValueText`** — large numeric display (xl / 2xl / 3xl by size).
- **`RatingGroup`** **md/lg** — `textStyle` controls star **icon** em-size, not body copy.
- **`Avatar`** **2xs / xs / sm** — caption-scale initials so letters fit the circle.
- **`GDSButton` / `Button`** — vero.fi buttons are **pill-shaped** (`borderRadius: "full"` from theme). Use **`GDSButton`** inside **`GDSProvider`** for CTAs; **never** override `borderRadius` or use raw `<button>`. Without `GDSProvider`, buttons look **square** (Chakra default).
- **`Slider` markers** — caption-scale tick labels.

#### Maintainer map (`packages/theme/src/`)

| File | Role |
|------|------|
| `vero-body-text.ts` | `BODY_TEXT_STYLE`, helpers (`bodyTextSlotSizes`, …) |
| `vero-overlay-slot-recipes.ts` | Dialog, drawer, menu, popover, tooltip, alert |
| `vero-nav-slot-recipes.ts` | Tabs, table, breadcrumb, pagination |
| `vero-feedback-slot-recipes.ts` | Toast, progress, empty state, status |
| `vero-picker-slot-recipes.ts` | DatePicker, color picker, tag |
| `vero-content-slot-recipes.ts` | Accordion, steps, timeline, stat labels, data list |
| `vero-text-recipes.ts` | Badge, kbd, code, blockquote, list, avatar |
| `vero-misc-slot-recipes.ts` | File upload, slider, hover card, action bar, rating xs, **toggle** |
| `vero-form-slot-recipes.ts` | Field, select, combobox, checkbox, … |
| `vero-recipes.ts` | Button, link, heading, input, card, … |

Smoke tests: `packages/theme/src/gdsRecipes.smoke.test.ts`.

---

## Forms (Field API)

For inputs with labels, help text, and errors use **Field** from `@chakra-ui/react`:

```tsx
import { Field, Input, Button } from "@chakra-ui/react";

<Field.Root invalid={!!error}>
  <Field.Label>Email</Field.Label>
  <Input type="email" />
  <Field.HelperText>We'll never share your email.</Field.HelperText>
  <Field.ErrorText>{error}</Field.ErrorText>
</Field.Root>
```

Do not import `FormControl`, `FormLabel`, `FormHelperText`, or `FormErrorMessage` — they do not exist in Chakra v3.

---

## Example: Login card (Chakra v3)

Use this pattern for login cards or any form-in-card. **`width="full"` on the submit button applies only here** (narrow form card) — **not** on directory/profile/content cards (see **Card — verified pattern**).

**Imports must be** `Card`, `Field`, `Input`, `Button`, `Separator` (not `Divider`), `Stack`/`VStack`/`Box`/`Text`/`Heading` from `@chakra-ui/react`. **Never** import `FormControl`, `FormLabel`, `FormErrorMessage`, `Divider`, `CardHeader`, `CardBody`, `CardFooter`.

```tsx
import * as React from "react";
import {
  Box,
  Button,
  Card,
  Field,
  Heading,
  Input,
  Separator,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export function LoginCard() {
  return (
    <Card.Root maxW="md">
      <Card.Header>
        <Card.Title>Sign in</Card.Title>
        <Card.Description>Enter your credentials</Card.Description>
      </Card.Header>
      <Card.Body>
        <VStack gap="4" align="stretch">
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input type="email" placeholder="you@example.com" />
            <Field.ErrorText>Invalid email</Field.ErrorText>
          </Field.Root>
          <Field.Root>
            <Field.Label>Password</Field.Label>
            <Input type="password" placeholder="••••••••" />
            <Field.ErrorText>Required</Field.ErrorText>
          </Field.Root>
        </VStack>
      </Card.Body>
      <Card.Footer>
        {/* width="full" — login/form submit only; not for directory or profile cards */}
        <Button colorPalette="brand" width="full">Sign in</Button>
      </Card.Footer>
    </Card.Root>
  );
}
```

---

## Dialogs (Dialog API)

Use **Dialog** compound component from `@chakra-ui/react`. Always wrap content in `<Portal>`. Use `XIcon` from `@gds-vero/icons` for the close trigger.

```tsx
import { Dialog, Button, IconButton, Portal } from "@chakra-ui/react";
import { XIcon } from "@gds-vero/icons";

<Dialog.Root>
  <Dialog.Trigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </Dialog.Trigger>
  <Portal>
    <Dialog.Backdrop />
    <Dialog.Positioner>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Dialog Title</Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>Content here.</Dialog.Body>
        <Dialog.Footer>
          <Dialog.ActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Dialog.ActionTrigger>
          <Button colorPalette="brand">Save</Button>
        </Dialog.Footer>
        <Dialog.CloseTrigger asChild>
          <IconButton size="sm" variant="ghost" aria-label="Close dialog">
            <XIcon />
          </IconButton>
        </Dialog.CloseTrigger>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
```

Do **not** use `Modal`, `ModalOverlay`, `ModalContent`, `ModalHeader`, `ModalBody`, `ModalFooter`, `ModalCloseButton` — they do not exist in Chakra v3.

---

## Alerts (Alert API)

Use **Alert** compound component from `@chakra-ui/react`. Status variants: `success`, `error`, `warning`, `info`.

```tsx
import { Alert } from "@chakra-ui/react";

// Success
<Alert.Root status="success">
  <Alert.Indicator />
  <Alert.Content>
    <Alert.Title>Success</Alert.Title>
    <Alert.Description>Your changes have been saved.</Alert.Description>
  </Alert.Content>
</Alert.Root>

// Error
<Alert.Root status="error">
  <Alert.Indicator />
  <Alert.Content>
    <Alert.Title>Error</Alert.Title>
    <Alert.Description>Something went wrong. Please try again.</Alert.Description>
  </Alert.Content>
</Alert.Root>

// Warning (title only)
<Alert.Root status="warning">
  <Alert.Indicator />
  <Alert.Title>Your session is about to expire</Alert.Title>
</Alert.Root>

// Info (title only)
<Alert.Root status="info">
  <Alert.Indicator />
  <Alert.Title>New feature available</Alert.Title>
</Alert.Root>
```

Do **not** use `Alert`, `AlertIcon`, `AlertTitle`, `AlertDescription` (flat imports) — use the compound `Alert.Root` / `Alert.Indicator` / `Alert.Content` / `Alert.Title` / `Alert.Description` API.

---

## Navigation / App shell

GDS does not ship a nav component. Build navigation with Chakra primitives + semantic tokens:

```tsx
import { Box, HStack, Link, Separator } from "@chakra-ui/react";
import { GDSHeading } from "@gds-vero/react";

function AppHeader() {
  return (
    <Box as="header" bg="bg.default" borderBottomWidth="1px" borderColor="border.muted">
      <HStack px="6" py="3" justify="space-between">
        <GDSHeading size="md" as="span">My App</GDSHeading>
        <HStack as="nav" gap="4">
          <Link href="/" color="fg">Home</Link>
          <Link href="/about" color="fg.muted">About</Link>
        </HStack>
      </HStack>
    </Box>
  );
}
```

---

## Component selection guide

When generating UI, pick the component from the tables below. **Do not duplicate full APIs here** — use GDS docs, Chakra MCP, or Chakra docs for props and edge cases.

### Mandatory: verify component API before coding (never from memory)

**GDS-VERO compound components use Chakra UI v3 slot names that often differ from Chakra v2 and from generic LLM training data.** Selecting the right component (Accordion vs Collapsible) is **not enough** — you must **confirm the exact slot/subcomponent names** from documentation **before** writing JSX.

**Required workflow for every compound component** (`Accordion`, `Dialog`, `Drawer`, `Tabs`, `Table`, `Menu`, `Field`, `Select`, `Combobox`, `Steps`, `Pagination`, …):

1. **Open the GDS docs page** for that component (see [component index](#component-index-compact)) — e.g. https://tomiputto.github.io/gds-vero/accordion  
2. **Copy the structure from the “Basic” example** on that page (slot names, nesting, required children).  
3. **Generate code** to match that structure — do not substitute names from memory.  
4. **Self-check:** every compound slot in your JSX appears in the docs example or Chakra MCP `get_component_example` output for that component.

**If you cannot verify the API** (no docs page, no MCP, no example in context): **stop and say so** — do not guess slot names.

| Context | How to verify |
|---------|----------------|
| **Cursor / Claude in monorepo** | Read `apps/docs/src/pages/design-system/*Page.tsx` for the component, or GDS docs URL, or **Chakra MCP** `get_component_example` |
| **Custom GPT / external agent** | GDS docs URL (`https://tomiputto.github.io/gds-vero/<path>`) is **source of truth** — training-data Chakra examples are **wrong until verified** |
| **npm consumer with agent rules** | `GDS_FOR_LLM_AGENTS.md` + docs URL; bundled guide does **not** replace per-component pages |

**Do not:**

- Invent slot names (`Accordion.Trigger` when docs use `Accordion.ItemTrigger`; `Modal.*`; `FormControl`; flat `Select`).
- Ship a “close enough” Chakra compound from training data without matching GDS docs.
- Report **GDS compliance: pass** if compound slot names were not verified against docs.

**Accordion — verified GDS-VERO pattern** (from https://tomiputto.github.io/gds-vero/accordion — use this, not memory):

```tsx
import { Accordion, Span } from "@chakra-ui/react";
import { ChevronDownIcon } from "@gds-vero/icons";

<Accordion.Root collapsible defaultValue={["b"]}>
  <Accordion.Item value="a">
    <Accordion.ItemTrigger>
      <Span flex="1">First item</Span>
      <Accordion.ItemIndicator>
        <ChevronDownIcon boxSize="4" />
      </Accordion.ItemIndicator>
    </Accordion.ItemTrigger>
    <Accordion.ItemContent>
      <Accordion.ItemBody>Content for the first section.</Accordion.ItemBody>
    </Accordion.ItemContent>
  </Accordion.Item>
</Accordion.Root>
```

Required slots: **`ItemTrigger`**, **`ItemIndicator`** (chevron), **`ItemContent`**, **`ItemBody`**. Do **not** use v2 names (`AccordionButton`, `AccordionIcon`, `AccordionPanel`) or unverified v3 aliases without checking docs.

**Dialog — verified GDS-VERO pattern** (from https://tomiputto.github.io/gds-vero/dialog):

```tsx
import { Dialog, Button, IconButton, Portal } from "@chakra-ui/react";
import { XIcon } from "@gds-vero/icons";

<Dialog.Root>
  <Dialog.Trigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </Dialog.Trigger>
  <Portal>
    <Dialog.Backdrop />
    <Dialog.Positioner>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Dialog Title</Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>Content here.</Dialog.Body>
        <Dialog.Footer>
          <Dialog.ActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Dialog.ActionTrigger>
          <Button colorPalette="brand">Save</Button>
        </Dialog.Footer>
        <Dialog.CloseTrigger asChild>
          <IconButton size="sm" variant="ghost" aria-label="Close dialog">
            <XIcon />
          </IconButton>
        </Dialog.CloseTrigger>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
```

Required: **`Portal`** wrapper, **`Backdrop`**, **`Positioner`**, **`Content`**, **`Title`**, **`CloseTrigger`** with `aria-label`. Do **not** use v2 **`Modal`**, **`ModalOverlay`**, **`ModalContent`**, **`ModalCloseButton`**.

**Tabs — verified GDS-VERO pattern** (from https://tomiputto.github.io/gds-vero/tabs):

```tsx
import { Tabs, Box } from "@chakra-ui/react";

<Tabs.Root colorPalette="brand" defaultValue="one" variant="line">
  <Tabs.List>
    <Tabs.Trigger value="one">Tab one</Tabs.Trigger>
    <Tabs.Trigger value="two">Tab two</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="one">
    <Box py="4">Content for tab one.</Box>
  </Tabs.Content>
  <Tabs.Content value="two">
    <Box py="4">Content for tab two.</Box>
  </Tabs.Content>
</Tabs.Root>
```

Use **`Tabs.Root`**, **`Tabs.List`**, **`Tabs.Trigger`**, **`Tabs.Content`** with matching **`value`**. Do **not** use v2 **`TabList`**, **`Tab`**, **`TabPanel`**, **`TabPanels`**.

**Field — verified GDS-VERO pattern** (from https://tomiputto.github.io/gds-vero/field):

Field **label typography** (18px, semibold) comes from **`@gds-vero/theme`** on the **`Field.Label`** slot — only when wrapped in **`GDSProvider`**. Do **not** set `fontSize` / `textStyle` / `fontWeight` on `Field.Label`. Do **not** use **`GDSText`**, **`Text`**, or **`GDSHeading`** as the visible field label — always **`Field.Label`** inside **`Field.Root`**. If label styling looks wrong, fix the theme — do not substitute body text wrappers.

```tsx
import { Field, Input } from "@chakra-ui/react";

<Field.Root invalid={!!error}>
  <Field.Label>Email</Field.Label>
  <Input type="email" placeholder="you@example.com" />
  <Field.HelperText>We'll never share your email.</Field.HelperText>
  <Field.ErrorText>{error}</Field.ErrorText>
</Field.Root>
```

| Slot | Component | Notes |
|------|-----------|--------|
| Label | **`Field.Label`** | 18px body scale, **semibold** — no props needed |
| Helper | **`Field.HelperText`** | 18px, `fg.muted` |
| Error | **`Field.ErrorText`** | 18px, `fg.error` |

Use **`Field.Root`**, **`Field.Label`**, **`Field.HelperText`**, **`Field.ErrorText`**, **`invalid`** on root. Do **not** use v2 **`FormControl`**, **`FormLabel`**, **`FormHelperText`**, **`FormErrorMessage`**.

**Do not:** `<GDSText textStyle="body">Nimi</GDSText>` above an input; `Field.Label fontWeight="bold"`; placeholder-only labels without `Field.Label`.

**Card — verified GDS-VERO pattern** (from https://tomiputto.github.io/gds-vero/card):

Card **title size (20px)** comes from **`@gds-vero/theme`** on the **`Card.Title`** slot — only when wrapped in **`GDSProvider`**. Do **not** set `fontSize` / `textStyle` on `Card.Title`. Do **not** use `GDSText` / `Text` / `GDSHeading` as the card title.

```tsx
import { GDSProvider, GDSButton, GDSText as Text } from "@gds-vero/react";
import { Card } from "@chakra-ui/react";

<GDSProvider>
  <Card.Root variant="outline" maxW="md">
    <Card.Header>
      <Card.Title>Anna Virtanen</Card.Title>
      <Card.Description>
        Käyttäjäprofiilin lyhyt kuvaus ja yhteystiedot.
      </Card.Description>
    </Card.Header>
    <Card.Body>
      <Text color="fg.muted" textStyle="body">
        Optional extra body content in the card.
      </Text>
    </Card.Body>
    <Card.Footer>
      <GDSButton colorPalette="brand">Action</GDSButton>
    </Card.Footer>
  </Card.Root>
</GDSProvider>
```

| Slot | Component | Typography (theme) |
|------|-----------|-------------------|
| Title | **`Card.Title`** | **20px** (`fontSize: "xl"`, semibold) — no props needed |
| Subtitle | **`Card.Description`** | 18px body, muted |
| Extra body | **`GDSText`** in **`Card.Body`** | `textStyle="body"` |
| Surface | **`Card.Root variant="outline"`** | white + vero green border (`bg.default`) |
| Footer CTA | **`GDSButton`** in **`Card.Footer`** | **Inline width** (content-sized pill) — **no** `width="full"` / `w="full"` |

**Card footer buttons:** use **`GDSButton colorPalette="brand"`** with **default inline width** — the pill button is only as wide as its label. **`width="full"` / `w="full"`** is **only** for **login / form submit** cards (see Login card example above), **not** for team directory, profile, or content cards.

```tsx
{/* Team directory / profile card — inline CTA */}
<Card.Footer>
  <GDSButton colorPalette="brand">Ota yhteyttä</GDSButton>
</Card.Footer>
```

**Do not:** `GDSText fontWeight="bold"` as title; `Card.Title fontSize="md"`; `Card.Title textStyle="body"`; `bg="bg.muted"` on content cards; **`GDSButton width="full"`** on directory/profile cards; `Card.Footer flexDirection="column" align="stretch"` unless user asks for stacked full-width actions.

**Button — verified GDS-VERO pattern** (from https://tomiputto.github.io/gds-vero/button):

vero.fi buttons are **pill-shaped** (`borderRadius: "full"`) and **brand green** for primary actions. Shape comes from **`@gds-vero/theme`** on the **button recipe** when wrapped in **`GDSProvider`**. Prefer **`GDSButton`** (sets `colorPalette="brand"`, `variant="solid"`, `size="md"`, `borderRadius="full"` by default).

```tsx
import { GDSProvider, GDSButton } from "@gds-vero/react";
import { HStack } from "@chakra-ui/react";

<GDSProvider>
  <HStack gap="3">
    <GDSButton colorPalette="brand">Ota yhteyttä</GDSButton>
    <GDSButton variant="outline">Peruuta</GDSButton>
  </HStack>
</GDSProvider>
```

| Use | Component | Notes |
|-----|-----------|--------|
| Primary CTA | **`GDSButton colorPalette="brand"`** | Pill shape — **do not** set `borderRadius` |
| Card footer (directory, profile, content) | **`GDSButton`** in **`Card.Footer`** | **Inline width** — no `width="full"` |
| Login / form submit in card | **`GDSButton width="full"`** | **Only** narrow form cards (sign in, send, etc.) |
| Secondary | **`GDSButton variant="outline"`** | Green border, pill shape |
| In dialogs / toolbars | Chakra **`Button colorPalette="brand"`** inside **`GDSProvider`** | Same theme recipe — still pill |

**Do not:** raw `<button>` or `Box as="button"`; `borderRadius="md"` / `"sm"` / `"lg"` on buttons; hex `bg="#..."`; `Button` **outside** `GDSProvider` (renders Chakra default = **square corners**); **`width="full"`** on card CTAs except login/form submit; MUI/Ant Design buttons.

**VeroMainHeader — verified GDS-VERO pattern** (from https://tomiputto.github.io/gds-vero/examples/vero-main-header):

GDS **wrapper** from **`@gds-vero/react`** — not a Chakra compound. Use for **vero.fi-style site header**; do **not** rebuild the header from `Box` / `Flex` / `Menu` unless the user explicitly asks for a custom header.

Prefer **`VeroAppShell`** (includes `VeroMainHeader`) + **`VeroPageLayout`** for full pages — see **Page layout** below.

```tsx
import { GDSProvider, VeroAppShell, VeroPageLayout } from "@gds-vero/react";

<GDSProvider>
  <VeroAppShell>
    <VeroPageLayout>{/* page content */}</VeroPageLayout>
  </VeroAppShell>
</GDSProvider>
```

**Defaults:** Finnish vero.fi labels, audience tabs, language menu, OmaVero links, and sub-navigation — works with **no props**.

**Customize via props** (types: `VeroMainHeaderProps` on `VeroAppShell` / `VeroMainHeader` from `@gds-vero/react`):

| Prop | Type | Purpose |
|------|------|---------|
| `logoHref`, `logoLabel` | `string` | Logo link and text (default `vero.fi`) |
| `audienceTabs` | `VeroAudienceTab[]` | Top green bar tabs (`id`, `label`, `href`, optional `isActive`) |
| `searchHref`, `searchLabel`, `onSearchClick` | `string`, `string`, `() => void` | Search link or in-app handler |
| `languages`, `languageLabel` | `VeroLanguageOption[]`, `string` | Language menu |
| `omaVeroLabel`, `omaVeroItems` | `string`, `VeroMainHeaderLink[]` | OmaVero dropdown |
| `navItems` | `VeroNavItem[]` | Sub-nav links; optional `menuItems` for dropdown |
| `topBarEnd` | `ReactNode` | Extra actions (e.g. theme toggle) at end of top bar |

```tsx
import { GDSProvider, VeroMainHeader } from "@gds-vero/react";
import type { VeroNavItem } from "@gds-vero/react";

const navItems: VeroNavItem[] = [
  { id: "home", label: "Etusivu", href: "/", isActive: true },
  {
    id: "services",
    label: "Palvelut",
    menuItems: [
      { id: "a", label: "Palvelu A", href: "/a" },
      { id: "b", label: "Palvelu B", href: "/b" },
    ],
  },
];

<GDSProvider>
  <VeroMainHeader
    navItems={navItems}
    onSearchClick={() => {/* open app search */}}
  />
</GDSProvider>
```

**Do not:** import `VeroMainHeader` from `@chakra-ui/react`; do not use a generic `Box as="header"` when the user wants the **vero.fi** header pattern.

**Page layout — verified GDS-VERO pattern** (from https://tomiputto.github.io/gds-vero/guides/page-layout):

Use **`VeroAppShell`** + **`VeroPageLayout`** for **every vero.fi-style service page**. This fixes max-width, padding, and column behavior so layouts do **not** drift between LLM runs.

**Service page anatomy (required order inside `VeroPageLayout`):**

1. **`Breadcrumb`** — hierarchy trail **above** the page title (see **Breadcrumb — verified pattern** below). **Include by default** on every service/content page — do **not** skip because the user did not spell out parent links; **infer** a plausible 2–4 level trail from the page title and context (Finnish labels, e.g. `Etusivu` → section → current page).
2. **`GDSHeading as="h1"`** — page title (one per view).
3. Optional lead — `GDSText textStyle="body" color="fg.muted"` or `textStyle="caption"`.
4. Main content — cards, tables, forms, etc.

**Omit breadcrumb only when:** user explicitly says no breadcrumb; or the view is a **top-level landing** / login / modal / full-screen flow with no parent in the site hierarchy.

```tsx
import { Breadcrumb } from "@chakra-ui/react";
import { ChevronRightIcon } from "@gds-vero/icons";
import { GDSProvider, GDSHeading, GDSText, VeroAppShell, VeroPageLayout } from "@gds-vero/react";

<GDSProvider>
  <VeroAppShell>
    <VeroPageLayout contentWidth="wide">
      <Breadcrumb.Root aria-label="Breadcrumb" mb="4">
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/">Etusivu</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator>
            <ChevronRightIcon boxSize="4" color="fg.muted" aria-hidden />
          </Breadcrumb.Separator>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/organisaatio">Organisaatio</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator>
            <ChevronRightIcon boxSize="4" color="fg.muted" aria-hidden />
          </Breadcrumb.Separator>
          <Breadcrumb.Item>
            <Breadcrumb.CurrentLink>Team directory</Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
      <GDSHeading as="h1">Team directory</GDSHeading>
      <GDSText textStyle="body" color="fg.muted" mt="2">
        Henkilöstöhakemisto
      </GDSText>
      {/* cards, table, etc. */}
    </VeroPageLayout>
  </VeroAppShell>
</GDSProvider>
```

**`contentWidth` presets** — pick one; **do not** invent `maxW="xl"`, `maxW="4xl"`, `Container`, or random pixel widths:

| Preset | Chakra `maxW` | Width | When |
|--------|---------------|-------|------|
| **`default`** | `6xl` | **1152px** | **Standard service page — use unless you have a reason not to** |
| `narrow` | `2xl` | 672px | Login, forms, centered narrow flows |
| `wide` | `7xl` | 1280px | Directories, wide tables |
| `full` | `full` | 100% + padding | Rare edge-to-edge content |

**Fixed layout tokens** (exported from `@gds-vero/react` — do not duplicate in app CSS):

| Token | Value | Meaning |
|-------|-------|---------|
| `VERO_PAGE_PADDING_X` | `base: 4`, `md: 6`, `lg: 8` | 16px → 24px → 32px horizontal inset |
| `VERO_PAGE_PADDING_Y` | `base: 6`, `md: 8` | 24px → 32px vertical main padding |
| `VERO_SIDEBAR_WIDTH` | `72` | 288px sidebar column |
| `VERO_COLUMN_GAP` | `base: 6`, `lg: 8` | Main ↔ sidebar gap |

**Sidebar (`sidebar` prop):** below **`lg` (992px)** sidebar stacks **under** main; at **`lg+`** main + 288px sidebar side by side.

```tsx
<VeroPageLayout
  sidebar={
    <Card.Root variant="outline">
      <Card.Header><Card.Title>Filters</Card.Title></Card.Header>
      <Card.Body>...</Card.Body>
    </Card.Root>
  }
>
  {/* main column */}
</VeroPageLayout>
```

**Do not:** `Box as="main" maxW="xl"`; `Flex` page shell without `VeroAppShell`; different padding per page; full-width content without `contentWidth="full"`; custom sidebar width; **service page without `Breadcrumb`** above `h1` (unless user opted out).

**Breadcrumb — verified GDS-VERO pattern** (from https://tomiputto.github.io/gds-vero/breadcrumb):

Use Chakra **`Breadcrumb`** compound from **`@chakra-ui/react`**. **`ChevronRightIcon`** from **`@gds-vero/icons`** as separator. Theme sets **18px body** typography on the list automatically.

| Slot | Use |
|------|-----|
| `Breadcrumb.Root` | Wrap trail; `aria-label="Breadcrumb"` |
| `Breadcrumb.List` | Ordered list container |
| `Breadcrumb.Item` | One crumb |
| `Breadcrumb.Link` | Parent segments (links) |
| `Breadcrumb.CurrentLink` | **Current page** — not a link |
| `Breadcrumb.Separator` | Between items — `ChevronRightIcon` with `aria-hidden` |

**Do not:** plain `Link` / `HStack` chains; v2 `Breadcrumb` / `BreadcrumbItem`; skip breadcrumb on service pages because hierarchy was not in the prompt — **infer** parent segments.

Other high-risk compounds (always open docs first — no verified snippet here): **Drawer**, **Menu**, **Table**, **Steps**, **Select**, **Combobox**, **Toast** (`createToaster` + `Toaster`).

### GDS docs (component reference)

**Published docs base URL:** https://tomiputto.github.io/gds-vero/

Append a path from the [component index](#component-index-compact) (e.g. `/dialog`, `/field`, `/toggle`). Pages include examples and accessibility notes.

**When a component has no GDS docs page** (see index footnotes): use [Chakra UI v3 docs](https://chakra-ui.com/docs) or the **Chakra MCP** tool `get_component_example` — still follow **Chakra v3 compound APIs** and import rules from this file.

**In this monorepo:** same content lives in `apps/docs` (`DesignSystemLayout.tsx` nav paths match the URLs above).

### Choose X, not Y

| Need | Use | Do not use |
|------|-----|------------|
| Form on/off setting (preferences, settings) | `Switch.Root` + `Switch.Label` | `Toggle`, lone `Checkbox` for a single boolean preference |
| Toolbar / formatting pressed state (bold, italic, align) | `Toggle.Root asChild` + `Button` or `IconButton` | `Switch`, plain `Button` without `Toggle` semantics |
| Single option in a multi-select list | `Checkbox` | `Switch` |
| Mutually exclusive options (few, all visible) | `RadioGroup` or `SegmentGroup` | `Select`, `Menu` |
| Pick one from a list (no search) | `Select` | `Combobox`, `Menu` |
| Searchable or async dropdown | `Combobox` | `Select`, `Menu` |
| Styled native `<select>` | `NativeSelect.Root` + `NativeSelect.Field` | v2 flat `Select` import (see mapping table) |
| Focused modal task (confirm, form) | `Dialog` | `Drawer`, full-screen `Popover` |
| Side panel (filters, mobile nav, details) | `Drawer` | `Dialog` as a side sheet hack |
| Anchored panel with actions / form | `Popover` | `Dialog` for lightweight context |
| Hierarchy trail (parent → current page) | `Breadcrumb` | plain `Link` chains, skipping breadcrumb on service pages |
| Short hint on hover/focus | `Tooltip` | `Popover` for one line of text |
| Persistent page/section message | `Alert` | `Toast` |
| Transient feedback after an action | `Toast` (`createToaster` + `Toaster`) | disappearing inline `Alert` |
| Compact status in table/list (dot + label) | `Status` | `Badge` alone without status semantics |
| Body copy and hierarchy | `GDSText`, `GDSHeading` | Chakra `Text` / `Heading` for main page content |
| Primary / secondary actions | **`GDSButton`** (preferred) or `Button colorPalette="brand"` in **`GDSProvider`** | raw `<button>`, `Box onClick`, `borderRadius="md"` |
| Navigation between routes | Chakra `Link` or router `Link` + GDS tokens | `Button` pretending to be a link |
| Section divider | `Separator` | `Divider` (Chakra v2 — not exported) |
| One expandable block | `Collapsible` | custom show/hide without ARIA |
| FAQ / multiple expandable sections | `Accordion` | stacked `Collapsible` without group semantics |
| Multi-step flow (wizard, checkout) | `Steps` | manual numbered boxes |
| Tabular data with column headers | `Table` | CSS `Grid` mimicking a table |
| Label–value pairs (profile, summary) | `DataList` | unstyled `Stack` of `Text` |
| File picker with drag-and-drop UI | `FileUpload` | bare `<input type="file">` without `Field` |
| vero.fi site header | `VeroMainHeader` (`@gds-vero/react`) | one-off header unless user asks |
| Page numbers / prev–next | `Pagination` + **`ButtonGroup size="md"`** | `ButtonGroup size="sm"` (12px triggers) |
| Loading placeholder for layout | `Skeleton` | empty `Box` |
| Loading in button or small area | `Spinner` | text-only “Loading…” |
| No results / empty list | `EmptyState` | lone muted `Text` |
| OTP / verification code | `PinInput` | several separate `Input`s |
| Password with show/hide | `PasswordInput` | plain `Input type="password"` without accessible toggle |
| Star rating input | `RatingGroup` | manual icon `Button`s |
| Date picking (calendar UI) | `DatePicker` (Chakra ≥ 3.34) | plain `Input type="date"` unless native is intentional |
| Charts / graphs | `@chakra-ui/charts` (separate npm package) | invent chart markup with `Box` |

### Task → component (extended)

| Task | Component | Import from | GDS docs |
|------|-----------|-------------|----------|
| App root + theme | `GDSProvider` | `@gds-vero/react` | `/guides/start-using-gds` |
| Body text | `GDSText` (`textStyle="body"` / `"caption"`) | `@gds-vero/react` | `/styles/text` |
| Headings | `GDSHeading` (`size="xl"`, `as="h2"`, …) | `@gds-vero/react` | `/styles/text` |
| Primary button | `GDSButton` or `Button colorPalette="brand"` | `@gds-vero/react` / `@chakra-ui/react` | `/button` |
| Icon-only action | `IconButton` + `aria-label` | `@chakra-ui/react` | `/icon-button` |
| Toolbar toggle | `Toggle.Root asChild` + `Button` / `IconButton` | `@chakra-ui/react` | `/toggle` |
| Form field (label, help, error) | `Field.Root` + `Field.Label` + control + `Field.ErrorText` | `@chakra-ui/react` | `/field` |
| Group of related fields | `Fieldset.Root` + `Fieldset.Legend` | `@chakra-ui/react` | `/fieldset` |
| Text input | `Input` inside `Field` | `@chakra-ui/react` | `/input` |
| Multiline text | `Textarea` inside `Field` | `@chakra-ui/react` | `/textarea` |
| Input with prefix/suffix icon | `InputGroup` | `@chakra-ui/react` | `/input-group` |
| Number with steppers | `NumberInput` | `@chakra-ui/react` | `/number-input` |
| Dropdown (no search) | `Select` | `@chakra-ui/react` | `/select` |
| Searchable dropdown | `Combobox` | `@chakra-ui/react` | `/combobox` |
| Listbox (custom list picker) | `Listbox` | `@chakra-ui/react` | `/listbox` |
| Tree hierarchy | `TreeView` | `@chakra-ui/react` | `/tree-view` |
| Tags / chips entry | `TagsInput` | `@chakra-ui/react` | `/tags-input` |
| On/off setting | `Switch` | `@chakra-ui/react` | `/switch` |
| Checkbox | `Checkbox` / `CheckboxCard` | `@chakra-ui/react` | `/checkbox`, `/checkbox-card` |
| Radio set | `RadioGroup` / `RadioCard` | `@chakra-ui/react` | `/radio`, `/radio-card` |
| Segmented control | `SegmentGroup` | `@chakra-ui/react` | `/segment-group` |
| Range value | `Slider` | `@chakra-ui/react` | `/slider` |
| File upload | `FileUpload` | `@chakra-ui/react` | `/file-upload` |
| Card layout | `Card.Root variant="outline"` + sections | `@chakra-ui/react` | `/card` |
| Modal dialog | `Dialog` (+ `Portal`, `Backdrop`, …) | `@chakra-ui/react` | `/dialog` |
| Side drawer | `Drawer` | `@chakra-ui/react` | `/drawer` |
| Dropdown commands | `Menu` | `@chakra-ui/react` | `/menu` |
| Anchored popover | `Popover` | `@chakra-ui/react` | `/popover` |
| Hover preview | `HoverCard` | `@chakra-ui/react` | `/hover-card` |
| Tooltip | `Tooltip` | `@chakra-ui/react` | `/tooltip` |
| Toast | `Toaster` + `createToaster` | `@chakra-ui/react` | `/toast` |
| Bottom / selection action bar | `ActionBar` | `@chakra-ui/react` | `/action-bar` |
| Inline alert banner | `Alert` | `@chakra-ui/react` | `/alert` |
| Empty state | `EmptyState` | `@chakra-ui/react` | `/empty-state` |
| Progress bar / circle | `Progress` / `ProgressCircle` | `@chakra-ui/react` | `/progress`, `/progress-circle` |
| Data table | `Table` (+ `Table.ScrollArea` if needed) | `@chakra-ui/react` | `/table` |
| Key–value list | `DataList` | `@chakra-ui/react` | `/data-list` |
| Stat / KPI block | `Stat` | `@chakra-ui/react` | `/stat` |
| Tabs | `Tabs` | `@chakra-ui/react` | `/tabs` |
| Accordion | `Accordion` | `@chakra-ui/react` | `/accordion` |
| Breadcrumb | `Breadcrumb` | `@chakra-ui/react` | `/breadcrumb` |
| Pagination | `Pagination` + `ButtonGroup size="md"` | `@chakra-ui/react` | `/pagination` |
| Step indicator | `Steps` | `@chakra-ui/react` | `/steps` |
| Timeline | `Timeline` | `@chakra-ui/react` | `/timeline` |
| Avatar | `Avatar` | `@chakra-ui/react` | `/avatar` |
| Badge / tag label | `Badge` | `@chakra-ui/react` | `/badge` |
| Copy to clipboard control | `Clipboard` | `@chakra-ui/react` | `/clipboard` |
| Horizontal rule | `Separator` | `@chakra-ui/react` | `/separator` |
| Page layout regions | `VeroAppShell`, `VeroPageLayout` | `@gds-vero/react` | `/guides/page-layout` |
| Low-level layout primitives | `Box`, `Flex`, `Grid`, `Stack` | `@chakra-ui/react` | `/box`, `/flex`, `/grid`, `/layout` |
| Scrollable region | `ScrollArea` | `@chakra-ui/react` | `/scroll-area` |
| Split panes | `Splitter` | `@chakra-ui/react` | `/splitter` |
| Carousel | `Carousel` | `@chakra-ui/react` | `/carousel` |
| Icons in UI | `@gds-vero/icons` (+ optional Chakra `Icon`) | `@gds-vero/icons` | `/styles/icons` |
| Semantic colors / spacing | token props (`fg`, `bg.subtle`, `p="4"`) | theme via `GDSProvider` | `/styles/colors`, `/styles/spacing` |
| vero.fi main header | `VeroMainHeader` | `@gds-vero/react` | `/examples/vero-main-header` |

Docs paths are relative to https://tomiputto.github.io/gds-vero/ .

### Component index (compact)

One-line map: **name → purpose → docs path**. Import Chakra compounds from `@chakra-ui/react` unless noted.

#### GDS wrappers (`@gds-vero/react`)

| Component | Use for | Docs |
|-----------|---------|------|
| `GDSProvider` | App root, theme | `/guides/start-using-gds` |
| `GDSText` | Body/caption copy (`textStyle="body"`) | `/styles/text` |
| `GDSHeading` | Headings (`as="h1"`…`h6"`) | `/styles/text` |
| `GDSButton` | Branded buttons | `/button` |
| `VeroAppShell` | Full page shell (header + `bg.subtle`) | `/guides/page-layout` |
| `VeroPageLayout` | Centered content column + optional sidebar | `/guides/page-layout` |
| `VeroMainHeader` | vero.fi site header (usually via `VeroAppShell`) | `/examples/vero-main-header` |

#### Layout

| Component | Use for | Docs |
|-----------|---------|------|
| `Box` | Generic container / landmarks | `/box` |
| `Flex` / `Stack` / `HStack` / `VStack` | Flex layouts | `/flex` |
| `Grid` | CSS grid layouts | `/grid` |
| `Layout`-style patterns | Page shell, regions | `/layout` |
| `ScrollArea` | Custom scroll container | `/scroll-area` |
| `Separator` | Horizontal/vertical divider | `/separator` |
| `Splitter` | Resizable split panes | `/splitter` |

#### Buttons

| Component | Use for | Docs |
|-----------|---------|------|
| `Button` | Actions, submits | `/button` |
| `IconButton` | Icon-only actions (`aria-label` required) | `/icon-button` |
| `Toggle` | Pressed/on state in toolbars | `/toggle` |

#### Forms

| Component | Use for | Docs |
|-----------|---------|------|
| `Field` | Label, helper, error wrapper | `/field` |
| `Fieldset` | Group of fields with legend | `/fieldset` |
| `Input` | Single-line text | `/input` |
| `InputGroup` | Input + icon/button addon | `/input-group` |
| `Textarea` | Multiline text | `/textarea` |
| `NumberInput` | Numeric input with controls | `/number-input` |
| `PasswordInput` | Password + show/hide | `/password-input` |
| `PinInput` | OTP / PIN codes | `/pin-input` |
| `Select` | Dropdown selection | `/select` |
| `Combobox` | Searchable/async select | `/combobox` |
| `Switch` | Boolean setting | `/switch` |
| `Checkbox` | Boolean in a list | `/checkbox` |
| `CheckboxCard` | Large selectable card | `/checkbox-card` |
| `RadioGroup` | Single choice from few options | `/radio` |
| `RadioCard` | Choice as cards | `/radio-card` |
| `SegmentGroup` | Segmented single choice | `/segment-group` |
| `Slider` | Range on a track | `/slider` |
| `RatingGroup` | Star rating | `/rating` |
| `TagsInput` | Multiple tags/chips | `/tags-input` |
| `FileUpload` | File picker UI | `/file-upload` |
| `NativeSelect` | Styled native `<select>` | Chakra docs† |
| `DatePicker` | Calendar date input | Chakra docs† |

#### Collections

| Component | Use for | Docs |
|-----------|---------|------|
| `Listbox` | Custom list selection | `/listbox` |
| `TreeView` | Hierarchical list/tree | `/tree-view` |

#### Overlays

| Component | Use for | Docs |
|-----------|---------|------|
| `Dialog` | Modal tasks | `/dialog` |
| `Drawer` | Side panel | `/drawer` |
| `Menu` | Dropdown menu / commands | `/menu` |
| `Popover` | Anchored floating panel | `/popover` |
| `HoverCard` | Rich hover preview | `/hover-card` |
| `Tooltip` | Short hint | `/tooltip` |
| `Toast` | Transient notifications | `/toast` |
| `ActionBar` | Contextual bottom/side bar | `/action-bar` |

#### Disclosure & navigation

| Component | Use for | Docs |
|-----------|---------|------|
| `Accordion` | Expand/collapse sections | `/accordion` |
| `Collapsible` | Single expand/collapse | `/collapsible` |
| `Tabs` | Tabbed views | `/tabs` |
| `Breadcrumb` | Hierarchy trail | `/breadcrumb` |
| `Pagination` | Page navigation | `/pagination` |
| `Steps` | Multi-step progress | `/steps` |
| `Carousel` | Slide carousel | `/carousel` |

#### Feedback

| Component | Use for | Docs |
|-----------|---------|------|
| `Alert` | Inline status banner | `/alert` |
| `EmptyState` | No data / empty search | `/empty-state` |
| `Progress` | Linear progress | `/progress` |
| `ProgressCircle` | Circular progress | `/progress-circle` |
| `Skeleton` | Loading placeholder | `/skeleton` |
| `Spinner` | Loading indicator | `/spinner` |
| `Status` | Dot + status label | `/status` |

#### Data display

| Component | Use for | Docs |
|-----------|---------|------|
| `Table` | Tabular data | `/table` |
| `DataList` | Key–value rows | `/data-list` |
| `Stat` | Metric / KPI | `/stat` |
| `Timeline` | Event timeline | `/timeline` |
| `Card` | Grouped content panel | `/card` |
| `Avatar` | User/image avatar | `/avatar` |
| `Badge` | Label, count, status chip | `/badge` |
| `Image` | Responsive image | `/image` |
| `Icon` | Wrapper for icon SVGs | `/icon` |
| `Clipboard` | Copy button/input | `/clipboard` |
| `QrCode` | QR display | `/qr-code` |
| `Marquee` | Scrolling text strip | `/marquee` |

#### Chakra components without a GDS docs page yet

Use **Chakra docs / MCP**; theme may still style them via `@gds-vero/theme`:

| Component | Use for |
|-----------|---------|
| `Tag` | Removable/filter tags |
| `ColorPicker` | Color selection UI |
| `Blockquote` | Quoted text |
| `Kbd` | Keyboard shortcut display |
| `List` | Semantic ul/ol |
| `FloatingPanel` | Detachable floating panel |
| `Code` / `CodeBlock` | Inline/block code |
| `@chakra-ui/charts` | Charts (separate package) |

† **`NativeSelect`**, **`DatePicker`**: no dedicated GDS docs page; require Chakra v3 compound API. **DatePicker** needs `@chakra-ui/react` ≥ 3.34.

---

## Accessibility (WCAG 2.1 Level AA)

GDS targets **WCAG 2.1 Level AA**. Chakra v3 components provide keyboard support, focus management, and ARIA for many patterns — **you must still wire labels, names, landmarks, and status messages correctly** in the UI you generate.

**Full human docs:** https://github.com/tomiputto/gds-vero#readmeaccessibility — component pages also include per-component accessibility notes.

### Global rules (always apply)

| Area | Rule | WCAG |
|------|------|------|
| **Contrast** | Normal text ≥ 4.5:1; large text (18px+ or 14px+ bold) ≥ 3:1. Prefer semantic tokens (`color="fg"`, `bg="bg.default"`) — avoid ad-hoc hex pairs. | 1.4.3 |
| **Non-text contrast** | Buttons, inputs, icons, focus rings ≥ 3:1 against adjacent colors. | 1.4.11 |
| **Keyboard** | All actions via Tab / Shift+Tab / Enter / Space. Do not remove focusability without an accessible alternative. | 2.1.1 |
| **Focus visible** | Never remove focus outlines (`outline: none` without replacement). Chakra focus rings must stay visible. | 2.4.7 |
| **Focus order** | Tab order follows visual/logical reading order. Avoid positive `tabIndex` except custom widgets. | 2.4.3 |
| **Page language** | Set `lang` on `<html>` (e.g. `lang="en"` or `lang="fi"`). | 3.1.1 |
| **Headings** | Use `GDSHeading` with correct `as` (`h1`–`h6`) — one `h1` per view; don’t skip levels. | 1.3.1 |
| **Landmarks** | Use `as="header"`, `as="nav"`, `as="main"`, `as="footer"` on layout regions. | 1.3.1 |
| **Links** | Descriptive link text — not “click here” / “read more” without context. External links: indicate if needed. | 2.4.4 |

### Icons and images

- **Icon-only controls:** always `aria-label` on `IconButton` (e.g. `aria-label="Close"`, `aria-label="Search"`).
- **Icon + text button:** visible text is enough; hide decorative icon with `aria-hidden` on the icon if redundant.
- **Decorative icons/images:** `aria-hidden="true"` or `alt=""` on images.
- **Informative images:** meaningful `alt` text; Avatar fallback should reflect the person’s name/initials.

```tsx
<IconButton aria-label="Close dialog" variant="ghost">
  <XIcon aria-hidden="true" />
</IconButton>
```

### Forms

- Always **`Field.Label`** — placeholder alone is not a label.
- **`Field.HelperText`** for hints; **`Field.ErrorText`** for errors.
- Set **`invalid`** on `Field.Root` when validation fails so assistive tech announces errors.
- Mark required fields (`required` on input or “(required)” in label).
- Password show/hide toggle needs its own accessible name.

```tsx
<Field.Root invalid={!!error}>
  <Field.Label>Email</Field.Label>
  <Input type="email" required />
  <Field.ErrorText>{error}</Field.ErrorText>
</Field.Root>
```

### Dialogs and overlays

- Use Chakra **`Dialog`** compound API (not Modal v2).
- **`Dialog.Title`** must describe the dialog purpose.
- Close control: **`IconButton` with `aria-label`** (e.g. `"Close dialog"`).
- Focus is trapped inside open dialogs (Chakra default) — don’t break with custom portals without testing.

### Alerts, toasts, and dynamic status

- Errors that appear after submit: use **`Alert.Root`** with `role="alert"` or `status="error"`.
- Non-critical updates: `aria-live="polite"` (Chakra Alert/Toaster patterns).
- Loading buttons: consider `aria-busy="true"` and don’t rely on color alone.

```tsx
<Alert.Root status="error" role="alert">
  <Alert.Indicator />
  <Alert.Content>
    <Alert.Title>Error</Alert.Title>
    <Alert.Description>Fix the fields below.</Alert.Description>
  </Alert.Content>
</Alert.Root>
```

### Navigation and structure

- App header: `Box as="header"`; primary nav: `HStack as="nav"` or `<nav>`.
- Breadcrumbs: `nav` with `aria-label="Breadcrumb"`.
- Pagination: `aria-label` on prev/next (`"Previous page"`, `"Next page"`).

### Data tables

- Use **`Table.Caption`** when the table needs a short description.
- Column headers in `Table.ColumnHeader` — not styled `Table.Cell` for headers.
- For sortable/filterable tables, expose sort state to assistive tech (Chakra patterns or `aria-sort`).

### Tabs, menus, accordion

- **Tabs:** Chakra `Tabs` exposes tablist/tab/tabpanel roles — keep `Tabs.Trigger` text meaningful; keyboard: arrows + Enter/Space.
- **Menu:** `Menu.Trigger` must have visible text or `aria-label`.
- **Accordion:** `Accordion.Trigger` text describes the panel; expanded state is announced by Chakra.

### Switches, checkboxes, radio groups

- Every control has a **visible label** (wrapping label or `aria-labelledby`).
- **Switch:** form on/off settings — `Switch.Root` with `Switch.Label`. A11y: `role="switch"` + `aria-checked` (Chakra default).
- **Toggle:** toolbar / formatting two-state **button** (`pressed` / `onPressedChange`) — `Toggle.Root asChild` + `Button` or `IconButton` with `variant={{ base: "ghost", _pressed: "outline" }}` and `size="md"`. Icon toggles need `aria-label`. Do **not** use Toggle for form settings; use Switch instead.
- **RadioGroup:** use `RadioGroup.Label` for the group name.

### What not to do

- Don’t use `div`/`Box` with `onClick` instead of `Button`/`Link`.
- Don’t use color alone for errors/success (add text + `Alert` / `Field.ErrorText`).
- Don’t remove focus styles globally.
- Don’t leave `IconButton` without `aria-label`.
- Don’t use `h1`–`h6` via raw `Text` for page structure — use `GDSHeading as="h1"` etc.

---

## GDS-VERO compliance review (mandatory for agents)

**After creating or materially changing any React UI**, complete this review **in addition to** the accessibility review below. Fix violations in code when practical; otherwise report them with concrete fix suggestions.

### 1. Self-review checklist

Verify every item against the files you created or changed:

- [ ] **Stack:** UI uses only Chakra UI v3 + `@gds-vero/*` — no MUI, Ant Design, Tailwind UI kits, `react-icons`, or other component libraries
- [ ] **Imports:** `GDSProvider`, `GDSButton`, `GDSText`, `GDSHeading`, `VeroMainHeader` from `@gds-vero/react`; Chakra compounds (`Field`, `Card`, `Dialog`, `Table`, `Box`, …) from `@chakra-ui/react`; icons from `@gds-vero/icons`
- [ ] **Chakra v3 APIs:** no v2 names (`FormControl`, `Modal`, `Divider`, flat `Card`, `Table`/`Thead`/`Tbody`, etc.) — see mapping table below
- [ ] **Theme:** app wrapped in `GDSProvider` or `ChakraProvider` with `gdsTheme` from `@gds-vero/theme`
- [ ] **Semantic tokens:** colors/backgrounds use `fg`, `fg.muted`, `bg.default`, `bg.subtle`, `border.emphasized`, `colorPalette="brand"` — no ad-hoc hex
- [ ] **Vero surfaces:** page/canvas `bg.subtle`; cards `Card.Root variant="outline"` (white + green border) — not `bg.muted` on cards
- [ ] **Typography:** page `h1` on `GDSHeading as="h1"` (42px / `size="4xl"` — omit `size` to auto-default); sections `as="h2"`/`h3`; body on `GDSText textStyle="body"` or `"caption"` (not `textStyle="sm"` / `"md"`); do not use `size="2xl"` or `size="xl"` on `h1`
- [ ] **Theme typography:** `@gds-vero/theme` **≥ 0.1.17** (Chakra compounds get 18px body from theme — no manual `fontSize` on `Dialog.Body`, `Menu.Item`, etc. unless overriding); Pagination uses `ButtonGroup size="md"`
- [ ] **Buttons:** primary CTAs use **`GDSButton colorPalette="brand"`** (or Chakra `Button colorPalette="brand"` inside **`GDSProvider`**); **pill shape** from theme — **no** `borderRadius` override; **no** raw `<button>`
- [ ] **Component choice:** overlays, forms, and feedback use the right compound (`Dialog` vs `Drawer`, `Switch` vs `Toggle`, `Select` vs `Combobox`, `Alert` vs `Toast`) — see **Component selection guide** in this file
- [ ] **Component API verified:** every compound used (`Accordion`, `Dialog`, `Tabs`, `Menu`, `Field`, …) matches **GDS docs “Basic” example** or Chakra MCP — slot names were **not** guessed from training data (see **Mandatory: verify component API before coding**)
- [ ] **Field labels:** visible labels use **`Field.Label`** inside **`Field.Root`** — not `GDSText`/`Text`/`GDSHeading`; no `fontSize`/`textStyle`/`fontWeight` on `Field.Label` (theme → 18px semibold)
- [ ] **Card titles:** use **`Card.Title`** / **`Card.Description`** — not `GDSText`/`Text`/`GDSHeading` as title; no `fontSize`/`textStyle` on `Card.Title` (theme → 20px)
- [ ] **Card footer CTA:** **`GDSButton`** inline width in **`Card.Footer`** — **`width="full"`** only on login/form submit cards, not directory/profile cards
- [ ] **Vero.fi header:** use **`VeroMainHeader`** from `@gds-vero/react` — not a custom `Box`/`Flex` header (see verified pattern in **Component selection guide**)
- [ ] **Page layout:** vero.fi service pages use **`VeroAppShell`** + **`VeroPageLayout`** with `contentWidth="default"` (1152px) unless narrow form or wide table — **no ad-hoc `maxW`**
- [ ] **Breadcrumb:** service/content pages have **`Breadcrumb`** above **`h1`** (inferred hierarchy OK) — omit only when user says so or view is landing/login/modal
- [ ] **Responsive layout:** uses Chakra responsive props (`base` / `md` / `lg`), `Stack` / `SimpleGrid` / `Flex` with `direction` / `wrap` — not fixed pixel widths that break on small viewports; wide tables use `Table.ScrollArea`; touch targets remain usable on mobile

### 2. Automated checks

Search touched files for common violations (fix or report):

- Imports from forbidden packages (`@mui/`, `antd`, `react-icons`, Chakra v2 component names)
- Compound slot names that do not match GDS docs (e.g. `Accordion.Trigger` instead of `Accordion.ItemTrigger`; `Modal.*` instead of `Dialog.*`; card title as `GDSText`/`Text` instead of `Card.Title`; field label as `GDSText`/`Text` instead of `Field.Label`)
- Hardcoded hex colors (`#`, `rgb(`, `hsl(`) on UI elements
- `textStyle="sm"` or `textStyle="md"` on `GDSText`
- Manual `fontSize="sm"` / `textStyle="sm"` on Chakra compounds that are already themed (`Dialog`, `Menu`, `Field`, `Table`, …) without a documented reason
- `Card.Root` with `bg="bg.muted"` or without `variant="outline"` when representing a content card
- `GDSButton` / `Button` with `width="full"` or `w="full"` in directory/profile/content card footers (login form cards only)

Run lint when available:

```bash
npm run lint
# or: pnpm lint
```

### 3. Delivery audit report (required — every UI task)

**End every UI delivery** with the **full audit report below**. Use the **headings exactly**. Fill **every subsection** — do not omit categories, do not collapse into one line, do not skip because the user only asked for a layout or component.

**Compliance status rules:**

| Status | When to use |
|--------|-------------|
| **PASS** | All categories below are compliant; no unfixed violations |
| **WARNING** | Minor issues, intentional deviations (documented), or checks that could not be run (explain why) — deliverable is usable |
| **FAIL** | Blocking GDS, a11y, or lint violations remain unfixed |

Overall **Compliance Status** = worst status among categories (any **FAIL** → overall **FAIL**; else any **WARNING** → overall **WARNING**; else **PASS**).

Copy this template and fill it in:

---

**Preview URL**

- Local dev URL, Canvas/preview link, or docs example route — e.g. `http://localhost:5173/...` or `https://tomiputto.github.io/gds-vero/...`
- If no preview exists: `Not available — dev server not started` (still include this line)

**Implementation summary**

- Bullet list of files created/changed and what each does (2–5 bullets).

**GDS-VERO Compliance Review**

Report **PASS**, **WARNING**, or **FAIL** for **each** category. One line minimum per category; add **Violation** / **Fix** pairs when not PASS.

**Design System** — stack and imports only `@gds-vero/*` + Chakra v3; `GDSProvider` / wrappers from `@gds-vero/react`; Chakra compounds from `@chakra-ui/react`; icons from `@gds-vero/icons`; no MUI / Ant Design / Tailwind UI kits / `react-icons`.

**Buttons** — **`GDSButton`** or Chakra **`Button`** only inside **`GDSProvider`**; primary `colorPalette="brand"`; **pill shape** (`borderRadius: full`) — no override; no raw `<button>`.

**Chakra v3 API** — compound slot names match GDS docs “Basic” example (not v2: `Modal`, `FormControl`, flat `Card`, `Table`/`Thead`, …); component choice correct (`Dialog` vs `Drawer`, `Field` vs raw inputs, etc.); APIs verified against docs — not guessed from training data.

**Surface tokens** — semantic tokens (`fg`, `bg.default`, `bg.subtle`, `border.emphasized`, `colorPalette="brand"`); page shell `bg.subtle` via `VeroAppShell`; content cards `Card.Root variant="outline"` — not `bg.muted` on cards; no ad-hoc hex on UI.

**Page layout** — `VeroAppShell` + `VeroPageLayout`; `contentWidth` preset; **`Breadcrumb` above `h1`** on service pages; sidebar via `sidebar` prop only; no random `maxW` / padding.

**Typography** — page `h1` uses `GDSHeading as="h1"` (42px, not `size="xl"`/`"2xl"`); **form labels on `Field.Label`** (not `GDSText`); card titles on `Card.Title`; body on `GDSText textStyle="body"`; no unnecessary manual `fontSize` on themed Chakra slots.

**Accessibility** — labels, errors, `aria-label` on icon buttons, heading hierarchy, landmarks, dialog titles, keyboard/focus, contrast via tokens — per **Accessibility review** checklist below.

**Responsive layout** — layout adapts across breakpoints; no horizontal overflow on narrow viewports unless intentionally scroll-wrapped (`Table.ScrollArea`, etc.).

**Deviations**

- `None` — or list each intentional deviation with brief justification.

**Compliance Status:** **PASS** | **WARNING** | **FAIL** — one-line summary (e.g. `PASS — all categories compliant; lint clean`).

**Recommended follow-ups**

- Bullet list of optional next steps (tests, edge cases, missing routes, i18n, etc.) — use `None` if nothing to suggest.

**Lint:** `clean` | `not run (<reason>)` | `fixed: …`

---

Do **not** skip this audit report for any UI deliverable. Custom GPT and external agents must include it in every response that ships or changes React UI.

---

## Accessibility review (mandatory for agents)

**After creating or materially changing any React UI** (pages, forms, dialogs, nav, cards, tables), you **must** complete this review before considering the task done.

### 1. Self-review checklist

Verify every item; fix violations in code:

- [ ] All form fields have visible `Field.Label` (or equivalent accessible name)
- [ ] Validation errors use `Field.ErrorText` + `invalid` on `Field.Root`
- [ ] All `IconButton`s have `aria-label`
- [ ] Decorative icons use `aria-hidden="true"`
- [ ] Heading hierarchy is logical (`GDSHeading` with correct `as`)
- [ ] Layout uses landmarks (`header`, `nav`, `main`, `footer`) where appropriate
- [ ] Dialogs have `Dialog.Title` and labeled close control
- [ ] Dynamic errors/success use `Alert` or live region — not color alone
- [ ] Interactive elements are keyboard reachable; focus ring not removed
- [ ] Text uses semantic tokens (`fg`, `bg.default`) — no low-contrast custom hex
- [ ] Link text is descriptive
- [ ] Images that convey meaning have `alt` text

### 2. Run lint (automated JSX a11y)

If the project has ESLint with `eslint-plugin-jsx-a11y`, run lint on touched files and **fix all a11y errors**:

```bash
# Monorepo docs app
pnpm --filter docs lint

# Scaffolded GDS app (after create-app template with lint)
npm run lint
# or: pnpm lint
```

### 3. Report to the user

Include **Accessibility** results inside the **Delivery audit report** (category **Accessibility** under **GDS-VERO Compliance Review**) — see previous section. Do not report accessibility in a separate ad-hoc format.

If lint was run, also reflect outcome under **Lint** in that same audit report.

---

## Tables (Table API)

Use the **Table** compound component from `@chakra-ui/react`:

```tsx
import { Table } from "@chakra-ui/react";

<Table.Root size="sm">
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeader>Product</Table.ColumnHeader>
      <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Item</Table.Cell>
      <Table.Cell textAlign="end">$25.00</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>
```

Do not import `Table`, `Thead`, `Tbody`, `Tr`, `Th`, `Td`, or `TableContainer` — they do not exist in Chakra v3. Use `Table.ScrollArea` for overflow.

---

## Chakra v3 API — do not use these names

Chakra UI v3 removed or renamed many v2 components. Importing the old names from `@chakra-ui/react` causes **"doesn't provide an export named X"** runtime errors. Use the v3 APIs below.

| Old (v2) — do not import | New (v3) — use instead |
|--------------------------|-------------------------|
| **Forms** | |
| `FormControl`, `FormLabel`, `FormHelperText`, `FormErrorMessage` | `Field.Root`, `Field.Label`, `Field.HelperText`, `Field.ErrorText` |
| **Tables** | |
| `Table`, `Thead`, `Tbody`, `Tr`, `Th`, `Td`, `TableContainer` | `Table.Root`, `Table.Header`, `Table.Body`, `Table.Row`, `Table.ColumnHeader`, `Table.Cell`, `Table.ScrollArea` |
| **Overlays** | |
| `Modal`, `ModalOverlay`, `ModalContent`, `ModalHeader`, `ModalBody`, `ModalFooter`, `ModalCloseButton` | `Dialog.Root`, `Dialog.Backdrop`, `Dialog.Positioner`, `Dialog.Content`, `Dialog.Header`, `Dialog.Title`, `Dialog.Body`, `Dialog.Footer`, `Dialog.CloseTrigger` |
| **Cards** | |
| `Card`, `CardHeader`, `CardBody`, `CardFooter` | `Card.Root`, `Card.Header`, `Card.Body`, `Card.Footer` (and `Card.Title`, `Card.Description`) |
| **Layout / display** | |
| `Divider` | `Separator` |
| `Collapse` | `Collapsible.Root`, `Collapsible.Content` (prop `open` not `in`) |
| **Tabs** | |
| `Tab`, `TabList`, `TabPanel`, `TabPanels` | `Tabs.Trigger`, `Tabs.List`, `Tabs.Content` (use `value` on triggers and content; no TabPanels wrapper) |
| **Accordion** | |
| `AccordionButton`, `AccordionIcon` | `Accordion.Trigger`, `Accordion.ItemIndicator`; props `allowMultiple` → `multiple`, `allowToggle` → `collapsible`, `index` → `value` |
| **Other components** | |
| `Select` | `NativeSelect.Root`, `NativeSelect.Field`, `NativeSelect.Indicator` |
| `Alert`, `AlertIcon`, `AlertTitle`, `AlertDescription` | `Alert.Root`, `Alert.Indicator`, `Alert.Content`, `Alert.Title`, `Alert.Description` |
| `Avatar` (flat props) | `Avatar.Root`, `Avatar.Image`, `Avatar.Fallback` |
| `RangeSlider`, `RangeSliderTrack`, `RangeSliderThumb`, etc. | `Slider.Root`, `Slider.Control`, `Slider.Track`, `Slider.Range`, `Slider.Thumbs` (array value) |
| `CircularProgress` | `ProgressCircle.Root`, `ProgressCircle.Circle`, `ProgressCircle.Track`, `ProgressCircle.Range` |
| **Props** | |
| `colorScheme` (on many components) | `colorPalette` |
| `isOpen` / `onClose` (Modal) | `open` / `onOpenChange` (Dialog) |
| `isInvalid` (form) | `invalid` (Field.Root) |
| `isNumeric` (table cell) | `textAlign="end"` |

When in doubt, check the [Chakra UI v3 docs](https://chakra-ui.com/docs) or the GDS docs site component pages.

---

## For MCP servers that deliver GDS to LLMs

If your MCP server provides GDS (e.g. from GitHub) as context to ChatGPT or other agents:

1. **Include the "CRITICAL: Chakra v3 only" block and the "Chakra v3 API — do not use these names" table early** in the context you send (e.g. first or right after the user request). Models tend to follow the most salient instructions; v2 examples in training data often win if the v3 rules appear only later.
2. **Prefer sending this file (`GDS_FOR_LLM_AGENTS.md`) or its Chakra v3 sections** when the user asks to build UI with GDS, so the agent has the exact "do not use X, use Y" mapping.
3. **Optionally prepend a system-style line** when returning GDS context, e.g.: "When generating React/JSX for GDS: use only Chakra UI v3 APIs (Field.*, Card.Root/Card.Header/Card.Body/Card.Footer, Separator, Table.*). Do not use FormControl, FormLabel, FormErrorMessage, Divider, Card, CardHeader, CardBody, CardFooter, or other Chakra v2 names."

That way the agent is nudged to output v3-compatible code even when it would otherwise default to v2 patterns (e.g. for login cards, forms, and tables).

---

## Links

- **Custom GPT Instructions:** `GDS_CUSTOM_GPT_INSTRUCTIONS.md` (repo root) — copy-paste block for ChatGPT Instructions + knowledge setup  
- **npm release notes (for agents):** `GDS_NPM_RELEASE_NOTES.md` (repo root; bundled in `@gds-vero/react`) — version-specific changes for Custom GPT / external assistants  
- **GDS docs (components, examples, a11y):** https://tomiputto.github.io/gds-vero/ — see **Component selection guide** in this file for path index  
- **Repository:** https://github.com/tomiputto/gds-vero  
- **npm:** [@gds-vero/react](https://www.npmjs.com/package/@gds-vero/react) · [@gds-vero/theme](https://www.npmjs.com/package/@gds-vero/theme) · [@gds-vero/tokens](https://www.npmjs.com/package/@gds-vero/tokens) · [@gds-vero/icons](https://www.npmjs.com/package/@gds-vero/icons)  
- **Icons (full list, 1500+):** https://github.com/tomiputto/gds-vero#readmestyles/icons
