import { Box, Flex, Heading, RadioCard, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
const plans = [
  { value: "starter", title: "Starter", description: "For small projects" },
  { value: "pro", title: "Pro", description: "For teams" },
  { value: "enterprise", title: "Enterprise", description: "For organizations" },
];

export function RadioCardPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Radio Card
        </Heading>
        <Text color="fg.muted">
          Card-style radio option with label and description.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Single select card group"
        code={`import { RadioCard } from "@chakra-ui/react";

<RadioCard.Root defaultValue="pro" colorPalette="brand">
  <Flex gap="2" wrap="wrap">
    {plans.map((plan) => (
      <RadioCard.Item key={plan.value} value={plan.value}>
        <RadioCard.ItemHiddenInput />
        <RadioCard.ItemControl>
          <RadioCard.ItemIndicator />
          <RadioCard.ItemContent>
            <RadioCard.Label>{plan.title}</RadioCard.Label>
            <RadioCard.ItemDescription>{plan.description}</RadioCard.ItemDescription>
          </RadioCard.ItemContent>
        </RadioCard.ItemControl>
      </RadioCard.Item>
    ))}
  </Flex>
</RadioCard.Root>`}
      >
        <RadioCard.Root defaultValue="pro" colorPalette="brand">
          <Flex gap="2" wrap="wrap">
            {plans.map((plan) => (
              <RadioCard.Item key={plan.value} value={plan.value} maxW="200px">
                <RadioCard.ItemHiddenInput />
                <RadioCard.ItemControl>
                  <RadioCard.ItemIndicator />
                  <RadioCard.ItemContent>
                    <RadioCard.Label>{plan.title}</RadioCard.Label>
                    <RadioCard.ItemDescription>{plan.description}</RadioCard.ItemDescription>
                  </RadioCard.ItemContent>
                </RadioCard.ItemControl>
              </RadioCard.Item>
            ))}
          </Flex>
        </RadioCard.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use RadioCard.Root so the set is announced as a group with a single tab stop.", rule: "1.3.1" },
          { text: "Label and description provide context for each option.", rule: "3.3.2" },
        ]}
      />
    </VStack>
  );
}