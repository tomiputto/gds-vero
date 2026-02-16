import { Box, Text } from "@chakra-ui/react";

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
