import { Box, Breadcrumb, Heading, VStack } from "@chakra-ui/react";
import { ChevronRightIcon } from "@gds-vero/icons";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gds-vero/react";
export function BreadcrumbPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Breadcrumb
        </Heading>
        <Text color="fg.muted">
          Navigational trail showing the current location in a hierarchy.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="List of links with separators"
        code={`import { Breadcrumb } from "@chakra-ui/react";

<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.CurrentLink>Props</Breadcrumb.CurrentLink>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>`}
      >
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator>
              <ChevronRightIcon boxSize="4" color="fg.muted" />
            </Breadcrumb.Separator>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator>
              <ChevronRightIcon boxSize="4" color="fg.muted" />
            </Breadcrumb.Separator>
            <Breadcrumb.Item>
              <Breadcrumb.CurrentLink>Props</Breadcrumb.CurrentLink>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use nav with aria-label=\"Breadcrumb\" for the root.", rule: "1.3.1" },
          { text: "Current page should not be a link; use CurrentLink for semantics.", rule: "4.1.2" },
        ]}
      />
    </VStack>
  );
}