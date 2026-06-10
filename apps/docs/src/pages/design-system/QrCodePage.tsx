import { Box, Heading, QrCode, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gds-vero/react";
export function QrCodePage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          QR Code
        </Heading>
        <Text color="fg.muted">
          QR code image for URLs or data.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="QR code for a URL"
        code={`import { QrCode } from "@chakra-ui/react";

<QrCode.Root value="https://chakra-ui.com" encoding={{ ecc: "M" }}>
  <QrCode.Frame>
    <QrCode.Pattern />
  </QrCode.Frame>
</QrCode.Root>`}
      >
        <QrCode.Root value="https://chakra-ui.com" encoding={{ ecc: "M" }} size="xl">
          <QrCode.Frame>
            <QrCode.Pattern />
          </QrCode.Frame>
        </QrCode.Root>
      </Section>

      <Section
        title="GDS styled"
        description="A QR code inside a card-like container using GDS tokens."
        code={`import { Box, QrCode, Text } from "@chakra-ui/react";

<Box
  display="inline-flex"
  flexDirection="column"
  alignItems="center"
  gap="3"
  p="4"
  bg="bg.panel"
  borderWidth="1px"
  borderColor="border.muted"
  borderRadius="xl"
>
  <QrCode.Root value="https://github.com/tomiputto/gds-vero#readme" size="xl">
    <QrCode.Frame>
      <QrCode.Pattern />
    </QrCode.Frame>
  </QrCode.Root>
  <Text textStyle="sm" color="fg.muted">
    https://github.com/tomiputto/gds-vero#readme
  </Text>
</Box>`}
      >
        <Box
          display="inline-flex"
          flexDirection="column"
          alignItems="center"
          gap="3"
          p="4"
          bg="bg.panel"
          borderWidth="1px"
          borderColor="border.muted"
          borderRadius="xl"
        >
          <QrCode.Root value="https://github.com/tomiputto/gds-vero#readme" size="xl">
            <QrCode.Frame>
              <QrCode.Pattern />
            </QrCode.Frame>
          </QrCode.Root>
          <Text textStyle="sm" color="fg.muted">
            https://github.com/tomiputto/gds-vero#readme
          </Text>
        </Box>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Provide a text alternative (e.g. 'QR code for [URL]') or link to the same URL next to the code.", rule: "1.1.1" },
          { text: "Do not put critical info only in the QR code; offer a text fallback.", rule: "1.3.1" },
        ]}
      />
    </VStack>
  );
}