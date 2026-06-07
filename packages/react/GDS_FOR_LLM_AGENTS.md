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
  - `@gdesignsystem/react` – React provider and wrappers. Exports `GDSProvider`, `GDSButton`, etc.
  - `@gdesignsystem/theme` – Chakra theme (semantic tokens: `fg`, `bg.default`, `brand`, etc.).
  - `@gdesignsystem/icons` – Icon set (e.g. `CheckIcon`, `StarIcon`, `XIcon`). Use with Chakra `Icon` or as components.
  - `@gdesignsystem/tokens` – Optional. Only add if the app needs raw token files or token values directly; most apps do not need it.
- **Stack:** React 18+, Chakra UI 3.x, Emotion. Use **only** Chakra UI components + GDS packages for UI. Do **not** use MUI, Tailwind component libraries, or other design systems when the user asks for GDS.

---

## When to use GDS

Use this stack when the user says they want to build something **with GDS**, **using GDS**, **GDS design system**, **gdesignsystem**, or similar. Then use **only** the packages and rules below for the UI layer.

---

## Install

```bash
pnpm add @gdesignsystem/react @gdesignsystem/theme @gdesignsystem/icons @chakra-ui/react @emotion/react react react-dom
```

(Use `npm` or `yarn` if the user’s project uses those; the package names stay the same.)

### After install: make agents follow this file (npm / pnpm / yarn)

The same guide is **published inside** `@gdesignsystem/react`. After install you have:

`node_modules/@gdesignsystem/react/GDS_FOR_LLM_AGENTS.md`

Agents do **not** read it automatically. Add a **project rule** (Cursor, Claude Code, or your editor’s equivalent) so every UI task uses it. Example text to paste:

> **GDS / Chakra UI:** For any React UI in this project, follow the canonical rules in **`node_modules/@gdesignsystem/react/GDS_FOR_LLM_AGENTS.md`** (Chakra v3 only, correct imports from `@gdesignsystem/react` vs `@chakra-ui/react` vs `@gdesignsystem/icons`, semantic tokens). If that path is missing, run install and ensure `@gdesignsystem/react` is a dependency.

You can copy that file into your repo (e.g. `docs/GDS_FOR_LLM_AGENTS.md`) and point the rule there instead, if you prefer a stable path without `node_modules`.

---

## Minimal app setup

1. Wrap the app root with `GDSProvider` (from `@gdesignsystem/react`).
2. Use Chakra UI components from `@chakra-ui/react` (Box, Button, Text, Input, etc.).
3. Use semantic token props: `color="fg"`, `color="fg.muted"`, `bg="bg.default"`, `bg="bg.subtle"`, `colorPalette="brand"` on components that support it (Button, Badge, etc.).
4. Use icons from `@gdesignsystem/icons` (e.g. `CheckIcon`, `XIcon`) with `color` set to a token (e.g. `color="fg.muted"`) or let them inherit.

**Import rule:** `GDSProvider`, `GDSButton`, `GDSText`, `GDSHeading`, and any other documented wrappers come from `@gdesignsystem/react`. All Chakra UI compound components (`Field`, `Card`, `Input`, `Button`, `Separator`, `Box`, `Text`, etc.) must be imported from `@chakra-ui/react`. Importing `Field` or other Chakra components from `@gdesignsystem/react` will cause "doesn't provide an export named X" errors.

**Minimal example:**

