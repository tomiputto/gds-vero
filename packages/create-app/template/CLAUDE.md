# GDS app — Claude Code

This project uses **GDS** (GDS Design System) on Chakra UI v3.

**Mandatory for all UI work:** follow the full rules in:

`node_modules/@gdesignsystem/react/GDS_FOR_LLM_AGENTS.md`

Also see **`AGENTS.md`** in the project root. This file is only a short pointer; the bundled guide is canonical.

**Quick rules:**

- Wrap the app in `GDSProvider` from `@gdesignsystem/react`
- Import Chakra components from `@chakra-ui/react` (v3 compound APIs only)
- Import icons from `@gdesignsystem/icons`
- Use semantic tokens: `color="fg"`, `bg="bg.default"`, `colorPalette="brand"`
