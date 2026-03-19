import { Box, Code, Heading, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { GDSText as Text } from "@gdesignsystem/react";
export function TokensPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Tokens
        </Heading>
        <Text color="fg.muted">
          How the GDS token system works: where tokens live, how they are synced from Figma, and how the theme exposes them as semantic props.
        </Text>
      </Box>

      <Section
        title="Where tokens live"
        description="Design tokens are stored in the repo and consumed by the theme at build time."
      >
        <VStack align="stretch" gap="3" textStyle="sm">
          <Text color="fg.muted">
            <strong>Source file:</strong> <Code>packages/tokens/figma/tokens.raw.json</Code>
          </Text>
          <Text color="fg.muted">
            The GDS theme (<Code>@gdesignsystem/theme</Code>) imports this file and maps flat Figma variable keys (e.g. <Code>colors/brand/primary/solid</Code>) into Chakra semantic tokens (e.g. <Code>brand.solid</Code>, <Code>fg</Code>, <Code>bg.default</Code>). Do not edit <Code>tokens.raw.json</Code> by hand; update it via the Figma sync (below).
          </Text>
        </VStack>
      </Section>

      <Section
        title="Syncing from Figma"
        description="To bring Figma variable changes (colors, typography, spacing) into GDS:"
      >
        <VStack align="stretch" gap="3" textStyle="sm" color="fg.muted">
          <Text as="ol" listStyleType="decimal" pl="4" gap="2">
            <Text as="li">Change tokens in Figma (e.g. set brand/primary/base to a new color).</Text>
            <Text as="li">Export variable defs from Figma using the Figma MCP: run <Code>get_variable_defs</Code> with the file/frame that has your variables selected, and save the JSON to <Code>.tmp/figma.variable_defs.json</Code> in the repo root.</Text>
            <Text as="li">Run sync from the GDS repo root: <Code>pnpm gds:tokens:sync</Code>. This reads the exported JSON and writes <Code>packages/tokens/figma/tokens.raw.json</Code>.</Text>
            <Text as="li">Restart the dev server so the theme picks up the new tokens. If needed, clear Vite cache: <Code>rm -rf node_modules/.vite</Code> then <Code>pnpm dev</Code>.</Text>
          </Text>
        </VStack>
      </Section>

      <Section
        title="Semantic tokens in the theme"
        description="The theme exposes Figma tokens as semantic props you use in components."
      >
        <VStack align="stretch" gap="3" textStyle="sm" color="fg.muted">
          <Text>
            <strong>Colors:</strong> <Code>color="fg"</Code>, <Code>color="fg.muted"</Code>, <Code>bg="bg.default"</Code>, <Code>bg="bg.muted"</Code>, <Code>borderColor="border.muted"</Code>
          </Text>
          <Text>
            <strong>Brand:</strong> <Code>colorPalette="brand"</Code> on Button, Badge, etc. resolves to the brand palette from Figma.
          </Text>
          <Text>
            <strong>Semantic:</strong> <Code>color="fg.success"</Code>, <Code>color="fg.error"</Code>, <Code>bg="bg.success"</Code> for status and feedback.
          </Text>
          <Text>
            Using these token names keeps your app consistent with Figma and ensures light/dark and future theme updates apply automatically.
          </Text>
        </VStack>
      </Section>
    </VStack>
  );
}