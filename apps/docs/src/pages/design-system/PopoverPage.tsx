import { Box, Button, Heading, Popover, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function PopoverPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Popover
        </Heading>
        <Text color="fg.muted">
          Floating panel triggered by click or focus.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Trigger opens popover"
        code={`import { Button, Popover } from "@chakra-ui/react";

<Popover.Root>
  <Popover.Trigger asChild>
    <Button colorPalette="brand">Open popover</Button>
  </Popover.Trigger>
  <Popover.Positioner>
    <Popover.Content>
      <Popover.Arrow />
      <Popover.Header>
        <Popover.Title>Title</Popover.Title>
        <Popover.CloseTrigger />
      </Popover.Header>
      <Popover.Body>Body content here.</Popover.Body>
    </Popover.Content>
  </Popover.Positioner>
</Popover.Root>`}
      >
        <Popover.Root>
          <Popover.Trigger asChild>
            <Button colorPalette="brand">Open popover</Button>
          </Popover.Trigger>
          <Popover.Positioner>
            <Popover.Content>
              <Popover.Arrow />
              <Popover.Header>
                <Popover.Title>Popover title</Popover.Title>
                <Popover.CloseTrigger />
              </Popover.Header>
              <Popover.Body>
                <Text color="fg.muted">Body content here.</Text>
              </Popover.Body>
            </Popover.Content>
          </Popover.Positioner>
        </Popover.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Focus moves to popover when opened; provide CloseTrigger and trap focus.", rule: "2.1.1" },
          { text: "Use Title for an accessible heading.", rule: "4.1.2" },
        ]}
      />
    </VStack>
  );
}