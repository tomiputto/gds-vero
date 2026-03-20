import { Accordion, Box, Heading, Span, VStack } from "@chakra-ui/react";
import { ChevronDownIcon } from "@gdesignsystem/icons";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
const items = [
  { value: "a", title: "First item", text: "Content for the first section." },
  { value: "b", title: "Second item", text: "Content for the second section." },
  { value: "c", title: "Third item", text: "Content for the third section." },
];

export function AccordionPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Accordion
        </Heading>
        <Text color="fg.muted">
          Collapsible sections for revealing content.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Collapsible accordion (one open at a time)"
        code={`import { Accordion } from "../components/Accordion";

// Collapsible (one open)
<Accordion.Root collapsible defaultValue={["b"]}>
  <Accordion.Item value="a">
    <Accordion.ItemTrigger>
      <Span flex="1">First item</Span>
    </Accordion.ItemTrigger>
    <Accordion.ItemContent>
      <Accordion.ItemBody>Content...</Accordion.ItemBody>
    </Accordion.ItemContent>
  </Accordion.Item>
</Accordion.Root>`}
      >
        <Accordion.Root
          collapsible
          defaultValue={["b"]}
          width="100%"
          bg="bg.default"
          borderRadius="md"
          borderWidth="1px"
          borderColor="border.muted"
          overflow="hidden"
        >
          {items.map((item) => (
            <Accordion.Item
              key={item.value}
              value={item.value}
              borderBottomWidth="1px"
              borderColor="border.muted"
              _last={{ borderBottomWidth: 0 }}
            >
              <Accordion.ItemTrigger
                cursor="pointer"
                px="4"
                py="3"
                width="100%"
                textAlign="start"
              >
                <Span flex="1">{item.title}</Span>
                <Accordion.ItemIndicator>
                  <ChevronDownIcon boxSize="4" />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody px="4" py="3" bg="bg.subtle">
                  {item.text}
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use a heading (e.g. h2/h3) for each accordion trigger so the structure is clear to screen readers.", rule: "1.3.1" },
          { text: "Expose expanded state: aria-expanded on the trigger and ensure the panel has an accessible name (e.g. aria-labelledby).", rule: "4.1.2" },
          { text: "Keyboard: Enter/Space toggles; focus moves to the trigger when opening.", rule: "2.1.1" },
        ]}
      />
    </VStack>
  );
}