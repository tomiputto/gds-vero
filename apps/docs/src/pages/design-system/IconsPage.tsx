import type { ComponentType } from "react";
import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import * as GdsIcons from "@gds-vero/icons";
import { Section } from "../../components/Section";
import { GDSText as Text } from "@gds-vero/react";
export function IconsPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Icons
        </Heading>
        <Text color="fg.muted">
          GDS icon set and usage guidelines. Icons come from the{" "}
          <code>@gds-vero/icons</code> package (aligned with Figma) and use Figma
          color tokens for consistent styling.
        </Text>
      </Box>

      <Section
        title="Icon usage"
        description="All icons from @gds-vero/icons. Use Figma token colors for styling."
        code={`import * as Icons from "@gds-vero/icons";

<SimpleGrid columns={{ base: 3, md: 6, lg: 8 }} gap="4">
  {Object.entries(Icons).map(([name, Icon]) => (
    <Icon key={name} boxSize="6" />
  ))}
</SimpleGrid>`}
      >
        <Text color="fg.muted" fontSize="sm" mb="4">
          Use <code>@gds-vero/icons</code> in components; set <code>color</code> to
          Figma tokens (e.g. <code>fg</code>, <code>fg.muted</code>,{" "}
          <code>brand.fg</code>, <code>fg.success</code>) so icon colors match
          the design system.
        </Text>
        <SimpleGrid columns={{ base: 3, md: 6, lg: 8 }} gap="4">
          {Object.entries(GdsIcons)
            .filter(([, value]) => typeof value === "function")
            .map(([name, IconComponent]) => {
              const Icon = IconComponent as ComponentType<{
                color?: string;
                boxSize?: string;
              }>;
              return (
                <VStack key={name} gap="1" align="center" fontSize="xs" minW={0}>
                  <Box
                    bg="bg.panel"
                    borderWidth="1px"
                    borderColor="border.muted"
                    borderRadius="md"
                    p="3"
                  >
                    <Icon color="fg" boxSize="6" />
                  </Box>
                  <Text color="fg.muted" lineClamp={1} wordBreak="break-all">
                    {name}
                  </Text>
                </VStack>
              );
            })}
        </SimpleGrid>
      </Section>
    </VStack>
  );
}