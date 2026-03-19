import { Box, Heading, Link, VStack } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@gdesignsystem/icons";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function LinkPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Link
        </Heading>
        <Text color="fg.muted">
          Navigational link with optional external indicator.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Inline and standalone links"
        code={`import { Link } from "@chakra-ui/react";

<Link href="#">Internal link</Link>
<Link href="https://example.com" external>External link</Link>`}
      >
        <VStack align="start" gap="2">
          <Link href="#" color="brand.fg">Internal link</Link>
          <Link href="https://chakra-ui.com" target="_blank" rel="noopener noreferrer" color="brand.fg" display="inline-flex" alignItems="center" gap="1">
            Chakra UI (external)
            <ExternalLinkIcon boxSize="3" />
          </Link>
        </VStack>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use meaningful link text; avoid 'click here'.", rule: "2.4.4" },
          { text: "For external links use the external prop so icon/aria is applied.", rule: "4.1.2" },
        ]}
      />
    </VStack>
  );
}