import { Box, Heading, Text, Timeline, VStack } from "@chakra-ui/react";
import { CheckIcon, PenIcon, UserPlusIcon } from "@gdesignsystem/icons";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

const events = [
  {
    title: "Created",
    description: "Account created",
    timestamp: "Jan 1, 2025",
    icon: UserPlusIcon,
  },
  {
    title: "Updated",
    description: "Profile updated",
    timestamp: "Feb 1, 2025",
    icon: PenIcon,
  },
  {
    title: "Verified",
    description: "Email verified",
    timestamp: "Mar 1, 2025",
    icon: CheckIcon,
  },
];

export function TimelinePage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Timeline
        </Heading>
        <Text color="fg.muted">
          Vertical timeline of events or steps.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Timeline with items"
        code={`import { Timeline } from "@chakra-ui/react";
import { CheckIcon, PenIcon, UserPlusIcon } from "@gdesignsystem/icons";

<Timeline.Root colorPalette="brand">
  {events.map((event, i) => {
    const IconComp = event.icon;
    return (
      <Timeline.Item key={i}>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator>
            <IconComp boxSize="3" />
          </Timeline.Indicator>
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>{event.title}</Timeline.Title>
          <Timeline.Description>{event.description}</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
    );
  })}
</Timeline.Root>`}
      >
        <Timeline.Root maxW="md" colorPalette="brand">
          {events.map((event, index) => {
            const IconComp = event.icon;
            return (
              <Timeline.Item key={index}>
                <Timeline.Connector>
                  <Timeline.Separator />
                  <Timeline.Indicator>
                    <IconComp boxSize="3" />
                  </Timeline.Indicator>
                </Timeline.Connector>
                <Timeline.Content>
                  <Timeline.Title>{event.title}</Timeline.Title>
                  <Timeline.Description>{event.description}</Timeline.Description>
                  <Text fontSize="xs" color="fg.muted" mt="1">
                    {event.timestamp}
                  </Text>
                </Timeline.Content>
              </Timeline.Item>
            );
          })}
        </Timeline.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use a list or ordered structure so order is clear to screen readers.", rule: "1.3.1" },
          { text: "Ensure each item has a clear heading (Title) and optional description.", rule: "1.3.1" },
        ]}
      />
    </VStack>
  );
}
