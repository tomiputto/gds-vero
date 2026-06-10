import { Box, Checkbox, Heading, Stack, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gds-vero/react";
export function CheckboxSwitchPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Checkbox
        </Heading>
        <Text color="fg.muted">
          Form control for toggling options.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Checkbox with label (brand primary)"
        code={`import { Checkbox } from "../components/Checkbox";

// Basic
<Checkbox defaultChecked label="Accept terms" />

// Unchecked
<Checkbox label="Subscribe to newsletter" />`}
      >
        <Stack gap="2">
          <Checkbox.Root colorPalette="brand" defaultChecked>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>Accept terms</Checkbox.Label>
          </Checkbox.Root>
          <Checkbox.Root colorPalette="brand">
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>Subscribe to newsletter</Checkbox.Label>
          </Checkbox.Root>
          <Checkbox.Root colorPalette="brand" disabled>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>Disabled</Checkbox.Label>
          </Checkbox.Root>
        </Stack>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use a visible label associated with the checkbox (e.g. wrapping label or aria-labelledby).", rule: "3.3.2" },
          { text: "Expose state to assistive tech: aria-checked=\"true\" | \"false\" | \"mixed\" for indeterminate.", rule: "4.1.2" },
          { text: "Group related checkboxes in a fieldset with a legend when they form a single question.", rule: "1.3.1" },
          { text: "Ensure sufficient touch/click target size (e.g. 44×44px) and visible focus indicator.", rule: "2.4.7" },
        ]}
      />
    </VStack>
  );
}