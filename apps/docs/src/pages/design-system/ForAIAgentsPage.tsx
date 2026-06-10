import { Box, Code, Heading, Link, VStack, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Section } from "../../components/Section";
import { GDSText as Text } from "@gds-vero/react";
import { InfoIcon } from "@gds-vero/icons";
const GITHUB_GUIDE_URL =
  "https://github.com/tomiputto/gds-vero/blob/main/GDS_FOR_LLM_AGENTS.md";

export function ForAIAgentsPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          For AI agents
        </Heading>
        <Text color="fg.muted">
          Canonical instructions for LLM agents (e.g. ChatGPT, Copilot) when a user asks to build a website or app with GDS. Use this so the agent uses only GDS and its stack.
        </Text>
        <Box
          mt="4"
          p="3"
          borderRadius="md"
          bg="bg.subtle"
          borderWidth="1px"
          borderColor="border.muted"
        >
          <HStack gap="2" align="center" color="fg.muted" mb="0">
            <Box aria-hidden>
              <InfoIcon color="fg" boxSize="4" />
            </Box>
            <Text as="span" color="fg" fontWeight="semibold">
              Full guide:
            </Text>{" "}
            <Link
              href={GITHUB_GUIDE_URL}
              color="brand.solid"
              fontWeight="semibold"
              textDecoration="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GDS_FOR_LLM_AGENTS.md on GitHub
            </Link>
          </HStack>
        </Box>
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
{`pnpm add @gds-vero/react @gds-vero/theme @gds-vero/icons @chakra-ui/react @emotion/react react react-dom`}
        </Box>
      </Section>

      <Section
        title="Minimal app"
        description="Wrap the app in GDSProvider; use Chakra components with semantic tokens and @gds-vero/icons."
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
{`import { GDSProvider, GDSText as Text } from "@gds-vero/react";
import { Button, Box } from "@chakra-ui/react";
import { CheckIcon } from "@gds-vero/icons";
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
          <Text>• Use <strong>only</strong> Chakra UI v3 + <Code>@gds-vero/react</Code>, <Code>@gds-vero/theme</Code>, <Code>@gds-vero/icons</Code> for UI. Do not add MUI, Ant Design, Tailwind UI, or other component libraries.</Text>
          <Text>• <strong>Chakra v3 only</strong> — never import v2 names (<Code>FormControl</Code>, <Code>Modal</Code>, <Code>Divider</Code>, etc.). See <RouterLink to="/guides/chakra-v3-api">Chakra v3 API</RouterLink>.</Text>
          <Text>• <strong>Imports:</strong> <Code>GDSProvider</Code>, <Code>GDSButton</Code>, <Code>GDSText</Code>, <Code>GDSHeading</Code> from <Code>@gds-vero/react</Code>. <Code>Field</Code>, <Code>Card</Code>, <Code>Dialog</Code>, <Code>Button</Code>, etc. from <Code>@chakra-ui/react</Code>.</Text>
          <Text>• Use <strong>semantic tokens</strong>: <Code>fg</Code>, <Code>fg.muted</Code>, <Code>bg.default</Code>, <Code>bg.subtle</Code>, <Code>colorPalette="brand"</Code>, etc.</Text>
          <Text>• Use <Code>@gds-vero/icons</Code> for icons (e.g. CheckIcon, StarIcon, XIcon). Do not use react-icons for GDS UI.</Text>
          <Text>• Wrap the React root in <Code>GDSProvider</Code> from <Code>@gds-vero/react</Code>.</Text>
          <Text>• Use <Code>GDSHeading size="xl" as="h2"</Code> for page/section titles; <Code>GDSText textStyle="body"</Code> for body copy.</Text>
        </VStack>
      </Section>

      <Section
        title="Scaffold with agent rules (recommended)"
        description="create-app ships Cursor, Claude, and Copilot configuration automatically."
      >
        <VStack align="stretch" gap="2" textStyle="sm" color="fg.muted">
          <Text>
            <Code>npm create @gds-vero/app@latest my-project</Code> (or pnpm equivalent) copies{" "}
            <Code>AGENTS.md</Code>, <Code>CLAUDE.md</Code>, <Code>.cursor/rules/gds-llm-agents.mdc</Code>,{" "}
            <Code>.cursor/rules/gds-accessibility.mdc</Code>, and <Code>.github/copilot-instructions.md</Code>.
          </Text>
          <Text>
            After install, the canonical guide is at{" "}
            <Code>node_modules/@gds-vero/react/GDS_FOR_LLM_AGENTS.md</Code>.
          </Text>
          <Text>
            Scaffold includes ESLint + <Code>eslint-plugin-jsx-a11y</Code> — run <Code>npm run lint</Code> or{" "}
            <Code>pnpm lint</Code> after UI changes.
          </Text>
          <Text>
            See <RouterLink to="/guides/start-using-gds">Start using GDS</RouterLink> for the full flow.
          </Text>
        </VStack>
      </Section>

      <Section
        title="Accessibility (mandatory for agents)"
        description="WCAG 2.1 Level AA — complete the checklist after every UI change."
      >
        <VStack align="stretch" gap="2" textStyle="sm" color="fg.muted">
          <Text>
            The full guide includes <strong>Accessibility</strong> and{" "}
            <strong>Accessibility review (mandatory for agents)</strong> sections with a checklist,
            component patterns, and lint instructions.
          </Text>
          <Text>
            Human reference: <RouterLink to="/accessibility">Accessibility</RouterLink> on this site.
          </Text>
          <Text>
            After UI work: complete the checklist in <Code>GDS_FOR_LLM_AGENTS.md</Code>, run lint if
            available, fix all <Code>jsx-a11y/*</Code> errors, and report the outcome briefly.
          </Text>
        </VStack>
      </Section>

      <Section
        title="LLM examples"
        description="Copy/paste prompts for popular LLMs (includes Claude, ChatGPT etc)."
      >
        <VStack align="stretch" gap="3" textStyle="sm" color="fg.muted">
          <Text>
            <strong>LLM example prompt:</strong>
          </Text>
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
            {`User request:
Build a simple marketing landing page using GDS.

Rules (must follow):
- Use ONLY Chakra UI v3 components from @chakra-ui/react for UI.
- Use ONLY wrappers from @gds-vero/react (e.g. GDSProvider, GDSButton).
- Use @gds-vero/icons for icons (e.g. CheckIcon, XIcon).
- Use semantic tokens (color="fg", fg.muted, bg.default/bg.subtle, colorPalette="brand") wherever applicable.
- Wrap the React root in GDSProvider.

Output:
Provide complete React + TSX code (no pseudocode) for the page.`}
          </Box>
        </VStack>
      </Section>

      <Section title="Links" description="Repository, npm packages, and docs.">
        <VStack align="stretch" gap="1" textStyle="sm">
          <Link href={GITHUB_GUIDE_URL} color="brand.solid" target="_blank" rel="noopener noreferrer">GDS_FOR_LLM_AGENTS.md (GitHub)</Link>
          <Link href="https://github.com/tomiputto/gds-vero" color="brand.solid" target="_blank" rel="noopener noreferrer">Repository (GitHub)</Link>
          <Link href="https://www.npmjs.com/package/@gds-vero/react" color="brand.solid" target="_blank" rel="noopener noreferrer">@gds-vero/react</Link>
          <Link href="https://www.npmjs.com/package/@gds-vero/theme" color="brand.solid" target="_blank" rel="noopener noreferrer">@gds-vero/theme</Link>
          <Link href="https://www.npmjs.com/package/@gds-vero/icons" color="brand.solid" target="_blank" rel="noopener noreferrer">@gds-vero/icons</Link>
          <RouterLink to="/guides/start-using-gds">Start using GDS</RouterLink>
          <RouterLink to="/accessibility">Accessibility</RouterLink>
          <RouterLink to="/guides/chakra-v3-api">Chakra v3 API</RouterLink>
          <RouterLink to="/guides/code-connect">Figma Code Connect</RouterLink>
          <RouterLink to="/guides/sync-design-tokens">Sync design tokens</RouterLink>
        </VStack>
      </Section>
    </VStack>
  );
}