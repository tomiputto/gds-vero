import { Box, Collapsible, Heading, Text, VStack } from "@chakra-ui/react";
import { ChevronDownIcon } from "@gdesignsystem/icons";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

export function CollapsiblePage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Collapsible
        </Heading>
        <Text color="fg.muted">
          Expandable/collapsible content section.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Trigger toggles content"
        code={`import { Box, Collapsible } from "@chakra-ui/react";

<Collapsible.Root>
  <Collapsible.Trigger paddingY="3">Toggle Collapsible</Collapsible.Trigger>
  <Collapsible.Content>
    <Box padding="4" borderWidth="1px" borderRadius="md">
      Content here. Chakra UI aligns your design system — bringing flow and consistency.
    </Box>
  </Collapsible.Content>
</Collapsible.Root>`}
      >
        <Collapsible.Root>
          <Collapsible.Trigger paddingY="3" display="flex" alignItems="center" gap="2">
            <ChevronDownIcon boxSize="4" />
            Toggle Collapsible
          </Collapsible.Trigger>
          <Collapsible.Content>
            <Box padding="4" borderWidth="1px" borderRadius="md" borderColor="border.muted">
              Content here. Chakra UI aligns your design system — bringing flow and consistency.
            </Box>
          </Collapsible.Content>
        </Collapsible.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Trigger should have aria-expanded and aria-controls pointing to content id.", rule: "4.1.2" },
          { text: "Ensure keyboard users can toggle (Enter/Space) and focus is visible.", rule: "2.1.1" },
        ]}
      />
    </VStack>
  );
}
