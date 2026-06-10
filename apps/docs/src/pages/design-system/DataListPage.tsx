import { Box, DataList, Heading, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gds-vero/react";
export function DataListPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Data List
        </Heading>
        <Text color="fg.muted">
          Key-value list for displaying structured data.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Label-value pairs"
        code={`import { DataList } from "@chakra-ui/react";

<DataList.Root>
  <DataList.Item>
    <DataList.ItemLabel>Name</DataList.ItemLabel>
    <DataList.ItemValue>Jane Doe</DataList.ItemValue>
  </DataList.Item>
  <DataList.Item>
    <DataList.ItemLabel>Email</DataList.ItemLabel>
    <DataList.ItemValue>jane@example.com</DataList.ItemValue>
  </DataList.Item>
</DataList.Root>`}
      >
        <DataList.Root maxW="md">
          <DataList.Item>
            <DataList.ItemLabel>Name</DataList.ItemLabel>
            <DataList.ItemValue>Jane Doe</DataList.ItemValue>
          </DataList.Item>
          <DataList.Item>
            <DataList.ItemLabel>Email</DataList.ItemLabel>
            <DataList.ItemValue>jane@example.com</DataList.ItemValue>
          </DataList.Item>
          <DataList.Item>
            <DataList.ItemLabel>Role</DataList.ItemLabel>
            <DataList.ItemValue>Admin</DataList.ItemValue>
          </DataList.Item>
        </DataList.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use semantic structure (dl, dt, dd) or ARIA so label-value pairs are announced correctly.", rule: "1.3.1" },
          { text: "Ensure labels are associated with values for screen readers.", rule: "1.3.1" },
        ]}
      />
    </VStack>
  );
}