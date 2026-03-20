import { Box, Checkbox, Fieldset, Heading, Input, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function FieldsetPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Fieldset
        </Heading>
        <Text color="fg.muted">
          Groups form controls with a legend for accessibility.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Legend and grouped inputs"
        code={`import { Fieldset, Input, Checkbox } from "@chakra-ui/react";

<Fieldset.Root>
  <Fieldset.Legend>Shipping address</Fieldset.Legend>
  <Fieldset.HelperText>We'll use this for delivery.</Fieldset.HelperText>
  <Input placeholder="Street" mt="2" />
  <Checkbox.Root mt="2" colorPalette="brand">
    <Checkbox.HiddenInput />
    <Checkbox.Control />
    <Checkbox.Label>Same as billing</Checkbox.Label>
  </Checkbox.Root>
</Fieldset.Root>`}
      >
        <Fieldset.Root maxW="xs">
          <Fieldset.Legend>Shipping address</Fieldset.Legend>
          <Fieldset.HelperText>We'll use this for delivery.</Fieldset.HelperText>
          <Input placeholder="Street" mt="2" />
          <Checkbox.Root mt="2" colorPalette="brand">
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>Same as billing</Checkbox.Label>
          </Checkbox.Root>
        </Fieldset.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Fieldset groups related controls; Legend provides the group label.", rule: "1.3.1" },
          { text: "Use for radio groups and multi-field sections (e.g. address).", rule: "3.3.2" },
        ]}
      />
    </VStack>
  );
}