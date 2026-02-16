import { Box, Field, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

export function FieldPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Field
        </Heading>
        <Text color="fg.muted">
          Wrapper for form controls with label, helper text, and error state.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Label, input, and helper text"
        code={`import { Field, Input } from "@chakra-ui/react";

<Field.Root>
  <Field.Label>Email</Field.Label>
  <Input placeholder="you@example.com" />
  <Field.HelperText>We'll never share your email.</Field.HelperText>
</Field.Root>`}
      >
        <Field.Root maxW="xs">
          <Field.Label>Email</Field.Label>
          <Input placeholder="you@example.com" />
          <Field.HelperText>We'll never share your email.</Field.HelperText>
        </Field.Root>
      </Section>

      <Section
        title="Invalid"
        description="Error message and invalid state"
        code={`<Field.Root invalid>
  <Field.Label>Password</Field.Label>
  <Input type="password" />
  <Field.ErrorText>Password must be at least 8 characters.</Field.ErrorText>
</Field.Root>`}
      >
        <Field.Root invalid maxW="xs">
          <Field.Label>Password</Field.Label>
          <Input type="password" />
          <Field.ErrorText>Password must be at least 8 characters.</Field.ErrorText>
        </Field.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Field.Root associates Label with the control via id and aria-describedby for helper/error.", rule: "3.3.2" },
          { text: "Use invalid and ErrorText so screen readers announce validation errors.", rule: "3.3.1" },
        ]}
      />
    </VStack>
  );
}
