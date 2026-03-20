import { Box, Button, HStack, Heading, VStack } from "@chakra-ui/react";
import { CheckIcon, PlusIcon } from "@gdesignsystem/icons";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function ButtonPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Button
        </Heading>
        <Text color="fg.muted">
          Buttons in different variants, sizes, and color palettes.
        </Text>
      </Box>

      <Section
        title="Variants"
        description="Button style variants (brand primary)"
        code={`import { Button } from "../components/Button";

// Variants
<Button variant="solid">Solid</Button>
<Button variant="outline">Outline</Button>
<Button variant="subtle">Subtle</Button>
<Button variant="ghost">Ghost</Button>`}
      >
        <HStack wrap="wrap" gap="3">
          <Button colorPalette="brand" variant="solid">Solid</Button>
          <Button colorPalette="brand" variant="outline">Outline</Button>
          <Button colorPalette="brand" variant="subtle">Subtle</Button>
          <Button colorPalette="brand" variant="surface">Surface</Button>
          <Button colorPalette="brand" variant="ghost">Ghost</Button>
          <Button colorPalette="brand" variant="plain">Plain</Button>
        </HStack>
      </Section>

      <Section
        title="Sizes"
        description="Button size options"
        code={`import { Button } from "../components/Button";

// Sizes
<Button size="sm">sm</Button>
<Button size="md">md</Button>
<Button size="lg">lg</Button>`}
      >
        <HStack wrap="wrap" gap="3">
          <Button colorPalette="brand" size="xs">xs</Button>
          <Button colorPalette="brand" size="sm">sm</Button>
          <Button colorPalette="brand" size="md">md</Button>
          <Button colorPalette="brand" size="lg">lg</Button>
          <Button colorPalette="brand" size="xl">xl</Button>
        </HStack>
      </Section>

      <Section
        title="Color palette"
        description="Use GDS brand palette (from Figma); no Chakra default palettes."
        code={`import { Button } from "@chakra-ui/react";

<Button colorPalette="brand">Brand</Button>`}
      >
        <HStack wrap="wrap" gap="3">
          <Button colorPalette="brand">Brand</Button>
        </HStack>
      </Section>

      <Section
        title="With icon"
        description="Use GDS icons from @gdesignsystem/icons; color inherits from the button (Figma tokens)."
        code={`import { Button } from "@chakra-ui/react";
import { CheckIcon, PlusIcon } from "@gdesignsystem/icons";
import { GDSText as Text } from "@gdesignsystem/react";

<Button colorPalette="brand"><CheckIcon /> Confirm</Button>
<Button colorPalette="brand" variant="outline"><PlusIcon /> Add</Button>`}
      >
        <HStack wrap="wrap" gap="3">
          <Button colorPalette="brand">
            <CheckIcon /> Confirm
          </Button>
          <Button colorPalette="brand" variant="outline">
            <PlusIcon /> Add
          </Button>
        </HStack>
      </Section>

      <Section
        title="States"
        description="Disabled and loading states"
        code={`import { Button } from "../components/Button";

// States
<Button disabled>Disabled</Button>
<Button loading>Loading</Button>`}
      >
        <HStack gap="3">
          <Button colorPalette="brand" disabled>Disabled</Button>
          <Button colorPalette="brand" loading>Loading</Button>
        </HStack>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use a single, clear label that describes the action (e.g. \"Save\", \"Cancel\").", rule: "4.1.2" },
          { text: "Prefer native <button> or role=\"button\" with keyboard support (Enter/Space).", rule: "2.1.1" },
          { text: "Disabled buttons should not be focusable; use aria-disabled when needed.", rule: "2.1.1" },
          { text: "Loading state: expose aria-busy and consider aria-live for screen readers.", rule: "4.1.3" },
        ]}
      />
    </VStack>
  );
}