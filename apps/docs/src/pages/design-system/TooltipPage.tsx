import {
  Box,
  Button,
  Heading,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

export function TooltipPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Tooltip
        </Heading>
        <Text color="fg.muted">
          Short hints shown on hover or focus.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Tooltip on hover and focus"
        code={`import { Tooltip } from "@chakra-ui/react";

<Tooltip.Root>
  <Tooltip.Trigger asChild>
    <Button variant="outline">Hover me</Button>
  </Tooltip.Trigger>
  <Tooltip.Positioner>
    <Tooltip.Content>Helpful hint here.</Tooltip.Content>
  </Tooltip.Positioner>
</Tooltip.Root>`}
      >
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button variant="outline" size="sm" colorPalette="brand">
              Hover me
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Positioner>
            <Tooltip.Content
              bg="bg.inverted"
              color="fg.inverted"
              px="2"
              py="1.5"
              borderRadius="md"
              fontSize="sm"
              boxShadow="md"
            >
              Helpful hint here.
            </Tooltip.Content>
          </Tooltip.Positioner>
        </Tooltip.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Tooltip content is associated with the trigger; ensure the tooltip text adds context and is not redundant with visible label.", rule: "4.1.2" },
          { text: "Support keyboard: show on focus, hide on blur; avoid hover-only tooltips for interactive elements.", rule: "2.1.1" },
          { text: "Keep tooltip text short; for long content use a popover or inline description.", rule: "1.3.1" },
        ]}
      />
    </VStack>
  );
}
