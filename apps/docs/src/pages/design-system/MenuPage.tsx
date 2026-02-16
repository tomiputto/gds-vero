import {
  Box,
  Button,
  Heading,
  Menu,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CopyIcon, PenIcon, TrashIcon } from "@gdesignsystem/icons";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

export function MenuPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Menu
        </Heading>
        <Text color="fg.muted">
          Dropdown menus for actions and navigation.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Menu with trigger and items"
        code={`import { Menu, Button, Portal } from "@chakra-ui/react";

<Menu.Root>
  <Menu.Trigger asChild>
    <Button variant="outline" colorPalette="brand">Open menu</Button>
  </Menu.Trigger>
  <Portal>
    <Menu.Positioner>
      <Menu.Content>
        <Menu.Item value="edit">Edit</Menu.Item>
        <Menu.Item value="duplicate">Duplicate</Menu.Item>
        <Menu.Item value="delete" color="fg.error">Delete</Menu.Item>
      </Menu.Content>
    </Menu.Positioner>
  </Portal>
</Menu.Root>`}
      >
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button variant="outline" size="sm" colorPalette="brand">
              Open menu
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="edit">
                  <PenIcon boxSize="4" /> Edit
                </Menu.Item>
                <Menu.Item value="duplicate">
                  <CopyIcon boxSize="4" /> Duplicate
                </Menu.Item>
                <Menu.Item value="delete" color="fg.error">
                  <TrashIcon boxSize="4" /> Delete
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Menu trigger must be keyboard focusable; use a button or element with role=\"button\" and tabIndex={0}.", rule: "2.1.1" },
          { text: "Arrow keys move between items; Enter/Space activate; Escape closes. Focus returns to the trigger on close.", rule: "2.1.1" },
          { text: "Ensure menu has an accessible name (e.g. aria-label on the trigger or menu).", rule: "4.1.2" },
        ]}
      />
    </VStack>
  );
}
