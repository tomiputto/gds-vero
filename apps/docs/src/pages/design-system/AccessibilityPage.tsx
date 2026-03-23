import { Box, Code, Heading, List, VStack } from "@chakra-ui/react";
import { CodeBlock } from "../../components/CodeBlock";
import { GDSText as Text } from "@gdesignsystem/react";
export function AccessibilityPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Accessibility
        </Heading>
        <Text color="fg.muted" fontSize="lg">
          Guidance for meeting WCAG 2.1 Level AA. Use these practices with design system components.
        </Text>
      </Box>

      <Box>
        <Heading size="lg" mb="3">
          Overview
        </Heading>
        <Text color="fg.muted" mb="6">
          This design system is built to support WCAG 2.1 Level AA. GDS components provide keyboard support, focus management, and ARIA where needed. Apply the guidance below so your implementation stays accessible.
        </Text>

        <Heading size="md" mb="2">
          WCAG AA targets (verify these)
        </Heading>
        <List.Root as="ul" gap="2" color="fg.muted" textStyle="sm" mb="6">
          <List.Item>Contrast: normal text ≥ 4.5:1 and large text ≥ 3:1.</List.Item>
          <List.Item>Non-text content: icons/images that convey meaning have a text alternative.</List.Item>
          <List.Item>Keyboard: all actions work with Tab / Shift+Tab / Enter / Space.</List.Item>
          <List.Item>Focus visible: focus indicator must be clearly visible (≥ 3:1).</List.Item>
          <List.Item>Forms: inputs have labels and errors are announced clearly.</List.Item>
        </List.Root>

        <Heading size="md" mb="2" mt="8">
          Icons (WCAG 1.1.1, 1.4.11)
        </Heading>
        <Text color="fg.muted" mb="4">
          Use icons accessibly:
          <br />
          • Informative icons need an accessible name (e.g. button label, aria-label, or accompanying text).
          <br />
          • Decorative icons should be hidden from assistive tech: use <Code>aria-hidden="true"</Code>.
        </Text>
        <CodeBlock
          code={`// Informative icon: keep an accessible name on the button
import { Button } from "@chakra-ui/react";
import { InfoIcon } from "@gdesignsystem/icons";

<Button colorPalette="brand" aria-label="More info">
  <InfoIcon aria-hidden="true" />
</Button>

// Decorative icon: hide from assistive tech
<InfoIcon aria-hidden="true" />`}
        />

        <Heading size="md" mb="2" mt="8">
          Forms (WCAG 3.3.1, 3.3.2, 2.4.7)
        </Heading>
        <Text color="fg.muted" mb="4">
          For form accessibility:
          <br />
          • Always provide a visible label with <Code>Field.Label</Code> (placeholder is not the only label).
          <br />
          • Link validation messages to the field via <Code>Field.ErrorText</Code>.
          <br />
          • Ensure focus rings are not removed and remain clearly visible.
        </Text>
        <CodeBlock
          code={`import { Field, Input } from "@chakra-ui/react";

<Field.Root>
  <Field.Label>Email</Field.Label>
  <Input type="email" placeholder="you@example.com" />
  <Field.HelperText>We’ll never share your email.</Field.HelperText>
  <Field.ErrorText>Enter a valid email address.</Field.ErrorText>
</Field.Root>`}
        />

        <Heading size="lg" mb="3">
          1. Perceivable
        </Heading>

        <Heading size="md" mb="2" mt="6" id="1.1.1">
          1.1.1 Non-text Content (Level A)
        </Heading>
        <Text color="fg.muted" mb="4">
          Provide text alternatives for images and icons. Use Avatar name for fallback initials; use <Code>alt</Code> for images. Decorative images: use <Code>alt=""</Code> or <Code>role="presentation"</Code>.
        </Text>

        <Heading size="md" mb="2" mt="6" id="1.3.1">
          1.3.1 Info and Relationships (Level A)
        </Heading>
        <Text color="fg.muted" mb="4">
          Use semantic structure: Heading for titles, Input with label, FormControl for label–input association. Use lists for lists and Breadcrumb for navigation trails.
        </Text>

        <Heading size="md" mb="2" mt="6" id="1.4.3">
          1.4.3 Contrast (Minimum) (Level AA)
        </Heading>
        <Text color="fg.muted" mb="4">
          Normal text: at least 4.5:1 against background. Large text (18px+ or 14px+ bold): at least 3:1. Use GDS tokens (e.g. <Code>color="fg"</Code>, <Code>bg="bg.default"</Code>) for body; ensure custom combinations meet contrast. Test with a contrast checker.
        </Text>

        <Heading size="md" mb="2" mt="6" id="1.4.11">
          1.4.11 Non-text Contrast (Level AA)
        </Heading>
        <Text color="fg.muted" mb="4">
          UI components and graphics need at least 3:1 against adjacent colors. Buttons, inputs, and focus indicators should be clearly visible.
        </Text>

        <Heading size="lg" mb="3" mt="8">
          2. Operable
        </Heading>

        <Heading size="md" mb="2" mt="6" id="2.1.1">
          2.1.1 Keyboard (Level A)
        </Heading>
        <Text color="fg.muted" mb="4">
          All functionality must be operable via keyboard. Buttons, links, and form controls receive focus in a logical order. Use Tab, Shift+Tab, Enter, and Space as appropriate. Design system components provide keyboard support by default; avoid removing focusability or trapping focus unless required (e.g. modal).
        </Text>

        <Heading size="md" mb="2" mt="6" id="2.4.3">
          2.4.3 Focus Order (Level A)
        </Heading>
        <Text color="fg.muted" mb="4">
          Focus order should follow a logical sequence that preserves meaning and operability. Avoid reordering with CSS in a way that confuses keyboard users. Use <Code>tabIndex</Code> only when necessary (e.g. positive values for custom widgets).
        </Text>

        <Heading size="md" mb="2" mt="6" id="2.4.4">
          2.4.4 Link Purpose (In Context) (Level A)
        </Heading>
        <Text color="fg.muted" mb="4">
          Link text should identify the purpose of the link. Use meaningful link text; avoid generic phrases like &quot;click here&quot; or &quot;read more&quot; without context.
        </Text>

        <Heading size="md" mb="2" mt="6" id="2.4.7">
          2.4.7 Focus Visible (Level AA)
        </Heading>
        <Text color="fg.muted" mb="4">
          Ensure a visible focus indicator for keyboard focus. The design system provides focus rings; do not remove them without providing an alternative that meets 3:1 contrast.
        </Text>

        <Heading size="lg" mb="3" mt="8">
          3. Understandable
        </Heading>

        <Heading size="md" mb="2" mt="6" id="3.1.1">
          3.1.1 Language of Page (Level A)
        </Heading>
        <Text color="fg.muted" mb="4">
          Set <Code>lang</Code> on the <Code>html</Code> element (e.g. <Code>lang="en"</Code>). For content in another language, use <Code>lang</Code> on the containing element.
        </Text>

        <Heading size="md" mb="2" mt="6" id="3.3.1">
          3.3.1 Error Identification (Level A)
        </Heading>
        <Text color="fg.muted" mb="4">
          When an input error is detected, describe it in text. Use Field.ErrorText or aria-errormessage and set aria-invalid on the control. Error messages should be clear and actionable.
        </Text>

        <Heading size="md" mb="2" mt="6" id="3.3.2">
          3.3.2 Labels or Instructions (Level A)
        </Heading>
        <Text color="fg.muted" mb="4">
          Provide labels or instructions for user input. Use Field.Label with inputs; use placeholder only as a hint, not as the sole label. Required fields should be indicated (e.g. required attribute or “(required)” in the label).
        </Text>

        <Heading size="lg" mb="3" mt="8">
          4. Robust
        </Heading>

        <Heading size="md" mb="2" mt="6" id="4.1.2">
          4.1.2 Name, Role, Value (Level A)
        </Heading>
        <Text color="fg.muted" mb="4">
          Use semantic HTML and ARIA so that components have an accessible name, role, and state. GDS components expose roles and ARIA attributes; when building custom components, ensure buttons have accessible names, form controls are labeled, and state changes (e.g. expanded, selected) are exposed to assistive technologies.
        </Text>

        <Heading size="md" mb="2" mt="6" id="4.1.3">
          4.1.3 Status Messages (Level AA)
        </Heading>
        <Text color="fg.muted" mb="4">
          For dynamic content (success, errors, loading), use live regions. The Alert component can be wrapped in <Code>role="alert"</Code> or <Code>aria-live="polite"</Code> so assistive tech announces updates.
        </Text>

        <Heading size="lg" mb="3" mt="8">
          Code example
        </Heading>
        <CodeBlock
          code={`import { Alert, Button, Field, Input } from "@chakra-ui/react";

// Accessible form: visible label + helper/error text
<Field.Root>
  <Field.Label>Email</Field.Label>
  <Input type="email" placeholder="you@example.com" />
  <Field.ErrorText>Enter a valid email.</Field.ErrorText>
</Field.Root>

// Accessible button: visible text label
<Button>Submit</Button>

// Alert as status message (critical update)
<Alert.Root status="error" role="alert">
  <Alert.Indicator />
  <Alert.Content>
    <Alert.Title>Error</Alert.Title>
    <Alert.Description>Please fix the errors below.</Alert.Description>
  </Alert.Content>
</Alert.Root>`}
        />

        <Heading size="lg" mb="3" mt="8">
          Quick checklist
        </Heading>
        <List.Root as="ul" gap="2" color="fg.muted" textStyle="sm">
          <List.Item>Always provide a visible label for buttons and inputs.</List.Item>
          <List.Item>Ensure text contrast ≥ 4.5:1 (normal) or ≥ 3:1 (large).</List.Item>
          <List.Item>Don’t remove or hide focus indicators.</List.Item>
          <List.Item>Associate error messages with the relevant field.</List.Item>
          <List.Item>Use semantic headings (Heading) and landmarks where appropriate.</List.Item>
          <List.Item>Give links descriptive text (avoid “click here”).</List.Item>
          <List.Item>Provide text alternatives for images and icons that convey information.</List.Item>
        </List.Root>
      </Box>
    </VStack>
  );
}