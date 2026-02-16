import { Box, Button, Drawer, Heading, IconButton, Text, VStack } from "@chakra-ui/react";
import { XIcon } from "@gdesignsystem/icons";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

export function DrawerPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Drawer
        </Heading>
        <Text color="fg.muted">
          Slide-out panel from an edge for additional content or actions.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Trigger opens drawer from the end"
        code={`import { Drawer } from "@chakra-ui/react";

<Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
  <Drawer.Trigger asChild>
    <Button colorPalette="brand">Open drawer</Button>
  </Drawer.Trigger>
  <Drawer.Backdrop />
  <Drawer.Positioner>
    <Drawer.Content>
      <Drawer.Header>
        <Drawer.Title>Title</Drawer.Title>
        <Drawer.CloseTrigger asChild>
          <IconButton size="sm" variant="ghost" aria-label="Close drawer">
            <XIcon />
          </IconButton>
        </Drawer.CloseTrigger>
      </Drawer.Header>
      <Drawer.Body>Content here.</Drawer.Body>
    </Drawer.Content>
  </Drawer.Positioner>
</Drawer.Root>`}
      >
        <Drawer.Root>
          <Drawer.Trigger asChild>
            <Button colorPalette="brand">Open drawer</Button>
          </Drawer.Trigger>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Drawer title</Drawer.Title>
                <Drawer.CloseTrigger asChild>
                  <IconButton size="sm" variant="ghost" aria-label="Close drawer">
                    <XIcon />
                  </IconButton>
                </Drawer.CloseTrigger>
              </Drawer.Header>
              <Drawer.Body>
                <Text color="fg.muted">Drawer body content goes here.</Text>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Drawer.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use Drawer.Title for an accessible heading; focus is managed when opened.", rule: "4.1.2" },
          { text: "Ensure a focusable close control (CloseTrigger) and trap focus inside while open.", rule: "2.1.1" },
        ]}
      />
    </VStack>
  );
}
