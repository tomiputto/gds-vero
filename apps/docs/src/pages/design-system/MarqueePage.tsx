import { Box, Heading, Marquee, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function MarqueePage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Marquee
        </Heading>
        <Text color="fg.muted">
          Scrolling or ticker content.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Horizontal marquee"
        code={`import { Marquee } from "@chakra-ui/react";

<Marquee.Root>
  <Marquee.Content>
    <Box px="4">Item 1</Box>
    <Box px="4">Item 2</Box>
    <Box px="4">Item 3</Box>
  </Marquee.Content>
</Marquee.Root>`}
      >
        <Marquee.Root maxW="md">
          <Marquee.Content>
            <Box px="4" py="2" bg="bg.muted" borderRadius="md" whiteSpace="nowrap">
              Item 1
            </Box>
            <Box px="4" py="2" bg="bg.muted" borderRadius="md" whiteSpace="nowrap">
              Item 2
            </Box>
            <Box px="4" py="2" bg="bg.muted" borderRadius="md" whiteSpace="nowrap">
              Item 3
            </Box>
          </Marquee.Content>
        </Marquee.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Provide a way to pause scrolling for users who need more time (e.g. prefers-reduced-motion).", rule: "2.1.1" },
          { text: "Avoid critical information only in marquee; ensure it is available statically or announced.", rule: "1.3.1" },
        ]}
      />
    </VStack>
  );
}