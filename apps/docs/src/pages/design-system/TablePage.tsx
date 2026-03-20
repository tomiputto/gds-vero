import { Box, Code, Heading, Table, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
const items = [
  { id: 1, name: "Laptop", category: "Electronics", price: "999.99" },
  { id: 2, name: "Coffee Maker", category: "Home", price: "49.99" },
  { id: 3, name: "Desk Chair", category: "Furniture", price: "150.00" },
];

export function TablePage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Table
        </Heading>
        <Text color="fg.muted">
          Tabular data with header, body, and optional caption.
        </Text>
        <Box
          mt="4"
          p="4"
          borderRadius="md"
          bg="bg.subtle"
          borderWidth="1px"
          borderColor="border.muted"
        >
          <Text fontSize="sm" color="fg.muted">
            <strong>Chakra v3:</strong> Use the Table compound component below. Do not use{" "}
            <Code>Table</Code>, <Code>Thead</Code>, <Code>Tbody</Code>, <Code>Tr</Code>,{" "}
            <Code>Th</Code>, <Code>Td</Code>, or <Code>TableContainer</Code> — they are not in @chakra-ui/react v3 and will cause runtime errors. Use <Code>Table.ScrollArea</Code> for scrollable tables; use <Code>textAlign="end"</Code> instead of <Code>isNumeric</Code>.
          </Text>
        </Box>
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