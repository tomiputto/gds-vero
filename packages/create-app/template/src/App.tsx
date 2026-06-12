import { Card, HStack } from "@chakra-ui/react";
import { CheckIcon } from "@gds-vero/icons";
import {
  GDSButton,
  GDSHeading,
  GDSText,
  VeroAppShell,
  VeroPageLayout,
} from "@gds-vero/react";

export default function App() {
  return (
    <VeroAppShell>
      <VeroPageLayout>
        <Card.Root variant="outline">
          <Card.Header>
            <Card.Title>Welcome to GDS-VERO</Card.Title>
            <Card.Description>
              Verohallinto (vero.fi) design system on Chakra UI v3.
            </Card.Description>
          </Card.Header>
          <Card.Body gap="4">
            <GDSText textStyle="body">
              This app uses <code>VeroAppShell</code> + <code>VeroPageLayout</code> for a consistent
              1152px content column and padding on every page.
            </GDSText>
            <GDSText color="fg.muted" textStyle="caption">
              Customize the header via <code>VeroAppShell</code> props. See the page layout guide in GDS
              docs.
            </GDSText>
            <HStack gap="3">
              <GDSButton colorPalette="brand">
                <CheckIcon /> Get started
              </GDSButton>
              <GDSButton variant="outline">Learn more</GDSButton>
            </HStack>
          </Card.Body>
        </Card.Root>
      </VeroPageLayout>
    </VeroAppShell>
  );
}
