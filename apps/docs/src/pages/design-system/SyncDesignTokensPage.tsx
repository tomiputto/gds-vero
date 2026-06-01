import { Box, Code, Heading, VStack } from "@chakra-ui/react";
import { GDSText as Text } from "@gdesignsystem/react";
import { Section } from "../../components/Section";

const MONOREPO_CURSOR_RULE = `---
alwaysApply: true
---
# GDS Figma → tokens.raw.json sync

When the user writes:
- "sync figma tokens"
- "sync tokens"
- "update tokens from figma"

Do the following steps automatically:

1. Use the Figma MCP tool **get_variable_defs** (no nodeId = current Figma selection).
2. Save the full JSON output to **.tmp/figma.mcp_latest.json** (overwrite if exists).
3. Run **pnpm gds:tokens:sync:from-mcp** — merges MCP result into existing tokens, writes .tmp/figma.variable_defs.json, updates packages/tokens/figma/tokens.raw.json.
4. Confirm packages/tokens/figma/tokens.raw.json was updated and show the token count from the script output.`;

const SCAFFOLD_CURSOR_RULE = `---
alwaysApply: true
---
# GDS Figma → local token sync (scaffolded app)

When the user writes:
- "sync figma tokens"
- "sync tokens"
- "update tokens from figma"

Do the following steps automatically:

1. Use the Figma MCP tool **get_variable_defs** (no nodeId = current Figma selection).
2. Save the full JSON output to **.tmp/figma.variable_defs.json** (create .tmp if missing).
3. Run **pnpm gds:tokens:sync**.
4. Confirm src/gds-tokens.raw.json and src/gds-theme-sync.generated.ts were updated.`;

export function SyncDesignTokensPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Sync design tokens
        </Heading>
        <Text color="fg.muted">
          Sync Figma variable updates into your project. The command and output paths depend on
          whether you work in the <strong>GDS monorepo</strong> or in an app created with{" "}
          <Code>pnpm create @gdesignsystem/create-app@latest</Code>. Use the GDS Figma file that
          contains the required styles (GDS — Gofore Design System — For Designers).
        </Text>
      </Box>

      <Section
        title="GDS monorepo"
        description="Updates packages/tokens/figma/tokens.raw.json for @gdesignsystem/theme."
      >
        <VStack align="stretch" gap="4" textStyle="sm" color="fg.muted">
          <Text>
            1. In Figma, select a frame that contains the variables you want to import (colors,
            typography, spacing, etc.).
          </Text>
          <Text>
            2. Export with Figma MCP <Code>get_variable_defs</Code> and save to{" "}
            <Code>.tmp/figma.mcp_latest.json</Code>, or ask your agent: “sync tokens”.
          </Text>
          <Text>3. From the repo root, run:</Text>
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
            pnpm gds:tokens:sync:from-mcp
          </Box>
          <Text>
            This merges the selection into existing <Code>tokens.raw.json</Code> (unchanged keys
            stay). Restart the dev server if the theme does not pick up new values immediately.
          </Text>
          <Text fontWeight="semibold" color="fg">
            Optional: Cursor rule (monorepo)
          </Text>
          <Text>
            Copy into <Code>.cursor/rules/figma-tokens.mdc</Code> (the GDS repo already ships this
            rule):
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
            {MONOREPO_CURSOR_RULE}
          </Box>
        </VStack>
      </Section>

      <Section
        title="Scaffolded app (create-app)"
        description="Updates src/gds-tokens.raw.json and src/gds-theme-sync.generated.ts."
      >
        <VStack align="stretch" gap="4" textStyle="sm" color="fg.muted">
          <Text>
            1. Open your project root (<Code>cd my-project</Code>).
          </Text>
          <Text>
            2. In Figma, select a frame with the variables to import. Save MCP{" "}
            <Code>get_variable_defs</Code> output to <Code>.tmp/figma.variable_defs.json</Code>.
          </Text>
          <Text>
            Example agent prompt:
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
          <Text>3. Run token sync:</Text>
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
            pnpm gds:tokens:sync
          </Box>
          <Text>4. Verify these files were updated:</Text>
          <Text as="ul" pl="4" style={{ listStyleType: "disc" }}>
            <Text as="li">
              <Code>src/gds-tokens.raw.json</Code>
            </Text>
            <Text as="li">
              <Code>src/gds-theme-sync.generated.ts</Code>
            </Text>
          </Text>
          <Text>5. Restart the dev server: <Code>pnpm dev</Code></Text>
          <Text fontWeight="semibold" color="fg">
            Optional: Cursor rule (scaffolded app)
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
            {SCAFFOLD_CURSOR_RULE}
          </Box>
        </VStack>
      </Section>

      <Section
        title="Troubleshooting"
        description="Most common sync issues."
      >
        <VStack align="stretch" gap="2" textStyle="sm" color="fg.muted">
          <Text>
            <strong>Monorepo:</strong> if sync fails, ensure <Code>.tmp/figma.mcp_latest.json</Code>{" "}
            exists (or pass a path:{" "}
            <Code>pnpm gds:tokens:sync:from-mcp path/to/mcp.json</Code>).
          </Text>
          <Text>
            <strong>Scaffolded app:</strong> ensure <Code>.tmp/figma.variable_defs.json</Code>{" "}
            exists before running <Code>pnpm gds:tokens:sync</Code>.
          </Text>
          <Text>
            Exporting the full relevant token set from Figma is recommended so local files stay
            complete.
          </Text>
        </VStack>
      </Section>
    </VStack>
  );
}
