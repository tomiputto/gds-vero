import { AbsoluteCenter, AspectRatio, Bleed, Box, Center, Container, Flex, Heading, HStack, SimpleGrid, Spacer, Square, Stack, Sticky, VStack, Wrap } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function LayoutPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
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

      <Section
        title="Center & AbsoluteCenter"
        description="Center content in its container or both vertically and horizontally."
        code={`import { Box, Center, AbsoluteCenter, Text } from "@chakra-ui/react";

// Center within a box
<Center h="40" bg="bg.muted" borderRadius="md">
  <Text>Centered content</Text>
</Center>

// AbsoluteCenter within a relative container
<Box position="relative" h="40" bg="bg.muted" borderRadius="md">
  <AbsoluteCenter>
    <Text>AbsoluteCenter</Text>
  </AbsoluteCenter>
</Box>`}
      >
        <Stack gap="4">
          <Center h="40" bg="bg.muted" borderRadius="md">
            <Text>Centered content</Text>
          </Center>
          <Box position="relative" h="40" bg="bg.muted" borderRadius="md">
            <AbsoluteCenter>
              <Text>AbsoluteCenter</Text>
            </AbsoluteCenter>
          </Box>
        </Stack>
      </Section>

      <Section
        title="Container"
        description="Constrain content to a readable width and center it on the page."
        code={`import { Box, Container, Heading, Text } from "@chakra-ui/react";

<Box bg="bg.muted" py="8">
  <Container maxW="2xl">
    <Heading size="lg" mb="2">
      Page section title
    </Heading>
    <Text color="fg.muted">
      Use Container to keep long-form content at a comfortable line length.
    </Text>
  </Container>
</Box>`}
      >
        <Box bg="bg.muted" py="8" borderRadius="md">
          <Container maxW="2xl">
            <Heading size="lg" mb="2">
              Page section title
            </Heading>
            <Text color="fg.muted">
              Use Container to keep long-form content at a comfortable line length.
            </Text>
          </Container>
        </Box>
      </Section>

      <Section
        title="Stack"
        description="One-dimensional stack with responsive direction."
        code={`import { Box, Stack, Text } from "@chakra-ui/react";

<Stack
  direction={{ base: "column", md: "row" }}
  gap="4"
  align="stretch"
>
  <Box flex="1" bg="bg.muted" borderRadius="md" p="4">
    <Text>Column 1</Text>
  </Box>
  <Box flex="1" bg="bg.muted" borderRadius="md" p="4">
    <Text>Column 2</Text>
  </Box>
</Stack>`}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          gap="4"
          align="stretch"
        >
          <Box flex="1" bg="bg.muted" borderRadius="md" p="4">
            <Text>Column 1</Text>
          </Box>
          <Box flex="1" bg="bg.muted" borderRadius="md" p="4">
            <Text>Column 2</Text>
          </Box>
        </Stack>
      </Section>

      <Section
        title="Wrap & Square"
        description="Wrap items automatically to the next line and keep them square."
        code={`import { Square, Text, Wrap } from "@chakra-ui/react";

<Wrap gap="3">
  {["A", "B", "C", "D", "E", "F"].map((label) => (
    <Square
      key={label}
      size="16"
      bg="bg.muted"
      borderRadius="lg"
    >
      <Text>{label}</Text>
    </Square>
  ))}
</Wrap>`}
      >
        <Wrap gap="3">
          {["A", "B", "C", "D", "E", "F"].map((label) => (
            <Square
              key={label}
              size="16"
              bg="bg.muted"
              borderRadius="lg"
            >
              <Text>{label}</Text>
            </Square>
          ))}
        </Wrap>
      </Section>

      <Section
        title="Spacer"
        description="Distribute remaining space between elements."
        code={`import { Box, HStack, Spacer, Text } from "@chakra-ui/react";

<Box bg="bg.muted" p="4" borderRadius="md">
  <HStack>
    <Text>Brand</Text>
    <Spacer />
    <Text>Docs</Text>
    <Text>Blog</Text>
    <Text>Contact</Text>
  </HStack>
</Box>`}
      >
        <Box bg="bg.muted" p="4" borderRadius="md">
          <HStack>
            <Text>Brand</Text>
            <Spacer />
            <Text>Docs</Text>
            <Text>Blog</Text>
            <Text>Contact</Text>
          </HStack>
        </Box>
      </Section>

      <Section
        title="AspectRatio"
        description="Maintain a fixed aspect ratio for media and embeds."
        code={`import { AspectRatio, Box } from "@chakra-ui/react";

<AspectRatio ratio={16 / 9} maxW="xl">
  <Box bg="bg.muted" borderRadius="md" />
</AspectRatio>`}
      >
        <AspectRatio ratio={16 / 9} maxW="xl">
          <Box bg="bg.muted" borderRadius="md" />
        </AspectRatio>
      </Section>

      <Section
        title="Bleed & Sticky"
        description="Let content extend outside its padding or stick to the viewport while scrolling."
        code={`import { Bleed, Box, Sticky, Text } from "@chakra-ui/react";

// Bleed a section edge-to-edge inside a padded container
<Box px="6" py="4" bg="bg.muted" borderRadius="md">
  <Bleed mx="-6">
    <Box bg="bg.emphasized" p="4">
      <Text>Bleed section</Text>
    </Box>
  </Bleed>
</Box>

// Sticky sidebar
<Box display="flex" gap="6" alignItems="flex-start">
  <Sticky top="20">
    <Box w="56" p="4" bg="bg.muted" borderRadius="md">
      <Text>Sticky sidebar</Text>
    </Box>
  </Sticky>
  <Box flex="1" h="64" bg="bg.subtle" borderRadius="md" />
</Box>`}
      >
        <Stack gap="6">
          <Box px="6" py="4" bg="bg.muted" borderRadius="md">
            <Bleed mx="-6">
              <Box bg="bg.emphasized" p="4">
                <Text>Bleed section</Text>
              </Box>
            </Bleed>
          </Box>
          <Box display="flex" gap="6" alignItems="flex-start">
            <Sticky top="20">
              <Box w="56" p="4" bg="bg.muted" borderRadius="md">
                <Text>Sticky sidebar</Text>
              </Box>
            </Sticky>
            <Box flex="1" h="64" bg="bg.subtle" borderRadius="md" />
          </Box>
        </Stack>
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