import { Box, Heading, HStack, RadioGroup, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function RadioGroupPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Radio Group
        </Heading>
        <Text color="fg.muted">
          Single selection from a set of options.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Radio group with vertical layout"
        code={`import { RadioGroup, VStack } from "@chakra-ui/react";

<RadioGroup.Root defaultValue="react" colorPalette="brand">
  <RadioGroup.Label>Framework</RadioGroup.Label>
  <VStack align="stretch" gap="2">
    <RadioGroup.Item value="react">
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemControl>
        <RadioGroup.ItemIndicator />
      </RadioGroup.ItemControl>
      <RadioGroup.ItemText>React</RadioGroup.ItemText>
    </RadioGroup.Item>
    <RadioGroup.Item value="vue">
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemControl>
        <RadioGroup.ItemIndicator />
      </RadioGroup.ItemControl>
      <RadioGroup.ItemText>Vue</RadioGroup.ItemText>
    </RadioGroup.Item>
    <RadioGroup.Item value="angular">
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemControl>
        <RadioGroup.ItemIndicator />
      </RadioGroup.ItemControl>
      <RadioGroup.ItemText>Angular</RadioGroup.ItemText>
    </RadioGroup.Item>
  </VStack>
</RadioGroup.Root>`}
      >
        <RadioGroup.Root defaultValue="react" colorPalette="brand">
          <RadioGroup.Label>Framework</RadioGroup.Label>
          <VStack align="stretch" gap="2" mt="2">
            <RadioGroup.Item value="react">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemControl>
                <RadioGroup.ItemIndicator />
              </RadioGroup.ItemControl>
              <RadioGroup.ItemText>React</RadioGroup.ItemText>
            </RadioGroup.Item>
            <RadioGroup.Item value="vue">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemControl>
                <RadioGroup.ItemIndicator />
              </RadioGroup.ItemControl>
              <RadioGroup.ItemText>Vue</RadioGroup.ItemText>
            </RadioGroup.Item>
            <RadioGroup.Item value="angular">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemControl>
                <RadioGroup.ItemIndicator />
              </RadioGroup.ItemControl>
              <RadioGroup.ItemText>Angular</RadioGroup.ItemText>
            </RadioGroup.Item>
          </VStack>
        </RadioGroup.Root>
      </Section>

      <Section
        title="Horizontal"
        description="Radio group in a row"
        code={`<RadioGroup.Root defaultValue="sm" colorPalette="brand">
  <RadioGroup.Label>Size</RadioGroup.Label>
  <HStack gap="4" mt="2">
    <RadioGroup.Item value="sm">
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemControl><RadioGroup.ItemIndicator /></RadioGroup.ItemControl>
      <RadioGroup.ItemText>Small</RadioGroup.ItemText>
    </RadioGroup.Item>
    <RadioGroup.Item value="md">
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemControl><RadioGroup.ItemIndicator /></RadioGroup.ItemControl>
      <RadioGroup.ItemText>Medium</RadioGroup.ItemText>
    </RadioGroup.Item>
    <RadioGroup.Item value="lg">
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemControl><RadioGroup.ItemIndicator /></RadioGroup.ItemControl>
      <RadioGroup.ItemText>Large</RadioGroup.ItemText>
    </RadioGroup.Item>
  </HStack>
</RadioGroup.Root>`}
      >
        <RadioGroup.Root defaultValue="sm" colorPalette="brand">
          <RadioGroup.Label>Size</RadioGroup.Label>
          <HStack gap="4" mt="2">
            <RadioGroup.Item value="sm">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemControl><RadioGroup.ItemIndicator /></RadioGroup.ItemControl>
              <RadioGroup.ItemText>Small</RadioGroup.ItemText>
            </RadioGroup.Item>
            <RadioGroup.Item value="md">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemControl><RadioGroup.ItemIndicator /></RadioGroup.ItemControl>
              <RadioGroup.ItemText>Medium</RadioGroup.ItemText>
            </RadioGroup.Item>
            <RadioGroup.Item value="lg">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemControl><RadioGroup.ItemIndicator /></RadioGroup.ItemControl>
              <RadioGroup.ItemText>Large</RadioGroup.ItemText>
            </RadioGroup.Item>
          </HStack>
        </RadioGroup.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use RadioGroup.Label so the group has an accessible name.", rule: "3.3.2" },
          { text: "Each Radio gets proper role and aria-checked from the group.", rule: "4.1.2" },
        ]}
      />
    </VStack>
  );
}