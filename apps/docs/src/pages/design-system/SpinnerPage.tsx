import { Box, Heading, HStack, Spinner, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gds-vero/react";
export function SpinnerPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Spinner
        </Heading>
        <Text color="fg.muted">
          Loading indicator for async operations.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Spinner with default size and color"
        code={`import { Spinner } from "@chakra-ui/react";

<Spinner color="brand.fg" />
<Spinner size="lg" color="brand.fg" />`}
      >
        <HStack gap="6">
          <Spinner color="brand.fg" />
          <Spinner size="lg" color="brand.fg" />
        </HStack>
      </Section>

      <Section
        title="Sizes"
        description="Spinner size options"
        code={`<Spinner size="xs" color="brand.fg" />
<Spinner size="sm" color="brand.fg" />
<Spinner size="md" color="brand.fg" />
<Spinner size="lg" color="brand.fg" />`}
      >
        <HStack gap="4">
          <Spinner size="xs" color="brand.fg" />
          <Spinner size="sm" color="brand.fg" />
          <Spinner size="md" color="brand.fg" />
          <Spinner size="lg" color="brand.fg" />
        </HStack>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use aria-busy=\"true\" on the region that is loading; pair the spinner with aria-live or sr-only text (e.g. \"Loading…\") so screen readers announce the state.", rule: "4.1.3" },
          { text: "Prefer a live region with polite or assertive announcement over relying on the spinner animation alone.", rule: "4.1.3" },
        ]}
      />
    </VStack>
  );
}