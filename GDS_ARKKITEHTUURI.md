# GDS:n arkkitehtuuri

Tämä dokumentti kuvaa GDS (GDS Design System) -projektin arkkitehtuurin: monorepon rakenteen, pakettien roolit, token-virran Figmasta teemaan, uusien sovellusten luonnin, Figma Code Connectin, AI-agenttidokumentaation sekä build- ja julkaisuketjun.

**Ylläpito:** Agentit pitävät tämän tiedoston ja **`GDS_ARCHITECTURE.md`** -englanninkielisen version synkassa arkkitehtuuriin vaikuttavien muutosten yhteydessä (ks. **`.cursor/rules/architecture-docs.mdc`**).

---

## 1. Monorepo-rakenne

GDS on **pnpm-workspace** -monorepo:

```
GDS/
├── package.json          # Juuri: skriptit (dev, build, gds:tokens:sync, gds:icons:generate, figma:connect:*)
├── pnpm-workspace.yaml   # Workspace-paketit: packages/*, apps/*
├── figma.config.json     # Figma Code Connect (parser, include-polut)
├── code-connect/         # Code Connect -mäppäykset (*.figma.tsx) — ei npm-paketti
├── packages/             # Julkaistavat npm-paketit
│   ├── react/            # @gdesignsystem/react
│   ├── theme/            # @gdesignsystem/theme
│   ├── tokens/           # @gdesignsystem/tokens
│   ├── icons/            # @gdesignsystem/icons
│   ├── create-app/       # @gdesignsystem/create-app (scaffold-CLI)
│   └── cli/              # @gdesignsystem/cli (valinnainen työkalu)
├── apps/                 # Sovellukset (ei julkaista npm:ään)
│   ├── docs/             # Dokumentaatiosivusto (Vite, GitHub Pages)
│   └── demo/             # Demo-sovellus
├── scripts/              # Node-skriptit (token-sync, icon-generointi)
└── .tmp/                 # Väliaikaiset tiedostot (Figma MCP -output)
```

