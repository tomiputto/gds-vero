import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";

/** Common spacing scale (align with Figma Size/Spacing tokens when synced) */
const spacingSizes = ["1", "2", "3", "4", "5", "6", "8", "10", "12", "16", "20", "24"] as const;

export function SpacingPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Spacing
        </Heading>
        <Text color="fg.muted">
          Spacing tokens from Figma, exposed in the theme via @gdesignsystem/tokens. Use spacing token names (p, m, gap) for consistent layout.
        </Text>
      </Box>

      <Section
        title="Spacing scale"
        description="Figma Size/Spacing tokens are in the theme. Use spacing tokens (p, m, gap) so layout stays consistent."
        code={`import { Box, VStack } from "@chakra-ui/react";

<Box p="4">Padding 4</Box>
<VStack gap="3">...</VStack>
<Box m="2" mt="4">Margin</Box>`}
      >
        <VStack align="stretch" gap="4">
          {spacingSizes.map((size) => (
            <Box key={size} display="flex" alignItems="center" gap="4">
              <Box
                bg="brand.solid"
                opacity={0.8}
                width={size}
                minW={size}
                height="6"
                borderRadius="xs"
              />
              <Text fontSize="sm" color="fg.muted" fontFamily="mono">
                {size}
              </Text>
            </Box>
          ))}
        </VStack>
      </Section>

      <Section
        title="Usage"
        description="Apply spacing via padding (p, px, py), margin (m, mx, my), or gap on flex/grid."
        code={`<Box p="4" px="6" py="3">...</Box>
<VStack gap="2">...</VStack>
<Box marginTop="4" marginBottom="2">...</Box>`}
      >
        <Box p="6" bg="bg.muted" borderRadius="md" borderWidth="1px" borderColor="border.muted">
          <Text fontSize="sm" color="fg.muted">
            This box uses p="6". Use consistent spacing tokens across the app.
          </Text>
        </Box>
      </Section>
    </VStack>
  );
}
