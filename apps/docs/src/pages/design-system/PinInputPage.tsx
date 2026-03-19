import {
  Box,
  Field,
  Heading,
  PinInput,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

export function PinInputPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Pin Input
        </Heading>
        <Text color="fg.muted">
          Group of inputs for one-time codes (OTP) or short numeric strings.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="4-digit numeric PIN with brand styling."
        code={`import { PinInput } from "@chakra-ui/react";

<PinInput.Root otp defaultValue={["1", "2", "3", "4"]} size="lg" colorPalette="brand">
  <PinInput.HiddenInput />
  <PinInput.Control gap="2">
    {[0, 1, 2, 3].map((index) => (
      <PinInput.Input key={index} />
    ))}
  </PinInput.Control>
</PinInput.Root>`}
      >
        <PinInput.Root
          otp
          defaultValue={["1", "2", "3", "4"]}
          size="lg"
          colorPalette="brand"
        >
          <PinInput.HiddenInput />
          <PinInput.Control gap="2">
            {[0, 1, 2, 3].map((index) => (
              <PinInput.Input key={index} index={index} />
            ))}
          </PinInput.Control>
        </PinInput.Root>
      </Section>

      <Section
        title="Masked"
        description="Mask the value for sensitive codes."
        code={`<PinInput.Root mask size="md" colorPalette="brand">
  <PinInput.HiddenInput />
  <PinInput.Control gap="2">
    {[0, 1, 2, 3, 4, 5].map((index) => (
      <PinInput.Input key={index} />
    ))}
  </PinInput.Control>
</PinInput.Root>`}
      >
        <PinInput.Root mask size="md" colorPalette="brand">
          <PinInput.HiddenInput />
          <PinInput.Control gap="2">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <PinInput.Input key={index} index={index} />
            ))}
          </PinInput.Control>
        </PinInput.Root>
      </Section>

      <Section
        title="With Field"
        description="Label, helper text and error combined with PinInput."
        code={`<Field.Root invalid>
  <Field.Label>Verification code</Field.Label>
  <PinInput.Root otp size="md" colorPalette="brand">
    <PinInput.HiddenInput />
    <PinInput.Control gap="2" mt="2">
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <PinInput.Input key={index} />
      ))}
    </PinInput.Control>
  </PinInput.Root>
  <Field.HelperText>Enter the 6-digit code sent to your email.</Field.HelperText>
  <Field.ErrorText>Code is invalid or expired.</Field.ErrorText>
</Field.Root>`}
      >
        <Field.Root>
          <Field.Label>Verification code</Field.Label>
          <PinInput.Root otp size="md" colorPalette="brand">
            <PinInput.HiddenInput />
            <PinInput.Control gap="2" mt="2">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <PinInput.Input key={index} index={index} />
              ))}
            </PinInput.Control>
          </PinInput.Root>
          <Field.HelperText>
            Enter the 6-digit code sent to your email.
          </Field.HelperText>
        </Field.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          {
            text: "Use a clear label (for example “Verification code”) and instructions for how many digits are required.",
            rule: "3.3.2",
          },
          {
            text: "Ensure focus moves logically between inputs and supports pasting the full code when possible.",
            rule: "2.4.3",
          },
          {
            text: "Avoid relying on PIN input alone for security; combine with other factors as needed.",
            rule: "2.2.2",
          },
        ]}
      />
    </VStack>
  );
}

