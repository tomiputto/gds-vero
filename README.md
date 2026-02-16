# GDS Design System

A design system built on **Chakra UI v3** with GDS theme and Figma tokens. Use brand colors, semantic tokens, and 1,500+ icons out of the box to build web apps that stay consistent with your Figma design.

**MIT licensed** — you can download, use, and build websites and apps with GDS in your own projects.

## Packages

| Package | Description |
|---------|-------------|
| **@gdesignsystem/react** | React provider and wrappers. Use `GDSProvider` to wrap your app and apply the GDS theme. |
| **@gdesignsystem/theme** | Chakra theme that maps Figma tokens to semantic tokens (e.g. `fg`, `bg.default`, `brand`). |
| **@gdesignsystem/tokens** | Design tokens (colors, typography, spacing). Source: `packages/tokens/figma/tokens.raw.json`. |
| **@gdesignsystem/icons** | Icon set generated from `/icons` SVGs. Use with Figma token colors. |

**Published on npm:** [@gdesignsystem/react](https://www.npmjs.com/package/@gdesignsystem/react) · [@gdesignsystem/theme](https://www.npmjs.com/package/@gdesignsystem/theme) · [@gdesignsystem/tokens](https://www.npmjs.com/package/@gdesignsystem/tokens) · [@gdesignsystem/icons](https://www.npmjs.com/package/@gdesignsystem/icons)

## Quick start

### 1. Install

In a pnpm workspace, add the GDS packages as workspace dependencies:

```json
{
  "dependencies": {
    "@gdesignsystem/react": "workspace:*",
    "@gdesignsystem/theme": "workspace:*",
    "@gdesignsystem/tokens": "workspace:*",
    "@gdesignsystem/icons": "workspace:*",
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
import { GDSProvider } from "@gdesignsystem/react";

function App() {
  return (
    <GDSProvider>
      <YourApp />
    </GDSProvider>
  );
}
```

### 3. Use components and tokens

Import Chakra UI components from `@chakra-ui/react` and GDS icons from `@gdesignsystem/icons`. Use semantic token props so colors come from Figma:

```tsx
import { Button, Box, Text } from "@chakra-ui/react";
import { CheckIcon } from "@gdesignsystem/icons";

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
pnpm add @gdesignsystem/react @gdesignsystem/theme @gdesignsystem/icons @chakra-ui/react @emotion/react react react-dom
```

Then wrap your app with `GDSProvider` and use Chakra components with GDS tokens and icons:

```tsx
import { GDSProvider } from "@gdesignsystem/react";
import { Button, Box, Text } from "@chakra-ui/react";
import { CheckIcon } from "@gdesignsystem/icons";

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

You typically only need `@gdesignsystem/tokens` if you use the token files directly; `@gdesignsystem/react` and `@gdesignsystem/theme` already include what’s needed for the theme.

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

Import from `@gdesignsystem/icons` and use token-based colors:

```tsx
import { StarIcon, XIcon } from "@gdesignsystem/icons";

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

The **docs** app (`apps/docs`) is the design system documentation and a reference implementation. It uses `GDSProvider`, Chakra components with GDS tokens, and `@gdesignsystem/icons` throughout.

## Monorepo layout

```
GDS/
├── apps/
│   ├── docs/          # Design system documentation (reference app)
│   └── demo/          # Optional demo app (Vite + GDS)
├── packages/
│   ├── react/         # @gdesignsystem/react – GDSProvider, GDSButton
│   ├── theme/         # @gdesignsystem/theme – Chakra theme + tokens
│   ├── tokens/        # @gdesignsystem/tokens – Figma tokens (tokens.raw.json)
│   └── icons/         # @gdesignsystem/icons – Icon components from /icons
├── icons/             # SVG sources for @gdesignsystem/icons (run gds:icons:generate)
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
2. **Reserve the scope** (if needed): Scoped packages like `@gdesignsystem/react` require the `gdesignsystem` org on npm. Create it at [npmjs.com/org/create](https://www.npmjs.com/org/create) (org name: `gdesignsystem`) or use your npm username as the scope.
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
**Note:** Dependencies between GDS packages stay as `workspace:*` in the repo; pnpm replaces them with the published version when you run `pnpm publish`.

### 3. Publish docs on GitHub Pages

The **docs** app (design system documentation) can be published to GitHub Pages so it’s available at `https://<username>.github.io/GDS/`.

1. **Enable GitHub Pages** in the repo:
   - Open your repo on GitHub → **Settings** → **Pages**.
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.
2. **Push the workflow** (if not already committed):
   - The workflow `.github/workflows/deploy-pages.yml` runs on every push to `main`. It builds the docs app and deploys it to GitHub Pages.
   - Commit and push:
     ```bash
     git add .github apps/docs
     git commit -m "Add GitHub Pages deployment for docs"
     git push
     ```
3. **First run:** After the first push, go to **Actions** and wait for **Deploy docs to GitHub Pages** to finish. Your docs will be live at `https://renegademaster-droid.github.io/GDS/`.

Local dev is unchanged: `pnpm dev` still serves the docs at the root path (`/`). The `BASE_PATH` is only set in CI for GitHub Pages.

**If the workflow fails:** Open the failed run in **Actions** and check which step failed:

- **Install dependencies:** Ensure `pnpm-lock.yaml` is committed. If the lockfile is missing or out of date, run `pnpm install` locally and commit the lockfile, then push again.
- **Build docs app:** The workflow only builds the docs app (not the full workspace). If this step fails, run `BASE_PATH=/GDS/ pnpm --filter docs build` locally to reproduce.
- **Deploy:** Ensure **Settings → Pages → Source** is set to **GitHub Actions**. The first time you enable it, re-run the workflow (Actions → run → Re-run all jobs).

## License

GDS is released under the **MIT License**. You can use it in personal or commercial projects, build websites and apps, and modify or redistribute it, subject to the terms of the license. See [LICENSE](LICENSE) for the full text.

## Requirements

- **Node** 18+
- **pnpm** (package manager)
- **React** 18+
- **Chakra UI** 3.x
