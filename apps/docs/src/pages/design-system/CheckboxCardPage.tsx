import { Box, CheckboxCard, CheckboxGroup, Flex, Heading, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gds-vero/react";
const items = [
  { value: "next", title: "Next.js", description: "Best for apps" },
  { value: "vite", title: "Vite", description: "Best for SPAs" },
  { value: "astro", title: "Astro", description: "Best for static sites" },
];

export function CheckboxCardPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Checkbox Card
        </Heading>
        <Text color="fg.muted">
          Card-style checkbox with label and optional description.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Single checkbox card"
        code={`import { CheckboxCard } from "@chakra-ui/react";

<CheckboxCard.Root maxW="240px" colorPalette="brand" bg="bg.default">
  <CheckboxCard.HiddenInput />
  <CheckboxCard.Control>
    <CheckboxCard.Label>Next.js</CheckboxCard.Label>
    <CheckboxCard.Indicator />
  </CheckboxCard.Control>
</CheckboxCard.Root>`}
      >
        <CheckboxCard.Root maxW="240px" colorPalette="brand" bg="bg.default">
          <CheckboxCard.HiddenInput />
          <CheckboxCard.Control>
            <CheckboxCard.Label>Next.js</CheckboxCard.Label>
            <CheckboxCard.Indicator />
          </CheckboxCard.Control>
        </CheckboxCard.Root>
      </Section>

      <Section
        title="With group"
        description="Multiple options with CheckboxGroup"
        code={`<CheckboxGroup defaultValue={["next"]}>
  <Text textStyle="sm" fontWeight="medium">Select framework(s)</Text>
  <Flex gap="2">
    {items.map((item) => (
      <CheckboxCard.Root key={item.value} value={item.value} colorPalette="brand" bg="bg.default">
        <CheckboxCard.HiddenInput />
        <CheckboxCard.Control>
          <CheckboxCard.Content>
            <CheckboxCard.Label>{item.title}</CheckboxCard.Label>
            <CheckboxCard.Description>{item.description}</CheckboxCard.Description>
          </CheckboxCard.Content>
          <CheckboxCard.Indicator />
        </CheckboxCard.Control>
      </CheckboxCard.Root>
    ))}
  </Flex>
</CheckboxGroup>`}
      >
        <CheckboxGroup defaultValue={["next"]}>
          <Text textStyle="sm" fontWeight="medium" mb="2">Select framework(s)</Text>
          <Flex gap="2" wrap="wrap">
            {items.map((item) => (
              <CheckboxCard.Root key={item.value} value={item.value} maxW="200px" colorPalette="brand" bg="bg.default">
                <CheckboxCard.HiddenInput />
                <CheckboxCard.Control>
                  <CheckboxCard.Content>
                    <CheckboxCard.Label>{item.title}</CheckboxCard.Label>
                    <CheckboxCard.Description>{item.description}</CheckboxCard.Description>
                  </CheckboxCard.Content>
                  <CheckboxCard.Indicator />
                </CheckboxCard.Control>
              </CheckboxCard.Root>
            ))}
          </Flex>
        </CheckboxGroup>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use CheckboxGroup so multiple cards are announced as a group.", rule: "1.3.1" },
          { text: "Label and description provide context for each option.", rule: "3.3.2" },
        ]}
      />
    </VStack>
  );
}