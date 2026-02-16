import { Box, Field, Heading, Text, Textarea, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

export function TextareaPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Textarea
        </Heading>
        <Text color="fg.muted">
          Multi-line text input with optional resize and field integration.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Textarea with placeholder"
        code={`import { Textarea } from "@chakra-ui/react";

<Textarea placeholder="Comment..." bg="bg.default" />`}
      >
        <Textarea placeholder="Comment..." maxW="md" bg="bg.default" />
      </Section>

      <Section
        title="With field"
        description="Label and helper text"
        code={`<Field.Root>
  <Field.Label>Comment <Field.RequiredIndicator /></Field.Label>
  <Textarea placeholder="Start typing..." bg="bg.default" />
  <Field.HelperText>Max 500 characters.</Field.HelperText>
</Field.Root>`}
      >
        <Field.Root maxW="md">
          <Field.Label>Comment <Field.RequiredIndicator /></Field.Label>
          <Textarea placeholder="Start typing..." bg="bg.default" />
          <Field.HelperText>Max 500 characters.</Field.HelperText>
        </Field.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Pair with Field.Label and use Field.RequiredIndicator when required.", rule: "3.3.2" },
          { text: "Use Field.ErrorText for validation messages and set Field.Root invalid.", rule: "3.3.1" },
        ]}
      />
    </VStack>
  );
}
