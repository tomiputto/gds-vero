import { Box, Carousel, Heading, IconButton, VStack } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@gdesignsystem/icons";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
const items = Array.from({ length: 5 }, (_, i) => i + 1);

export function CarouselPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Carousel
        </Heading>
        <Text color="fg.muted">
          Slides of content with prev/next and optional indicators.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Slides with prev/next and indicators"
        code={`import { Carousel, IconButton, Box } from "@chakra-ui/react";

<Carousel.Root slideCount={items.length} maxW="md">
  <Carousel.ItemGroup>
    {items.map((_, index) => (
      <Carousel.Item key={index} index={index}>
        <Box w="100%" h="200px" rounded="lg" bg="bg.muted" display="flex" alignItems="center" justifyContent="center">
          {index + 1}
        </Box>
      </Carousel.Item>
    ))}
  </Carousel.ItemGroup>
  <Carousel.Control justifyContent="center" gap="4">
    <Carousel.PrevTrigger asChild>
      <IconButton size="sm" variant="outline" aria-label="Previous" colorPalette="brand" bg="bg.panel" borderColor="border.emphasized">
        <ChevronLeftIcon />
      </IconButton>
    </Carousel.PrevTrigger>
    <Carousel.Indicators />
    <Carousel.NextTrigger asChild>
      <IconButton size="sm" variant="outline" aria-label="Next" colorPalette="brand" bg="bg.panel" borderColor="border.emphasized">
        <ChevronRightIcon />
      </IconButton>
    </Carousel.NextTrigger>
  </Carousel.Control>
</Carousel.Root>`}
      >
        <Carousel.Root slideCount={items.length} maxW="md" mx="auto">
          <Carousel.ItemGroup>
            {items.map((_, index) => (
              <Carousel.Item key={index} index={index}>
                <Box
                  w="100%"
                  h="200px"
                  rounded="lg"
                  bg="bg.muted"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="2xl"
                >
                  {index + 1}
                </Box>
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>
          <Carousel.Control justifyContent="center" gap="4" mt="2">
            <Carousel.PrevTrigger asChild>
              <IconButton size="sm" variant="outline" aria-label="Previous" colorPalette="brand" bg="bg.panel" borderColor="border.emphasized">
                <ChevronLeftIcon />
              </IconButton>
            </Carousel.PrevTrigger>
            <Carousel.Indicators />
            <Carousel.NextTrigger asChild>
              <IconButton size="sm" variant="outline" aria-label="Next" colorPalette="brand" bg="bg.panel" borderColor="border.emphasized">
                <ChevronRightIcon />
              </IconButton>
            </Carousel.NextTrigger>
          </Carousel.Control>
        </Carousel.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Provide aria-label on prev/next triggers (e.g. 'Previous slide', 'Next slide').", rule: "4.1.2" },
          { text: "Indicators should be focusable and announce current slide (e.g. 'Slide 2 of 5').", rule: "4.1.3" },
        ]}
      />
    </VStack>
  );
}