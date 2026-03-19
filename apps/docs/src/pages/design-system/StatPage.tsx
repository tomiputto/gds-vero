import { Box, Heading, Stat, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function StatPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Stat
        </Heading>
        <Text color="fg.muted">
          Display a statistic with optional label and change indicator.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Label, value, and optional helper"
        code={`import { Stat } from "@chakra-ui/react";

<Stat.Root>
  <Stat.Label>Total Revenue</Stat.Label>
  <Stat.ValueText>$ 45,231</Stat.ValueText>
  <Stat.HelpText>+20% from last month</Stat.HelpText>
</Stat.Root>`}
      >
        <Stat.Root maxW="xs" p="4" bg="bg.muted" borderRadius="md">
          <Stat.Label>Total Revenue</Stat.Label>
          <Stat.ValueText>$ 45,231</Stat.ValueText>
          <Stat.HelpText>+20% from last month</Stat.HelpText>
        </Stat.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use Stat.Label so the value has context for screen readers.", rule: "1.3.1" },
          { text: "Ensure numbers are formatted consistently (e.g. locale).", rule: "3.1.1" },
        ]}
      />
    </VStack>
  );
}