import { Box, Code, Heading, Link, Table, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { GDSText as Text } from "@gds-vero/react";

const GITHUB_README =
  "https://github.com/tomiputto/gds-vero/blob/main/code-connect/README.md";

const MAPPINGS = [
  { component: "Button", file: "Button.figma.tsx", nodeId: "148:1720" },
  { component: "Badge", file: "Badge.figma.tsx", nodeId: "128:1634" },
  { component: "Field (Input)", file: "Field.figma.tsx", nodeId: "211:842" },
  { component: "Card", file: "Card.figma.tsx", nodeId: "339:15634" },
  { component: "Dialog", file: "Dialog.figma.tsx", nodeId: "376:7174" },
] as const;

export function CodeConnectPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Figma Code Connect
        </Heading>
        <Text color="fg.muted">
          Code Connect links Figma components to GDS/React code snippets. Designers see the
          correct Chakra v3 + GDS example in Figma Dev Mode when inspecting a mapped
          component.
        </Text>
      </Box>

      <Section
        title="Figma file"
        description="Production design system file used for mappings."
      >
        <Text color="fg.muted" textStyle="sm">
          <strong>GDS-1.0 PROD</strong> — file key{" "}
          <Code>vtiyOtk3Ro41iNAH9l3yhp</Code>
        </Text>
      </Section>

      <Section
        title="Mapped components (P0)"
        description="Mappings live in the GDS repo under code-connect/*.figma.tsx."
      >
        <Table.Root size="sm" variant="outline">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Figma component</Table.ColumnHeader>
              <Table.ColumnHeader>File</Table.ColumnHeader>
              <Table.ColumnHeader>Node ID</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {MAPPINGS.map((row) => (
              <Table.Row key={row.file}>
                <Table.Cell>{row.component}</Table.Cell>
                <Table.Cell>
                  <Code>{row.file}</Code>
                </Table.Cell>
                <Table.Cell>
                  <Code>{row.nodeId}</Code>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Section>

      <Section
        title="Publish (contributors)"
        description="Requires a Figma personal access token with Code Connect Write and file read scopes."
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
          {`# Dry-run (monorepo root)
FIGMA_ACCESS_TOKEN=<token> pnpm figma connect publish --dry-run

# Publish
FIGMA_ACCESS_TOKEN=<token> pnpm figma:connect:publish

# Unpublish
FIGMA_ACCESS_TOKEN=<token> pnpm figma:connect:unpublish`}
        </Box>
        <Text mt="3" color="fg.muted" textStyle="sm">
          Config: <Code>figma.config.json</Code> at repo root. Full contributor guide:{" "}
          <Link href={GITHUB_README} color="brand.solid" target="_blank" rel="noopener noreferrer">
            code-connect/README.md on GitHub
          </Link>
        </Text>
      </Section>

      <Section
        title="Add a new mapping"
        description="Workflow for mapping additional Figma components."
      >
        <VStack align="stretch" gap="2" textStyle="sm" color="fg.muted">
          <Text>1. In Figma, select the component → Copy link to selection.</Text>
          <Text>
            2. Run <Code>pnpm figma connect create "&lt;url&gt;" --token &lt;token&gt;</Code> in
            the monorepo.
          </Text>
          <Text>3. Edit the generated example to use GDS tokens and Chakra v3 APIs.</Text>
          <Text>4. Publish with <Code>pnpm figma:connect:publish</Code>.</Text>
        </VStack>
      </Section>
    </VStack>
  );
}
