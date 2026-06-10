import { Box, Code, Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GDSText as Text } from "@gds-vero/react";
export function DesignSystemOverview() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          GDS Design System
        </Heading>
        <Text color="fg.muted" fontSize="lg">
          GDS is a React-based design system built on Chakra UI v3 with GDS theme and
          tokens controlled in Figma. Use brand primary colors and semantic tokens out of
          the box.
        </Text>
      </Box>

      <Box>
        <Heading size="lg" mb="3">
          Get started
        </Heading>
        <Text color="fg.muted" mb="4">
          Fastest path for a new app:{" "}
          <Code>npm create @gds-vero/app@latest my-project</Code> — GDS pre-wired, agent
          rules, and local token sync. See <Link to="/guides/start-using-gds">Start using GDS</Link>.
        </Text>
        <Text color="fg.muted" mb="4">
          GDS is a React-based design system monorepo with <Code>@gds-vero/react</Code>, <Code>@gds-vero/theme</Code>, and{" "}
          <Code>@gds-vero/tokens</Code>. Optionally install <Code>@gds-vero/icons</Code> when you need GDS icon components.
        </Text>

        <Heading size="md" mb="2">
          Guides
        </Heading>
        <VStack align="stretch" gap="1" textStyle="sm" mb="4">
          <Link to="/guides/start-using-gds">Start using GDS</Link>
          <Link to="/guides/for-ai-agents">For AI agents</Link>
          <Link to="/accessibility">Accessibility</Link>
          <Link to="/guides/sync-design-tokens">Sync design tokens</Link>
          <Link to="/guides/chakra-v3-api">Chakra v3 API</Link>
          <Link to="/guides/code-connect">Figma Code Connect</Link>
        </VStack>

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
  "@gds-vero/react": "workspace:*",
  "@gds-vero/icons": "workspace:*",
  "@gds-vero/theme": "workspace:*",
  "@gds-vero/tokens": "workspace:*",
  "@chakra-ui/react": "^3.0.0",
  "@emotion/react": "^11.0.0",
  "react": ">=18",
  "react-dom": ">=18"
}`}
        </Box>
        <Text color="fg.muted" mt="2" textStyle="sm">
          Or install from npm when published:{" "}
          <Code>pnpm add @gds-vero/react @gds-vero/theme @gds-vero/icons @chakra-ui/react @emotion/react react react-dom</Code>
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
{`import { GDSProvider, GDSText as Text } from "@gds-vero/react";

<GDSProvider>
  <App />
</GDSProvider>`}
        </Box>

        <Heading size="md" mb="2" mt="6">
          3. Use components
        </Heading>
        <Text color="fg.muted" mb="2">
          Import Chakra UI components from <Code>@chakra-ui/react</Code> and GDS wrappers (e.g. <Code>GDSButton</Code>) from <Code>@gds-vero/react</Code>. Use GDS icons from <Code>@gds-vero/icons</Code> with Figma token colors. The theme provides GDS tokens (e.g. <Code>color="fg"</Code>, <Code>bg="bg.subtle"</Code>, <Code>colorPalette="brand"</Code>).
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
{`import { Box } from "@chakra-ui/react";
import { GDSButton, GDSText as Text } from "@gds-vero/react";

<Box bg="bg.default" color="fg" p="4">
  <GDSButton colorPalette="brand">Primary action</GDSButton>
  <Text color="fg.muted">Muted text</Text>
</Box>`}
        </Box>

        <Heading size="md" mb="2" mt="6">
          Tokens
        </Heading>
        <Text color="fg.muted" mb="2">
          Design tokens live in <Code>packages/tokens/figma/tokens.raw.json</Code>. The theme reads colors from that file and exposes semantic tokens (fg, bg, border, brand). In the <strong>GDS monorepo</strong>, after exporting Figma MCP <Code>get_variable_defs</Code> to <Code>.tmp/figma.mcp_latest.json</Code> (or ask an agent to “sync tokens”), run:
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
          pnpm gds:tokens:sync:from-mcp
        </Box>
        <Text color="fg.muted" mt="2">
          That merges the selection into existing tokens and updates <Code>tokens.raw.json</Code>. See{" "}
          <strong>Sync design tokens</strong> for the full flow. In projects created with{" "}
          <Code>pnpm create @gds-vero/app@latest</Code> (not <Code>…/create-app</Code> — npm adds an extra <Code>create-</Code> prefix), use <Code>pnpm gds:tokens:sync</Code> — writes <Code>src/gds-tokens.raw.json</Code> and{" "}
          <Code>src/gds-theme-sync.generated.ts</Code>.
        </Text>
      </Box>
    </VStack>
  );
}
