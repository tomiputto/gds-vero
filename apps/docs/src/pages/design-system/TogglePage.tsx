import { Box, Button, Heading, HStack, IconButton, Toggle, VStack } from "@chakra-ui/react";
import { BoldIcon, ItalicIcon } from "@gds-vero/icons";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gds-vero/react";

export function TogglePage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Toggle
        </Heading>
        <Text color="fg.muted">
          Two-state button for toolbars and formatting controls (pressed / not pressed). Use{" "}
          <Text as="code" fontSize="sm">
            Switch
          </Text>{" "}
          for form on/off settings.
        </Text>
      </Box>

      <Section
        title="Icon toggle"
        description="Toolbar control with aria-label; pair with Button or IconButton via asChild"
        code={`import { IconButton, Toggle } from "@chakra-ui/react";
import { BoldIcon } from "@gds-vero/icons";

<Toggle.Root asChild defaultPressed>
  <IconButton
    aria-label="Bold"
    colorPalette="brand"
    size="md"
    variant={{ base: "ghost", _pressed: "outline" }}
  >
    <BoldIcon />
  </IconButton>
</Toggle.Root>`}
      >
        <HStack gap="2">
          <Toggle.Root asChild defaultPressed>
            <IconButton
              aria-label="Bold"
              colorPalette="brand"
              size="md"
              variant={{ base: "ghost", _pressed: "outline" }}
            >
              <BoldIcon />
            </IconButton>
          </Toggle.Root>
          <Toggle.Root asChild>
            <IconButton
              aria-label="Italic"
              colorPalette="brand"
              size="md"
              variant={{ base: "ghost", _pressed: "outline" }}
            >
              <ItalicIcon />
            </IconButton>
          </Toggle.Root>
        </HStack>
      </Section>

      <Section
        title="Text toggle"
        description="Visible label; pressed state uses _pressed variant"
        code={`import { Button, Toggle } from "@chakra-ui/react";

<Toggle.Root asChild>
  <Button
    colorPalette="brand"
    size="md"
    variant={{ base: "outline", _pressed: "solid" }}
  >
    Preview
  </Button>
</Toggle.Root>`}
      >
        <Toggle.Root asChild>
          <Button
            colorPalette="brand"
            size="md"
            variant={{ base: "outline", _pressed: "solid" }}
          >
            Preview
          </Button>
        </Toggle.Root>
      </Section>

      <Section
        title="With indicator"
        description="Swap icon or label when pressed"
        code={`import { Button, Toggle } from "@chakra-ui/react";
import { BoldIcon } from "@gds-vero/icons";

<Toggle.Root asChild>
  <Button colorPalette="brand" variant={{ base: "ghost", _pressed: "subtle" }}>
    <Toggle.Indicator fallback={<BoldIcon />}>On</Toggle.Indicator>
    Bold
  </Button>
</Toggle.Root>`}
      >
        <Toggle.Root asChild>
          <Button colorPalette="brand" variant={{ base: "ghost", _pressed: "subtle" }}>
            <Toggle.Indicator fallback={<BoldIcon aria-hidden />}>On</Toggle.Indicator>
            Bold
          </Button>
        </Toggle.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Icon-only toggles need aria-label (e.g. \"Bold\"). Toggle sets aria-pressed on the trigger.", rule: "4.1.2" },
          { text: "Do not use Toggle for form settings — use Switch with a visible label instead.", rule: "3.3.2" },
          { text: "Ensure keyboard: Space/Enter toggles; focus ring is visible.", rule: "2.1.1" },
          { text: "Pressed state must not rely on color alone — use variant or icon change.", rule: "1.4.11" },
        ]}
      />
    </VStack>
  );
}
