import { Box, Heading, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { GDSText as Text } from "@gds-vero/react";
/** Border radius scale (align with Figma Radii when synced) */
const radiusSizes = ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "full"] as const;

export function RadiusPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Radius
        </Heading>
        <Text color="fg.muted">
          Border radius tokens from Figma, exposed in the theme via @gds-vero/tokens. Use borderRadius token names for consistent corners.
        </Text>
      </Box>

      <Section
        title="Radius scale"
        description="Figma Radii tokens are in the theme. Use borderRadius token names so corners stay consistent."
        code={`import { Box } from "@chakra-ui/react";

<Box borderRadius="md">...</Box>
<Box borderRadius="lg" borderWidth="1px">...</Box>
<Box borderRadius="full" w="10" h="10">Circle</Box>`}
      >
        <VStack align="stretch" gap="4">
          {radiusSizes.map((size) => (
            <Box key={size} display="flex" alignItems="center" gap="4">
              <Box
                w="16"
                h="10"
                bg="brand.solid"
                opacity={0.12}
                borderWidth="1px"
                borderColor="border.muted"
                borderRadius={size === "none" ? "0" : size}
              />
              <Text fontSize="sm" color="fg.muted" fontFamily="mono">
                borderRadius="{size}"
              </Text>
            </Box>
          ))}
        </VStack>
      </Section>

      <Section
        title="Usage"
        description="Apply radius to cards, buttons, inputs, and avatars for a consistent look."
        code={`<Box borderRadius="md" p="4">Card</Box>
<Button borderRadius="md">Button</Button>
<Avatar borderRadius="full" />`}
      >
        <Box
          p="6"
          bg="bg.subtle"
          borderRadius="lg"
          borderWidth="1px"
          borderColor="border.muted"
        >
          <Text fontSize="sm" color="fg.muted">
            This box uses borderRadius="lg".
          </Text>
        </Box>
      </Section>
    </VStack>
  );
}