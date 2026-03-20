import { Box, Button, Clipboard, Heading, Input, VStack } from "@chakra-ui/react";
import { CopyIcon } from "@gdesignsystem/icons";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function ClipboardPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Clipboard
        </Heading>
        <Text color="fg.muted">
          Copy content to clipboard with feedback.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Copy input value to clipboard"
        code={`import { Button, Clipboard, Input } from "@chakra-ui/react";

<Clipboard.Root value="https://example.com">
  <Clipboard.Context>
    {(api) => (
      <>
        <Input value={api.value} readOnly />
        <Clipboard.Trigger asChild>
          <Button size="sm" colorPalette="brand">
            <CopyIcon /> {api.copied ? "Copied!" : "Copy"}
          </Button>
        </Clipboard.Trigger>
      </>
    )}
  </Clipboard.Context>
</Clipboard.Root>`}
      >
        <Clipboard.Root value="https://example.com">
          <Clipboard.Context>
            {(api) => (
              <VStack align="stretch" gap="2" maxW="xs">
                <Input value={api.value} readOnly />
                <Clipboard.Trigger asChild>
                  <Button size="sm" colorPalette="brand">
                    <CopyIcon /> {api.copied ? "Copied!" : "Copy"}
                  </Button>
                </Clipboard.Trigger>
              </VStack>
            )}
          </Clipboard.Context>
        </Clipboard.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Announce success to screen readers when copy succeeds (e.g. 'Copied to clipboard').", rule: "4.1.3" },
          { text: "Trigger should have an accessible name (e.g. 'Copy link').", rule: "4.1.2" },
        ]}
      />
    </VStack>
  );
}