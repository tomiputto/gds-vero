import { Box, Card, HStack, Theme } from "@chakra-ui/react";
import { CheckIcon } from "@gdesignsystem/icons";
import { GDSButton, GDSHeading, GDSText } from "@gdesignsystem/react";

export default function App() {
  return (
    <Theme appearance="light" minH="100vh" bg="bg.default" color="fg">
      <Box as="header" borderBottomWidth="1px" borderColor="border.muted" px="6" py="4">
        <GDSHeading size="md">GDS App</GDSHeading>
      </Box>

      <Box p="6" maxW="xl">
        <Card.Root borderColor="border.muted" borderWidth="1px" bg="bg.muted">
          <Card.Header>
            <GDSHeading size="xl" as="h2">
              Welcome to GDS
            </GDSHeading>
          </Card.Header>
          <Card.Body gap="4">
            <GDSText textStyle="body">
              This app uses the GDS design system built on Chakra UI v3 and Figma design tokens.
            </GDSText>
            <GDSText color="fg.muted" textStyle="caption">
              Semantic tokens like <code>fg</code>, <code>bg.default</code>, and{" "}
              <code>brand</code> keep your styles consistent with your Figma design.
            </GDSText>
            <HStack gap="3">
              <GDSButton colorPalette="brand">
                <CheckIcon /> Get started
              </GDSButton>
              <GDSButton variant="outline">Learn more</GDSButton>
            </HStack>
          </Card.Body>
        </Card.Root>
      </Box>
    </Theme>
  );
}
