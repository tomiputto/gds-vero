import { Box, Heading, Icon, Input, InputAddon, InputElement, InputGroup, VStack } from "@chakra-ui/react";
import { MailIcon, SearchIcon } from "@gdesignsystem/icons";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function InputGroupPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Input Group
        </Heading>
        <Text color="fg.muted">
          Add prefixes, suffixes or icons around text inputs.
        </Text>
      </Box>

      <Section
        title="Basic InputGroup"
        description="Wrap an input in InputGroup for consistent sizing and theming."
        code={`import { Input, InputGroup } from "@chakra-ui/react";

<InputGroup maxW="sm">
  <Input placeholder="your-site" bg="bg.default" />
</InputGroup>`}
      >
        <InputGroup maxW="sm">
          <Input placeholder="your-site" bg="bg.default" />
        </InputGroup>
      </Section>

      <Section
        title="With icon element"
        description="Use InputElement to place icons inside the input."
        code={`import { Box, Icon, Input, InputElement } from "@chakra-ui/react";
import { SearchIcon } from "@gdesignsystem/icons";

<Box maxW="sm">
  <Box position="relative">
    <InputElement>
      <Icon as={SearchIcon} color="fg.muted" />
    </InputElement>
    <Input placeholder="Search" pl="10" bg="bg.default" />
  </Box>
</Box>`}
      >
        <Box maxW="sm">
          <Box position="relative">
            <InputElement>
              <Icon as={SearchIcon} color="fg.muted" />
            </InputElement>
            <Input placeholder="Search" pl="10" bg="bg.default" />
          </Box>
        </Box>
      </Section>

      <Section
        title="Icon on both sides"
        description="Combine addons and layout primitives to simulate grouped inputs."
        code={`import { Box, Icon, Input, InputAddon, Text, VStack } from "@chakra-ui/react";
import { MailIcon } from "@gdesignsystem/icons";
import { GDSText as Text } from "@gdesignsystem/react";

<VStack align="stretch" gap="3" maxW="sm">
  <Box display="flex">
    <InputAddon>https://</InputAddon>
    <Input
      flex="1"
      placeholder="your-site"
      bg="bg.default"
      borderLeftRadius="0"
    />
    <InputAddon>.com</InputAddon>
  </Box>
  <Box position="relative">
    <Input pl="10" pr="10" placeholder="Email address" bg="bg.default" />
    <Box position="absolute" left="3" top="50%" transform="translateY(-50%)">
      <Icon as={MailIcon} color="fg.muted" />
    </Box>
    <Box position="absolute" right="3" top="50%" transform="translateY(-50%)">
      <Text color="fg.muted" textStyle="xs">
        .com
      </Text>
    </Box>
  </Box>
</VStack>`}
      >
        <VStack align="stretch" gap="3" maxW="sm">
          <Box display="flex">
            <InputAddon>https://</InputAddon>
            <Input
              flex="1"
              placeholder="your-site"
              bg="bg.default"
              borderLeftRadius="0"
            />
            <InputAddon>.com</InputAddon>
          </Box>
          <Box position="relative">
            <Input pl="10" pr="10" placeholder="Email address" bg="bg.default" />
            <Box
              position="absolute"
              left="3"
              top="50%"
              transform="translateY(-50%)"
            >
              <Icon as={MailIcon} color="fg.muted" />
            </Box>
            <Box
              position="absolute"
              right="3"
              top="50%"
              transform="translateY(-50%)"
            >
              <Text color="fg.muted" textStyle="xs">
                .com
              </Text>
            </Box>
          </Box>
        </VStack>
      </Section>

      <AccessibilityGuidance
        items={[
          {
            text: "Make sure the input still has a clear label; addons and icons should not replace labels.",
            rule: "3.3.2",
          },
          {
            text: "Icons inside the input should be decorative or have clear accessible names via aria-label or hidden text.",
            rule: "1.1.1",
          },
          {
            text: "Ensure sufficient color contrast between addons/elements and the input background.",
            rule: "1.4.3",
          },
        ]}
      />
    </VStack>
  );
}
