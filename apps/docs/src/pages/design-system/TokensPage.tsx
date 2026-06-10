import { Box, Code, Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Section } from "../../components/Section";
import { GDSText as Text } from "@gds-vero/react";
export function TokensPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
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
            The GDS theme (<Code>@gds-vero/theme</Code>) imports this file and maps flat Figma variable keys (e.g. <Code>colors/brand/primary/solid</Code>) into Chakra semantic tokens (e.g. <Code>brand.solid</Code>, <Code>fg</Code>, <Code>bg.default</Code>). Do not edit <Code>tokens.raw.json</Code> by hand; update it via the Figma sync flow.
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

      <Section
        title="Sync from Figma"
        description="Update tokens.raw.json from Figma variables."
      >
        <Text color="fg.muted" textStyle="sm">
          In the <strong>GDS monorepo</strong>, run <Code>pnpm gds:tokens:sync:from-mcp</Code> after
          exporting Figma MCP output. In apps created with{" "}
          <Code>npm create @gds-vero/app@latest</Code>, run <Code>pnpm gds:tokens:sync</Code>.
          See <Link to="/guides/sync-design-tokens">Sync design tokens</Link> for the full workflow.
        </Text>
      </Section>
    </VStack>
  );
}