import { Box, Heading, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSHeading, GDSText as Text } from "@gdesignsystem/react";
const textStyleSpecs = [
  { key: "display", label: "Display", fontSize: "4xl" as const, fontWeight: "700" as const, lineHeight: "1.1" },
  { key: "headline", label: "Headline", fontSize: "3xl" as const, fontWeight: "600" as const, lineHeight: "1.2" },
  { key: "title", label: "Title", fontSize: "xl" as const, fontWeight: "600" as const, lineHeight: "1.3" },
  { key: "body", label: "Body", fontSize: "md" as const, fontWeight: "normal" as const, lineHeight: "1.5" },
  { key: "caption", label: "Caption", fontSize: "sm" as const, fontWeight: "normal" as const, lineHeight: "1.4" },
] as const;

const figmaScaleSizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] as const;

export function TextPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Text
        </Heading>
        <Text color="fg.muted">
          Typography uses text token styles from Figma, synced via the theme.
          Use the textStyle prop for consistent hierarchy.
        </Text>
      </Box>

      <Section
        title="Text styles (from Figma)"
        description="Named text styles are defined in Figma and provided by the GDS theme. Font sizes and weights come from Figma typography tokens."
        code={`import { GDSText as Text } from "@gdesignsystem/react";

<GDSText textStyle="display">Display style</GDSText>
<GDSText textStyle="headline">Headline style</GDSText>
<GDSText textStyle="title">Title style</GDSText>
<GDSText textStyle="body">Body style</GDSText>
<GDSText textStyle="caption">Caption style</GDSText>`}
      >
        <VStack align="stretch" gap="3">
          {textStyleSpecs.map(({ key, label, fontSize, fontWeight, lineHeight }) => (
            <Text
              key={key}
              textStyle={key}
              fontSize={fontSize}
              fontWeight={fontWeight}
              lineHeight={lineHeight}
            >
              {label} style
            </Text>
          ))}
        </VStack>
      </Section>

      <Section
        title="Headings (GDSHeading)"
        description="Use GDSHeading for document outline — separate from GDSText textStyle names."
        code={`import { GDSHeading, GDSText as Text } from "@gdesignsystem/react";

<GDSHeading size="2xl" as="h1">Page title</GDSHeading>
<GDSHeading size="xl" as="h2">Section title</GDSHeading>
<GDSText textStyle="body">Body copy uses textStyle, not heading levels.</GDSText>`}
      >
        <VStack align="stretch" gap="2">
          <GDSHeading size="2xl" as="h2">
            Page title (GDSHeading size=&quot;2xl&quot;)
          </GDSHeading>
          <GDSHeading size="xl" as="h3">
            Section title (size=&quot;xl&quot;)
          </GDSHeading>
          <Text textStyle="body" color="fg.muted">
            Body copy — use GDSText textStyle=&quot;body&quot;, not GDSHeading for paragraphs.
          </Text>
        </VStack>
      </Section>

      <Section
        title="Figma type scale"
        description="Font size scale from Figma typography tokens. Theme exposes these so fontSize uses Figma values."
        code={`import { GDSText } from "@gdesignsystem/react";

<GDSText fontSize="xs">Type size xs</GDSText>
<GDSText fontSize="sm">Type size sm</GDSText>
<GDSText fontSize="md">Type size md</GDSText>
<GDSText fontSize="lg">Type size lg</GDSText>
<GDSText fontSize="xl">Type size xl</GDSText>
<GDSText fontSize="2xl">Type size 2xl</GDSText>
<GDSText fontSize="3xl">Type size 3xl</GDSText>
<GDSText fontSize="4xl">Type size 4xl</GDSText>`}
      >
        <VStack align="stretch" gap="3">
          {figmaScaleSizes.map((size) => (
            <Text key={size} fontSize={size}>
              Type size {size}
            </Text>
          ))}
        </VStack>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Use a single h1 per page for the main title; use semantic heading elements (as=\"h2\", as=\"h3\") with these styles so the document outline is correct.", rule: "1.3.1" },
          { text: "Match visual size to semantic level when possible (e.g. display for h1, headline for h2).", rule: "1.3.1" },
          { text: "Do not skip levels (e.g. h1 then h3); screen readers rely on heading hierarchy.", rule: "1.3.1" },
        ]}
      />
    </VStack>
  );
}
