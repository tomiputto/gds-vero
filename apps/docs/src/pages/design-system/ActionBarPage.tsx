import { useState } from "react";
import {
  ActionBar,
  Box,
  Button,
  Checkbox,
  Heading,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ShareIcon, TrashIcon } from "@gds/icons";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

export function ActionBarPage() {
  const [open, setOpen] = useState(false);
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Action Bar
        </Heading>
        <Text color="fg.muted">
          Bar that appears when items are selected, for bulk actions.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Toggle to show action bar with selection count and actions"
        code={`import { ActionBar, Checkbox, Portal, Button } from "@chakra-ui/react";

<Checkbox.Root colorPalette="brand" onCheckedChange={(e) => setOpen(!!e.checked)}>
  <Checkbox.HiddenInput />
  <Checkbox.Control />
  <Checkbox.Label>Show Action bar</Checkbox.Label>
</Checkbox.Root>
<ActionBar.Root open={open}>
  <Portal>
    <ActionBar.Positioner>
      <ActionBar.Content>
        <ActionBar.SelectionTrigger>2 selected</ActionBar.SelectionTrigger>
        <ActionBar.Separator />
        <Button size="sm" variant="outline" colorPalette="brand">Delete</Button>
        <Button size="sm" variant="outline" colorPalette="brand">Share</Button>
      </ActionBar.Content>
    </ActionBar.Positioner>
  </Portal>
</ActionBar.Root>`}
      >
        <VStack align="stretch" gap="4">
          <Checkbox.Root colorPalette="brand" checked={open} onCheckedChange={(e) => setOpen(!!e.checked)}>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>Show Action bar</Checkbox.Label>
          </Checkbox.Root>
          <ActionBar.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
            <Portal>
              <ActionBar.Positioner>
                <ActionBar.Content>
                  <ActionBar.SelectionTrigger>2 selected</ActionBar.SelectionTrigger>
                  <ActionBar.Separator />
                  <Button size="sm" variant="outline" colorPalette="brand">
                    <TrashIcon /> Delete
                  </Button>
                  <Button size="sm" variant="outline" colorPalette="brand">
                    <ShareIcon /> Share
                  </Button>
                </ActionBar.Content>
              </ActionBar.Positioner>
            </Portal>
          </ActionBar.Root>
        </VStack>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Announce selection count to screen readers (e.g. via SelectionTrigger).", rule: "4.1.3" },
          { text: "Provide keyboard-accessible actions and a clear way to close or clear selection.", rule: "2.1.1" },
        ]}
      />
    </VStack>
  );
}
