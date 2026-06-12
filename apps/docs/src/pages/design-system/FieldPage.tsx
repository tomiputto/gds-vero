import { Box, Code, Field, Heading, Input, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gds-vero/react";
export function FieldPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Field
        </Heading>
        <Text color="fg.muted">
          Wrapper for form controls with label, helper text, and error state. Label typography
          (18px, semibold) comes from <Code>@gds-vero/theme</Code> on the <Code>Field.Label</Code> slot
          — use <Code>Field.Label</Code>, not <Code>GDSText</Code>, for visible labels.
        </Text>
        <Box
          mt="4"
          p="4"
          borderRadius="md"
          bg="bg.subtle"
          borderWidth="1px"
          borderColor="border.muted"
        >
          <Text fontSize="sm" color="fg.muted">
            <strong>Chakra v3:</strong> Use the Field API below. Do not use{" "}
            <Code>FormControl</Code>, <Code>FormLabel</Code>, <Code>FormHelperText</Code>, or{" "}
            <Code>FormErrorMessage</Code> — they are not in @chakra-ui/react v3 and will cause runtime errors.
          </Text>
        </Box>
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