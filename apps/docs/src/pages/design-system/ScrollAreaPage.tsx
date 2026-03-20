import { Box, Flex, Heading, ScrollArea, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";

export function ScrollAreaPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Scroll Area
        </Heading>
        <Text color="fg.muted">
          Custom scrollable region with optional scrollbar styling. Use when you
          need a fixed-height scroll container or horizontal scroll.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Vertical scroll with viewport and scrollbar"
        code={`import { ScrollArea } from "@chakra-ui/react";

<ScrollArea.Root height="8rem" maxW="md">
  <ScrollArea.Viewport>
    <ScrollArea.Content>
      {/* Your scrollable content */}
    </ScrollArea.Content>
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar>
    <ScrollArea.Thumb />
  </ScrollArea.Scrollbar>
</ScrollArea.Root>`}
      >
        <ScrollArea.Root height="8rem" maxW="md">
          <ScrollArea.Viewport>
            <ScrollArea.Content textStyle="sm" color="fg.muted">
              <Text>{lorem.repeat(3)}</Text>
            </ScrollArea.Content>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar>
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </Section>

      <Section
        title="Horizontal scroll"
        description="Scroll area with horizontal content"
        code={`<ScrollArea.Root width="20rem" size="xs">
  <ScrollArea.Viewport>
    <ScrollArea.Content py="4">
      <Flex gap="4" flexWrap="nowrap">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Box key={i} h="16" w="32" flexShrink={0} borderRadius="md" bg="bg.muted">
            Item {i}
          </Box>
        ))}
      </Flex>
    </ScrollArea.Content>
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar orientation="horizontal" />
  <ScrollArea.Corner />
</ScrollArea.Root>`}
      >
        <ScrollArea.Root width="20rem" size="xs">
          <ScrollArea.Viewport>
            <ScrollArea.Content py="4">
              <Flex gap="4" flexWrap="nowrap">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Box
                    key={i}
                    h="16"
                    w="32"
                    flexShrink={0}
                    borderRadius="md"
                    bg="bg.muted"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    textStyle="sm"
                  >
                    Item {i}
                  </Box>
                ))}
              </Flex>
            </ScrollArea.Content>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="horizontal" />
          <ScrollArea.Corner />
        </ScrollArea.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Scrollable regions should be keyboard accessible (e.g. focus and arrow keys).", rule: "2.1.1" },
          { text: "Ensure scrollbar has sufficient contrast and is visible or discoverable.", rule: "1.4.11" },
        ]}
      />
    </VStack>
  );
}