- **Juuren package.json:** yhteiset skriptit (`pnpm dev`, `pnpm build`, `pnpm gds:tokens:sync:from-mcp` jne.), ei sovelluslogiikkaa.
- **packages/** sisältää kuusi julkaistavaa pakettia; riippuvuudet toisiinsa käyttävät `workspace:*`.
- **apps/** sisältää dokumentaation ja demon; ne riippuvat paketeista workspace:n kautta.

---

## 2. Paketit ja niiden roolit

### 2.1 @gdesignsystem/tokens

- **Rooli:** Design-tokenien lähde. Sisältää Figmasta synkronoidun **tokens.raw.json** (värit, typografia, spacing, radii, efektit).
- **Sijainti:** `packages/tokens/figma/tokens.raw.json`.
- **Exportit:** Raw JSON (`colors`, `typography`, `spacing`, `effects`) sekä mahdollinen buildattu output.
- **Käyttäjät:** Theme lukee `tokens.raw.json`:n; token-sync kirjoittaa sinne.

Avaimet ovat polkumuodossa (esim. `text/fg`, `brand/primary/base`, `fonts/body`, `fontSizes/md`).

### 2.2 @gdesignsystem/theme

- **Rooli:** Chakra UI v3 -teeman määrittely. Lukee tokenit ja muuntaa ne Chakra-formaattiin (`tokens` + `semanticTokens` + `textStyles` + `recipes`).
- **Riippuvuudet:** `@gdesignsystem/tokens`, `@chakra-ui/react`.
- **Keskeiset tiedostot:**
  - **gds-tokens.ts:** Lukee `tokens.raw.json` → nested `tokens.colors`; määrittää **semanticTokens.colors** (`fg`, `bg`, `border`, `brand`) `base` / `_light` / `_dark` -arvoilla; rakentaa brand-skaalan 50–950; ylikirjoittaa `gray.fg` Chakra-törmäyksen välttämiseksi.
  - **figma-tokens.ts:** Typography → fontit, fonttikoot, fonttipainot; spacing; effects → radii.
  - **textStyles.ts:** Nimetyt tyylit `display`, `headline`, `title`, `body`, `caption` (käytä `GDSText`:llä `textStyle="body"`, ei `textStyle="md"`).
  - **theme.ts:** `defineConfig` yhdistää tokenit, textStyles ja recipes.
  - **system.ts:** `createSystem(defaultConfig, gdsTheme)`.
- **Exportit:** `gdsTheme`, `system`, `textStyles`.
- **Testit:** esim. `fg-tokens.test.ts`, `gds-tokens.smoke.test.ts` (semanttinen `fg` light/dark).

Teema laajentaa Chakran oletuskonfiguraatiota; se ei korvaa kaikkia Chakra-tokeneita.

### 2.3 @gdesignsystem/react

- **Rooli:** React-sovelluksen entry: provider ja ohuet wrapperit Chakra-primitiivien päällä.
- **Riippuvuudet:** `@chakra-ui/react`, `@gdesignsystem/theme`, `@gdesignsystem/tokens`.
- **GDSProvider:** Käärii sovelluksen `ChakraProvider`:lla ja välittää `system` (GDS-teema). Ei exporttaa `Field`-, `Card`-, `Input`- jne. komponentteja — ne tulevat `@chakra-ui/react`:istä.
- **Exportit:** `GDSProvider`, `GDSButton`, `GDSHeading`, `GDSText` (+ prop-tyypit). Sisältää **`GDS_FOR_LLM_AGENTS.md`** agenttisäännöille.

Käytännössä: puu `GDSProvider`:lla, Chakra compound API + GDS-ikonit; värit ja typografia teemasta.

### 2.4 @gdesignsystem/icons

- **Rooli:** SVG-pohjainen ikonikirjasto. Ikonit generoidaan `scripts/svg-to-gds-icons.mjs`:llä React-komponentteina.
- **Käyttö:** `@gdesignsystem/icons` (esim. `CheckIcon`). Riippumaton theme/tokens -paketeista.

### 2.5 @gdesignsystem/create-app

- **Rooli:** Luo uusia React + Vite -sovelluksia GDS valmiiksi kytkettynä (`create-gds-app` -bin).
- **Käyttö:** `pnpm create @gdesignsystem/app@latest my-project` (npm-paketti: `@gdesignsystem/create-app`; älä käytä `create …/create-app` → npm hakee `create-create-app` ja 404)
- **Sisältö:** Kopioi `template/`-kansion (Vite, `ChakraProvider` + `gdsTheme` + valinnainen `gds-theme-sync.generated.ts` synkin jälkeen, esimerkkikortti `GDSButton` / `GDSHeading` / `GDSText`). Template viittaa `@gdesignsystem/theme`, `@gdesignsystem/react` jne. Julkaistuja paketteja käyttävissä sovelluksissa käytä `GDSProvider`-ia `@gdesignsystem/react`:stä.
- **AI-agenttisäännöt (automaattisesti):** Jokainen scaffold sisältää `AGENTS.md`, `CLAUDE.md`, `.cursor/rules/gds-llm-agents.mdc` ja `.github/copilot-instructions.md` — kaikki viittaavat asennuksen jälkeen `node_modules/@gdesignsystem/react/GDS_FOR_LLM_AGENTS.md`:ään.
- **Huom:** Esimerkin typografiassa käytä GDS-tyylejä (`textStyle="body"`, `GDSHeading size="xl" as="h2"`) — älä käytä fonttikoko-tokenien nimiä `textStyle`-propina.

### 2.6 @gdesignsystem/cli

- **Rooli:** Valinnainen CLI (`gds`-bin) token-synkille ja teemaan liittyville työkaluille monorepon ulkopuolella.
- **Suhde:** Päällekkäin juuren `scripts/`:n ja create-app -templaten synkin kanssa.

---

## 3. Token-virta: Figma → teema

Design-tokenit tulevat Figmasta ja päätyvät theme-paketin käyttämään **tokens.raw.json** -tiedostoon.

1. **Figma (lähde):** Muuttujat (värit, typografia, spacing jne.).
2. **Figma MCP:** Agentti kutsuu `get_variable_defs` (Figman valinta) → flat JSON.
3. **`.tmp/figma.mcp_latest.json`:** MCP-tulos tallennetaan tähän (tai annetaan suoraan merge-skriptille).
4. **`figma-sync-with-mcp.mjs`:** Yhdistää MCP-JSONin olemassa olevaan `tokens.raw.json`:iin; kirjoittaa `.tmp/figma.variable_defs.json`; ajaa `figma-mcp-to-tokens-raw.mjs`.
5. **`figma-mcp-to-tokens-raw.mjs`:** Normalisoi flat-muodon → ryhmitelty **`packages/tokens/figma/tokens.raw.json`**.
6. **Theme käyttää `tokens.raw.json`:**
   - **gds-tokens.ts** → `tokens.colors` + `semanticTokens.colors`
   - **figma-tokens.ts** → fontit, fonttikoot, spacing, radii

**Komento (monorepo):** `pnpm gds:tokens:sync:from-mcp`

Yhteenveto: **Figma → MCP → merge + figma-mcp-to-tokens-raw → tokens.raw.json → theme → Chakra `system` → `GDSProvider` → sovellus.**

---

## 4. Teeman rakenne (theme-paketti)

### Semanttiset värit (`gdsSemanticColors`)

- **`fg`:** Älä viittaa `{colors.gray.fg}` — törmää Chakran `gray.fg`:ään (vaalealla teemalla voi tulla `gray.200`). Käytä `base: "#27272a"`, `_light: "{colors.gray.800}"`, `_dark: "{colors.text.fg_inverted}"`. Sama `base`-malli `fg.muted` / `fg.subtle`.
- **`bg`:** Eksplisiittinen `base` + `_light` / `_dark`.
- **`border`:** Suorat hex / token-viitteet.
- **`brand`:** Semanttiset aliaset + `tokens.colors.brand` -skaala (50–950) `colorPalette="brand"`:lle.

### Typografia

- **Figma-tokenit:** `fontSizes/*`, `fontWeights/*`, `fonts/body` tiedostossa `tokens.raw.json`.
- **Teeman `textStyles`:** `display`, `headline`, `title`, `body`, `caption` — käytä näitä `GDSText`:llä.
- **`GDSHeading`:** Chakra `Heading`-komponentin `size`-skaala (`xs`–`4xl`), erillinen `textStyle`-nimistöstä.

### Ajonaika

- **theme.ts** → `defineConfig({ theme: { tokens, semanticTokens, textStyles, recipes }, globalCss })`
- **system.ts** → `createSystem(defaultConfig, gdsTheme)`
- Sovellus käyttää `color="fg"`, `bg="bg.default"`, `colorPalette="brand"`; Chakra resolvoi CSS-muuttujat `system`:stä.

---

## 5. Sovellukset (apps)

- **apps/docs:** Vite-dokumentaatio (komponentit, tokenit, Chakra v3, esimerkit kuten login). GitHub Pages. Workspace-paketit; Vite voi ladata `tokens.raw.json`:n levyltä.
- **apps/demo:** Pieni GDS-demo (Vite).

Molemmat riippuvat `@gdesignsystem/react`, `@gdesignsystem/theme`, `@gdesignsystem/icons`, Chakrasta ja Emotionista.

---

## 6. Skriptit

| Skripti | Tarkoitus |
|---------|-----------|
| `figma-sync-with-mcp.mjs` | MCP JSON + merge → `tokens.raw.json` |
| `figma-mcp-to-tokens-raw.mjs` | Flat variable defs → ryhmitelty `tokens.raw.json` |
| `svg-to-gds-icons.mjs` | Ikonikomponentit (`pnpm gds:icons:generate`) |

Juuri: `pnpm gds:tokens:sync:from-mcp` (valinnainen polku MCP JSON-tiedostoon; merge valintaan). `pnpm gds:tokens:sync` lukee vain `.tmp/figma.variable_defs.json` (ei mergeä).

**Figma Code Connect (juuri):** `pnpm figma:connect:publish` / `pnpm figma:connect:unpublish` (vaatii `FIGMA_ACCESS_TOKEN`). Katso `code-connect/README.md`.

---

## 7. Riippuvuudet ja julkaisu

| Paketti | Riippuu | npm (esimerkit) |
|---------|---------|-----------------|
| tokens | — | `@gdesignsystem/tokens@0.1.3` |
| theme | tokens | `@gdesignsystem/theme@0.1.8` |
| react | theme, tokens | `@gdesignsystem/react@0.1.10` |
| icons | — | `@gdesignsystem/icons` |
| create-app | — (template listaa deps) | `@gdesignsystem/create-app@0.1.9` |
| cli | — | `@gdesignsystem/cli@0.1.0` |

- **Julkaisu:** Käytä **pnpm**:ää monorepon juuresta — **älä** `npm publish` hakemistossa `packages/*` (npm jättää `workspace:*` riippuvuuksiin ja asennus hajoaa). Esim. `pnpm gds:publish:react`, `pnpm gds:publish:theme`, `pnpm gds:publish:create-app`. `workspace:*` resolvautuu semveriksi pnpm-packauksessa. Pidä versionumerot linjassa julkaisun jälkeen.
- **Ulkoiset:** React 18+, Chakra UI v3, Emotion. GDS toimittaa teeman, providerin ja ohuet wrapperit; suurin osa UI:sta on `@chakra-ui/react`.

---

## 8. Figma Code Connect

Code Connect linkittää Figma-komponentit GDS/React-koodiesimerkkeihin Dev Modessa. Sijaitsee repojuuressa (ei oma npm-paketti).

- **Konfiguraatio:** `figma.config.json` — React-parseri; sisältää `code-connect/**/*.figma.tsx` ja `packages/react/src/**/*.tsx`.
- **Mäppäykset:** `code-connect/*.figma.tsx` — P0-komponentit Chakra v3 + GDS -malleihin (Button, Badge, Field, Card, Dialog).
- **Figma-tiedosto:** GDS-1.0 PROD — file key `vtiyOtk3Ro41iNAH9l3yhp`.
- **Julkaisu:** `FIGMA_ACCESS_TOKEN=<token> pnpm figma:connect:publish` (dry-run: `pnpm figma connect publish --dry-run`).
- **Dokumentaatio:** `code-connect/README.md` (node ID:t, uuden komponentin lisäys).

Suunnittelijat näkevät mäpätyn React-esimerkin Figma Dev Modessa komponenttia tarkastellessaan.

---

## 9. AI-agenttidokumentaatio

GDS dokumentoi pinon säännöt, jotta koodausavustajat käyttävät Chakra v3:ta ja oikeita importteja johdonmukaisesti.

| Konteksti | Tiedostot | Kanoninen ohje |
|-----------|-----------|----------------|
| **Monorepo** | `GDS_FOR_LLM_AGENTS.md`, `AGENTS.md`, `CLAUDE.md`, `.cursor/rules/gds-llm-agents.mdc`, `.cursor/rules/gds-accessibility.mdc` | `GDS_FOR_LLM_AGENTS.md` (repojuuri; sisältää **Accessibility**-osion ja pakollisen tarkistuslistan) |
| **npm-kuluttajat** | Bundlattu `@gdesignsystem/react`:iin | `node_modules/@gdesignsystem/react/GDS_FOR_LLM_AGENTS.md` |
| **create-app -scaffold** | `AGENTS.md`, `CLAUDE.md`, `.cursor/rules/`, `.github/copilot-instructions.md`, `eslint` + `jsx-a11y` | Viittaa bundlattuun ohjeeseen; `npm run lint` JSX-a11y-tarkistukseen |

Laajentaessasi agenttisääntöjä, saavutettavuusmalleja tai UI-ohjeita päivitä **`GDS_FOR_LLM_AGENTS.md`** ja synkkaa kopio **`packages/react/GDS_FOR_LLM_AGENTS.md`**:ään ennen `@gdesignsystem/react` -julkaisua.

---

## 10. Yhteenveto

| Kerros | Vastuu |
|--------|--------|
| **Figma** | Design-tokenien lähde |
| **tokens** | `tokens.raw.json` (MCP-synkki) |
| **theme** | Tokenit → Chakra `system` (värit, semantiikka, textStyles, recipes) |
| **react** | `GDSProvider` + wrapperit + agenttidokumentti |
| **create-app** | Scaffold `my-project` GDS:llä, esimerkki-UI:lla ja agenttisäännöillä |
| **code-connect** | Figma Dev Mode ↔ React/GDS-koodiesimerkit |
| **Sovellus** | `GDSProvider` (tai scaffold: `ChakraProvider` + `gdsTheme`) + Chakra + `@gdesignsystem/icons` |

**Token-virta:** Figma → MCP → `tokens.raw.json` → theme → `system` → provider → sovellus.

**Uusi sovellus:** `pnpm create @gdesignsystem/app@latest` → asennus → dev (template: `ChakraProvider` + GDS-wrapperit + agenttisäännöt; npm-sovellukset voivat käyttää `GDSProvider`-ia). Vaihtoehto: `npx create-gds-app my-project`.

**Code Connect -virta:** Muokkaa `code-connect/*.figma.tsx` → `pnpm figma:connect:publish` → suunnittelijat näkevät esimerkit Figma Dev Modessa.
