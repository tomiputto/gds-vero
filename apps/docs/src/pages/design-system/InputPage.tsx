import {
  Box,
  Field,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

export function InputPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Input
        </Heading>
        <Text color="fg.muted">
          Text inputs with field labels, helper text, and error states.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Input with label"
        code={`import { Input } from "../components/Input";

// Basic
<Input label="Email" placeholder="Enter your email" />

// With helper
<Input
  label="Username"
  placeholder="Username"
  helperText="Choose a unique username"
/>`}
      >
        <Stack gap="6" maxW="md">
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input placeholder="Enter your email" bg="bg.default" />
          </Field.Root>
          <Field.Root>
            <Field.Label>With helper</Field.Label>
            <Input placeholder="Username" bg="bg.default" />
            <Field.HelperText>Choose a unique username</Field.HelperText>
          </Field.Root>
        </Stack>
      </Section>

      <Section
        title="Validation"
        description="Invalid state with error message"
        code={`import { Input } from "../components/Input";

// Validation
<Input
  label="Invalid field"
  placeholder="Required"
  error="This field is required"
  invalid
/>`}
      >
        <Stack gap="6" maxW="md">
          <Field.Root invalid>
            <Field.Label>Invalid field</Field.Label>
            <Input placeholder="Required" bg="bg.default" />
            <Field.ErrorText>This field is required</Field.ErrorText>
          </Field.Root>
        </Stack>
      </Section>

      <Section
        title="Sizes"
        description="Input size options"
        code={`import { Input } from "../components/Input";

// Sizes
<Input placeholder="size sm" size="sm" />
<Input placeholder="size md" size="md" />`}
      >
        <HStack gap="4" maxW="md">
          <Input placeholder="size xs" size="xs" flex="1" bg="bg.default" />
          <Input placeholder="size sm" size="sm" flex="1" bg="bg.default" />
          <Input placeholder="size md" size="md" flex="1" bg="bg.default" />
        </HStack>
      </Section>

      <Section
        title="Disabled"
        description="Disabled input"
        code={`import { Input } from "../components/Input";

// Disabled
<Input placeholder="Disabled" disabled />`}
      >
        <Input placeholder="Disabled" disabled maxW="md" bg="bg.default" />
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Associate every input with a visible label (e.g. <label> or aria-label).", rule: "3.3.2" },
          { text: "Use aria-describedby for helper text and aria-errormessage for validation errors.", rule: "3.3.1" },
          { text: "Invalid state: set aria-invalid=\"true\" and ensure error text is announced.", rule: "3.3.1" },
          { text: "Required fields: use required or aria-required and indicate in the label.", rule: "3.3.2" },
        ]}
      />
    </VStack>
  );
}
