import { Box, Field, Heading, Slider, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gds-vero/react";
export function SliderPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Slider
        </Heading>
        <Text color="fg.muted">
          Draggable control for selecting a numeric value or range.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Single-value slider with label and value text."
        code={`import { Slider } from "@chakra-ui/react";

<Slider.Root defaultValue={[40]} maxW="md" colorPalette="brand">
  <Slider.Label>Volume</Slider.Label>
  <Slider.ValueText ml="2" />
  <Slider.Control mt="4">
    <Slider.Track>
      <Slider.Range />
    </Slider.Track>
    <Slider.Thumb index={0} />
  </Slider.Control>
</Slider.Root>`}
      >
        <Slider.Root defaultValue={[40]} maxW="md" colorPalette="brand">
          <Slider.Label>Volume</Slider.Label>
          <Slider.ValueText ml="2" />
          <Slider.Control mt="4">
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumb index={0} />
          </Slider.Control>
        </Slider.Root>
      </Section>

      <Section
        title="With markers"
        description="Add markers along the track to show key values."
        code={`<Slider.Root defaultValue={[50]} maxW="md" colorPalette="brand">
  <Slider.Control mt="4">
    <Slider.Track>
      <Slider.Range />
      <Slider.MarkerGroup>
        {[0, 25, 50, 75, 100].map((value) => (
          <Slider.Marker key={value} value={value} />
        ))}
      </Slider.MarkerGroup>
    </Slider.Track>
    <Slider.Thumb index={0} />
  </Slider.Control>
</Slider.Root>`}
      >
        <Slider.Root defaultValue={[50]} maxW="md" colorPalette="brand">
          <Slider.Control mt="4">
            <Slider.Track>
              <Slider.Range />
              <Slider.MarkerGroup>
                {[0, 25, 50, 75, 100].map((value) => (
                  <Slider.Marker key={value} value={value} />
                ))}
              </Slider.MarkerGroup>
            </Slider.Track>
            <Slider.Thumb index={0} />
          </Slider.Control>
        </Slider.Root>
      </Section>

      <Section
        title="Range slider"
        description="Use two thumbs to select a numeric range."
        code={`<Slider.Root
  defaultValue={[20, 80]}
  maxW="md"
  minStepsBetweenThumbs={10}
  colorPalette="brand"
>
  <Slider.Label>Price range</Slider.Label>
  <Slider.Control mt="4">
    <Slider.Track>
      <Slider.Range />
    </Slider.Track>
    <Slider.Thumbs />
  </Slider.Control>
</Slider.Root>`}
      >
        <Slider.Root
          defaultValue={[20, 80]}
          maxW="md"
          minStepsBetweenThumbs={10}
          colorPalette="brand"
        >
          <Slider.Label>Price range</Slider.Label>
          <Slider.Control mt="4">
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumbs />
          </Slider.Control>
        </Slider.Root>
      </Section>

      <Section
        title="With Field"
        description="Combine Slider with Field for label, helper and error text."
        code={`<Field.Root invalid>
  <Field.Label>Opacity</Field.Label>
  <Slider.Root defaultValue={[60]} maxW="md">
    <Slider.Control mt="2">
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumb index={0} />
    </Slider.Control>
  </Slider.Root>
  <Field.HelperText>Drag the thumb or use arrow keys.</Field.HelperText>
  <Field.ErrorText>Example error message</Field.ErrorText>
</Field.Root>`}
      >
        <Field.Root maxW="md">
          <Field.Label>Opacity</Field.Label>
          <Slider.Root defaultValue={[60]}>
            <Slider.Control mt="2">
              <Slider.Track>
                <Slider.Range />
              </Slider.Track>
              <Slider.Thumb index={0} />
            </Slider.Control>
          </Slider.Root>
          <Field.HelperText>Drag the thumb or use arrow keys.</Field.HelperText>
        </Field.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          {
            text: "Use Slider.Label so the control has an accessible name.",
            rule: "3.3.2",
          },
          {
            text: "Ensure the value can also be adjusted via keyboard (arrow keys).",
            rule: "2.1.1",
          },
          {
            text: "Consider providing a numeric input alternative for precise values.",
            rule: "1.3.1",
          },
        ]}
      />
    </VStack>
  );
}
