import { Box, Code, Heading, Link, VStack, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Section } from "../../components/Section";
import { GDSText as Text } from "@gds-vero/react";
import { InfoIcon } from "@gds-vero/icons";
const GITHUB_GUIDE_URL =
  "https://github.com/tomiputto/gds-vero/blob/main/GDS_FOR_LLM_AGENTS.md";
const RAW_GUIDE_URL =
  "https://raw.githubusercontent.com/tomiputto/gds-vero/main/GDS_FOR_LLM_AGENTS.md";
const GITHUB_RELEASE_NOTES_URL =
  "https://github.com/tomiputto/gds-vero/blob/main/GDS_NPM_RELEASE_NOTES.md";
const RAW_RELEASE_NOTES_URL =
  "https://raw.githubusercontent.com/tomiputto/gds-vero/main/GDS_NPM_RELEASE_NOTES.md";
const GITHUB_COMPONENT_GUIDE_URL = `${GITHUB_GUIDE_URL}#component-selection-guide`;
const PUBLISHED_DOCS_URL = "https://tomiputto.github.io/gds-vero/";
/** Keep in sync with packages/react/package.json on publish */
const REACT_NPM_VERSION = "0.1.23";
const REACT_NPM_URL = "https://www.npmjs.com/package/@gds-vero/react";

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
            {" · "}
            <Link
              href={GITHUB_COMPONENT_GUIDE_URL}
              color="brand.solid"
              fontWeight="semibold"
              textDecoration="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component selection guide
            </Link>
            {" · "}
            <Link
              href={GITHUB_RELEASE_NOTES_URL}
              color="brand.solid"
              fontWeight="semibold"
              textDecoration="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              npm release notes
            </Link>
          </HStack>
          <Text mt="2" fontSize="sm" color="fg.muted">
            Latest bundled in{" "}
            <Link href={REACT_NPM_URL} color="brand.solid" target="_blank" rel="noopener noreferrer">
              @gds-vero/react@{REACT_NPM_VERSION}
            </Link>
            {" · Custom GPT raw: "}
            <Link href={RAW_GUIDE_URL} color="brand.solid" target="_blank" rel="noopener noreferrer">
              GDS_FOR_LLM_AGENTS.md
            </Link>
            {" · "}
            <Link href={RAW_RELEASE_NOTES_URL} color="brand.solid" target="_blank" rel="noopener noreferrer">
              GDS_NPM_RELEASE_NOTES.md
            </Link>
          </Text>
        </Box>
      </Box>

      <Box>
        <Heading size="lg" mb="1">When to use GDS</Heading>
        <Text color="fg.muted">
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
        <VStack align="stretch" gap="2" color="fg.muted">
          <Text>• Use <strong>only</strong> Chakra UI v3 + <Code>@gds-vero/react</Code>, <Code>@gds-vero/theme</Code>, <Code>@gds-vero/icons</Code> for UI. Do not add MUI, Ant Design, Tailwind UI, or other component libraries.</Text>
          <Text>• <strong>Chakra v3 only</strong> — never import v2 names (<Code>FormControl</Code>, <Code>Modal</Code>, <Code>Divider</Code>, etc.). See <RouterLink to="/guides/chakra-v3-api">Chakra v3 API</RouterLink>.</Text>
          <Text>• <strong>Imports:</strong> <Code>GDSProvider</Code>, <Code>GDSButton</Code>, <Code>GDSText</Code>, <Code>GDSHeading</Code> from <Code>@gds-vero/react</Code>. <Code>Field</Code>, <Code>Card</Code>, <Code>Dialog</Code>, <Code>Button</Code>, etc. from <Code>@chakra-ui/react</Code>.</Text>
          <Text>• Use <strong>semantic tokens</strong>: <Code>fg</Code>, <Code>fg.muted</Code>, <Code>bg.default</Code>, <Code>bg.subtle</Code>, <Code>colorPalette="brand"</Code>, etc.</Text>
          <Text>• Use <Code>@gds-vero/icons</Code> for icons (e.g. CheckIcon, StarIcon, XIcon). Do not use react-icons for GDS UI.</Text>
          <Text>• Wrap the React root in <Code>GDSProvider</Code> from <Code>@gds-vero/react</Code>.</Text>
          <Text>• Page title: <Code>GDSHeading as="h1"</Code> (42px from theme); section <Code>as="h2"</Code> (34px). Do not use <Code>size="xl"</Code> or <Code>size="2xl"</Code> on <Code>h1</Code>. <Code>GDSText textStyle="body"</Code> for body copy.</Text>
        </VStack>
      </Section>

      <Section
        title="Verify component API (mandatory)"
        description="Do not implement compound components from memory — match GDS docs Basic examples."
      >
        <VStack align="stretch" gap="2" color="fg.muted">
          <Text>
            Selecting the right component (e.g. <RouterLink to="/accordion">Accordion</RouterLink> vs{" "}
            <RouterLink to="/collapsible">Collapsible</RouterLink>) is not enough. Agents must{" "}
            <strong>open the GDS docs page</strong> and copy slot names from the <strong>Basic</strong> example
            before writing JSX. Training-data Chakra APIs are often wrong (v2 names, missing{" "}
            <Code>ItemIndicator</Code>, etc.).
          </Text>
          <Text>
            See <strong>Mandatory: verify component API before coding</strong> in{" "}
            <Link href={GITHUB_GUIDE_URL} color="brand.solid" target="_blank" rel="noopener noreferrer">
              GDS_FOR_LLM_AGENTS.md
            </Link>
            — verified snippets for{" "}
            <RouterLink to="/accordion">Accordion</RouterLink>,{" "}
            <RouterLink to="/dialog">Dialog</RouterLink>,{" "}
            <RouterLink to="/tabs">Tabs</RouterLink>,{" "}
            <RouterLink to="/field">Field</RouterLink>,{" "}
            <RouterLink to="/card">Card</RouterLink>,{" "}
            <RouterLink to="/guides/page-layout">Page layout</RouterLink>,{" "}
            <RouterLink to="/breadcrumb">Breadcrumb</RouterLink>,{" "}
            <RouterLink to="/button">Button</RouterLink>, and{" "}
            <RouterLink to="/examples/vero-main-header">VeroMainHeader</RouterLink>. <strong>Custom GPT Instructions</strong> must require docs lookup for other compounds before generating code.
          </Text>
        </VStack>
      </Section>

      <Section
        title="Component selection guide"
        description="Which Chakra/GDS component to use — without duplicating full APIs in the agent file."
      >
        <VStack align="stretch" gap="2" color="fg.muted">
          <Text>
            <Code>GDS_FOR_LLM_AGENTS.md</Code> includes a{" "}
            <Link
              href={GITHUB_COMPONENT_GUIDE_URL}
              color="brand.solid"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component selection guide
            </Link>{" "}
            with:
          </Text>
          <Text as="ul" ps="4">
            <li>
              <strong>Choose X, not Y</strong> — e.g.{" "}
              <RouterLink to="/switch">Switch</RouterLink> for form settings vs{" "}
              <RouterLink to="/toggle">Toggle</RouterLink> for toolbar pressed state;{" "}
              <RouterLink to="/dialog">Dialog</RouterLink> vs{" "}
              <RouterLink to="/drawer">Drawer</RouterLink>;{" "}
              <RouterLink to="/select">Select</RouterLink> vs{" "}
              <RouterLink to="/combobox">Combobox</RouterLink>;{" "}
              <RouterLink to="/alert">Alert</RouterLink> vs{" "}
              <RouterLink to="/toast">Toast</RouterLink>.
            </li>
            <li>
              <strong>Task → component</strong> — common UI tasks mapped to imports and docs paths.
            </li>
            <li>
              <strong>Component index</strong> — compact list of all documented components by category.
            </li>
          </Text>
          <Text>
            For examples and accessibility notes per component, use this docs site (
            <Link href={PUBLISHED_DOCS_URL} color="brand.solid" target="_blank" rel="noopener noreferrer">
              {PUBLISHED_DOCS_URL}
            </Link>
            ) or browse from the sidebar — paths match the guide (e.g. <Code>/dialog</Code>,{" "}
            <Code>/field</Code>).
          </Text>
          <Text>
            Components without a GDS docs page yet (e.g. DatePicker, Tag): Chakra v3 docs or Chakra MCP — still
            follow compound APIs in the guide.
          </Text>
        </VStack>
      </Section>

      <Section
        title="npm release notes (Custom GPT)"
        description="Version-specific changes in published @gds-vero/* packages — what agents must know after each npm publish."
      >
        <VStack align="stretch" gap="2" color="fg.muted">
          <Text>
            <Code>GDS_NPM_RELEASE_NOTES.md</Code> lists current npm versions, upgrade guidance for older
            installs, and agent-relevant changes per release (typography, new components, scaffold pins).
            Use it together with <Code>GDS_FOR_LLM_AGENTS.md</Code> — rules in the guide, versions in release
            notes.
          </Text>
          <Text>
            <Link
              href={GITHUB_RELEASE_NOTES_URL}
              color="brand.solid"
              target="_blank"
              rel="noopener noreferrer"
            >
              GDS_NPM_RELEASE_NOTES.md on GitHub
            </Link>
            {" · bundled at "}
            <Code>node_modules/@gds-vero/react/GDS_NPM_RELEASE_NOTES.md</Code> after install
          </Text>
          <Text>
            <strong>Custom GPT:</strong> upload both agent files as knowledge. In Instructions, require
            checking release notes for current versions (e.g. <Code>@gds-vero/theme@^0.1.18</Code>,{" "}
            <Code>@gds-vero/react@^{REACT_NPM_VERSION}</Code>) before generating UI.
          </Text>
        </VStack>
      </Section>

      <Section
        title="Scaffold with agent rules (recommended)"
        description="create-app ships Cursor, Claude, and Copilot configuration automatically."
      >
        <VStack align="stretch" gap="2" color="fg.muted">
          <Text>
            <Code>npm create @gds-vero/app@latest my-project</Code> (or pnpm equivalent) copies{" "}
            <Code>AGENTS.md</Code>, <Code>CLAUDE.md</Code>, <Code>.cursor/rules/gds-llm-agents.mdc</Code>,{" "}
            <Code>.cursor/rules/gds-compliance-review.mdc</Code>, <Code>.cursor/rules/gds-accessibility.mdc</Code>, and{" "}
            <Code>.github/copilot-instructions.md</Code>.
          </Text>
          <Text>
            After install, the canonical guides are at{" "}
            <Code>node_modules/@gds-vero/react/GDS_FOR_LLM_AGENTS.md</Code> and{" "}
            <Code>node_modules/@gds-vero/react/GDS_NPM_RELEASE_NOTES.md</Code> (
            <Code>@gds-vero/react@^{REACT_NPM_VERSION}</Code> or newer).
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
        title="GDS compliance (mandatory for agents)"
        description="Every UI delivery must end with the full delivery audit report — all categories, PASS / WARNING / FAIL."
      >
        <VStack align="stretch" gap="2" color="fg.muted">
          <Text>
            The guide includes <strong>GDS-VERO compliance review (mandatory for agents)</strong> with an internal
            checklist and a required <strong>Delivery audit report</strong> at the end of every UI task.
          </Text>
          <Text>
            Agents must report: <strong>Preview URL</strong>, <strong>Implementation summary</strong>, then{" "}
            <strong>GDS-VERO Compliance Review</strong> with status for each category —{" "}
            <strong>Design System</strong>, <strong>Buttons</strong>, <strong>Chakra v3 API</strong>, <strong>Surface tokens</strong>,{" "}
            <strong>Typography</strong>, <strong>Page layout</strong>, <strong>Accessibility</strong>, <strong>Responsive layout</strong> — plus{" "}
            <strong>Deviations</strong>, overall <strong>Compliance Status</strong> (PASS / WARNING / FAIL),{" "}
            <strong>Recommended follow-ups</strong>, and <strong>Lint</strong>.
          </Text>
          <Text>
            Do not skip or shorten the audit report — even when the user only asked for a single component or layout.
          </Text>
        </VStack>
      </Section>

      <Section
        title="Accessibility (mandatory for agents)"
        description="WCAG 2.1 Level AA — complete the checklist after every UI change."
      >
        <VStack align="stretch" gap="2" color="fg.muted">
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
            available, fix all <Code>jsx-a11y/*</Code> errors, and report under <strong>Accessibility</strong> in
            the mandatory Delivery audit report.
          </Text>
        </VStack>
      </Section>

      <Section
        title="LLM examples"
        description="Copy/paste prompts for popular LLMs (includes Claude, ChatGPT etc)."
      >
        <VStack align="stretch" gap="3" color="fg.muted">
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
- Pick components using GDS_FOR_LLM_AGENTS.md Component selection guide (Switch vs Toggle, Dialog vs Drawer, etc.).

Output:
Provide complete React + TSX code (no pseudocode) for the page.
End with the full Delivery audit report from GDS_FOR_LLM_AGENTS.md (Preview URL, Implementation summary, GDS-VERO Compliance Review with PASS/WARNING/FAIL per category, Deviations, Compliance Status, Recommended follow-ups, Lint).`}
          </Box>
        </VStack>
      </Section>

      <Section
        title="Latest agent files (Custom GPT & npm)"
        description="Direct links to the newest GDS_FOR_LLM_AGENTS.md and release notes."
      >
        <VStack align="stretch" gap="2" color="fg.muted">
          <Text>
            <strong>GitHub (main, always latest):</strong>{" "}
            <Link href={GITHUB_GUIDE_URL} color="brand.solid" target="_blank" rel="noopener noreferrer">
              GDS_FOR_LLM_AGENTS.md
            </Link>
            {" · "}
            <Link href={GITHUB_RELEASE_NOTES_URL} color="brand.solid" target="_blank" rel="noopener noreferrer">
              GDS_NPM_RELEASE_NOTES.md
            </Link>
          </Text>
          <Text>
            <strong>Raw URLs (Custom GPT knowledge / Actions):</strong>{" "}
            <Link href={RAW_GUIDE_URL} color="brand.solid" target="_blank" rel="noopener noreferrer">
              raw GDS_FOR_LLM_AGENTS.md
            </Link>
            {" · "}
            <Link href={RAW_RELEASE_NOTES_URL} color="brand.solid" target="_blank" rel="noopener noreferrer">
              raw GDS_NPM_RELEASE_NOTES.md
            </Link>
          </Text>
          <Text>
            <strong>npm bundle:</strong> install{" "}
            <Link href={REACT_NPM_URL} color="brand.solid" target="_blank" rel="noopener noreferrer">
              @gds-vero/react@{REACT_NPM_VERSION}
            </Link>{" "}
            (or newer) — agent files ship inside the package at{" "}
            <Code>node_modules/@gds-vero/react/GDS_FOR_LLM_AGENTS.md</Code> and{" "}
            <Code>GDS_NPM_RELEASE_NOTES.md</Code>.
          </Text>
        </VStack>
      </Section>

      <Section title="Links" description="Repository, npm packages, and docs.">
        <VStack align="stretch" gap="1">
          <Link href={GITHUB_GUIDE_URL} color="brand.solid" target="_blank" rel="noopener noreferrer">GDS_FOR_LLM_AGENTS.md (GitHub)</Link>
          <Link href={RAW_GUIDE_URL} color="brand.solid" target="_blank" rel="noopener noreferrer">GDS_FOR_LLM_AGENTS.md (raw — Custom GPT)</Link>
          <Link href={GITHUB_RELEASE_NOTES_URL} color="brand.solid" target="_blank" rel="noopener noreferrer">GDS_NPM_RELEASE_NOTES.md (GitHub)</Link>
          <Link href={RAW_RELEASE_NOTES_URL} color="brand.solid" target="_blank" rel="noopener noreferrer">GDS_NPM_RELEASE_NOTES.md (raw — Custom GPT)</Link>
          <Link href={GITHUB_COMPONENT_GUIDE_URL} color="brand.solid" target="_blank" rel="noopener noreferrer">Component selection guide (GitHub anchor)</Link>
          <Link href={PUBLISHED_DOCS_URL} color="brand.solid" target="_blank" rel="noopener noreferrer">Published GDS docs</Link>
          <Link href="https://github.com/tomiputto/gds-vero" color="brand.solid" target="_blank" rel="noopener noreferrer">Repository (GitHub)</Link>
          <Link href={REACT_NPM_URL} color="brand.solid" target="_blank" rel="noopener noreferrer">@gds-vero/react@{REACT_NPM_VERSION}</Link>
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