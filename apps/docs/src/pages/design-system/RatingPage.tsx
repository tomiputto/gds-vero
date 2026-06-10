import { Box, Field, Heading, RatingGroup, VStack } from "@chakra-ui/react";
import { StarIcon } from "@gds-vero/icons";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gds-vero/react";
export function RatingPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Rating
        </Heading>
        <Text color="fg.muted">
          Star or custom rating input.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Star rating"
        code={`import { RatingGroup } from "@chakra-ui/react";

<RatingGroup.Root count={5} defaultValue={3} colorPalette="brand">
  <RatingGroup.Label>Rating</RatingGroup.Label>
  <RatingGroup.Control ml="2">
    <RatingGroup.Context>
      {({ items }) =>
        items.map((_, index) => (
          <RatingGroup.Item key={index} index={index}>
            <RatingGroup.ItemIndicator />
          </RatingGroup.Item>
        ))
      }
    </RatingGroup.Context>
  </RatingGroup.Control>
</RatingGroup.Root>`}
      >
        <Field.Root>
          <RatingGroup.Root count={5} defaultValue={3} colorPalette="brand">
            <RatingGroup.Label>Rating</RatingGroup.Label>
            <RatingGroup.Control ml="2">
              <RatingGroup.Context>
                {({ items }) =>
                  items.map((_, index) => (
                    <RatingGroup.Item key={index} index={index}>
                      <RatingGroup.ItemIndicator icon={<StarIcon />} />
                    </RatingGroup.Item>
                  ))
                }
              </RatingGroup.Context>
            </RatingGroup.Control>
          </RatingGroup.Root>
        </Field.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Provide a visible label; RatingGroup exposes value to screen readers.", rule: "3.3.2" },
          { text: "Allow keyboard navigation (arrow keys) and clear value when appropriate.", rule: "2.1.1" },
        ]}
      />
    </VStack>
  );
}