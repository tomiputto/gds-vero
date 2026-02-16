import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";

export function IconsPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Icons
        </Heading>
        <Text color="fg.muted">
          GDS icon set and usage guidelines. Icons come from the{" "}
          <code>@gds/icons</code> package (aligned with Figma) and use Figma
          color tokens for consistent styling.
        </Text>
      </Box>

      <Section
        title="Icon usage"
        description="Use @gds/icons with Figma color tokens. Sizes: sm (4), md (5), lg (6)."
        code={`import { CheckIcon, StarIcon } from "@gds/icons";

<CheckIcon color="fg" boxSize="6" />
<StarIcon color="fg.muted" boxSize="5" />
<CheckIcon color="brand.fg" boxSize="4" />`}
      >
        <Text color="fg.muted" fontSize="sm">
          Use <code>@gds/icons</code> in components; set <code>color</code> to
          Figma tokens (e.g. <code>fg</code>, <code>fg.muted</code>,{" "}
          <code>brand.fg</code>, <code>fg.success</code>) so icon colors match
          the design system. See the Icon component page for live examples and
          Button usage.
        </Text>
      </Section>
    </VStack>
  );
}
