import { Box, Heading, VStack } from "@chakra-ui/react";
import { GDSText as Text, VeroMainHeader } from "@gds-vero/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

const HEADER_CODE = `import { VeroMainHeader } from "@gds-vero/react";

export function AppShell() {
  return (
    <VeroMainHeader
      onSearchClick={() => console.log("open search")}
      topBarEnd={null}
    />
  );
}`;

export function VeroMainHeaderPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Vero main header
        </Heading>
        <Text color="fg.muted">
          Reusable vero.fi-style site header from <code>@gds-vero/react</code>. Configure links,
          audience tabs, language menu, OmaVero actions, and sub-navigation via props. On narrow
          viewports utility labels collapse to icons and the sub-nav opens in a drawer.
        </Text>
      </Box>

      <Section
        title="Preview"
        description="Default vero.fi labels and links; resize the viewport to see responsive behavior"
        code={HEADER_CODE}
      >
        <Box
          borderRadius="lg"
          overflow="hidden"
          borderWidth="1px"
          borderColor="border.muted"
        >
          <VeroMainHeader
            onSearchClick={() => {
              /* demo */
            }}
          />
        </Box>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Header uses landmark elements (header, nav) with aria-label on navigation regions.", rule: "1.3.1" },
          { text: "Active audience tab and nav link expose aria-current=\"page\".", rule: "4.1.2" },
          { text: "Search and language triggers have accessible names; decorative icons use aria-hidden.", rule: "4.1.2" },
          { text: "Dropdown menus use Chakra Menu (keyboard: arrows, Enter, Escape).", rule: "2.1.1" },
        ]}
      />
    </VStack>
  );
}
