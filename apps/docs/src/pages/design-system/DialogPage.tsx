import { Box, Button, Dialog, Heading, IconButton, Portal, VStack } from "@chakra-ui/react";
import { XIcon } from "@gds-vero/icons";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gds-vero/react";
export function DialogPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Dialog
        </Heading>
        <Text color="fg.muted">
          Modal dialogs for focused tasks and confirmations.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Dialog with trigger, header, body, and footer"
        code={`import { Dialog, Button, IconButton, Portal } from "@chakra-ui/react";
import { XIcon } from "@gds-vero/icons";
import { GDSText as Text } from "@gds-vero/react";

<Dialog.Root>
  <Dialog.Trigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </Dialog.Trigger>
  <Portal>
    <Dialog.Backdrop />
    <Dialog.Positioner>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Dialog Title</Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>Content here.</Dialog.Body>
        <Dialog.Footer>
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </Dialog.Footer>
        <Dialog.CloseTrigger asChild>
          <IconButton size="sm" variant="ghost" aria-label="Close dialog">
            <XIcon />
          </IconButton>
        </Dialog.CloseTrigger>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>`}
      >
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button variant="outline" size="sm" colorPalette="brand">
              Open Dialog
            </Button>
          </Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>Dialog Title</Dialog.Title>
                </Dialog.Header>
                <Dialog.Body>
                  <Text color="fg.muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Text>
                </Dialog.Body>
                <Dialog.Footer>
                  <Dialog.ActionTrigger asChild>
                    <Button variant="outline" size="sm">
                      Cancel
                    </Button>
                  </Dialog.ActionTrigger>
                  <Button size="sm" colorPalette="brand">
                    Save
                  </Button>
                </Dialog.Footer>
                <Dialog.CloseTrigger asChild>
                  <IconButton size="sm" variant="ghost" aria-label="Close dialog">
                    <XIcon />
                  </IconButton>
                </Dialog.CloseTrigger>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use a visible title (Dialog.Title) so the purpose is announced; avoid role=\"alertdialog\" unless it is a critical alert.", rule: "4.1.2" },
          { text: "Trap focus inside the dialog when open; restore focus to the trigger on close.", rule: "2.1.1" },
          { text: "Allow closing via Escape and a visible close control; ensure the first focusable element receives focus when opened.", rule: "2.4.7" },
        ]}
      />
    </VStack>
  );
}