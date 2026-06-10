import { Box, Button, EmptyState, Heading, VStack } from "@chakra-ui/react";
import { InboxIcon, PlusIcon } from "@gds-vero/icons";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gds-vero/react";
export function EmptyStatePage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Empty State
        </Heading>
        <Text color="fg.muted">
          Placeholder when there is no content or data.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Title, description, and action"
        code={`import { EmptyState, Button } from "@chakra-ui/react";

<EmptyState.Root>
  <EmptyState.Content>
    <EmptyState.Indicator />
    <EmptyState.Title>No items yet</EmptyState.Title>
    <EmptyState.Description>
      Get started by creating your first item.
    </EmptyState.Description>
    <Button mt="4" colorPalette="brand">Create item</Button>
  </EmptyState.Content>
</EmptyState.Root>`}
      >
        <EmptyState.Root>
          <EmptyState.Content>
            <EmptyState.Indicator>
              <InboxIcon boxSize="10" color="fg.muted" />
            </EmptyState.Indicator>
            <EmptyState.Title>No items yet</EmptyState.Title>
            <EmptyState.Description>
              Get started by creating your first item.
            </EmptyState.Description>
            <Button mt="4" colorPalette="brand">
              <PlusIcon /> Create item
            </Button>
          </EmptyState.Content>
        </EmptyState.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use a clear heading (Title) so screen readers understand the state.", rule: "1.3.1" },
          { text: "Provide a primary action when the user can fix the empty state.", rule: "2.1.1" },
        ]}
      />
    </VStack>
  );
}