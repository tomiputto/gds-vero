import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

export function FlexPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Flex
        </Heading>
        <Text color="fg.muted">
          Flexbox layout container for alignment and distribution.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Row and column with gap"
        code={`import { Flex } from "@chakra-ui/react";

<Flex gap="4" wrap="wrap">
  <Box p="3" bg="bg.muted" borderRadius="md">1</Box>
  <Box p="3" bg="bg.muted" borderRadius="md">2</Box>
  <Box p="3" bg="bg.muted" borderRadius="md">3</Box>
</Flex>

<Flex direction="column" gap="2" mt="4">
  <Box p="2" bg="bg.subtle" borderRadius="md">A</Box>
  <Box p="2" bg="bg.subtle" borderRadius="md">B</Box>
</Flex>`}
      >
        <Flex gap="4" wrap="wrap">
          <Box p="3" bg="bg.muted" borderRadius="md">1</Box>
          <Box p="3" bg="bg.muted" borderRadius="md">2</Box>
          <Box p="3" bg="bg.muted" borderRadius="md">3</Box>
        </Flex>
        <Flex direction="column" gap="2" mt="4">
          <Box p="2" bg="bg.subtle" borderRadius="md">A</Box>
          <Box p="2" bg="bg.subtle" borderRadius="md">B</Box>
        </Flex>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use semantic elements (nav, main, aside) where appropriate; Flex is for layout only.", rule: "1.3.1" },
          { text: "Avoid using Flex only for visual grouping; ensure structure is meaningful.", rule: "1.3.1" },
        ]}
      />
    </VStack>
  );
}
