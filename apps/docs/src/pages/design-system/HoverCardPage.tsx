import { Box, Button, Heading, HoverCard, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function HoverCardPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Hover Card
        </Heading>
        <Text color="fg.muted">
          Popover that opens on hover with optional delay.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Trigger shows card on hover"
        code={`import { Button, HoverCard } from "@chakra-ui/react";

<HoverCard.Root openDelay={200} closeDelay={100}>
  <HoverCard.Trigger asChild>
    <Button colorPalette="brand">Hover me</Button>
  </HoverCard.Trigger>
  <HoverCard.Positioner>
    <HoverCard.Content>
      <HoverCard.Arrow />
      <Box p="4">
        <Text fontWeight="medium">Hover card title</Text>
        <Text color="fg.muted" fontSize="sm">Description or extra content.</Text>
      </Box>
    </HoverCard.Content>
  </HoverCard.Positioner>
</HoverCard.Root>`}
      >
        <HoverCard.Root openDelay={200} closeDelay={100}>
          <HoverCard.Trigger asChild>
            <Button colorPalette="brand">Hover me</Button>
          </HoverCard.Trigger>
          <HoverCard.Positioner>
            <HoverCard.Content>
              <HoverCard.Arrow />
              <Box p="4">
                <Text fontWeight="medium">Hover card title</Text>
                <Text color="fg.muted" fontSize="sm">Description or extra content.</Text>
              </Box>
            </HoverCard.Content>
          </HoverCard.Positioner>
        </HoverCard.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          "Provide a way to open the card via keyboard (focus + delay or explicit trigger).",
          "Ensure content is announced when opened; avoid critical info only on hover.",
        ]}
      />
    </VStack>
  );
}