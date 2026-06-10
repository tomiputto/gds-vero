import { Box, Heading, Stack, Switch, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gds-vero/react";
export function SwitchPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Switch
        </Heading>
        <Text color="fg.muted">
          Toggle control for on/off options.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Switch toggle (brand primary)"
        code={`import { Switch } from "../components/Switch";

// Basic
<Switch defaultChecked label="Enable notifications" />

// Unchecked
<Switch label="Dark mode" />`}
      >
        <Stack gap="2">
          <Switch.Root colorPalette="brand" defaultChecked>
            <Switch.HiddenInput />
            <Switch.Control />
            <Switch.Label>Enable notifications</Switch.Label>
          </Switch.Root>
          <Switch.Root colorPalette="brand">
            <Switch.HiddenInput />
            <Switch.Control />
            <Switch.Label>Dark mode</Switch.Label>
          </Switch.Root>
        </Stack>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Associate a visible label with the switch (e.g. label element or aria-labelledby).", rule: "3.3.2" },
          { text: "Use role=\"switch\" and aria-checked=\"true\" | \"false\" so state is announced.", rule: "4.1.2" },
          { text: "Ensure keyboard support: Space toggles, focus is visible and logical.", rule: "2.1.1" },
          { text: "Provide a sufficient touch/click target and avoid relying on color alone for state.", rule: "1.4.11" },
        ]}
      />
    </VStack>
  );
}