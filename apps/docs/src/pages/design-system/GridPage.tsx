import { Box, Grid, Heading, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function GridPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Grid
        </Heading>
        <Text color="fg.muted">
          CSS Grid layout for two-dimensional layouts.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Simple grid with columns and gap"
        code={`import { Grid } from "@chakra-ui/react";

<Grid templateColumns="repeat(3, 1fr)" gap="4">
  <Box p="4" bg="bg.muted" borderRadius="md">1</Box>
  <Box p="4" bg="bg.muted" borderRadius="md">2</Box>
  <Box p="4" bg="bg.muted" borderRadius="md">3</Box>
  <Box p="4" bg="bg.subtle" borderRadius="md">4</Box>
  <Box p="4" bg="bg.subtle" borderRadius="md">5</Box>
  <Box p="4" bg="bg.subtle" borderRadius="md">6</Box>
</Grid>`}
      >
        <Grid templateColumns="repeat(3, 1fr)" gap="4">
          <Box p="4" bg="bg.muted" borderRadius="md">1</Box>
          <Box p="4" bg="bg.muted" borderRadius="md">2</Box>
          <Box p="4" bg="bg.muted" borderRadius="md">3</Box>
          <Box p="4" bg="bg.subtle" borderRadius="md">4</Box>
          <Box p="4" bg="bg.subtle" borderRadius="md">5</Box>
          <Box p="4" bg="bg.subtle" borderRadius="md">6</Box>
        </Grid>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use semantic elements for content inside grid cells where appropriate.", rule: "1.3.1" },
          { text: "Ensure tab order and reading order match visual layout when needed.", rule: "2.4.3" },
        ]}
      />
    </VStack>
  );
}