import { Box, Heading, NativeSelect, Text, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

export function SelectPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Select
        </Heading>
        <Text color="fg.muted">
          Native select dropdown for choosing a single option.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="NativeSelect with options"
        code={`import { NativeSelect } from "@chakra-ui/react";

<NativeSelect.Root size="sm" width="240px" colorPalette="brand">
  <NativeSelect.Field placeholder="Select option" bg="bg.default">
    <option value="react">React</option>
    <option value="vue">Vue</option>
    <option value="angular">Angular</option>
  </NativeSelect.Field>
  <NativeSelect.Indicator />
</NativeSelect.Root>`}
      >
        <NativeSelect.Root size="sm" width="240px" colorPalette="brand">
          <NativeSelect.Field placeholder="Select option" bg="bg.default">
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
            <option value="svelte">Svelte</option>
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use a visible label (Field.Label or aria-label) for the select.", rule: "3.3.2" },
          { text: "For custom styled selects use Combobox instead; NativeSelect uses native semantics.", rule: "4.1.2" },
        ]}
      />
    </VStack>
  );
}
