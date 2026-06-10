# GDS-VERO

Verohallinnon (vero.fi) design system — **Chakra UI v3** + GDS theme and Figma tokens. Separate fork of the upstream [GDS Design System](https://github.com/renegademaster-droid/GDS); published on npm as **`@gds-vero/*`** (not `@gdesignsystem/*`).

**MIT licensed** — you can download, use, and build websites and apps with GDS in your own projects.

**Building with an AI agent (Cursor, Claude, Copilot, ChatGPT, etc.)?** Follow [GDS for LLM agents](GDS_FOR_LLM_AGENTS.md) — also see [AGENTS.md](AGENTS.md). If you use GDS **from npm**, the same guide ships in the package at `node_modules/@gds-vero/react/GDS_FOR_LLM_AGENTS.md`; add a project rule that points your agent at that file (copy-paste example in the doc).

**Arkkitehtuurikuvaus (suomeksi):** [GDS:n arkkitehtuuri](GDS_ARKKITEHTUURI.md).  
**Architecture (English):** [GDS architecture](GDS_ARCHITECTURE.md).

## Packages

| Package | Description |
|---------|-------------|
| **@gds-vero/react** | React provider and wrappers. Use `GDSProvider` to wrap your app and apply the GDS theme. |
| **@gds-vero/theme** | Chakra theme that maps Figma tokens to semantic tokens (e.g. `fg`, `bg.default`, `brand`). |
| **@gds-vero/tokens** | Design tokens (colors, typography, spacing). Source: `packages/tokens/figma/tokens.raw.json`. |
| **@gds-vero/icons** | Icon set generated from `/icons` SVGs. Use with Figma token colors. |

**Published on npm:** [@gds-vero/react](https://www.npmjs.com/package/@gds-vero/react) · [@gds-vero/theme](https://www.npmjs.com/package/@gds-vero/theme) · [@gds-vero/tokens](https://www.npmjs.com/package/@gds-vero/tokens) · [@gds-vero/icons](https://www.npmjs.com/package/@gds-vero/icons)

## Quick start

### 1. Install

In a pnpm workspace, add the GDS packages as workspace dependencies:

```json
{
  "dependencies": {
    "@gds-vero/react": "workspace:*",
    "@gds-vero/theme": "workspace:*",
    "@gds-vero/tokens": "workspace:*",
    "@gds-vero/icons": "workspace:*",
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
import { GDSProvider } from "@gds-vero/react";

function App() {
  return (
    <GDSProvider>
      <YourApp />
    </GDSProvider>
  );
}
```

### 3. Use components and tokens

Import **only** `GDSProvider` (and optionally `GDSButton`) from `@gds-vero/react`. Import all Chakra UI components (`Field`, `Card`, `Input`, `Button`, `Box`, `Text`, etc.) from `@chakra-ui/react`. Import GDS icons from `@gds-vero/icons`. Use semantic token props so colors come from Figma:

```tsx
import { Button, Box, Text } from "@chakra-ui/react";
import { CheckIcon } from "@gds-vero/icons";

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

**Forms (Chakra v3)** — Use the **Field** API from `@chakra-ui/react`. Do **not** use `FormControl`, `FormLabel`, `FormHelperText`, or `FormErrorMessage` (they are not in Chakra v3). Use `Field.Root`, `Field.Label`, `Field.HelperText`, and `Field.ErrorText` instead; use the `invalid` prop on `Field.Root` for error state.

**Tables (Chakra v3)** — Use the **Table** compound component: `Table.Root`, `Table.Header`, `Table.Row`, `Table.ColumnHeader`, `Table.Body`, `Table.Cell`. Do **not** use `Table`, `Thead`, `Tbody`, `Tr`, `Th`, `Td`, or `TableContainer` — they are not in Chakra v3. For scrollable tables use `Table.ScrollArea`. Use `textAlign="end"` instead of `isNumeric` on cells.

**Other Chakra v3 renames** — Many v2 components were renamed or replaced. Using old names will cause "doesn't provide an export named X" errors. Examples: `Divider` → `Separator`; `Card` / `CardHeader` / `CardBody` / `CardFooter` → `Card.Root` / `Card.Header` / `Card.Body` / `Card.Footer`; `Modal` → `Dialog.*`; `Tab` / `TabList` / `TabPanel` → `Tabs.Trigger` / `Tabs.List` / `Tabs.Content`; `Select` → `NativeSelect.*`; form components → `Field.*`. For a full list see the [Chakra v3 API](GDS_FOR_LLM_AGENTS.md#chakra-v3-api--do-not-use-these-names) section in [GDS for LLM agents](GDS_FOR_LLM_AGENTS.md), or the **Chakra v3 API** guide in the [published docs](https://github.com/tomiputto/gds-vero#readme).

## Using GDS from npm

In any React project (no monorepo required), install GDS and its peer dependencies:

```bash
pnpm add @gds-vero/react @gds-vero/theme @gds-vero/icons @chakra-ui/react @emotion/react react react-dom
```

Then wrap your app with `GDSProvider` and use Chakra components with GDS tokens and icons:

```tsx
import { GDSProvider } from "@gds-vero/react";
import { Button, Box, Text } from "@chakra-ui/react";
import { CheckIcon } from "@gds-vero/icons";

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

You typically only need `@gds-vero/tokens` if you use the token files directly; `@gds-vero/react` and `@gds-vero/theme` already include what’s needed for the theme.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm gds:tokens:sync:from-mcp` | **Monorepo (recommended with Figma MCP):** merge `.tmp/figma.mcp_latest.json` into `packages/tokens/figma/tokens.raw.json`. |
| `pnpm gds:tokens:sync` | Read `.tmp/figma.variable_defs.json` and write `packages/tokens/figma/tokens.raw.json` (no MCP merge). |
| `pnpm gds:icons:generate` | Generate icon components from `/icons` SVGs into `packages/icons`. |
| `pnpm dev` | Run all workspace dev scripts (e.g. docs app). |
| `pnpm build` | Build all workspace packages and apps. |

## Tokens

Design tokens live in `packages/tokens/figma/tokens.raw.json`. The theme reads colors from that file and exposes semantic tokens. To sync from Figma with the MCP (current selection → merge into existing tokens), save MCP output to `.tmp/figma.mcp_latest.json` (or ask an agent to “sync tokens”) and run:

```bash
pnpm gds:tokens:sync:from-mcp
```

If you already have `.tmp/figma.variable_defs.json`, you can run `pnpm gds:tokens:sync` instead. Scaffolded apps from `pnpm create @gds-vero/app@latest` use their own `pnpm gds:tokens:sync` script (writes under `src/`). See `packages/create-app/README.md` — do not use `create …/create-app` (npm 404).

## Icons

Icons are in `packages/icons`, generated from SVG files in the repo-level `/icons` folder. To regenerate after adding or changing SVGs:

```bash
pnpm gds:icons:generate
```

Import from `@gds-vero/icons` and use token-based colors:

```tsx
import { StarIcon, XIcon } from "@gds-vero/icons";

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

The **docs** app (`apps/docs`) is the design system documentation and a reference implementation. It uses `GDSProvider`, Chakra components with GDS tokens, and `@gds-vero/icons` throughout.

## Monorepo layout

```
GDS/
├── apps/
│   ├── docs/          # Design system documentation (reference app)
│   └── demo/          # Optional demo app (Vite + GDS)
├── packages/
│   ├── react/         # @gds-vero/react – GDSProvider, GDSButton, GDSText, GDSHeading
│   ├── theme/         # @gds-vero/theme – Chakra theme + tokens
│   ├── tokens/        # @gds-vero/tokens – Figma tokens (tokens.raw.json)
│   ├── icons/         # @gds-vero/icons – Icon components from /icons
│   ├── create-app/    # @gds-vero/create-app – scaffold CLI
│   └── cli/           # @gds-vero/cli – optional tooling
├── icons/             # SVG sources for @gds-vero/icons (run gds:icons:generate)
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
2. **Reserve the scope** (if needed): Create the `@gds-vero` npm org at [npmjs.com/org/create](https://www.npmjs.com/org/create) (org name: `gds-vero`). This is separate from `@gdesignsystem` and does not affect upstream GDS packages.
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

The **docs** app (design system documentation) can be published to GitHub Pages so it’s available at `https://tomiputto.github.io/gds-vero/`.

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
3. **First run:** After the first push, go to **Actions** and wait for **Deploy docs to GitHub Pages** to finish. Your docs will be live at `https://github.com/tomiputto/gds-vero#readme`.

Local dev is unchanged: `pnpm dev` still serves the docs at the root path (`/`). The `BASE_PATH` is only set in CI for GitHub Pages.

**If the workflow fails:** Open the failed run in **Actions** and check which step failed:

- **Install dependencies:** Ensure `pnpm-lock.yaml` is committed. If the lockfile is missing or out of date, run `pnpm install` locally and commit the lockfile, then push again.
- **Build docs app:** The workflow only builds the docs app (not the full workspace). If this step fails, run `BASE_PATH=/gds-vero/ pnpm --filter docs build` locally to reproduce.
- **Deploy:** Ensure **Settings → Pages → Source** is set to **GitHub Actions**. The first time you enable it, re-run the workflow (Actions → run → Re-run all jobs).

## License

GDS is released under the **MIT License**. You can use it in personal or commercial projects, build websites and apps, and modify or redistribute it, subject to the terms of the license. See [LICENSE](LICENSE) for the full text.

## Requirements

- **Node** 18+
- **pnpm** (package manager)
- **React** 18+
- **Chakra UI** 3.x
