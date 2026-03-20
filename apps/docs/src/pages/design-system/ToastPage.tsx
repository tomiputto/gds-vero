import { useMemo } from "react";
import { Box, Button, createToaster, Heading, Toaster, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function ToastPage() {
  const toaster = useMemo(() => createToaster({ placement: "top-end" }), []);
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Toast
        </Heading>
        <Text color="fg.muted">
          Temporary notification message.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Trigger a toast"
        code={`import { Button, createToaster, Toaster } from "@chakra-ui/react";

const toaster = createToaster({ placement: "top-end" });
<>
  <Toaster toaster={toaster} />
  <Button onClick={() => toaster.create({ title: "Saved", description: "Your changes have been saved." })}>
    Show toast
  </Button>
</>`}
      >
        <VStack align="stretch" gap="2">
          <Toaster toaster={toaster}>
            {(toast) => (
              <Box
                bg="bg.panel"
                borderWidth="1px"
                borderColor="border.emphasized"
                borderRadius="lg"
                px="4"
                py="3"
                boxShadow="md"
              >
                {toast.title && <Box fontWeight="medium">{toast.title}</Box>}
                {toast.description && (
                  <Text fontSize="sm" color="fg.muted" mt={toast.title ? 1 : 0}>
                    {toast.description}
                  </Text>
                )}
              </Box>
            )}
          </Toaster>
          <Button
            size="sm"
            onClick={() =>
              toaster.create({
                title: "Saved",
                description: "Your changes have been saved.",
              })
            }
          >
            Show toast
          </Button>
        </VStack>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Toasts should be announced to screen readers (aria-live region).", rule: "4.1.3" },
          { text: "Provide a way to dismiss and avoid stacking too many toasts.", rule: "2.1.1" },
        ]}
      />
    </VStack>
  );
}