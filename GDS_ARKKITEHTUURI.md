# GDS:n arkkitehtuuri

Tämä dokumentti kuvaa GDS (GDS Design System) -projektin arkkitehtuurin: monorepon rakenteen, pakettien roolit, token-virran Figmasta teemaan sekä build- ja julkaisuketjun.

---

## 1. Monorepo-rakenne

GDS on **pnpm-workspace** -monorepo:

```
GDS/
├── package.json          # Juuri: skriptit (dev, build, gds:tokens:sync, gds:icons:generate)
├── pnpm-workspace.yaml   # Workspace-paketit: packages/*, apps/*
├── packages/             # Julkaistavat npm-paketit
│   ├── react/            # @gdesignsystem/react
│   ├── theme/            # @gdesignsystem/theme
│   ├── tokens/           # @gdesignsystem/tokens
│   └── icons/            # @gdesignsystem/icons
├── apps/                 # Sovellukset (ei julkaista npm:ään)
│   ├── docs/             # Dokumentaatiosivusto (Vite, GitHub Pages)
│   └── demo/             # Demo-sovellus
├── scripts/              # Node-skriptit (token-sync, icon-generointi)
└── .tmp/                 # Väliaikaiset tiedostot (Figma MCP -output)
```

- **Juuren package.json**: yhteiset skriptit (`pnpm dev`, `pnpm build`, `pnpm gds:tokens:sync:from-mcp` jne.), ei sovelluslogiikkaa.
- **packages/** sisältää neljä julkaistavaa pakettia; riippuvuudet toisiinsa käyttävät `workspace:*`.
- **apps/** sisältää dokumentaation ja demon; ne riippuvat paketeista workspace:n kautta.

---

## 2. Paketit ja niiden roolit

### 2.1 @gdesignsystem/tokens

- **Rooli:** Design-tokenien lähde. Sisältää Figmasta synkronoidun **tokens.raw.json** (värit, typografia, spacing, radii, efektit).
- **Sijainti:** `packages/tokens/figma/tokens.raw.json`.
- **Exportit:** Raw JSON (värit, typography, spacing, effects) sekä mahdollinen buildattu output.
- **Käyttäjät:** Theme lukee tokens.raw.jsonin; token-sync-kirjoittaa sinne.

Tokenit on jaoteltu ryhmiin: `colors`, `typography`, `spacing`, `effects`. Avaimet ovat polkumuodossa (esim. `text/fg`, `brand/primary/base`, `fonts/body`, `fontSizes/xs`).

### 2.2 @gdesignsystem/theme

- **Rooli:** Chakra UI v3 -teeman määrittely. Lukee tokenit ja muuntaa ne Chakra-formaattiin (tokens + semanticTokens).
- **Riippuvuudet:** `@gdesignsystem/tokens` (tokens.raw.json), `@chakra-ui/react`.
- **Keskeiset tiedostot:**
  - **gds-tokens.ts:** Lukee `tokens.raw.json` → värit nested-muotoon; määrittää **semanticTokens.colors** (fg, bg, border, brand, _light/_dark).
  - **figma-tokens.ts:** Lukee tokens.raw.json → fontit, fonttikoot, fonttipainot, radii, spacing (typography & effects -ryhmistä).
  - **theme.ts:** `defineConfig` yhdistää tokenit, textStyles ja recipes Chakra-teemaksi.
  - **system.ts:** `createSystem(defaultConfig, gdsTheme)` — GDS-teema laajentaa Chakran oletusta.
- **Exportit:** `gdsTheme`, `system`, `textStyles`.

Teema ei korvaa koko Chakra-teemaa vaan laajentaa sitä: oma väripaletti, semanttiset värit (fg, bg.default, brand), typografia ja spacing Figmasta.

### 2.3 @gdesignsystem/react

- **Rooli:** React-sovelluksen entry: provider ja valinnaiset wrapperit (esim. GDSButton).
- **Riippuvuudet:** `@chakra-ui/react`, `@gdesignsystem/theme`.
- **GDSProvider:** Käärii sovelluksen `ChakraProvider`-komponentilla ja välittää `system` (GDS-teema) Chakralle. Ei exporttaa Field-, Card- tai muita Chakra-komponentteja — ne tulevat `@chakra-ui/react`:istä.
- **Exportit:** `GDSProvider`, `GDSButton` (ja mahdolliset muut wrapperit).

Käytännössä: sovellus käärii puun `GDSProvider`:lla ja käyttää Chakra-komponentteja + GDS-ikoneja; värit ja typografia tulevat teemasta.

### 2.4 @gdesignsystem/icons

- **Rooli:** SVG-pohjainen ikonikirjasto. Ikonit generoidaan skriptillä `scripts/svg-to-gds-icons.mjs` ja exportataan React-komponentteina.
- **Käyttö:** Sama tyyli kuin Figma-tokenit (värit semantic-tokenien kautta). Ei riipu theme- tai tokens-paketeista.

---

## 3. Token-virta: Figma → teema

Design-tokenit tulevat Figmasta ja päätyvät theme-paketin käyttämään **tokens.raw.json** -tiedostoon. Virta:

1. **Figma (lähde):** Muuttujat (värit, typografia, spacing jne.) määritellään Figmassa.
2. **Figma MCP:** Cursor/agent kutsuu Figma MCP:n `get_variable_defs` ja saa JSONin (flat key–value).
3. **.tmp/figma.mcp_latest.json:** Agent tai käyttäjä tallentaa MCP-vastauksen tähän (tai suoraan merge-skriptille).
4. **figma-sync-with-mcp.mjs:** Lukee nykyisen `tokens.raw.json`:n, litistää sen; lukee MCP-JSONin; yhdistää (MCP ylikirjoittaa); kirjoittaa tuloksen `.tmp/figma.variable_defs.json`; kutsuu figma-mcp-to-tokens-raw.mjs.
5. **figma-mcp-to-tokens-raw.mjs:** Lukee flat key–value -tiedoston, tunnistaa ryhmät (colors, typography, spacing, effects), normalisoi arvot (hex-värit, px-spacing jne.) ja kirjoittaa **packages/tokens/figma/tokens.raw.json** ryhmiteltynä (colors, typography, spacing, effects).
6. **Theme käyttää tokens.raw.json:**  
   - **gds-tokens.ts** lukee `colors`-osion ja muodostaa Chakra-tokenit + semanttiset värit (fg, bg, border, brand, _light/_dark).  
   - **figma-tokens.ts** lukee typography/spacing/effects ja muodostaa fontit, fonttikoot, spacing, radii.

Yhteenveto: **Figma → MCP → merge + figma-mcp-to-tokens-raw → tokens.raw.json → theme (gds-tokens + figma-tokens) → Chakra system.**

---

## 4. Teeman rakenne (theme-paketti)

- **tokens.raw.json** sisältää ryhmät: `colors`, `typography`, `spacing`, `effects`.
- **gds-tokens.ts:**  
  - Värit (flat key, esim. `text/fg`) muunnetaan nested-muotoon (Chakra tokens.colors).  
  - Semanttiset värit määritellään viittaamalla näihin (esim. `fg` → _light: `colors.text.fg`, _dark: `colors.text.fg_inverted`).  
  - Brand-paletti (50–950) rakennetaan brand/primary-avaimista (Chakra colorPalette vaatii skaalan).
- **figma-tokens.ts:** Typography → fontit, fonttikoot, fonttipainot; spacing → spacing-tokenit; effects → radii.
- **theme.ts:** Yhdistää tokenit, textStyles ja recipes Chakra `defineConfig`-objektiksi.
- **system.ts:** `createSystem(defaultConfig, gdsTheme)` tuottaa lopullisen Chakra-systemin, joka välitetään GDSProviderissa.

Sovellus käyttää semanttisia tokeneita (esim. `color="fg"`, `bg="bg.default"`, `colorPalette="brand"`); Chakra resoluoi ne lopulta tokens.raw.jsonin arvoihin teeman kautta.

---

## 5. Sovellukset (apps)

- **apps/docs:** Vite-sovellus, dokumentaatio GDS:stä (komponentit, tokenit, Chakra v3 -ohje). Buildataan ja deployataan GitHub Pagesiin. Käyttää workspace-paketteja.
- **apps/demo:** Pieni demo-sovellus GDS:stä. Myös Vite.

Molemmat riippuvat `@gdesignsystem/react`, `@gdesignsystem/theme`, `@gdesignsystem/icons` (ja Chakra + Emotion). Docs voi ladata tokens.raw.jsonin suoraan levyltä (Vite-plugin) jotta token-päivitykset näkyvät ilman theme-paketin uudelleenbuildia.

---

## 6. Skriptit

- **figma-sync-with-mcp.mjs:** Merge MCP-JSON + olemassa olevat tokenit → .tmp/figma.variable_defs.json, sitten kutsuu figma-mcp-to-tokens-raw.mjs. Käyttö: `pnpm gds:tokens:sync:from-mcp [.tmp/figma.mcp_latest.json]`.
- **figma-mcp-to-tokens-raw.mjs:** Lukee flat variable defs -tiedoston, ryhmittelee (colors, typography, spacing, effects), normalisoi arvot, kirjoittaa tokens.raw.json.
- **svg-to-gds-icons.mjs:** Generoi ikonikomponentit SVGistä (`pnpm gds:icons:generate`).

---

## 7. Riippuvuudet ja julkaisu

- **Workspace-paketit:** theme riippuu tokensista (`workspace:*`), react riippuu themestä ja tokensista (`workspace:*`). Icons on riippumaton.
- **Julkaisu:** Paketit julkaistaan npm:ään erikseen (pnpm publish). `workspace:*` korvautuu versiolla julkaisuvaiheessa.
- **Ulkoiset riippuvuudet:** Chakra UI v3, Emotion, React. GDS ei sisällä komponenttikirjastoa vaan teeman ja providerin; UI-komponentit tulevat `@chakra-ui/react`:istä.

---

## 8. Yhteenveto

| Kerros        | Vastuu |
|---------------|--------|
| **Figma**     | Design-tokenien lähde (värit, typografia, spacing jne.) |
| **tokens**    | tokens.raw.json (synkataan Figma MCP:stä) |
| **theme**     | Lukee tokens.raw.json → Chakra-teema (tokens + semanticTokens + recipes) |
| **react**     | GDSProvider (ChakraProvider + system) |
| **Sovellus**  | GDSProvider + Chakra-komponentit + @gdesignsystem/icons |

Token-virta: **Figma → MCP → figma-sync-with-mcp + figma-mcp-to-tokens-raw → tokens.raw.json → theme (gds-tokens, figma-tokens) → system → GDSProvider → sovellus.**
