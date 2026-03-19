import { Box, Badge, HStack, Heading, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function BadgePage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Badge
        </Heading>
        <Text color="fg.muted">
          Labels and status indicators.
        </Text>
      </Box>

      <Section
        title="Default & status"
        description="Badge uses GDS brand palette; semantic states use Figma semantic tokens."
        code={`import { Badge, Box, Text } from "@chakra-ui/react";

<Badge colorPalette="brand">Brand</Badge>
<Box as="span" px="2" py="0.5" borderRadius="md" bg="bg.success" color="fg.success" fontSize="xs" fontWeight="medium">Success</Box>
<Box as="span" px="2" py="0.5" borderRadius="md" bg="bg.error" color="fg.error" fontSize="xs" fontWeight="medium">Error</Box>
<Box as="span" px="2" py="0.5" borderRadius="md" bg="bg.warning" color="fg.warning" fontSize="xs" fontWeight="medium">Warning</Box>`}
      >
        <HStack wrap="wrap" gap="3">
          <Badge colorPalette="brand">Brand</Badge>
          <Box as="span" px="2" py="0.5" borderRadius="md" bg="bg.success" color="fg.success" fontSize="xs" fontWeight="medium">Success</Box>
          <Box as="span" px="2" py="0.5" borderRadius="md" bg="bg.error" color="fg.error" fontSize="xs" fontWeight="medium">Error</Box>
          <Box as="span" px="2" py="0.5" borderRadius="md" bg="bg.warning" color="fg.warning" fontSize="xs" fontWeight="medium">Warning</Box>
        </HStack>
      </Section>

      <Section
        title="Variants"
        description="Badge style variants (brand primary)"
        code={`import { Badge } from "../components/Badge";

// Variants
<Badge variant="solid">Solid</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="subtle">Subtle</Badge>`}
      >
        <HStack wrap="wrap" gap="3">
          <Badge variant="solid" colorPalette="brand">Solid</Badge>
          <Badge variant="outline" colorPalette="brand">Outline</Badge>
          <Badge variant="subtle" colorPalette="brand">Subtle</Badge>
          <Badge variant="surface" colorPalette="brand">Surface</Badge>
        </HStack>
      </Section>

      <Section
        title="Sizes"
        description="Badge size options"
        code={`import { Badge } from "../components/Badge";

// Sizes
<Badge size="xs">xs</Badge>
<Badge size="sm">sm</Badge>
<Badge size="md">md</Badge>`}
      >
        <HStack gap="3">
          <Badge colorPalette="brand" size="xs">xs</Badge>
          <Badge colorPalette="brand" size="sm">sm</Badge>
          <Badge colorPalette="brand" size="md">md</Badge>
          <Badge colorPalette="brand" size="lg">lg</Badge>
        </HStack>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Badges are presentational; ensure status is also communicated in text or aria-label when used as the only indicator.", rule: "4.1.2" },
          { text: "Don’t rely on color alone for status (e.g. success/error); pair with icon or text.", rule: "1.4.11" },
          { text: "When used inside interactive elements, the parent control should have the accessible name.", rule: "4.1.2" },
        ]}
      />
    </VStack>
  );
}