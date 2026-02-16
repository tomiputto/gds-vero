import { Box, Code, Heading, Text, VStack } from "@chakra-ui/react";

export function DesignSystemOverview() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="2xl" mb="2">
          GDS Design System
        </Heading>
        <Text color="fg.muted" fontSize="lg">
          A design system built on Chakra UI v3 with GDS theme and tokens. Use brand primary colors and semantic tokens out of the box.
        </Text>
      </Box>

      <Box>
        <Heading size="lg" mb="3">
          Get started
        </Heading>
        <Text color="fg.muted" mb="4">
          GDS is a monorepo with <Code>@gds/react</Code>, <Code>@gds/theme</Code>, and <Code>@gds/tokens</Code>. In your app, use the React package and wrap the tree with the provider.
        </Text>

        <Heading size="md" mb="2" mt="6">
          1. Install
        </Heading>
        <Text color="fg.muted" mb="2">
          In a pnpm workspace, add the GDS packages as workspace dependencies:
        </Text>
        <Box
          as="pre"
          p="4"
          borderRadius="md"
          bg="bg.muted"
          borderWidth="1px"
          borderColor="border.muted"
          fontSize="sm"
          fontFamily="mono"
          whiteSpace="pre-wrap"
          overflowX="auto"
        >
{`"dependencies": {
  "@gds/react": "workspace:*",
  "@gds/theme": "workspace:*",
  "@gds/tokens": "workspace:*"
}`}
        </Box>
        <Text color="fg.muted" mt="2" textStyle="sm">
          Or install from npm when published: <Code>pnpm add @gds/react</Code>
        </Text>

        <Heading size="md" mb="2" mt="6">
          2. Wrap your app
        </Heading>
        <Text color="fg.muted" mb="2">
          Use <Code>GDSProvider</Code> so Chakra gets the GDS theme. Optionally add a theme provider for light/dark mode.
        </Text>
        <Box
          as="pre"
          p="4"
          borderRadius="md"
          bg="bg.muted"
          borderWidth="1px"
          borderColor="border.muted"
          fontSize="sm"
          fontFamily="mono"
          whiteSpace="pre-wrap"
          overflowX="auto"
        >
{`import { GDSProvider } from "@gds/react";

<GDSProvider>
  <App />
</GDSProvider>`}
        </Box>

        <Heading size="md" mb="2" mt="6">
          3. Use components
        </Heading>
        <Text color="fg.muted" mb="2">
          Import Chakra UI components from <Code>@chakra-ui/react</Code> and GDS wrappers (e.g. <Code>GDSButton</Code>) from <Code>@gds/react</Code>. Use GDS icons from <Code>@gds/icons</Code> with Figma token colors. The theme provides GDS tokens (e.g. <Code>color="fg"</Code>, <Code>bg="bg.subtle"</Code>, <Code>colorPalette="brand"</Code>).
        </Text>
        <Box
          as="pre"
          p="4"
          borderRadius="md"
          bg="bg.muted"
          borderWidth="1px"
          borderColor="border.muted"
          fontSize="sm"
          fontFamily="mono"
          whiteSpace="pre-wrap"
          overflowX="auto"
        >
{`import { Button, Box, Text } from "@chakra-ui/react";

<Box bg="bg.default" color="fg" p="4">
  <Button colorPalette="brand">Primary action</Button>
  <Text color="fg.muted">Muted text</Text>
</Box>`}
        </Box>

        <Heading size="md" mb="2" mt="6">
          Tokens
        </Heading>
        <Text color="fg.muted" mb="2">
          Design tokens live in <Code>packages/tokens/figma/tokens.raw.json</Code>. The theme reads colors from that file and exposes semantic tokens (fg, bg, border, brand). To sync from Figma, run:
        </Text>
        <Box
          as="pre"
          p="4"
          borderRadius="md"
          bg="bg.muted"
          borderWidth="1px"
          borderColor="border.muted"
          fontSize="sm"
          fontFamily="mono"
          whiteSpace="pre-wrap"
        >
          pnpm gds:tokens:sync
        </Box>
      </Box>
    </VStack>
  );
}
