const FORBIDDEN_CHAKRA_IMPORTS = new Set([
  // Chakra v2-only / no longer available as standalone exports in v3:
  "Divider",
  "CardHeader",
  "CardBody",
  "CardFooter",
  "FormControl",
  "FormLabel",
  "FormErrorMessage",
  "FormHelperText",
  "TableContainer",
  "Thead",
  "Tbody",
  "Tr",
  "Th",
  "Td",
  "ModalOverlay",
  "ModalContent",
  "ModalHeader",
  "ModalBody",
  "ModalFooter",
  "ModalCloseButton",
  "Tab",
  "TabList",
  "TabPanel",
  "TabPanels",
  "Select",
  "AlertIcon",
  "AlertTitle",
  "AlertDescription",
  "Collapse",
]);

const ALLOWED_GDS_REACT_IMPORTS = new Set([
  "GDSProvider",
  "GDSButton",
  "GDSText",
  "GDSHeading",
  "VeroMainHeader",
]);

export const gdsChakraV3ImportsRule = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow Chakra v2 standalone component imports; enforce GDS-only wrapper imports",
      recommended: false,
    },
    schema: [],
    messages: {
      forbiddenChakra:
        "Do not import '{{name}}' from '@chakra-ui/react' (use Chakra v3 namespaces/compound components instead).",
      forbiddenGdsReact:
        "Only import {{allowed}} from '@gds-vero/react'. Found '{{name}}'.",
    },
  },
  create(context) {
    function checkChakraImport(node) {
      const source = node.source?.value;
      if (source !== "@chakra-ui/react") return;

      for (const specifier of node.specifiers ?? []) {
        if (specifier.type !== "ImportSpecifier") continue;
        const importedName = specifier.imported?.name;
        if (typeof importedName !== "string") continue;
        if (!FORBIDDEN_CHAKRA_IMPORTS.has(importedName)) continue;

        context.report({
          node: specifier,
          messageId: "forbiddenChakra",
          data: { name: importedName },
        });
      }
    }

    function checkGdsReactImport(node) {
      const source = node.source?.value;
      if (source !== "@gds-vero/react") return;

      for (const specifier of node.specifiers ?? []) {
        if (specifier.type !== "ImportSpecifier") continue;
        const importedName = specifier.imported?.name;
        if (typeof importedName !== "string") continue;
        if (ALLOWED_GDS_REACT_IMPORTS.has(importedName)) continue;

        const allowed = Array.from(ALLOWED_GDS_REACT_IMPORTS).join(", ");

        context.report({
          node: specifier,
          messageId: "forbiddenGdsReact",
          data: { allowed, name: importedName },
        });
      }
    }

    return {
      ImportDeclaration(node) {
        checkChakraImport(node);
        checkGdsReactImport(node);
      },
    };
  },
};

export default {
  rules: {
    "gds-chakra-v3-imports": gdsChakraV3ImportsRule,
  },
};

