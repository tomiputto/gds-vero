import { Box, Table, VStack } from "@chakra-ui/react";
import {
  GDSHeading,
  GDSText as Text,
  VERO_CONTENT_WIDTH,
  VERO_COLUMN_GAP,
  VERO_PAGE_PADDING_X,
  VERO_PAGE_PADDING_Y,
  VERO_SIDEBAR_BREAKPOINT,
  VERO_SIDEBAR_WIDTH,
  VeroAppShell,
  VeroPageLayout,
} from "@gds-vero/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

const SHELL_CODE = `import { Breadcrumb } from "@chakra-ui/react";
import { ChevronRightIcon } from "@gds-vero/icons";
import { GDSProvider, GDSHeading, GDSText, VeroAppShell, VeroPageLayout } from "@gds-vero/react";

export function ServicePage() {
  return (
    <GDSProvider>
      <VeroAppShell>
        <VeroPageLayout>
          <Breadcrumb.Root aria-label="Breadcrumb" mb="4">
            <Breadcrumb.List>
              <Breadcrumb.Item>
                <Breadcrumb.Link href="/">Etusivu</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator>
                <ChevronRightIcon boxSize="4" color="fg.muted" aria-hidden />
              </Breadcrumb.Separator>
              <Breadcrumb.Item>
                <Breadcrumb.CurrentLink>Palvelun otsikko</Breadcrumb.CurrentLink>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb.Root>
          <GDSHeading as="h1">Palvelun otsikko</GDSHeading>
          <GDSText textStyle="body" mt="4">
            Breadcrumb → h1 → content — required order on vero.fi service pages.
          </GDSText>
        </VeroPageLayout>
      </VeroAppShell>
    </GDSProvider>
  );
}`;

const SIDEBAR_CODE = `import { Card } from "@chakra-ui/react";
import { GDSProvider, VeroAppShell, VeroPageLayout } from "@gds-vero/react";

<GDSProvider>
  <VeroAppShell>
    <VeroPageLayout
      sidebar={
        <Card.Root variant="outline">
          <Card.Header>
            <Card.Title>Sidebar</Card.Title>
          </Card.Header>
          <Card.Body>Filters or related links</Card.Body>
        </Card.Root>
      }
    >
      {/* Main column */}
    </VeroPageLayout>
  </VeroAppShell>
</GDSProvider>`;

const WIDTH_ROWS = [
  { preset: "default", token: VERO_CONTENT_WIDTH.default, px: "1152px", use: "Standard service / content page (use this unless you have a reason not to)" },
  { preset: "narrow", token: VERO_CONTENT_WIDTH.narrow, px: "672px", use: "Login, forms, centered narrow flows" },
  { preset: "wide", token: VERO_CONTENT_WIDTH.wide, px: "1280px", use: "Directories, wide tables, data-heavy views" },
  { preset: "full", token: VERO_CONTENT_WIDTH.full, px: "100% (with padding)", use: "Rare — only when design explicitly needs edge-to-edge content" },
] as const;

function ColumnDemo({ label }: { label: string }) {
  return (
    <Box
      minW="0"
      p="4"
      bg="bg.default"
      borderWidth="1px"
      borderColor="border.emphasized"
      borderRadius="md"
    >
      <Text textStyle="body" fontWeight="semibold">
        {label}
      </Text>
    </Box>
  );
}

