import {
  Box,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

export function LayoutPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Layout
        </Heading>
        <Text color="fg.muted">
          Stack, Flex, and Grid for spacing and alignment.
        </Text>
      </Box>

      <Section
        title="HStack"
        description="Horizontal stack"
        code={`import { HStack, Box } from "../components/Layout";

// Horizontal stack
<HStack gap="4" p="3">
  <Box w="10" h="10" />
  <Box w="10" h="10" />
</HStack>`}
      >
        <HStack gap="4" p="3" bg="bg.muted" borderRadius="md">
          <Box w="10" h="10" bg="brand.solid" borderRadius="md" />
          <Box w="10" h="10" bg="brand.subtle" borderRadius="md" />
          <Box w="10" h="10" bg="brand.muted" borderRadius="md" />
        </HStack>
      </Section>

      <Section
        title="VStack"
        description="Vertical stack"
        code={`import { VStack, Box } from "../components/Layout";

// Vertical stack
<VStack gap="2" p="3" align="flex-start">
  <Box w="full" h="3" />
  <Box w="80%" h="3" />
  <Box w="60%" h="3" />
</VStack>`}
      >
        <VStack gap="2" p="3" bg="bg.muted" borderRadius="md" align="flex-start">
          <Box w="full" h="3" bg="brand.solid" borderRadius="sm" />
          <Box w="80%" h="3" bg="brand.subtle" borderRadius="sm" />
          <Box w="60%" h="3" bg="brand.muted" borderRadius="sm" />
        </VStack>
      </Section>

      <Section
        title="SimpleGrid"
        description="Responsive grid"
        code={`import { SimpleGrid, Flex, Text } from "../components/Layout";

// Responsive grid
<SimpleGrid columns={4} gap="3">
  {[1, 2, 3, 4, 5, 6].map((n) => (
    <Flex key={n} h="12" align="center" justify="center">
      <Text>{n}</Text>
    </Flex>
  ))}
</SimpleGrid>`}
      >
        <SimpleGrid columns={4} gap="3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <Flex
              key={n}
              h="12"
              bg="bg.muted"
              borderRadius="md"
              align="center"
              justify="center"
            >
              <Text textStyle="sm">{n}</Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Layout components are presentational; use semantic HTML (main, nav, section, article) and landmarks where they define page structure.", rule: "1.3.1" },
          { text: "Preserve a logical reading and focus order; avoid reordering with CSS in a way that confuses screen readers.", rule: "2.4.3" },
          { text: "Use heading hierarchy (h1–h6) for sections; group related content with landmarks (e.g. aria-label on region/section) when helpful.", rule: "1.3.1" },
          { text: "Ensure interactive elements inside layout have sufficient touch targets and visible focus styles.", rule: "2.4.7" },
        ]}
      />
    </VStack>
  );
}
