import { Box, Heading, QrCode, Text, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

export function QrCodePage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
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

<QrCode.Root value="https://chakra-ui.com" encoding={{ ecc: "M" }} />`}
      >
        <QrCode.Root value="https://chakra-ui.com" encoding={{ ecc: "M" }} size="xl" />
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
