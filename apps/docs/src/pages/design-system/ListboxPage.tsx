import { Box, createListCollection, Heading, Listbox, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
const options = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
];
const collection = createListCollection({ items: options });

export function ListboxPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Listbox
        </Heading>
        <Text color="fg.muted">
          Single or multi-select list of options.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Single select listbox"
        code={`import { createListCollection, Listbox } from "@chakra-ui/react";

const collection = createListCollection({ items: options });
<Listbox.Root collection={collection} colorPalette="brand">
  <Listbox.Label>Framework</Listbox.Label>
  <Listbox.Content>
    {collection.items.map((item) => (
      <Listbox.Item key={item.value} item={item}>{item.label}</Listbox.Item>
    ))}
  </Listbox.Content>
</Listbox.Root>`}
      >
        <Listbox.Root collection={collection} width="100%" maxW="xs" colorPalette="brand">
          <Listbox.Label>Framework</Listbox.Label>
          <Listbox.Content>
            {collection.items.map((item: { label: string; value: string }) => (
              <Listbox.Item key={item.value} item={item}>
                {item.label}
              </Listbox.Item>
            ))}
          </Listbox.Content>
        </Listbox.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Listbox has role listbox; ensure Label is associated and options are focusable.", rule: "4.1.2" },
          { text: "Support arrow keys and Enter/Space for selection.", rule: "2.1.1" },
        ]}
      />
    </VStack>
  );
}