import { Box, Heading, Image, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function ImagePage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Image
        </Heading>
        <Text color="fg.muted">
          Responsive image with optional fallback and object fit.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Image with alt text"
        code={`import { Image } from "@chakra-ui/react";

<Image
  src="https://renegademaster-droid.github.io/GDS/image.svg"
  alt="Placeholder"
  width="200px"
  borderRadius="md"
/>`}
      >
        <Image
          src="https://renegademaster-droid.github.io/GDS/image.svg"
          alt="Placeholder 200x200"
          width="200px"
          borderRadius="md"
        />
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Always provide a meaningful alt attribute for images.", rule: "1.1.1" },
          { text: "Use empty alt (alt=\"\") for decorative images.", rule: "1.1.1" },
        ]}
      />
    </VStack>
  );
}