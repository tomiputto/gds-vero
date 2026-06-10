import { Alert, Box, Heading, Stack, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gds-vero/react";
export function AlertPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Alert
        </Heading>
        <Text color="fg.muted">
          Feedback messages for success, error, warning, and info.
        </Text>
      </Box>

      <Section
        title="Status variants"
        description="Alert with title and description"
        code={`import { Alert } from "../components/Alert";

// Success
<Alert status="success" title="Success" description="Your changes have been saved." />

// Error
<Alert status="error" title="Error" description="Something went wrong. Please try again." />

// Warning
<Alert status="warning" title="Your session is about to expire" />

// Info
<Alert status="info" title="New feature available" />`}
      >
        <Stack gap="4">
          <Alert.Root status="success">
            <Alert.Indicator />
            <Alert.Content>
              <Alert.Title>Success</Alert.Title>
              <Alert.Description>
                Your changes have been saved.
              </Alert.Description>
            </Alert.Content>
          </Alert.Root>
          <Alert.Root status="error">
            <Alert.Indicator />
            <Alert.Content>
              <Alert.Title>Error</Alert.Title>
              <Alert.Description>
                Something went wrong. Please try again.
              </Alert.Description>
            </Alert.Content>
          </Alert.Root>
          <Alert.Root status="warning">
            <Alert.Indicator />
            <Alert.Title>Your session is about to expire</Alert.Title>
          </Alert.Root>
          <Alert.Root status="info">
            <Alert.Indicator />
            <Alert.Title>New feature available</Alert.Title>
          </Alert.Root>
        </Stack>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use role=\"alert\" or role=\"status\" so the message is announced (alert for critical, status for non-urgent).", rule: "4.1.3" },
          { text: "For dynamic alerts, place live region in the DOM when shown; prefer aria-live=\"polite\" for status, \"assertive\" for errors.", rule: "4.1.3" },
          { text: "Don't rely on color alone: pair status (success/error/warning) with icon or text.", rule: "1.4.11" },
          { text: "Ensure sufficient color contrast for alert text and any actions inside.", rule: "1.4.3" },
        ]}
      />
    </VStack>
  );
}