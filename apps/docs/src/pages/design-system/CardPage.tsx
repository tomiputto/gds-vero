import { Avatar, Badge, Box, Button, Card, Heading, HStack, Image, SimpleGrid, Spacer, Stack, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function CardPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Card
        </Heading>
        <Text color="fg.muted">
          Content containers with header, body, and footer.
        </Text>
      </Box>

      <Section
        title="Variants"
        description="Default, outline, and elevated cards"
        code={`import { Card } from "../components/Card";

// Basic
<Card title="Card title" description="Card body text." />

// With image
<Card
  imageSrc="https://..."
  imageAlt="Description"
  title="Title"
  description="Body text"
/>

// Elevated
<Card cardVariant="elevated" title="Elevated" description="..." />

// Subtle
<Card cardVariant="subtle" title="Subtle" description="..." />`}
      >
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="6">
          <Card.Root>
            <Card.Header>
              <Card.Title>Card title</Card.Title>
              <Card.Description>
                Short description for this card
              </Card.Description>
            </Card.Header>
            <Card.Body>
              <Text color="fg.muted" textStyle="sm">
                Card body content. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </Text>
            </Card.Body>
            <Card.Footer>
              <Button size="sm" variant="outline">Cancel</Button>
              <Spacer />
              <Button size="sm" colorPalette="brand">Save</Button>
            </Card.Footer>
          </Card.Root>
          <Card.Root variant="outline">
            <Card.Body gap="2">
              <Card.Title>Outline card</Card.Title>
              <Card.Description>
                This card uses the outline variant.
              </Card.Description>
              <Button size="sm" colorPalette="brand" mt="2">Action</Button>
            </Card.Body>
          </Card.Root>
          <Card.Root variant="elevated">
            <Card.Body gap="2">
              <Card.Title>Elevated card</Card.Title>
              <Card.Description>
                This card has a subtle shadow.
              </Card.Description>
            </Card.Body>
          </Card.Root>
        </SimpleGrid>
      </Section>

      <Section
        title="Image card"
        description="Card with image on top, then title, description, and footer"
        code={`import { Card, Image, Button, Text } from "@chakra-ui/react";

<Card.Root maxW="sm" overflow="hidden">
  <Image
    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
    alt="Green double couch with wooden legs"
    objectFit="cover"
    height="40"
  />
  <Card.Body gap="2">
    <Card.Title>Living room Sofa</Card.Title>
    <Card.Description>
      This sofa is perfect for modern tropical spaces, baroque inspired spaces.
    </Card.Description>
    <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
      $450
    </Text>
  </Card.Body>
  <Card.Footer gap="2">
    <Button size="sm" colorPalette="brand">Buy now</Button>
    <Button size="sm" variant="outline">Add to cart</Button>
  </Card.Footer>
</Card.Root>`}
      >
        <Card.Root maxW="sm" overflow="hidden">
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
            alt="Green double couch with wooden legs"
            objectFit="cover"
            height="40"
          />
          <Card.Body gap="2">
            <Card.Title>Living room Sofa</Card.Title>
            <Card.Description>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces.
            </Card.Description>
            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
              $450
            </Text>
          </Card.Body>
          <Card.Footer gap="2">
            <Button size="sm" colorPalette="brand">Buy now</Button>
            <Button size="sm" variant="outline">Add to cart</Button>
          </Card.Footer>
        </Card.Root>
      </Section>

      <Section
        title="Horizontal card"
        description="Image on the side with content beside it"
        code={`import { Card, Image, Box, Button, Badge, HStack } from "@chakra-ui/react";

<Card.Root flexDirection="row" overflow="hidden" maxW="xl">
  <Image
    objectFit="cover"
    maxW="200px"
    src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?w=400&q=60"
    alt="Caffe Latte"
  />
  <Box flex="1" minW="0">
    <Card.Body>
      <Card.Title mb="2">The perfect latte</Card.Title>
      <Card.Description>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Card.Description>
      <HStack mt="4" gap="2">
        <Badge colorPalette="brand">Hot</Badge>
        <Badge variant="subtle">Caffeine</Badge>
      </HStack>
    </Card.Body>
    <Card.Footer>
      <Button size="sm" colorPalette="brand">Buy Latte</Button>
    </Card.Footer>
  </Box>
</Card.Root>`}
      >
        <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
          <Image
            objectFit="cover"
            maxW="200px"
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?w=400&q=60"
            alt="Caffe Latte"
          />
          <Box flex="1" minW="0">
            <Card.Body>
              <Card.Title mb="2">The perfect latte</Card.Title>
              <Card.Description>
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Card.Description>
              <HStack mt="4" gap="2">
                <Badge colorPalette="brand">Hot</Badge>
                <Badge variant="subtle">Caffeine</Badge>
              </HStack>
            </Card.Body>
            <Card.Footer>
              <Button size="sm" colorPalette="brand">Buy Latte</Button>
            </Card.Footer>
          </Box>
        </Card.Root>
      </Section>

      <Section
        title="Card with avatar"
        description="Card with avatar, name, and action buttons"
        code={`import { Card, Avatar, Button, HStack, Stack, Text, Strong } from "@chakra-ui/react";

<Card.Root maxW="sm">
  <Card.Body>
    <HStack mb="4" gap="3">
      <Avatar.Root>
        <Avatar.Image src="https://images.unsplash.com/photo-1511806754518-53bada35f930" />
        <Avatar.Fallback name="Nate Foss" />
      </Avatar.Root>
      <Stack gap="0">
        <Text fontWeight="semibold" textStyle="sm">Nate Foss</Text>
        <Text color="fg.muted" textStyle="sm">@natefoss</Text>
      </Stack>
    </HStack>
    <Card.Description>
      <Strong color="fg">Nate Foss</Strong> has requested to join your team.
      You can approve or decline their request.
    </Card.Description>
  </Card.Body>
  <Card.Footer gap="2">
    <Button size="sm" variant="outline" colorPalette="red" flex="1">Decline</Button>
    <Button size="sm" colorPalette="brand" flex="1">Approve</Button>
  </Card.Footer>
</Card.Root>`}
      >
        <Card.Root maxW="sm">
          <Card.Body>
            <HStack mb="4" gap="3">
              <Avatar.Root>
                <Avatar.Image src="https://images.unsplash.com/photo-1511806754518-53bada35f930" />
                <Avatar.Fallback name="Nate Foss" />
              </Avatar.Root>
              <Stack gap="0">
                <Text fontWeight="semibold" textStyle="sm">Nate Foss</Text>
                <Text color="fg.muted" textStyle="sm">@natefoss</Text>
              </Stack>
            </HStack>
            <Card.Description>
              <Text as="span" fontWeight="semibold" color="fg">Nate Foss</Text>{" "}
              has requested to join your team. You can approve or decline their
              request.
            </Card.Description>
          </Card.Body>
          <Card.Footer gap="2">
            <Button size="sm" variant="outline" colorPalette="red" flex="1">Decline</Button>
            <Button size="sm" colorPalette="brand" flex="1">Approve</Button>
          </Card.Footer>
        </Card.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use semantic structure: heading levels (e.g. h2/h3) for card titles so the outline makes sense.", rule: "1.3.1" },
          { text: "If a card is a single focusable link/button, use one focusable element and optional aria-describedby for summary.", rule: "4.1.2" },
          { text: "When cards are in a list, consider list semantics (e.g. list + listitem) or landmarks for grouping.", rule: "1.3.1" },
          { text: "Ensure sufficient contrast for card text and any actions; focus order should follow visual order.", rule: "1.4.3" },
        ]}
      />
    </VStack>
  );
}