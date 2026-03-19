import { Box, Heading, ProgressCircle, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function ProgressCirclePage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Progress Circle
        </Heading>
        <Text color="fg.muted">
          Circular progress indicator.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Circular progress with value"
        code={`import { ProgressCircle } from "@chakra-ui/react";

<ProgressCircle.Root value={60} size="xl" colorPalette="brand">
  <ProgressCircle.Circle>
    <ProgressCircle.Track />
    <ProgressCircle.Range />
  </ProgressCircle.Circle>
  <ProgressCircle.ValueText mt="3" textAlign="center" />
</ProgressCircle.Root>`}
      >
        <ProgressCircle.Root
          value={60}
          size="xl"
          colorPalette="brand"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <ProgressCircle.Circle>
            <ProgressCircle.Track />
            <ProgressCircle.Range />
          </ProgressCircle.Circle>
          <ProgressCircle.ValueText mt="3" textAlign="center" />
        </ProgressCircle.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use aria-valuenow, aria-valuemin, aria-valuemax (or equivalent) for screen readers.", rule: "4.1.2" },
          { text: "ValueText provides a visible percentage; ensure it matches the value.", rule: "4.1.2" },
        ]}
      />
    </VStack>
  );
}