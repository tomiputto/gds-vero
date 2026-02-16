# GDS Design System

A design system built on **Chakra UI v3** with GDS theme and Figma tokens. Use brand colors, semantic tokens, and 1,500+ icons out of the box to build web apps that stay consistent with your Figma design.

**MIT licensed** — you can download, use, and build websites and apps with GDS in your own projects.

## Packages

| Package | Description |
|---------|-------------|
| **@gds/react** | React provider and wrappers. Use `GDSProvider` to wrap your app and apply the GDS theme. |
| **@gds/theme** | Chakra theme that maps Figma tokens to semantic tokens (e.g. `fg`, `bg.default`, `brand`). |
| **@gds/tokens** | Design tokens (colors, typography, spacing). Source: `packages/tokens/figma/tokens.raw.json`. |
| **@gds/icons** | Icon set generated from `/icons` SVGs. Use with Figma token colors. |

## Quick start

### 1. Install

In a pnpm workspace, add the GDS packages as workspace dependencies:

```json
{
  "dependencies": {
    "@gds/react": "workspace:*",
    "@gds/theme": "workspace:*",
    "@gds/tokens": "workspace:*",
    "@gds/icons": "workspace:*",
    "@chakra-ui/react": "^3.0.0",
    "@emotion/react": "^11.0.0",
    "react": ">=18",
    "react-dom": ">=18"
  }
}
```

Then run `pnpm install` from the repo root.

### 2. Wrap your app

Use `GDSProvider` so Chakra gets the GDS theme:

```tsx
import { GDSProvider } from "@gds/react";

function App() {
  return (
    <GDSProvider>
      <YourApp />
    </GDSProvider>
  );
}
```

### 3. Use components and tokens

Import Chakra UI components from `@chakra-ui/react` and GDS icons from `@gds/icons`. Use semantic token props so colors come from Figma:

```tsx
import { Button, Box, Text } from "@chakra-ui/react";
import { CheckIcon } from "@gds/icons";

<Box bg="bg.default" color="fg" p="4">
  <Button colorPalette="brand">
    <CheckIcon /> Primary action
  </Button>
  <Text color="fg.muted">Muted text</Text>
</Box>
```

**Common token props**

- **Colors:** `color="fg"`, `color="fg.muted"`, `bg="bg.default"`, `bg="bg.muted"`, `borderColor="border.muted"`
- **Brand:** `colorPalette="brand"` on Button, Badge, etc.
- **Semantic:** `color="fg.success"`, `color="fg.error"`, `bg="bg.success"`

## Using GDS from npm

In any React project (no monorepo required), install GDS and its peer dependencies:

```bash
pnpm add @gds/react @gds/theme @gds/icons @chakra-ui/react @emotion/react react react-dom
```

Then wrap your app with `GDSProvider` and use Chakra components with GDS tokens and icons:

```tsx
import { GDSProvider } from "@gds/react";
import { Button, Box, Text } from "@chakra-ui/react";
import { CheckIcon } from "@gds/icons";

function App() {
  return (
    <GDSProvider>
      <Box bg="bg.default" color="fg" p="4">
        <Button colorPalette="brand">
          <CheckIcon /> Primary action
        </Button>
        <Text color="fg.muted">Muted text</Text>
      </Box>
    </GDSProvider>
  );
}
```

You typically only need `@gds/tokens` if you use the token files directly; `@gds/react` and `@gds/theme` already include what’s needed for the theme.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm gds:tokens:sync` | Sync design tokens from Figma (MCP). Writes to `packages/tokens/figma/tokens.raw.json`. |
| `pnpm gds:icons:generate` | Generate icon components from `/icons` SVGs into `packages/icons`. |
| `pnpm dev` | Run all workspace dev scripts (e.g. docs app). |
| `pnpm build` | Build all workspace packages and apps. |

## Tokens

Design tokens live in `packages/tokens/figma/tokens.raw.json`. The theme reads colors from that file and exposes semantic tokens. To sync from Figma (when the Figma MCP is connected), run:

```bash
pnpm gds:tokens:sync
```

## Icons

Icons are in `packages/icons`, generated from SVG files in the repo-level `/icons` folder. To regenerate after adding or changing SVGs:

```bash
pnpm gds:icons:generate
```

Import from `@gds/icons` and use token-based colors:

```tsx
import { StarIcon, XIcon } from "@gds/icons";

