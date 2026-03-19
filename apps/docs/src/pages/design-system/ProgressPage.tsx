import { Box, Heading, Progress, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function ProgressPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Progress
        </Heading>
        <Text color="fg.muted">
          Linear progress indicator for loading or completion.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Progress bar with value"
        code={`import { Progress } from "@chakra-ui/react";

<Progress.Root value={60} colorPalette="brand">
  <Progress.Track>
    <Progress.Range />
  </Progress.Track>
</Progress.Root>`}
      >
        <VStack align="stretch" gap="4" maxW="md">
          <Progress.Root value={60} colorPalette="brand">
            <Progress.Track>
              <Progress.Range />
            </Progress.Track>
          </Progress.Root>
          <Progress.Root value={100} colorPalette="brand">
            <Progress.Track>
              <Progress.Range />
            </Progress.Track>
          </Progress.Root>
        </VStack>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use aria-label or Progress.Label for a descriptive name.", rule: "4.1.2" },
          { text: "For indeterminate loading use value={undefined} or Spinner.", rule: "4.1.3" },
        ]}
      />
    </VStack>
  );
}