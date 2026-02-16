import { Box, ButtonGroup, Heading, IconButton, Pagination, Text, VStack } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@gdesignsystem/icons";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

export function PaginationPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Pagination
        </Heading>
        <Text color="fg.muted">
          Navigate between pages of content.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Previous, page numbers, next"
        code={`import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react";

<Pagination.Root count={20} pageSize={2} defaultPage={1} colorPalette="brand">
  <ButtonGroup variant="ghost" size="sm">
<Pagination.PrevTrigger asChild>
              <IconButton aria-label="Previous page" colorPalette="brand">
                <ChevronLeftIcon />
              </IconButton>
            </Pagination.PrevTrigger>
            <Pagination.Items
      render={(page) => (
        <IconButton variant={{ base: "ghost", _selected: "outline" }} colorPalette="brand">
          {page.value}
        </IconButton>
      )}
    />
    <Pagination.NextTrigger asChild>
      <IconButton aria-label="Next page" colorPalette="brand">
        <ChevronRightIcon />
      </IconButton>
    </Pagination.NextTrigger>
  </ButtonGroup>
</Pagination.Root>`}
      >
        <Pagination.Root count={20} pageSize={2} defaultPage={1} colorPalette="brand">
          <ButtonGroup variant="ghost" size="sm">
            <Pagination.PrevTrigger asChild>
              <IconButton aria-label="Previous page" colorPalette="brand">
                <ChevronLeftIcon />
              </IconButton>
            </Pagination.PrevTrigger>
            <Pagination.Items
              render={(page) => (
                <IconButton variant={{ base: "ghost", _selected: "outline" }} colorPalette="brand">
                  {page.value}
                </IconButton>
              )}
            />
            <Pagination.NextTrigger asChild>
              <IconButton aria-label="Next page" colorPalette="brand">
                <ChevronRightIcon />
              </IconButton>
            </Pagination.NextTrigger>
          </ButtonGroup>
        </Pagination.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Provide aria-label on prev/next triggers (e.g. 'Previous page', 'Next page').", rule: "4.1.2" },
          { text: "Use Pagination.Root count and page so screen readers can announce current page.", rule: "4.1.3" },
        ]}
      />
    </VStack>
  );
}
