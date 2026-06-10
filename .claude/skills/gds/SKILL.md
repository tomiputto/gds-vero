---
name: gds
description: >
  Luo React-komponentteja tai UI-toteutuksia GDS Design Systemillä (Chakra UI v3 + GDS-paketit).
  Käytä kun käyttäjä pyytää UI:ta, komponenttia, lomaketta, sivua tai antaa Figma-linkin ja haluaa
  GDS-toteutuksen. Myös: "tee tästä GDS-komponentti", "luo GDS-näkymä", "implementoi Figma-design GDS:llä".
argument-hint: "[kuvaus tai Figma URL]"
allowed-tools: Read, Grep, Glob
---

## GDS Design System — ohje (lue ensin)

!`cat GDS_FOR_LLM_AGENTS.md`

---

## Tehtäväsi

Käyttäjän pyyntö: $ARGUMENTS

### Toimi näin:

1. **Jos argumentti on Figma-URL** (sisältää `figma.com`):
   - Käytä Figma MCP:tä (`get_design_context`) haetaksesi design-konteksti
   - Tulkitse design ja toteuta se GDS-komponenteilla yllä olevan ohjeistuksen mukaan
   - Älä kopioi Figma-koodia suoraan — sovita se GDS:n semanttisiin tokeneihin ja komponentteihin

2. **Jos argumentti on tekstikuvaus** (esim. "kirjautumislomake", "navigaatiopalkki"):
   - Toteuta komponentti GDS-ohjeiden mukaan
   - Käytä semanttisia värejä (`color="fg"`, `bg="bg.default"`, `colorPalette="brand"` jne.)
   - Käytä `@gds-vero/icons`-pakettia ikoneille
   - Käytä Chakra v3 API:a (Field.*, Card.Root, Separator, Table.* jne.)

### Muistilista ennen koodin kirjoittamista:
- [ ] `GDSProvider` on juuressa
- [ ] Kaikki komponentit tulevat `@chakra-ui/react`:sta (ei `@gds-vero/react`:sta, poislukien `GDSProvider` ja `GDSButton`)
- [ ] Värit ovat semanttisia tokeneita, ei kovakoodattuja hex-arvoja
- [ ] Ei v2-nimiä: ei `FormControl`, `Divider`, `Modal`, `CardHeader` jne.
- [ ] Ikonit `@gds-vero/icons`:sta

Tuota valmis, toimiva TypeScript/TSX-koodi selityksineen.
