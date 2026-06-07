# GDS — Copilot instructions

When generating or editing **React UI** in this project, follow GDS (GDS Design System) on **Chakra UI v3**.

**Canonical guide (read before UI changes):**

`node_modules/@gdesignsystem/react/GDS_FOR_LLM_AGENTS.md`

**Rules:**

- Use `GDSProvider` from `@gdesignsystem/react` at the app root
- Import UI from `@chakra-ui/react` (v3 compound APIs: `Field.Root`, `Card.Root`, `Dialog.Root`, `Table.Root`, `Separator` — not v2 names like `FormControl`, `Modal`, `Divider`)
- Import icons from `@gdesignsystem/icons` only (not `react-icons`)
- Use semantic tokens: `fg`, `fg.muted`, `bg.default`, `colorPalette="brand"`

See `AGENTS.md` for more context.
