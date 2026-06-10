import { useState } from "react";
import { Box, Code, Heading, SegmentGroup, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { GDSText as Text } from "@gds-vero/react";
export function StartUsingGdsPage() {
  type Flow = "classic" | "createApp";
  const [flow, setFlow] = useState<Flow>("classic");

  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Start using GDS
        </Heading>
        <Text color="fg.muted">Step-by-step setup for a new React app with GDS.</Text>
      </Box>

      <SegmentGroup.Root
        value={flow}
        onValueChange={(details) => setFlow(details.value as Flow)}
        display="inline-flex"
        w="fit-content"
        alignSelf="flex-start"
      >
        <SegmentGroup.Indicator />
        <SegmentGroup.Items
          items={[
            { value: "classic", label: "Manual setup" },
            { value: "createApp", label: "One-click setup" },
          ]}
        />
      </SegmentGroup.Root>

      {flow === "classic" ? (
        <>
          <Section
            title="1. Create a project folder on your machine"
            description="Create or choose the folder where your new project will live."
          >
            <Text color="fg.muted">
              Example: create a folder like <Code>my-app</Code> and open a terminal in it.
            </Text>
          </Section>

          <Section
            title="2. Install the React template"
            description="Choose one of these commands based on where you want the app."
          >
            <VStack align="stretch" gap="3" color="fg.muted">
              <Text fontWeight="semibold" color="fg">
                Into the current folder:
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
                {`npm create vite@latest . -- --template react-ts`}
              </Box>
              <Text fontWeight="semibold" color="fg">
                Create a new folder "Demo":
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
                {`npm create vite@latest demo -- --template react-ts`}
              </Box>
            </VStack>
          </Section>

          <Section
            title="3. Clean up React default CSS"
            description='Prompt: "I will install my own design system next, so remove all unnecessary CSS."'
          >
            <Text color="fg.muted">
              Remove template CSS (such as default Vite React styles) so UI starts from a clean
              base before adding GDS.
            </Text>
          </Section>

          <Section
            title="4. After the React template is installed, add the GDS install script"
            description="Add this to the scripts section in package.json:"
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
              {`{
  "scripts": {
    "dev": "...",
    "build": "...",
    "setup:gds": "rm -rf node_modules package-lock.json && npm cache verify && npm install react react-dom && npm install @chakra-ui/react @emotion/react && npm install @gds-vero/tokens@latest && npm install @gds-vero/theme@latest @gds-vero/icons@latest @gds-vero/react@latest"
  }
}`}
            </Box>
          </Section>

          <Section
            title="5. Install GDS"
            description="Run the setup script from your project root."
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
              {`npm run setup:gds`}
            </Box>
          </Section>

          <Section
            title="6. Create a permanent project rule"
            description='Prompt: "Create a permanent project rule that from now on all UI must be implemented exclusively using GDS components and styles."'
          >
            <VStack align="stretch" gap="2" color="fg.muted">
              <Text>
                In this repository, add a persistent AI/project rule so future tasks always use
                GDS components and styles for UI implementation. Point agents to{" "}
                <Code>GDS_FOR_LLM_AGENTS.md</Code> in the repo root (or{" "}
                <Code>node_modules/@gds-vero/react/GDS_FOR_LLM_AGENTS.md</Code> in npm projects).
              </Text>
              <Text>
                For npm apps, prefer <Code>npm create @gds-vero/app@latest</Code> — agent rules
                and accessibility lint are pre-configured.
              </Text>
            </VStack>
          </Section>
        </>
      ) : (
        <>
          <Section
            title="1. Choose a folder for your project"
            description="Go to the location under which you want the project folder to be created."
          >
            <Text color="fg.muted">
              Example: open a terminal in your desired parent folder (or do the same from Cursor/Claude).
            </Text>
          </Section>

          <Section
            title="2. Create the project automatically"
            description="Run one of these commands. Replace `my-project` with your project name."
          >
            <VStack align="stretch" gap="3" color="fg.muted">
              <Text fontWeight="semibold" color="fg">
                With npm:
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
                {`npm create @gds-vero/app@latest my-project`}
              </Box>

              <Text fontWeight="semibold" color="fg">
                With pnpm:
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
                {`pnpm create @gds-vero/app@latest my-project`}
              </Box>
            </VStack>

            <Text mt="3" color="fg.muted">
              After the command finishes, follow the printed “Next steps” (including how to start
              your dev server). The scaffold also includes <Code>AGENTS.md</Code>,{" "}
              <Code>CLAUDE.md</Code>, <Code>.cursor/rules/gds-llm-agents.mdc</Code>,{" "}
              <Code>.cursor/rules/gds-accessibility.mdc</Code>, and{" "}
              <Code>.github/copilot-instructions.md</Code> so AI assistants follow GDS automatically.
            </Text>
            <Text mt="2" color="fg.muted">
              ESLint with <Code>eslint-plugin-jsx-a11y</Code> is included — run <Code>npm run lint</Code> or{" "}
              <Code>pnpm lint</Code> after UI changes. See <Code>For AI agents</Code> and{" "}
              <Code>Accessibility</Code> in the docs sidebar.
            </Text>
            <Text mt="2" color="fg.muted">
              Use <Code>@gds-vero/app</Code>, not <Code>@gds-vero/create-app</Code>: npm
              prepends <Code>create-</Code> and would look for a non-existent{" "}
              <Code>create-create-app</Code> package. Alternative:{" "}
              <Code>npx create-gds-vero-app my-project</Code>.
            </Text>
            <Text mt="2" color="fg.muted">
              Tip: adding <Code>@latest</Code> helps avoid cached older versions when using{" "}
              <Code>npm create</Code> / <Code>pnpm create</Code>.
            </Text>
          </Section>
          <Section
            title="3. Sync Figma tokens in your new app (optional)"
            description="After exporting get_variable_defs JSON to .tmp/figma.variable_defs.json, run:"
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
              {`pnpm gds:tokens:sync`}
            </Box>
            <Text mt="3" color="fg.muted">
              This generates local sync files at <Code>src/gds-tokens.raw.json</Code> and <Code>src/gds-theme-sync.generated.ts</Code>.
            </Text>
            <Text mt="2" color="fg.muted">
              In Cursor, you can ask an agent to “sync tokens” — it uses Figma MCP and runs the sync
              script. See <Code>Sync design tokens</Code> in the docs sidebar for the full flow.
            </Text>
          </Section>
        </>
      )}
    </VStack>
  );
}