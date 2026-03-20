import { Box, Heading, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function StatusPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Status
        </Heading>
        <Text color="fg.muted">
          Status indicator (e.g. success, error, warning).
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Status using GDS semantic colors (from Figma); no Chakra palettes."
        code={`import { Box, Text } from "@chakra-ui/react";

<Box display="flex" alignItems="center" gap="2" color="fg.success" bg="bg.success" px="2" py="1" borderRadius="md">
  <Box w="2" h="2" borderRadius="full" bg="fg.success" />
  <Text>Success</Text>
</Box>
<Box display="flex" alignItems="center" gap="2" color="fg.error" bg="bg.error" px="2" py="1" borderRadius="md">
  <Box w="2" h="2" borderRadius="full" bg="fg.error" />
  <Text>Error</Text>
</Box>
<Box display="flex" alignItems="center" gap="2" color="fg.warning" bg="bg.warning" px="2" py="1" borderRadius="md">
  <Box w="2" h="2" borderRadius="full" bg="fg.warning" />
  <Text>Warning</Text>
</Box>`}
      >
        <VStack align="stretch" gap="2">
          <Box display="flex" alignItems="center" gap="2" color="fg.success" bg="bg.success" px="2" py="1" borderRadius="md">
            <Box w="2" h="2" borderRadius="full" bg="fg.success" />
            <Text>Success</Text>
          </Box>
          <Box display="flex" alignItems="center" gap="2" color="fg.error" bg="bg.error" px="2" py="1" borderRadius="md">
            <Box w="2" h="2" borderRadius="full" bg="fg.error" />
            <Text>Error</Text>
          </Box>
          <Box display="flex" alignItems="center" gap="2" color="fg.warning" bg="bg.warning" px="2" py="1" borderRadius="md">
            <Box w="2" h="2" borderRadius="full" bg="fg.warning" />
            <Text>Warning</Text>
          </Box>
        </VStack>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Do not rely on color alone; use icon or text to convey meaning.", rule: "1.4.11" },
          { text: "For live regions use aria-live when status updates dynamically.", rule: "4.1.3" },
        ]}
      />
    </VStack>
  );
}