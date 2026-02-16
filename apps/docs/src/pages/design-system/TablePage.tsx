import { Box, Heading, Table, Text, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

const items = [
  { id: 1, name: "Laptop", category: "Electronics", price: "999.99" },
  { id: 2, name: "Coffee Maker", category: "Home", price: "49.99" },
  { id: 3, name: "Desk Chair", category: "Furniture", price: "150.00" },
];

export function TablePage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Table
        </Heading>
        <Text color="fg.muted">
          Tabular data with header, body, and optional caption.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Simple table with header and rows"
        code={`import { Table } from "@chakra-ui/react";

<Table.Root size="sm">
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeader>Product</Table.ColumnHeader>
      <Table.ColumnHeader>Category</Table.ColumnHeader>
      <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {items.map((item) => (
      <Table.Row key={item.id}>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.category}</Table.Cell>
        <Table.Cell textAlign="end">{item.price}</Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
</Table.Root>`}
      >
        <Table.Root size="sm">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Product</Table.ColumnHeader>
              <Table.ColumnHeader>Category</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
                <Table.Cell textAlign="end">{item.price}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use Table.Caption for a short description; associate with aria-describedby if needed.", rule: "1.3.1" },
          { text: "Ensure column headers have proper scope (col) and use Table.ColumnHeader for semantics.", rule: "1.3.1" },
        ]}
      />
    </VStack>
  );
}
