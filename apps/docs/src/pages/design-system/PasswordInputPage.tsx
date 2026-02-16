import { Box, Field, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

export function PasswordInputPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Password Input
        </Heading>
        <Text color="fg.muted">
          Input for passwords. Use a password input with optional show/hide toggle (e.g. Input type="password" with a visibility button).
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Password field"
        code={`import { Field, Input } from "@chakra-ui/react";

<Field.Root>
  <Field.Label>Password</Field.Label>
  <Input type="password" placeholder="Enter password" bg="bg.default" />
</Field.Root>`}
      >
        <Field.Root maxW="xs">
          <Field.Label>Password</Field.Label>
          <Input type="password" placeholder="Enter password" bg="bg.default" />
        </Field.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Associate label with the input; ensure show/hide toggle has accessible label.", rule: "3.3.2" },
          { text: "Ensure password is not exposed in autocomplete or logs.", rule: "3.3.1" },
        ]}
      />
    </VStack>
  );
}