```tsx
import { GDSProvider } from "@gdesignsystem/react";
import { Button, Box, Text } from "@chakra-ui/react";
import { CheckIcon } from "@gdesignsystem/icons";

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

- Use **only** Chakra UI + GDS packages (`@gdesignsystem/react`, `@gdesignsystem/theme`, `@gdesignsystem/icons`) for the UI. Do not add Material UI, Ant Design, Tailwind UI, or other component libraries.
- Use **semantic tokens** for colors and backgrounds: `fg`, `fg.muted`, `bg.default`, `bg.subtle`, `border.muted`, `colorPalette="brand"`, etc.
- Use **`@gdesignsystem/icons`** for icons (e.g. `CheckIcon`, `StarIcon`, `XIcon`, `SearchIcon`, `MenuIcon`, `UserIcon`, `ArrowRightIcon`, `ChevronDownIcon`, `PencilIcon`, `TrashIcon`, `PlusIcon`, `InfoIcon`, `TriangleAlertIcon`, `LogOutIcon`). Over 1500 icons available — full list at [GDS Icons docs](https://renegademaster-droid.github.io/GDS/styles/icons). Do not use `react-icons` or other icon sets for UI when building with GDS unless the user explicitly asks. Icon names are PascalCase with `Icon` suffix matching Lucide icon names (e.g. Lucide `arrow-right` → `ArrowRightIcon`).
- The root of the React tree must be wrapped in **`GDSProvider`** from `@gdesignsystem/react`.
- **Forms:** Use Chakra v3 **Field** API from `@chakra-ui/react`: `Field.Root`, `Field.Label`, `Field.HelperText`, `Field.ErrorText`. Do **not** use `FormControl`, `FormLabel`, `FormHelperText`, or `FormErrorMessage` — they are not exported in Chakra v3 and will cause runtime errors.
- **Tables:** Use Chakra v3 **Table** compound component: `Table.Root`, `Table.Header`, `Table.Row`, `Table.ColumnHeader`, `Table.Body`, `Table.Cell`. Do **not** use `Table`, `Thead`, `Tbody`, `Tr`, `Th`, `Td`, or `TableContainer` — they are not exported in Chakra v3 and will cause runtime errors. Use `Table.ScrollArea` for scrollable tables; use `textAlign="end"` instead of `isNumeric`.
- **Cards:** Use `Card.Root`, `Card.Header`, `Card.Body`, `Card.Footer`, `Card.Title`, `Card.Description`. Do **not** use standalone `Card`, `CardHeader`, `CardBody`, or `CardFooter` — they are not exported in Chakra v3.
- **Dividers:** Use `Separator`. Do **not** use `Divider` — it is not exported in Chakra v3.

---

## Typography

GDS defines **named text styles** in the theme (`@gdesignsystem/theme`): `display`, `headline`, `title`, `body`, `caption`. Use them on **`GDSText`** via `textStyle="body"` etc.

- **Do not** use `textStyle="md"` or `textStyle="sm"` on `GDSText` — those are **font size token names**, not GDS text styles, and sizing will look inconsistent.
- **`GDSHeading`** wraps Chakra `Heading`. Its `size` prop is Chakra’s **heading scale** (`xs`–`4xl`), not the GDS text-style names. For a card title / `h2`, use e.g. `size="xl"` or `size="2xl"` with `as="h2"`. **`size="sm"` is a small heading**, not “semantic h2”.
- Hierarchy example: card title `GDSHeading size="xl" as="h2"`; lead copy `GDSText textStyle="body"`; secondary copy `GDSText textStyle="caption" color="fg.muted"`.
- Optional: `fontSize="md"` on `GDSText` uses the Figma **type scale** (`xs`–`4xl`) when you need a specific step, separate from `textStyle`.

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

Use this pattern for login cards or any form-in-card. **Imports must be** `Card`, `Field`, `Input`, `Button`, `Separator` (not `Divider`), `Stack`/`VStack`/`Box`/`Text`/`Heading` from `@chakra-ui/react`. **Never** import `FormControl`, `FormLabel`, `FormErrorMessage`, `Divider`, `CardHeader`, `CardBody`, `CardFooter`.

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
        <Button colorPalette="brand" width="full">Sign in</Button>
      </Card.Footer>
    </Card.Root>
  );
}
```

---

## Dialogs (Dialog API)

Use **Dialog** compound component from `@chakra-ui/react`. Always wrap content in `<Portal>`. Use `XIcon` from `@gdesignsystem/icons` for the close trigger.

```tsx
import { Dialog, Button, IconButton, Portal } from "@chakra-ui/react";
import { XIcon } from "@gdesignsystem/icons";

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
import { GDSHeading } from "@gdesignsystem/react";

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

When generating code for common UI tasks, use these patterns:

| Task | Use |
|------|-----|
| App root | `GDSProvider` from `@gdesignsystem/react` |
| Body text | `GDSText` (`textStyle="body"` / `"caption"`) from `@gdesignsystem/react` |
| Headings | `GDSHeading` (`size="xl"` etc.) from `@gdesignsystem/react` |
| Primary button | `Button colorPalette="brand"` from `@chakra-ui/react` |
| Form field with label | `Field.Root` + `Field.Label` + `Input` from `@chakra-ui/react` |
| Card layout | `Card.Root` + `Card.Header` + `Card.Body` + `Card.Footer` from `@chakra-ui/react` |
| Modal / dialog | `Dialog.Root` (+ Portal, Backdrop, Positioner, Content) from `@chakra-ui/react` |
| Feedback banner | `Alert.Root` + `Alert.Indicator` + `Alert.Content` from `@chakra-ui/react` |
| Data table | `Table.Root` + `Table.Header` + `Table.Body` + `Table.Row` + `Table.Cell` from `@chakra-ui/react` |
| Horizontal rule | `Separator` from `@chakra-ui/react` |
| Icons | `<CheckIcon />`, `<XIcon />` etc. from `@gdesignsystem/icons` |
| Tabs | `Tabs.Root` + `Tabs.List` + `Tabs.Trigger` + `Tabs.Content` from `@chakra-ui/react` |
| Dropdown menu | `Menu.Root` + `Menu.Trigger` + `Menu.Positioner` + `Menu.Content` + `Menu.Item` from `@chakra-ui/react` |
| Toast notifications | `Toaster` + `createToaster` from `@chakra-ui/react` |

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

- **Repository:** https://github.com/renegademaster-droid/GDS  
- **npm:** [@gdesignsystem/react](https://www.npmjs.com/package/@gdesignsystem/react) · [@gdesignsystem/theme](https://www.npmjs.com/package/@gdesignsystem/theme) · [@gdesignsystem/tokens](https://www.npmjs.com/package/@gdesignsystem/tokens) · [@gdesignsystem/icons](https://www.npmjs.com/package/@gdesignsystem/icons)  
- **Docs (component reference):** https://renegademaster-droid.github.io/GDS/  
- **Icons (full list, 1500+):** https://renegademaster-droid.github.io/GDS/styles/icons
