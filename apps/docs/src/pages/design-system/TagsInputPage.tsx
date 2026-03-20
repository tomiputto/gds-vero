import { Box, Field, Heading, TagsInput, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function TagsInputPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Tags Input
        </Heading>
        <Text color="fg.muted">
          Input for entering multiple tags or values.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Add and remove tags"
        code={`import { Field, TagsInput } from "@chakra-ui/react";

<Field.Root>
  <TagsInput.Root defaultValue={["react", "chakra"]} colorPalette="brand">
    <TagsInput.Label>Tags</TagsInput.Label>
    <TagsInput.Control>
      <TagsInput.Items />
      <TagsInput.Input placeholder="Add tag..." />
    </TagsInput.Control>
  </TagsInput.Root>
</Field.Root>`}
      >
        <Field.Root maxW="md">
          <TagsInput.Root defaultValue={["react", "chakra"]} colorPalette="brand">
            <TagsInput.Label>Tags</TagsInput.Label>
            <TagsInput.Control>
              <TagsInput.Items />
              <TagsInput.Input placeholder="Add tag..." />
            </TagsInput.Control>
          </TagsInput.Root>
        </Field.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Associate label with the control; announce added/removed tags when appropriate.", rule: "3.3.2" },
          { text: "Allow removing tags via keyboard (e.g. Backspace on empty input).", rule: "2.1.1" },
        ]}
      />
    </VStack>
  );
}