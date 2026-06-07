# GDS Code Connect

Figma Code Connect -tiedostot P0-komponenteille. Suunnittelijat näkevät Dev Modessa suoraan
oikean GDS-koodiesimerkin klikkaamalla komponenttia Figmassa.

## Komponentit

| Tiedosto | Figma-komponentti | Node ID |
|---|---|---|
| `Button.figma.tsx` | Button | `148:1720` |
| `Field.figma.tsx` | Input | `211:842` |
| `Card.figma.tsx` | Card | `339:15634` |
| `Dialog.figma.tsx` | Dialog | `376:7174` |
| `Badge.figma.tsx` | Badge | `128:1634` |

## Julkaisu

Tarvitset Figma Personal Access Tokenin: **figma.com → Account Settings → Personal access tokens**

```bash
# Dry-run (ei julkaise, testaa vain)
FIGMA_ACCESS_TOKEN=<token> pnpm figma connect publish --dry-run

# Julkaisu
FIGMA_ACCESS_TOKEN=<token> pnpm figma:connect:publish
```

## Uuden komponentin lisääminen

1. Etsi Figmassa komponentin sivu, klikkaa komponenttia → kopioi "Copy link to selection" URL
2. Aja: `pnpm figma connect create "<url>" --token <token>`
3. CLI luo pohjan oikeilla Figma-property-nimillä — muokkaa `example`-funktio GDS-tokeneilla
4. Julkaise: `FIGMA_ACCESS_TOKEN=<token> pnpm figma:connect:publish`

## Figma-tiedosto

`vtiyOtk3Ro41iNAH9l3yhp` — GDS-1.0 PROD