<StarIcon color="fg.muted" boxSize="6" />
<XIcon color="fg" boxSize="4" />
```

## Run on dev

From the repo root:

```bash
pnpm install   # once
pnpm dev       # starts the docs app (Vite)
```

Then open the URL shown in the terminal (e.g. `http://localhost:5173`) to browse the design system.

To run only the docs app:

```bash
cd apps/docs && pnpm dev
```

## Docs app

The **docs** app (`apps/docs`) is the design system documentation and a reference implementation. It uses `GDSProvider`, Chakra components with GDS tokens, and `@gds/icons` throughout.

## Monorepo layout

```
GDS/
├── apps/
│   ├── docs/          # Design system documentation (reference app)
│   └── demo/          # Optional demo app (Vite + GDS)
├── packages/
│   ├── react/         # @gds/react – GDSProvider, GDSButton
│   ├── theme/         # @gds/theme – Chakra theme + tokens
│   ├── tokens/        # @gds/tokens – Figma tokens (tokens.raw.json)
│   └── icons/         # @gds/icons – Icon components from /icons
├── icons/             # SVG sources for @gds/icons (run gds:icons:generate)
├── scripts/           # Token sync and icon generation scripts
└── pnpm-workspace.yaml
```

## Publishing: GitHub and npm

### 1. Put GDS on GitHub

1. **Create a new repo** on [GitHub](https://github.com/new) (e.g. `gds` or `GDS`). Do not initialize with a README if this repo already has one.
2. **Set the remote** (replace `YOUR_USERNAME` and `YOUR_REPO` with your GitHub user/org and repo name):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   ```
3. **Update the repository URL** in the root `package.json` so the `repository` field points to your repo (e.g. `"repository": { "type": "git", "url": "https://github.com/YOUR_USERNAME/YOUR_REPO.git" }`).
4. **Push**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git push -u origin main
   ```
   The root `.gitignore` already excludes `node_modules`, `dist`, `.tmp`, `.pnpm-store`, and generated files.

### 2. Publish packages on npm

1. **Create an npm account** at [npmjs.com](https://www.npmjs.com/signup) and log in in the terminal: `npm login`.
2. **Reserve the scope** (if needed): Scoped packages like `@gds/react` require the `gds` org on npm. Create it at [npmjs.com/org/create](https://www.npmjs.com/org/create) (org name: `gds`) or use your npm username as the scope.
3. **Prepare packages for publish:**
   - In each package you want to publish (`packages/react`, `packages/theme`, `packages/tokens`, `packages/icons`): set `"private": false` (or remove `"private": true`) and set a real version, e.g. `"version": "0.1.0"`.
   - Add a `repository` field in each published package (or rely on the root one), e.g. `"repository": { "type": "git", "url": "https://github.com/YOUR_USERNAME/YOUR_REPO.git" }`.
   - `license` is already set to `"MIT"`.
4. **Publish in dependency order** (so dependents can resolve their workspace deps as npm packages):
   ```bash
   pnpm build
   cd packages/tokens   && pnpm publish --no-git-checks
   cd ../theme         && pnpm publish --no-git-checks
   cd ../icons         && pnpm publish --no-git-checks
   cd ../react         && pnpm publish --no-git-checks
   ```
   Or use a publish script / `pnpm publish -r` once workspace protocol is replaced with version ranges for published packages.
5. **After first publish:** In `package.json` files, replace `workspace:*` with the published version (e.g. `"@gds/theme": "^0.1.0"`) for the monorepo to work cleanly, or keep `workspace:*` for local development and only publish from CI with version bumps.

## License

GDS is released under the **MIT License**. You can use it in personal or commercial projects, build websites and apps, and modify or redistribute it, subject to the terms of the license. See [LICENSE](LICENSE) for the full text.

## Requirements

- **Node** 18+
- **pnpm** (package manager)
- **React** 18+
- **Chakra UI** 3.x
