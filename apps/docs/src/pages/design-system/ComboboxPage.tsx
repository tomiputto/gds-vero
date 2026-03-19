import { useState } from "react";
import { Box, Combobox, createListCollection, Field, Heading, Input, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
const options = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
];
const collection = createListCollection({ items: options });

export function ComboboxPage() {
  const [value, setValue] = useState<string[]>([]);
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Combobox
        </Heading>
        <Text color="fg.muted">
          Autocomplete input with listbox for selecting options.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Single select combobox"
        code={`import { Combobox, createListCollection, Field, Input } from "@chakra-ui/react";

const collection = createListCollection({ items: options });
<Combobox.Root collection={collection} value={value} onValueChange={(e) => setValue(e.value)} colorPalette="brand">
  <Field.Root>
    <Field.Label>Framework</Field.Label>
    <Combobox.Control>
      <Combobox.Input placeholder="Select..." asChild>
        <Input bg="bg.default" />
      </Combobox.Input>
      <Combobox.Trigger />
    </Combobox.Control>
  </Field.Root>
  <Combobox.Positioner>
    <Combobox.Content>
      {collection.items.map((item) => (
        <Combobox.Item key={item.value} item={item}>{item.label}</Combobox.Item>
      ))}
    </Combobox.Content>
  </Combobox.Positioner>
</Combobox.Root>`}
      >
        <Combobox.Root
          collection={collection}
          value={value}
          onValueChange={(e) => setValue(e.value)}
          width="100%"
          maxW="xs"
          colorPalette="brand"
        >
          <Field.Root>
            <Field.Label>Framework</Field.Label>
            <Combobox.Control>
<Combobox.Input placeholder="Select..." asChild>
              <Input bg="bg.default" />
              </Combobox.Input>
              <Combobox.Trigger />
            </Combobox.Control>
          </Field.Root>
          <Combobox.Positioner>
            <Combobox.Content>
              {collection.items.map((item: { label: string; value: string }) => (
                <Combobox.Item key={item.value} item={item}>
                  {item.label}
                </Combobox.Item>
              ))}
            </Combobox.Content>
          </Combobox.Positioner>
        </Combobox.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Combobox exposes listbox role and aria-expanded; ensure label is associated.", rule: "4.1.2" },
          { text: "Filter options as user types and announce result count when appropriate.", rule: "4.1.3" },
        ]}
      />
    </VStack>
  );
}