import { Box, Field, Heading, NumberInput, Text, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

export function NumberInputPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Number Input
        </Heading>
        <Text color="fg.muted">
          Numeric input with optional stepper and min/max.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Number input with stepper"
        code={`import { NumberInput } from "@chakra-ui/react";

<NumberInput.Root defaultValue={5} min={0} max={100} variant="outline">
  <NumberInput.Control />
  <NumberInput.Input bg="bg.default" />
</NumberInput.Root>`}
      >
        <NumberInput.Root defaultValue={"5"} min={0} max={100} maxW="xs" variant="outline">
          <NumberInput.Control />
          <NumberInput.Input bg="bg.default" />
        </NumberInput.Root>
      </Section>

      <Section
        title="With field"
        description="Label and helper"
        code={`<Field.Root>
  <Field.Label>Quantity</Field.Label>
  <NumberInput.Root defaultValue={1} min={1} variant="outline">
    <NumberInput.Control />
    <NumberInput.Input bg="bg.default" />
  </NumberInput.Root>
  <Field.HelperText>Min 1</Field.HelperText>
</Field.Root>`}
      >
        <Field.Root maxW="xs">
          <Field.Label>Quantity</Field.Label>
          <NumberInput.Root defaultValue={"1"} min={1} variant="outline">
            <NumberInput.Control />
            <NumberInput.Input bg="bg.default" />
          </NumberInput.Root>
          <Field.HelperText>Min 1</Field.HelperText>
        </Field.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use Field.Label or aria-label so the input has an accessible name.", rule: "3.3.2" },
          { text: "Set min, max, and step for predictable behavior and validation.", rule: "3.3.2" },
        ]}
      />
    </VStack>
  );
}
