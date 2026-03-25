import { Box, Code, Heading, VStack } from "@chakra-ui/react";
import { GDSText as Text } from "@gdesignsystem/react";
import { Section } from "../../components/Section";

export function SyncDesignTokensPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Sync design tokens
        </Heading>
        <Text color="fg.muted">
          Step-by-step guide for syncing Figma token updates into a project created with{" "}
          <Code>create @gdesignsystem/app</Code>. Use the GDS Figma file that contains the required
          styles. You can find the file in the project: GDS - Gofore Design System - For Designers
        </Text>
      </Box>

      <Section
        title="1. Open your project root"
        description="Run all commands in the root of your app."
      >
        <Text color="fg.muted" textStyle="sm" mb="3">
          Open the project either in a terminal or in your preferred development tool (e.g.
          Cursor, Claude).
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
          {`cd my-project`}
        </Box>
      </Section>

      <Section
        title="2. Export variable defs from Figma"
        description="Use Figma MCP get_variable_defs and save output JSON."
      >
        <VStack align="stretch" gap="3" textStyle="sm" color="fg.muted">
          <Text>
            In the Figma file, select one frame at a time that contains the modified variables
            (color, typography, etc.) you want to import.
          </Text>
          <Text>
            Save the MCP JSON output to <Code>.tmp/figma.variable_defs.json</Code> in your project
            root by just giving a prompt Save.
          </Text>
          <Text>
            <strong>
              Exporting the full relevant token set is recommended so local token files stay
              complete.
            </strong>
          </Text>
        </VStack>
      </Section>

      <Section
        title="3. Automatic save (Cursor / Claude)"
        description="Have your agent write the MCP output directly to the expected file."
      >
        <VStack align="stretch" gap="3" textStyle="sm" color="fg.muted">
          <Text>
            If you run the sync from Cursor or Claude, you can ask the agent to save the{" "}
            <Code>get_variable_defs</Code> output directly to{" "}
            <Code>.tmp/figma.variable_defs.json</Code> (and create the <Code>.tmp</Code> folder if
            it doesn&apos;t exist).
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
            {`Run Figma MCP get_variable_defs for my current selection and save the full JSON output to .tmp/figma.variable_defs.json (create .tmp if missing). Then run: pnpm gds:tokens:sync`}
          </Box>
        </VStack>
      </Section>

      <Section
        title="4. One-command shortcut (project rule)"
        description="Make the phrase “sync figma tokens” run the full flow."
      >
        <VStack align="stretch" gap="3" textStyle="sm" color="fg.muted">
          <Text>
            You can create a persistent project rule so that when you type{" "}
            <Code>sync figma tokens</Code>, your agent automatically:
          </Text>
          <Text as="ul" pl="4" style={{ listStyleType: "disc" }}>
            <Text as="li">
              runs Figma MCP <Code>get_variable_defs</Code> for the current selection
            </Text>
            <Text as="li">
              saves the full JSON to <Code>.tmp/figma.variable_defs.json</Code> (creates{" "}
              <Code>.tmp</Code> if missing)
            </Text>
            <Text as="li">
              runs <Code>pnpm gds:tokens:sync</Code>
            </Text>
          </Text>

          <Text>
            In Cursor, add a rule file at <Code>.cursor/rules/figma-tokens.mdc</Code> with:
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
            {`---
alwaysApply: true
---

When the user writes:
- "sync figma tokens"
- "sync tokens"
- "update tokens from figma"

Do the following automatically:
1) Run Figma MCP get_variable_defs (no nodeId = current selection).
2) Save the full JSON output to .tmp/figma.variable_defs.json (overwrite if exists).
3) Run: pnpm gds:tokens:sync
4) Confirm that src/gds-tokens.raw.json and src/gds-theme-sync.generated.ts were updated.`}
          </Box>
        </VStack>
      </Section>

      <Section
        title="5. Run token sync"
        description="Generate local token + theme override files from the exported JSON."
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
      </Section>

      <Section
        title="6. Verify generated files"
        description="After sync, these files should be updated."
      >
        <VStack align="stretch" gap="2" textStyle="sm" color="fg.muted">
          <Text>
            <Code>src/gds-tokens.raw.json</Code> (local raw token output)
          </Text>
          <Text>
            <Code>src/gds-theme-sync.generated.ts</Code> (local Chakra theme override)
          </Text>
        </VStack>
      </Section>

      <Section
        title="7. Restart dev server"
        description="Restart to ensure Vite picks up all changes."
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
          {`pnpm dev`}
        </Box>
      </Section>

      <Section
        title="Troubleshooting"
        description="Most common sync issue and fix."
      >
        <Text color="fg.muted" textStyle="sm">
          If sync fails with missing input file, ensure this exact path exists:{" "}
          <Code>.tmp/figma.variable_defs.json</Code>.
        </Text>
      </Section>
    </VStack>
  );
}
