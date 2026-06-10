import { Box, Center, Heading, Splitter, useSplitter, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gds-vero/react";
function BasicSplitter() {
  const splitter = useSplitter({
    defaultSize: [50, 50],
    panels: [{ id: "a" }, { id: "b" }],
  });
  return (
    <Box h="15rem" minH="15rem" w="full">
      <Splitter.RootProvider value={splitter} borderWidth="1px" h="full" minH="15rem">
        <Splitter.Panel id="a">
          <Center boxSize="full" textStyle="2xl" bg="bg.subtle">
            A
          </Center>
        </Splitter.Panel>
        <Splitter.ResizeTrigger id="a:b" />
        <Splitter.Panel id="b">
          <Center boxSize="full" textStyle="2xl" bg="bg.muted">
            B
          </Center>
        </Splitter.Panel>
      </Splitter.RootProvider>
    </Box>
  );
}

export function SplitterPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Splitter
        </Heading>
        <Text color="fg.muted">
          Resizable panels divided by a draggable handle. Use for layouts like
          sidebars, editor panes, or split views.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Two panels with a resize handle between them"
        code={`import { Splitter, Center } from "@chakra-ui/react";

<Splitter.Root
  panels={[{ id: "a" }, { id: "b" }]}
  defaultSize={[50, 50]}
  borderWidth="1px"
  minH="60"
>
  <Splitter.Panel id="a">
    <Center boxSize="full" textStyle="2xl">A</Center>
  </Splitter.Panel>
  <Splitter.ResizeTrigger id="a:b" />
  <Splitter.Panel id="b">
    <Center boxSize="full" textStyle="2xl">B</Center>
  </Splitter.Panel>
</Splitter.Root>`}
      >
        <BasicSplitter />
      </Section>

      <Section
        title="Vertical"
        description="Stacked panels with horizontal resize handle"
        code={`<Splitter.Root
  panels={[{ id: "top" }, { id: "bottom" }]}
  orientation="vertical"
  borderWidth="1px"
  minH="60"
>
  <Splitter.Panel id="top">...</Splitter.Panel>
  <Splitter.ResizeTrigger id="top:bottom" />
  <Splitter.Panel id="bottom">...</Splitter.Panel>
</Splitter.Root>`}
      >
        <Box h="15rem" minH="15rem" w="full">
          <Splitter.Root
            id="splitter-vertical"
            panels={[{ id: "top" }, { id: "bottom" }]}
            defaultSize={[50, 50]}
            orientation="vertical"
            borderWidth="1px"
            h="full"
            minH="15rem"
          >
            <Splitter.Panel id="top">
              <Center boxSize="full" textStyle="xl" bg="bg.subtle">
                Top
              </Center>
            </Splitter.Panel>
            <Splitter.ResizeTrigger id="top:bottom" />
            <Splitter.Panel id="bottom">
              <Center boxSize="full" textStyle="xl" bg="bg.muted">
                Bottom
              </Center>
            </Splitter.Panel>
          </Splitter.Root>
        </Box>
      </Section>

      <Section
        title="Three panels"
        description="Multiple panels with resize triggers between each"
        code={`<Splitter.Root panels={[{ id: "a" }, { id: "b" }, { id: "c" }]} ...>
  <Splitter.Panel id="a">A</Splitter.Panel>
  <Splitter.ResizeTrigger id="a:b" aria-label="Resize" />
  <Splitter.Panel id="b">B</Splitter.Panel>
  <Splitter.ResizeTrigger id="b:c" aria-label="Resize" />
  <Splitter.Panel id="c">C</Splitter.Panel>
</Splitter.Root>`}
      >
        <Box h="12rem" minH="12rem" w="full">
          <Splitter.Root
            id="splitter-three"
            panels={[{ id: "a" }, { id: "b" }, { id: "c" }]}
            defaultSize={[33, 34, 33]}
            borderWidth="1px"
            h="full"
            minH="12rem"
          >
            <Splitter.Panel id="a">
              <Center boxSize="full" textStyle="xl" bg="bg.subtle">
                A
              </Center>
            </Splitter.Panel>
            <Splitter.ResizeTrigger id="a:b" aria-label="Resize" />
            <Splitter.Panel id="b">
              <Center boxSize="full" textStyle="xl" bg="bg.muted">
                B
              </Center>
            </Splitter.Panel>
            <Splitter.ResizeTrigger id="b:c" aria-label="Resize" />
            <Splitter.Panel id="c">
              <Center boxSize="full" textStyle="xl" bg="bg.subtle">
                C
              </Center>
            </Splitter.Panel>
          </Splitter.Root>
        </Box>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Give the resize trigger an accessible name (e.g. aria-label=\"Resize panels\") so screen reader users understand the control.", rule: "4.1.2" },
          { text: "Resize handle must be keyboard focusable and operable (e.g. arrow keys to adjust).", rule: "2.1.1" },
          { text: "Ensure the divider has sufficient size and contrast for pointer and touch.", rule: "2.4.7" },
        ]}
      />
    </VStack>
  );
}