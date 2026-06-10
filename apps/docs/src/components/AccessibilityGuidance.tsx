import { Box, Heading, Link, List } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { GDSText as Text } from "@gds-vero/react";
export type AccessibilityItem =
  | string
  | { text: string; rule: string };

export function AccessibilityGuidance({ items }: { items: AccessibilityItem[] }) {
  return (
    <Box textAlign="start">
      <Heading size="lg" mb="2">
        Accessibility
      </Heading>
      <Text color="fg.muted" textStyle="sm" mb="3">
        See the{" "}
        <Link asChild color="brand.fg">
          <RouterLink to="/accessibility">Accessibility</RouterLink>
        </Link>{" "}
        page for full WCAG 2.1 Level AA guidance.
      </Text>
      <List.Root
        as="ul"
        variant="plain"
        gap="2"
        color="fg.muted"
        textStyle="sm"
        listStyle="none"
        ps="0"
        pe="0"
        m="0"
      >
        {items.map((item, i) => {
          const text = typeof item === "string" ? item : item.text;
          const rule = typeof item === "string" ? undefined : item.rule;
          return (
            <List.Item key={i} ps="0" m="0" display="block">
              {rule != null ? (
                <>
                  <Link asChild color="brand.fg" fontWeight="medium">
                    <RouterLink to={`/accessibility#${rule}`}>{rule}</RouterLink>
                  </Link>
                  {" — "}
                  {text}
                </>
              ) : (
                text
              )}
            </List.Item>
          );
        })}
      </List.Root>
    </Box>
  );
}