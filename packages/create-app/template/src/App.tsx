import { Box, Card, HStack, Theme } from "@chakra-ui/react";
import { CheckIcon } from "@gds-vero/icons";
import { GDSButton, GDSHeading, GDSText, VeroMainHeader } from "@gds-vero/react";

export default function App() {
  return (
    <Theme appearance="light" minH="100vh" bg="bg.default" color="fg" display="flex" flexDirection="column">
      <VeroMainHeader />

      <Box as="main" flex="1" p="6" maxW="xl">
        <Card.Root borderColor="border.muted" borderWidth="1px" bg="bg.muted">
          <Card.Header>
            <GDSHeading size="xl" as="h2">
              Welcome to GDS-VERO
            </GDSHeading>
          </Card.Header>
          <Card.Body gap="4">
            <GDSText textStyle="body">
              This app uses the Verohallinto (vero.fi) design system on Chakra UI v3 with GDS theme and
              Figma tokens.
            </GDSText>
            <GDSText color="fg.muted" textStyle="caption">
              The site header is <code>VeroMainHeader</code> from <code>@gds-vero/react</code>. Customize
              links and navigation via its props.
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
