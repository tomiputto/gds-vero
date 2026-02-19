import {
  Box,
  Code,
  Heading,
  Link as ChakraLink,
  Table,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const RENAMES: Array<{ old: string; new: string }> = [
  { old: "FormControl, FormLabel, FormHelperText, FormErrorMessage", new: "Field.Root, Field.Label, Field.HelperText, Field.ErrorText" },
  { old: "Table, Thead, Tbody, Tr, Th, Td, TableContainer", new: "Table.Root, Table.Header, Table.Body, Table.Row, Table.ColumnHeader, Table.Cell, Table.ScrollArea" },
  { old: "Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton", new: "Dialog.Root, Dialog.Backdrop, Dialog.Positioner, Dialog.Content, Dialog.Header, Dialog.Title, Dialog.Body, Dialog.Footer, Dialog.CloseTrigger" },
  { old: "Divider", new: "Separator" },
  { old: "Collapse", new: "Collapsible.Root, Collapsible.Content (prop open not in)" },
  { old: "Tab, TabList, TabPanel, TabPanels", new: "Tabs.Trigger, Tabs.List, Tabs.Content (value on each; no TabPanels)" },
  { old: "AccordionButton, AccordionIcon", new: "Accordion.Trigger, Accordion.ItemIndicator" },
  { old: "Select", new: "NativeSelect.Root, NativeSelect.Field, NativeSelect.Indicator" },
  { old: "Alert, AlertIcon, AlertTitle, AlertDescription", new: "Alert.Root, Alert.Indicator, Alert.Content, Alert.Title, Alert.Description" },
  { old: "Avatar (flat props)", new: "Avatar.Root, Avatar.Image, Avatar.Fallback" },
  { old: "RangeSlider, RangeSliderTrack, RangeSliderThumb", new: "Slider.Root, Slider.Control, Slider.Track, Slider.Range, Slider.Thumbs" },
  { old: "CircularProgress", new: "ProgressCircle.Root, ProgressCircle.Circle, ProgressCircle.Track, ProgressCircle.Range" },
  { old: "colorScheme (many components)", new: "colorPalette" },
  { old: "isOpen / onClose (Modal)", new: "open / onOpenChange (Dialog)" },
  { old: "isInvalid (form)", new: "invalid (Field.Root)" },
  { old: "isNumeric (table cell)", new: "textAlign=\"end\"" },
];

const CHAKRA_DOCS_URL = "https://chakra-ui.com/docs";

export function ChakraV3ApiPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Chakra v3 API
        </Heading>
        <Text color="fg.muted">
          GDS uses <strong>Chakra UI v3</strong>. Many v2 component names were removed or renamed. Using the old names in your app causes runtime errors like &quot;doesn&apos;t provide an export named X&quot;. Use the v3 APIs below.
        </Text>
      </Box>

      <Box overflowX="auto">
        <Table.Root size="sm">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Do not use (v2)</Table.ColumnHeader>
              <Table.ColumnHeader>Use instead (v3)</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {RENAMES.map(({ old: oldName, new: newName }) => (
              <Table.Row key={oldName}>
                <Table.Cell>
                  <Code fontSize="xs" whiteSpace="normal">{oldName}</Code>
                </Table.Cell>
                <Table.Cell>
                  <Code fontSize="xs" whiteSpace="normal">{newName}</Code>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>

      <Box>
        <Heading size="md" mb="2">More details</Heading>
        <Text color="fg.muted" textStyle="sm">
          For forms and tables, see the <ChakraLink asChild color="brand.solid"><RouterLink to="/field">Field</RouterLink></ChakraLink> and <ChakraLink asChild color="brand.solid"><RouterLink to="/table">Table</RouterLink></ChakraLink> component pages in this docs site. For the full Chakra v3 reference, see{" "}
          <ChakraLink href={CHAKRA_DOCS_URL} color="brand.solid" target="_blank" rel="noopener noreferrer">
            Chakra UI docs
          </ChakraLink>.
        </Text>
      </Box>
    </VStack>
  );
}
