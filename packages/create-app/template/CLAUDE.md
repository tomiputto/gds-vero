# GDS app — Claude Code

This project uses **GDS** (GDS Design System) on Chakra UI v3.

**Mandatory for all UI work:** follow the full rules in:

`node_modules/@gds-vero/react/GDS_FOR_LLM_AGENTS.md`

Also see **`AGENTS.md`** in the project root. This file is only a short pointer; the bundled guide is canonical.

**Quick rules:**

- Wrap the app in `GDSProvider` from `@gds-vero/react`
- Import Chakra components from `@chakra-ui/react` (v3 compound APIs only)
- Import icons from `@gds-vero/icons`
- Use semantic tokens: `color="fg"`, `bg="bg.subtle"` (page), `bg="bg.default"` (cards), `colorPalette="brand"`
- After UI work: end with the full **Delivery audit report** (see compliance review in the agent guide)
