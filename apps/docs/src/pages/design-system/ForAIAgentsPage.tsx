import { Box, Code, Heading, Link, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { GDSText as Text } from "@gdesignsystem/react";
const GITHUB_GUIDE_URL =
  "https://github.com/renegademaster-droid/GDS/blob/main/GDS_FOR_LLM_AGENTS.md";

export function ForAIAgentsPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          For AI agents
        </Heading>
        <Text color="fg.muted">
          Canonical instructions for LLM agents (e.g. ChatGPT, Copilot) when a user asks to build a website or app <strong>using GDS</strong>. Use this so the agent uses only GDS and its stack.
        </Text>
        <Text color="fg.muted" mt="2">
          <strong>Full guide (for agents and context):</strong>{" "}
          <Link href={GITHUB_GUIDE_URL} color="brand.solid" target="_blank" rel="noopener noreferrer">
            GDS_FOR_LLM_AGENTS.md on GitHub
          </Link>
        </Text>
      </Box>

      <Box>
        <Heading size="lg" mb="1">When to use GDS</Heading>
        <Text color="fg.muted" textStyle="sm">
          Use the GDS stack when the user says they want to build something with GDS, using GDS, GDS design system, gdesignsystem, or similar. Then use only the packages and rules below for the UI layer.
        </Text>
      </Box>

      <Section
        title="Install"
        description="Exact install command for a new or existing project."
      >
        <Box
          as="pre"
          p="4"
          borderRadius="md"
          bg="bg.subtle"
          borderWidth="1px"
          borderColor="border.muted"
          fontSize="xs"
          fontFamily="mono"
          whiteSpace="pre-wrap"
          overflowX="auto"
        >
{`pnpm add @gdesignsystem/react @gdesignsystem/theme @gdesignsystem/icons @chakra-ui/react @emotion/react react react-dom`}
        </Box>
      </Section>

      <Section
        title="Minimal app"
        description="Wrap the app in GDSProvider; use Chakra components with semantic tokens and @gdesignsystem/icons."
      >
        <Box
          as="pre"
          p="4"
          borderRadius="md"
          bg="bg.subtle"
          borderWidth="1px"
          borderColor="border.muted"
          fontSize="xs"
          fontFamily="mono"
          whiteSpace="pre-wrap"
          overflowX="auto"
        >
{`import { GDSProvider, GDSText as Text } from "@gdesignsystem/react";
import { Button, Box } from "@chakra-ui/react";
import { CheckIcon } from "@gdesignsystem/icons";

import { GDSText as Text } from "@gdesignsystem/react";
function App() {
  return (
    <GDSProvider>
      <Box bg="bg.default" color="fg" p="4">
        <Text mb="2">Hello, GDS</Text>
        <Button colorPalette="brand">
          <CheckIcon /> Primary action
        </Button>
      </Box>
    </GDSProvider>
  );
}`}
        </Box>
      </Section>

      <Section
        title="Rules for agents"
        description="Must follow when generating code for a GDS-based app."
      >
        <VStack align="stretch" gap="2" textStyle="sm" color="fg.muted">
          <Text>• Use <strong>only</strong> Chakra UI + <Code>@gdesignsystem/react</Code>, <Code>@gdesignsystem/theme</Code>, <Code>@gdesignsystem/icons</Code> for UI. Do not add MUI, Ant Design, Tailwind UI, or other component libraries.</Text>
          <Text>• Use <strong>semantic tokens</strong>: <Code>fg</Code>, <Code>fg.muted</Code>, <Code>bg.default</Code>, <Code>bg.subtle</Code>, <Code>colorPalette="brand"</Code>, etc.</Text>
          <Text>• Use <Code>@gdesignsystem/icons</Code> for icons (e.g. CheckIcon, StarIcon, XIcon). Do not use react-icons or other sets for UI when building with GDS.</Text>
          <Text>• Wrap the React root in <Code>GDSProvider</Code> from <Code>@gdesignsystem/react</Code>.</Text>
        </VStack>
      </Section>

      <Section title="Links" description="Repository, npm packages, and docs.">
        <VStack align="stretch" gap="1" textStyle="sm">
          <Link href="https://github.com/renegademaster-droid/GDS" color="brand.solid" target="_blank" rel="noopener noreferrer">Repository (GitHub)</Link>
          <Link href="https://www.npmjs.com/package/@gdesignsystem/react" color="brand.solid" target="_blank" rel="noopener noreferrer">@gdesignsystem/react</Link>
          <Link href="https://www.npmjs.com/package/@gdesignsystem/theme" color="brand.solid" target="_blank" rel="noopener noreferrer">@gdesignsystem/theme</Link>
          <Link href="https://www.npmjs.com/package/@gdesignsystem/icons" color="brand.solid" target="_blank" rel="noopener noreferrer">@gdesignsystem/icons</Link>
          <Link href="https://renegademaster-droid.github.io/GDS/" color="brand.solid" target="_blank" rel="noopener noreferrer">Docs (this site)</Link>
        </VStack>
      </Section>
    </VStack>
  );
}