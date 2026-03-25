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
        title="3. Run token sync"
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
        title="4. Verify generated files"
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
        title="5. Restart dev server"
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
