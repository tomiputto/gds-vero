import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { GDSText as Text } from "@gdesignsystem/react";
const semanticColors = [
  { token: "fg", label: "Foreground" },
  { token: "fg.muted", label: "Foreground muted" },
  { token: "bg.default", label: "Background default" },
  { token: "bg.subtle", label: "Background subtle" },
  { token: "bg.muted", label: "Background muted" },
  { token: "border.default", label: "Border default" },
  { token: "border.muted", label: "Border muted" },
] as const;

export function ColorsPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Colors
        </Heading>
        <Text color="fg.muted">
          Color tokens from Figma, exposed as semantic tokens in the theme (fg, bg, border, brand).
        </Text>
      </Box>

      <Section
        title="Semantic colors"
        description="Use semantic token names so colors adapt to light/dark mode and stay consistent."
        code={`import { Box, Text } from "@chakra-ui/react";

<Text color="fg">Foreground</Text>
<Text color="fg.muted">Muted text</Text>
<Box bg="bg.subtle" p="4">Background subtle</Box>
<Box bg="brand.solid" color="brand.contrast" p="2">Brand</Box>`}
      >
        <VStack align="stretch" gap="3">
          {semanticColors.map(({ token, label }) => (
            <HStack key={token} gap="4" align="center">
              <Box
                w="10"
                h="10"
                borderRadius="md"
                bg={token.startsWith("bg.") ? token : "transparent"}
                borderWidth={token.startsWith("border.") ? "2px" : 0}
                borderColor={token.startsWith("border.") ? token : undefined}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {token.startsWith("fg") && (
                  <Text as="span" fontSize="lg" color={token}>
                    Aa
                  </Text>
                )}
              </Box>
              <Text fontSize="sm" color="fg.muted">
                {label} — <Text as="span" fontFamily="mono">{token}</Text>
              </Text>
            </HStack>
          ))}
          <HStack gap="4" align="center" mt="2">
            <Box w="10" h="10" borderRadius="md" bg="brand.solid" />
            <Text fontSize="sm" color="fg.muted">
              Brand solid — <Text as="span" fontFamily="mono">brand.solid</Text>
            </Text>
          </HStack>
        </VStack>
      </Section>
    </VStack>
  );
}