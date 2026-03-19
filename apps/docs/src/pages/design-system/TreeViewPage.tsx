import { Box, Heading, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function TreeViewPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Tree View
        </Heading>
        <Text color="fg.muted">
          Hierarchical tree of expandable nodes. Use <Text as="code" fontSize="sm">createTreeCollection</Text> with root nodes and <Text as="code" fontSize="sm">TreeView.Root</Text> with <Text as="code" fontSize="sm">TreeView.Node</Text> render prop to build the tree. See Chakra UI docs for the full API.
        </Text>
      </Box>

      <Section
        title="Example structure"
        description="Conceptual tree (static list)"
        code={`import { TreeView, createTreeCollection } from "@chakra-ui/react";

// TreeView requires a tree collection and Node render prop.
// const collection = createTreeCollection({ rootNodes: [...] });
// <TreeView.Root collection={collection}>
//   <TreeView.Tree>
//     <TreeView.Node render={({ node }) => ...} />
//   </TreeView.Tree>
// </TreeView.Root>`}
      >
        <Box as="ul" listStyleType="none" pl="4" borderLeftWidth="2px" borderColor="border.muted">
          <Box as="li" mb="2">
            <Text fontWeight="medium">Documents</Text>
            <Box as="ul" listStyleType="none" pl="4" mt="1" color="fg.muted">
              <Box as="li">Report.pdf</Box>
              <Box as="li">Notes.txt</Box>
            </Box>
          </Box>
          <Box as="li">
            <Text fontWeight="medium">Applications</Text>
            <Box as="ul" listStyleType="none" pl="4" mt="1" color="fg.muted">
              <Box as="li">Code</Box>
              <Box as="li">Design</Box>
            </Box>
          </Box>
        </Box>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Tree has role tree; branches have aria-expanded and keyboard navigation (arrows, Enter).", rule: "4.1.2" },
          { text: "Provide a label for the tree when needed.", rule: "4.1.2" },
        ]}
      />
    </VStack>
  );
}