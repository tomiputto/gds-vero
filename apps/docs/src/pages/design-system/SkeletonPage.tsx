import { Box, Heading, Skeleton, Text, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

export function SkeletonPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Skeleton
        </Heading>
        <Text color="fg.muted">
          Placeholder while content is loading.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Skeleton lines and box"
        code={`import { Skeleton } from "@chakra-ui/react";

<Skeleton height="4" width="80%" />
<Skeleton height="4" width="60%" mt="2" />
<Skeleton height="20" borderRadius="md" mt="4" />`}
      >
        <Box maxW="md">
          <Skeleton height="4" width="80%" />
          <Skeleton height="4" width="60%" mt="2" />
          <Skeleton height="20" borderRadius="md" mt="4" />
        </Box>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use aria-busy on the container and aria-live when content replaces skeleton.", rule: "4.1.3" },
          { text: "Avoid motion for users who prefer reduced motion (respect prefers-reduced-motion).", rule: "2.1.1" },
        ]}
      />
    </VStack>
  );
}
