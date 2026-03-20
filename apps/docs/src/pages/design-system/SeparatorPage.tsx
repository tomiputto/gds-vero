import { Box, Heading, Separator, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function SeparatorPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Separator
        </Heading>
        <Text color="fg.muted">
          Visual divider between content sections.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Horizontal and vertical separators"
        code={`import { Separator } from "@chakra-ui/react";

<Separator />
<Separator orientation="vertical" h="8" />`}
      >
        <VStack align="stretch" gap="4">
          <Text fontSize="sm" color="fg.muted">Above</Text>
          <Separator />
          <Text fontSize="sm" color="fg.muted">Below</Text>
          <Box display="flex" gap="4" alignItems="center">
            <Text fontSize="sm">Left</Text>
            <Separator orientation="vertical" h="8" />
            <Text fontSize="sm">Right</Text>
          </Box>
        </VStack>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Separators are decorative by default; use role=\"separator\" only when they divide landmark regions.", rule: "1.3.1" },
          { text: "Prefer semantic headings for logical sections over separators alone.", rule: "1.3.1" },
        ]}
      />
    </VStack>
  );
}