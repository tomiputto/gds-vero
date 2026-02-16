import { Avatar, Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

export function AvatarPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Avatar
        </Heading>
        <Text color="fg.muted">
          User avatars with image and fallback initials.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Avatar with image and fallback name"
        code={`import { Avatar } from "../components/Avatar";

// With image
<Avatar.Root>
  <Avatar.Fallback name="Jane Doe" />
  <Avatar.Image src="https://..." />
</Avatar.Root>

// Fallback only (no image)
<Avatar.Root colorPalette="brand">
  <Avatar.Fallback name="Jane Doe" />
</Avatar.Root>`}
      >
        <HStack gap="4">
          <Avatar.Root>
            <Avatar.Fallback name="Jane Doe" />
            <Avatar.Image src="https://i.pravatar.cc/150?u=1" />
          </Avatar.Root>
          <Avatar.Root colorPalette="brand">
            <Avatar.Fallback name="Jane Doe" />
          </Avatar.Root>
        </HStack>
      </Section>

      <Section
        title="Sizes"
        description="Avatar size options"
        code={`<Avatar.Root size="sm">...</Avatar.Root>
<Avatar.Root size="md">...</Avatar.Root>
<Avatar.Root size="lg">...</Avatar.Root>`}
      >
        <HStack gap="3">
          <Avatar.Root size="xs">
            <Avatar.Fallback name="XS" />
          </Avatar.Root>
          <Avatar.Root size="sm">
            <Avatar.Fallback name="SM" />
          </Avatar.Root>
          <Avatar.Root size="md">
            <Avatar.Fallback name="MD" />
          </Avatar.Root>
          <Avatar.Root size="lg">
            <Avatar.Fallback name="LG" />
          </Avatar.Root>
        </HStack>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Provide a name for Avatar.Fallback so initials are generated; use alt text or aria-label when the avatar conveys information.", rule: "4.1.2" },
          { text: "Decorative avatars: use aria-hidden or ensure the parent has the accessible name.", rule: "1.1.1" },
        ]}
      />
    </VStack>
  );
}
