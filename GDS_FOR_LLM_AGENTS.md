# GDS for LLM agents

This document is the canonical reference for AI agents (e.g. ChatGPT, Copilot) when a user asks to build a website, app, or UI **using GDS**. Follow it so that only GDS and its stack are used.

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

---

## Minimal app setup

1. Wrap the app root with `GDSProvider` (from `@gdesignsystem/react`).
2. Use Chakra UI components from `@chakra-ui/react` (Box, Button, Text, Input, etc.).
3. Use semantic token props: `color="fg"`, `color="fg.muted"`, `bg="bg.default"`, `bg="bg.subtle"`, `colorPalette="brand"` on components that support it (Button, Badge, etc.).
4. Use icons from `@gdesignsystem/icons` (e.g. `CheckIcon`, `XIcon`) with `color` set to a token (e.g. `color="fg.muted"`) or let them inherit.

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
- Use **`@gdesignsystem/icons`** for icons (e.g. `CheckIcon`, `StarIcon`, `XIcon`). Do not use `react-icons` or other icon sets for UI when building with GDS unless the user explicitly asks.
- The root of the React tree must be wrapped in **`GDSProvider`** from `@gdesignsystem/react`.
- **Forms:** Use Chakra v3 **Field** API from `@chakra-ui/react`: `Field.Root`, `Field.Label`, `Field.HelperText`, `Field.ErrorText`. Do **not** use `FormControl`, `FormLabel`, `FormHelperText`, or `FormErrorMessage` — they are not exported in Chakra v3 and will cause runtime errors.
- **Tables:** Use Chakra v3 **Table** compound component: `Table.Root`, `Table.Header`, `Table.Row`, `Table.ColumnHeader`, `Table.Body`, `Table.Cell`. Do **not** use `Table`, `Thead`, `Tbody`, `Tr`, `Th`, `Td`, or `TableContainer` — they are not exported in Chakra v3 and will cause runtime errors. Use `Table.ScrollArea` for scrollable tables; use `textAlign="end"` instead of `isNumeric`.

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

## Links

- **Repository:** https://github.com/renegademaster-droid/GDS  
- **npm:** [@gdesignsystem/react](https://www.npmjs.com/package/@gdesignsystem/react) · [@gdesignsystem/theme](https://www.npmjs.com/package/@gdesignsystem/theme) · [@gdesignsystem/tokens](https://www.npmjs.com/package/@gdesignsystem/tokens) · [@gdesignsystem/icons](https://www.npmjs.com/package/@gdesignsystem/icons)  
- **Docs (component reference):** https://renegademaster-droid.github.io/GDS/
