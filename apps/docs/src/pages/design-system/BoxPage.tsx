import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

export function BoxPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Box
        </Heading>
        <Text color="fg.muted">
          Primitive layout component; div with style props.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Box with padding, background, and border"
        code={`import { Box } from "@chakra-ui/react";

<Box p="4" bg="bg.muted" borderRadius="md" borderWidth="1px" borderColor="border.muted">
  Content
</Box>`}
      >
        <Box p="4" bg="bg.muted" borderRadius="md" borderWidth="1px" borderColor="border.muted">
          Content
        </Box>
      </Section>

      <Section
        title="As prop"
        description="Render as another element"
        code={`<Box as="section" p="4" bg="bg.subtle">
  Section content
</Box>`}
      >
        <Box as="section" p="4" bg="bg.subtle" borderRadius="md">
          Section content
        </Box>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use semantic elements via the as prop when appropriate (e.g. as=\"main\", as=\"nav\").", rule: "1.3.1" },
          { text: "Box itself has no semantics; use for layout and styling only.", rule: "1.3.1" },
        ]}
      />
    </VStack>
  );
}