export function PageLayoutPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <GDSHeading as="h1" mb="2">
          Page layout
        </GDSHeading>
        <Text color="fg.muted">
          Canonical vero.fi page shell and content width. Use <code>VeroAppShell</code> +{" "}
          <code>VeroPageLayout</code> so LLM-generated pages keep the same max-width, padding, and column
          behavior across builds.
        </Text>
      </Box>

      <Section
        title="Width presets (contentWidth)"
        description="Never use ad-hoc maxW such as xl, 4xl, or container — pick a preset."
      >
        <Table.Root size="sm" variant="outline">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Preset</Table.ColumnHeader>
              <Table.ColumnHeader>Chakra maxW</Table.ColumnHeader>
              <Table.ColumnHeader>Width</Table.ColumnHeader>
              <Table.ColumnHeader>When to use</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {WIDTH_ROWS.map((row) => (
              <Table.Row key={row.preset}>
                <Table.Cell>
                  <code>{row.preset}</code>
                </Table.Cell>
                <Table.Cell>
                  <code>{row.token}</code>
                </Table.Cell>
                <Table.Cell>{row.px}</Table.Cell>
                <Table.Cell>{row.use}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Section>

      <Section
        title="Padding and breakpoints"
        description="Horizontal padding and sidebar column rules are fixed in the layout component."
      >
        <Table.Root size="sm" variant="outline" mt="2">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Token</Table.ColumnHeader>
              <Table.ColumnHeader>Value</Table.ColumnHeader>
              <Table.ColumnHeader>Meaning</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <code>VERO_PAGE_PADDING_X</code>
              </Table.Cell>
              <Table.Cell>
                <code>{JSON.stringify(VERO_PAGE_PADDING_X)}</code>
              </Table.Cell>
              <Table.Cell>16px → 24px (md) → 32px (lg) horizontal inset</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <code>VERO_PAGE_PADDING_Y</code>
              </Table.Cell>
              <Table.Cell>
                <code>{JSON.stringify(VERO_PAGE_PADDING_Y)}</code>
              </Table.Cell>
              <Table.Cell>24px → 32px (md) vertical main padding</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <code>VERO_SIDEBAR_WIDTH</code>
              </Table.Cell>
              <Table.Cell>
                <code>{VERO_SIDEBAR_WIDTH}</code>
              </Table.Cell>
              <Table.Cell>288px sidebar on {VERO_SIDEBAR_BREAKPOINT}+</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <code>VERO_COLUMN_GAP</code>
              </Table.Cell>
              <Table.Cell>
                <code>{JSON.stringify(VERO_COLUMN_GAP)}</code>
              </Table.Cell>
              <Table.Cell>Gap between main and sidebar</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Sidebar layout</Table.Cell>
              <Table.Cell colSpan={2}>
                Below <code>{VERO_SIDEBAR_BREAKPOINT}</code> (992px): sidebar stacks <strong>below</strong> main.
                At <code>{VERO_SIDEBAR_BREAKPOINT}+</code>: main + sidebar side by side.
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Section>

      <Section
        title="Service page anatomy"
        description="Required content order inside VeroPageLayout — agents must not skip breadcrumb because hierarchy was not in the user prompt."
      >
        <Table.Root size="sm" variant="outline">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Order</Table.ColumnHeader>
              <Table.ColumnHeader>Element</Table.ColumnHeader>
              <Table.ColumnHeader>Notes</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>
                <code>Breadcrumb</code>
              </Table.Cell>
              <Table.Cell>
                Default on service pages. Infer parent links (e.g. Etusivu → section → current). See{" "}
                <code>/breadcrumb</code>.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2</Table.Cell>
              <Table.Cell>
                <code>GDSHeading as="h1"</code>
              </Table.Cell>
              <Table.Cell>Page title — one per view.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>3</Table.Cell>
              <Table.Cell>Optional lead</Table.Cell>
              <Table.Cell>
                <code>GDSText</code> caption or muted body.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>4</Table.Cell>
              <Table.Cell>Main content</Table.Cell>
              <Table.Cell>Cards, tables, forms, etc.</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Section>

      <Section
        title="Single-column preview"
        description="Default contentWidth — centered 1152px column on bg.subtle"
        code={SHELL_CODE}
      >
        <Box borderRadius="lg" overflow="hidden" borderWidth="1px" borderColor="border.muted">
          <VeroAppShell topBarEnd={null}>
            <VeroPageLayout>
              <ColumnDemo label="Main column (default / 6xl)" />
            </VeroPageLayout>
          </VeroAppShell>
        </Box>
      </Section>

      <Section
        title="Main + sidebar preview"
        description="sidebar prop — stacks on mobile, 288px column on lg+"
        code={SIDEBAR_CODE}
      >
        <Box borderRadius="lg" overflow="hidden" borderWidth="1px" borderColor="border.muted">
          <VeroAppShell topBarEnd={null}>
            <VeroPageLayout sidebar={<ColumnDemo label="Sidebar (288px on lg+)" />}>
              <ColumnDemo label="Main column" />
            </VeroPageLayout>
          </VeroAppShell>
        </Box>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "VeroAppShell renders the site header landmark; VeroPageLayout renders main — one h1 per page inside main.", rule: "1.3.1" },
          { text: "Sidebar uses aside — keep a logical DOM order (main first, then aside) for keyboard and screen readers.", rule: "2.4.3" },
          { text: "Do not reorder columns visually with CSS in a way that breaks reading order on small screens.", rule: "1.3.2" },
        ]}
      />
    </VStack>
  );
}
