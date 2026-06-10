import { Box, Heading, Tabs, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gds-vero/react";
export function TabsPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Tabs
        </Heading>
        <Text color="fg.muted">
          Tabbed navigation for organizing content.
        </Text>
      </Box>

      <Section
        title="Line variant"
        description="Tabs with line indicator (brand primary)"
        code={`import { Tabs } from "../components/Tabs";

// Line variant
<Tabs defaultValue="one" variant="line">
  <Tabs.List>
    <Tabs.Trigger value="one">Tab one</Tabs.Trigger>
    <Tabs.Trigger value="two">Tab two</Tabs.Trigger>
    <Tabs.Trigger value="three">Tab three</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="one">Content for tab one.</Tabs.Content>
  <Tabs.Content value="two">Content for tab two.</Tabs.Content>
  <Tabs.Content value="three">Content for tab three.</Tabs.Content>
</Tabs>`}
      >
        <Tabs.Root colorPalette="brand" defaultValue="one" variant="line">
          <Tabs.List>
            <Tabs.Trigger value="one">Tab one</Tabs.Trigger>
            <Tabs.Trigger value="two">Tab two</Tabs.Trigger>
            <Tabs.Trigger value="three">Tab three</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="one">
            <Box py="4">
              <Text>Content for tab one. You can put any components here.</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="two">
            <Box py="4">
              <Text>Content for tab two.</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="three">
            <Box py="4">
              <Text>Content for tab three.</Text>
            </Box>
          </Tabs.Content>
        </Tabs.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use role=\"tablist\", role=\"tab\", and role=\"tabpanel\" with correct aria-selected, aria-expanded, and id associations.", rule: "4.1.2" },
          { text: "Keyboard: Arrow keys move between tabs; Enter/Space activate; focus moves to the panel when appropriate.", rule: "2.1.1" },
          { text: "Selected tab has aria-selected=\"true\"; each tab panel has aria-labelledby pointing to its tab.", rule: "4.1.2" },
          { text: "Ensure visible focus indicator on the active tab and sufficient contrast for selected vs. unselected.", rule: "1.4.3" },
        ]}
      />
    </VStack>
  );
}