import {
  Box,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { PlusIcon, SearchIcon, TrashIcon, XIcon } from "@gdesignsystem/icons";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

export function IconButtonPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Icon Button
        </Heading>
        <Text color="fg.muted">
          Button that shows only an icon. Use for actions like close, search, or
          add when space is limited.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Icon as child; always provide an accessible name with aria-label."
        code={`import { IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@gdesignsystem/icons";

<IconButton aria-label="Search">
  <SearchIcon />
</IconButton>`}
      >
        <HStack gap="3">
          <IconButton aria-label="Search" colorPalette="brand">
            <SearchIcon />
          </IconButton>
          <IconButton aria-label="Add" colorPalette="brand">
            <PlusIcon />
          </IconButton>
          <IconButton aria-label="Close" variant="ghost">
            <XIcon />
          </IconButton>
          <IconButton aria-label="Delete" colorPalette="red" variant="outline">
            <TrashIcon />
          </IconButton>
        </HStack>
      </Section>

      <Section
        title="Sizes"
        description="Icon button size options"
        code={`<IconButton size="sm" aria-label="Search"><SearchIcon /></IconButton>
<IconButton size="md" aria-label="Search"><SearchIcon /></IconButton>
<IconButton size="lg" aria-label="Search"><SearchIcon /></IconButton>`}
      >
        <HStack gap="3">
          <IconButton size="xs" aria-label="Search" colorPalette="brand">
            <SearchIcon />
          </IconButton>
          <IconButton size="sm" aria-label="Search" colorPalette="brand">
            <SearchIcon />
          </IconButton>
          <IconButton size="md" aria-label="Search" colorPalette="brand">
            <SearchIcon />
          </IconButton>
          <IconButton size="lg" aria-label="Search" colorPalette="brand">
            <SearchIcon />
          </IconButton>
        </HStack>
      </Section>

      <Section
        title="Variants"
        description="Same variants as Button (brand color palette)"
        code={`<IconButton variant="solid" aria-label="Action"><PlusIcon /></IconButton>
<IconButton variant="outline" aria-label="Action"><PlusIcon /></IconButton>
<IconButton variant="subtle" aria-label="Action"><PlusIcon /></IconButton>
<IconButton variant="ghost" aria-label="Action"><PlusIcon /></IconButton>`}
      >
        <HStack wrap="wrap" gap="3">
          <IconButton variant="solid" aria-label="Action" colorPalette="brand">
            <PlusIcon />
          </IconButton>
          <IconButton variant="outline" aria-label="Action" colorPalette="brand">
            <PlusIcon />
          </IconButton>
          <IconButton variant="subtle" aria-label="Action" colorPalette="brand">
            <PlusIcon />
          </IconButton>
          <IconButton variant="surface" aria-label="Action" colorPalette="brand">
            <PlusIcon />
          </IconButton>
          <IconButton variant="ghost" aria-label="Action" colorPalette="brand">
            <PlusIcon />
          </IconButton>
        </HStack>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Always provide an accessible name: use aria-label (e.g. \"Close\", \"Search\") so screen readers announce the action.", rule: "4.1.2" },
          { text: "IconButton is keyboard focusable and activatable with Enter/Space like Button.", rule: "2.1.1" },
          { text: "Ensure the icon has sufficient contrast and a visible focus indicator.", rule: "2.4.7" },
        ]}
      />
    </VStack>
  );
}
