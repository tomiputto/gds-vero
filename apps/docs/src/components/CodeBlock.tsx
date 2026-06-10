import { Box } from "@chakra-ui/react";
import { GDSText as Text } from "@gds-vero/react";
export function CodeBlock({ code }: { code: string }) {
  return (
    <Box mt="4">
      <Text textStyle="xs" color="fg.muted" mb="2">
        Code
      </Text>
      <Box
        as="pre"
        p="4"
        borderRadius="md"
        borderWidth="1px"
        borderColor="border.muted"
        fontSize="sm"
        fontFamily="mono"
        whiteSpace="pre-wrap"
        overflowX="auto"
      >
        <Box as="code">{code}</Box>
      </Box>
    </Box>
  );
}