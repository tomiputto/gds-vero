import { Box, Heading, Text } from "@chakra-ui/react";
import { CodeBlock } from "./CodeBlock";

export function Section({
  title,
  description,
  children,
  code,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  code?: string;
}) {
  return (
    <Box>
      <Heading size="lg" mb="1">
        {title}
      </Heading>
      {description && (
        <Text color="fg.muted" textStyle="sm" mb="4">
          {description}
        </Text>
      )}
      <Box
        p="6"
        bg="bg.muted"
        borderRadius="lg"
        borderWidth="1px"
        borderColor="border.muted"
      >
        {children}
      </Box>
      {code != null && <CodeBlock code={code} />}
    </Box>
  );
}
