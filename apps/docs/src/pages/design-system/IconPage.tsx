import { useState } from "react";
import { Box, Button, Flex, Grid, Heading, Icon, Input, VStack } from "@chakra-ui/react";
import { GDSText as Text } from "@gdesignsystem/react";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CopyIcon,
  CogIcon,
  DownloadIcon,
  MailIcon,
  PenIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  StarIcon,
  TrashIcon,
  UploadIcon,
  XIcon,
} from "@gdesignsystem/icons";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

const GALLERY_ICONS = [
  { name: "Check", Icon: CheckIcon },
  { name: "ChevronDown", Icon: ChevronDownIcon },
  { name: "ChevronUp", Icon: ChevronUpIcon },
  { name: "Copy", Icon: CopyIcon },
  { name: "Cog", Icon: CogIcon },
  { name: "Download", Icon: DownloadIcon },
  { name: "Mail", Icon: MailIcon },
  { name: "Pen", Icon: PenIcon },
  { name: "Plus", Icon: PlusIcon },
  { name: "Search", Icon: SearchIcon },
  { name: "Settings", Icon: SettingsIcon },
  { name: "Star", Icon: StarIcon },
  { name: "Trash", Icon: TrashIcon },
  { name: "Upload", Icon: UploadIcon },
  { name: "X", Icon: XIcon },
] as const;

export function IconPage() {
  const [search, setSearch] = useState("");
  const filtered = search.trim()
    ? GALLERY_ICONS.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase())
      )
    : GALLERY_ICONS;
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Icon
        </Heading>
        <Text color="fg.muted">
          GDS icons from Figma. Use the <code>color</code> prop with Figma color
          tokens so icon colors stay consistent with the design system.
        </Text>
      </Box>

      <Section
        title="GDS icons with Figma tokens"
        description="Icon color is controlled by Figma tokens (fg, fg.muted, brand.fg, fg.success)."
        code={`import { CheckIcon, StarIcon, CopyIcon } from "@gdesignsystem/icons";

<CheckIcon color="fg" boxSize="6" />
<StarIcon color="fg.muted" boxSize="6" />
<CopyIcon color="brand.fg" boxSize="6" />
<CheckIcon color="fg.success" boxSize="6" />`}
      >
        <Flex gap="6" flexWrap="wrap" align="center">
          <CheckIcon color="fg" boxSize="6" />
          <StarIcon color="fg.muted" boxSize="6" />
          <CopyIcon color="brand.fg" boxSize="6" />
          <CheckIcon color="fg.success" boxSize="6" />
        </Flex>
      </Section>

      <Section
        title="With Chakra Icon"
        description="Wrap in Icon for consistent sizing; color still uses Figma tokens."
        code={`import { Icon } from "@chakra-ui/react";
import { CheckIcon } from "@gdesignsystem/icons";

<Icon as={CheckIcon} color="fg.muted" boxSize="8" />`}
      >
        <Icon as={CheckIcon} color="fg.muted" boxSize="8" />
      </Section>

      <Section
        title="With Button"
        description="Use GDS icons in buttons; color inherits from the button (Figma tokens)."
        code={`import { Button } from "@chakra-ui/react";
import { CheckIcon } from "@gdesignsystem/icons";
import { GDSText as Text } from "@gdesignsystem/react";

<Button colorPalette="brand">
  <CheckIcon /> Confirm
</Button>`}
      >
        <Button colorPalette="brand">
          <CheckIcon /> Confirm
        </Button>
      </Section>

      <Section
        title="Icon gallery"
        description="1,500+ GDS icons from @gdesignsystem/icons. Search a subset below; use color with Figma tokens."
        code={`import { CheckIcon, SearchIcon, TrashIcon } from "@gdesignsystem/icons";

<CheckIcon color="fg" boxSize="6" />
<SearchIcon color="fg.muted" boxSize="6" />`}
      >
        <VStack align="stretch" gap="4">
          <Input
            placeholder="Search icons…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            maxW="xs"
            size="sm"
            bg="bg.default"
          />
          <Grid
            templateColumns="repeat(auto-fill, minmax(5rem, 1fr))"
            gap="4"
            w="full"
          >
            {filtered.map(({ name, Icon: IconComp }) => (
              <Box
                key={name}
                p="3"
                borderRadius="md"
                bg="bg.muted"
                borderWidth="1px"
                borderColor="border.muted"
                textAlign="center"
              >
                <IconComp color="fg" boxSize="6" />
                <Text fontSize="xs" color="fg.muted" mt="1" lineClamp={1}>
                  {name}
                </Text>
              </Box>
            ))}
          </Grid>
          <Text fontSize="sm" color="fg.muted">
            Import any icon from <code>@gdesignsystem/icons</code> (e.g. CheckIcon, XIcon,
            CopyIcon). Run <code>pnpm gds:icons:generate</code> to regenerate
            from /icons.
          </Text>
        </VStack>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Decorative icons should have aria-hidden or role=\"presentation\".", rule: "1.1.1" },
          { text: "Meaningful icons need accessible text (aria-label or sr-only text).", rule: "1.1.1" },
        ]}
      />
    </VStack>
  );
}