import { Box, Heading, SegmentGroup, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function SegmentGroupPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Segment Group
        </Heading>
        <Text color="fg.muted">
          Segmented control for selecting one of several options.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Segmented control with items"
        code={`import { SegmentGroup } from "@chakra-ui/react";

<SegmentGroup.Root defaultValue="react" colorPalette="brand">
  <SegmentGroup.Indicator />
  <SegmentGroup.Items
    items={[
      { value: "react", label: "React" },
      { value: "vue", label: "Vue" },
      { value: "svelte", label: "Svelte" },
    ]}
  />
</SegmentGroup.Root>`}
      >
        <SegmentGroup.Root defaultValue="react" colorPalette="brand">
          <SegmentGroup.Indicator />
          <SegmentGroup.Items
            items={[
              { value: "react", label: "React" },
              { value: "vue", label: "Vue" },
              { value: "svelte", label: "Svelte" },
            ]}
          />
        </SegmentGroup.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          "SegmentGroup exposes role=\"segmented\" or similar; ensure group has a label if needed.",
          "Only one item is selected; keyboard navigation with arrows.",
        ]}
      />
    </VStack>
  );
}