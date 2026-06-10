import { useState, useEffect } from "react";
import { Box, CloseButton, Drawer, Flex, IconButton, VStack } from "@chakra-ui/react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { GDSText as Text } from "@gds-vero/react";
const NAV_ITEMS: Array<{ path: string; label: string; section?: string; group?: string }> = [
  { path: "/", label: "Overview", section: "Guides" },
  { path: "/guides/start-using-gds", label: "Start using GDS", section: "Guides" },
  { path: "/guides/sync-design-tokens", label: "Sync design tokens", section: "Guides" },
  { path: "/guides/tokens", label: "Tokens", section: "Guides" },
  { path: "/guides/external-website", label: "Using GDS outside the repo", section: "Guides" },
  { path: "/guides/for-ai-agents", label: "For AI agents", section: "Guides" },
  { path: "/guides/chakra-v3-api", label: "Chakra v3 API", section: "Guides" },
  { path: "/guides/code-connect", label: "Figma Code Connect", section: "Guides" },
  { path: "/accessibility", label: "Accessibility", section: "Guides" },
  { path: "/examples/login", label: "Login screen", section: "Examples" },
  { path: "/examples/vero-main-header", label: "Vero main header", section: "Examples" },
  { path: "/box", label: "Box", section: "Components", group: "Layout" },
  { path: "/flex", label: "Flex", section: "Components", group: "Layout" },
  { path: "/grid", label: "Grid", section: "Components", group: "Layout" },
  { path: "/layout", label: "Layout", section: "Components", group: "Layout" },
  { path: "/scroll-area", label: "Scroll Area", section: "Components", group: "Layout" },
  { path: "/separator", label: "Separator", section: "Components", group: "Layout" },
  { path: "/splitter", label: "Splitter", section: "Components", group: "Layout" },
  { path: "/link", label: "Link", section: "Components", group: "Typography" },
  { path: "/button", label: "Button", section: "Components", group: "Buttons" },
  { path: "/icon-button", label: "Icon Button", section: "Components", group: "Buttons" },
  { path: "/checkbox", label: "Checkbox", section: "Components", group: "Forms" },
  { path: "/checkbox-card", label: "Checkbox Card", section: "Components", group: "Forms" },
  { path: "/field", label: "Field", section: "Components", group: "Forms" },
  { path: "/fieldset", label: "Fieldset", section: "Components", group: "Forms" },
  { path: "/file-upload", label: "File Upload", section: "Components", group: "Forms" },
  { path: "/input", label: "Input", section: "Components", group: "Forms" },
  { path: "/input-group", label: "Input Group", section: "Components", group: "Forms" },
  { path: "/number-input", label: "Number Input", section: "Components", group: "Forms" },
  { path: "/password-input", label: "Password Input", section: "Components", group: "Forms" },
  { path: "/pin-input", label: "Pin Input", section: "Components", group: "Forms" },
  { path: "/radio", label: "Radio", section: "Components", group: "Forms" },
  { path: "/radio-card", label: "Radio Card", section: "Components", group: "Forms" },
  { path: "/rating", label: "Rating", section: "Components", group: "Forms" },
  { path: "/segment-group", label: "Segment Group", section: "Components", group: "Forms" },
  { path: "/select", label: "Select", section: "Components", group: "Forms" },
  { path: "/slider", label: "Slider", section: "Components", group: "Forms" },
  { path: "/switch", label: "Switch", section: "Components", group: "Forms" },
  { path: "/tags-input", label: "Tags Input", section: "Components", group: "Forms" },
  { path: "/textarea", label: "Textarea", section: "Components", group: "Forms" },
  { path: "/combobox", label: "Combobox", section: "Components", group: "Collections" },
  { path: "/listbox", label: "Listbox", section: "Components", group: "Collections" },
  { path: "/tree-view", label: "Tree View", section: "Components", group: "Collections" },
  { path: "/action-bar", label: "Action Bar", section: "Components", group: "Overlays" },
  { path: "/dialog", label: "Dialog", section: "Components", group: "Overlays" },
  { path: "/drawer", label: "Drawer", section: "Components", group: "Overlays" },
  { path: "/hover-card", label: "Hover Card", section: "Components", group: "Overlays" },
  { path: "/menu", label: "Menu", section: "Components", group: "Overlays" },
  { path: "/popover", label: "Popover", section: "Components", group: "Overlays" },
  { path: "/tooltip", label: "Tooltip", section: "Components", group: "Overlays" },
  { path: "/toast", label: "Toast", section: "Components", group: "Overlays" },
  { path: "/accordion", label: "Accordion", section: "Components", group: "Disclosure" },
  { path: "/breadcrumb", label: "Breadcrumb", section: "Components", group: "Disclosure" },
  { path: "/carousel", label: "Carousel", section: "Components", group: "Disclosure" },
  { path: "/collapsible", label: "Collapsible", section: "Components", group: "Disclosure" },
  { path: "/pagination", label: "Pagination", section: "Components", group: "Disclosure" },
  { path: "/steps", label: "Steps", section: "Components", group: "Disclosure" },
  { path: "/tabs", label: "Tabs", section: "Components", group: "Disclosure" },
  { path: "/alert", label: "Alert", section: "Components", group: "Feedback" },
  { path: "/empty-state", label: "Empty State", section: "Components", group: "Feedback" },
  { path: "/progress", label: "Progress", section: "Components", group: "Feedback" },
  { path: "/progress-circle", label: "Progress Circle", section: "Components", group: "Feedback" },
  { path: "/skeleton", label: "Skeleton", section: "Components", group: "Feedback" },
  { path: "/spinner", label: "Spinner", section: "Components", group: "Feedback" },
  { path: "/status", label: "Status", section: "Components", group: "Feedback" },
  { path: "/avatar", label: "Avatar", section: "Components", group: "Data Display" },
  { path: "/badge", label: "Badge", section: "Components", group: "Data Display" },
  { path: "/card", label: "Card", section: "Components", group: "Data Display" },
  { path: "/clipboard", label: "Clipboard", section: "Components", group: "Data Display" },
  { path: "/data-list", label: "Data List", section: "Components", group: "Data Display" },
  { path: "/icon", label: "Icon", section: "Components", group: "Data Display" },
  { path: "/image", label: "Image", section: "Components", group: "Data Display" },
  { path: "/marquee", label: "Marquee", section: "Components", group: "Data Display" },
  { path: "/qr-code", label: "QR Code", section: "Components", group: "Data Display" },
  { path: "/stat", label: "Stat", section: "Components", group: "Data Display" },
  { path: "/table", label: "Table", section: "Components", group: "Data Display" },
  { path: "/timeline", label: "Timeline", section: "Components", group: "Data Display" },
  { path: "/styles/text", label: "Text", section: "Styles" },
  { path: "/styles/colors", label: "Colors", section: "Styles" },
  { path: "/styles/icons", label: "Icons", section: "Styles" },
  { path: "/styles/spacing", label: "Spacing", section: "Styles" },
  { path: "/styles/radius", label: "Radius", section: "Styles" },
];

function NavLinks({
  location,
  onNavigate,
}: {
  location: ReturnType<typeof useLocation>;
  onNavigate?: () => void;
}) {
  return (
    <VStack align="stretch" gap="0">
      {NAV_ITEMS.map(({ path, label, section, group }, idx) => {
        const prev = NAV_ITEMS[idx - 1];

        const showSection = section != null && section !== prev?.section;

        const previousGroup =
          section === "Components" && prev?.section === "Components" ? prev?.group : undefined;

        const showGroup =
          section === "Components" &&
          group != null &&
          group !== previousGroup;
        const isActive =
          path === "/" ? location.pathname === "/" : location.pathname === path;
        return (
          <Box key={path}>
            {showSection && (
              <Text
                fontWeight="bold"
                fontSize="xs"
                color={{ _light: "black", _dark: "white" }}
                textTransform="uppercase"
                letterSpacing="widest"
                mt={section === "Guides" ? "0" : "4"}
                mb="2"
                px="2.5"
                py="1"
                bg="bg.subtle"
                borderRadius="md"
              >
                {section}
              </Text>
            )}
            {showGroup && (
              <Text
                fontWeight="semibold"
                fontSize="xs"
                color={{ _light: "black", _dark: "white" }}
                mt={previousGroup == null ? "2" : "4"}
                mb="1"
                px="2"
              >
                {group}
              </Text>
            )}
            <Link
              to={path}
              style={{ textDecoration: "none" }}
              onClick={onNavigate}
            >
              <Box
                px="3"
                py="2"
                borderRadius="md"
                fontSize="sm"
                bg={isActive ? "bg.muted" : "transparent"}
                color={isActive ? "fg" : "fg.muted"}
                _hover={{ bg: "bg.subtle", color: "fg" }}
              >
                {label}
              </Box>
            </Link>
          </Box>
        );
      })}
    </VStack>
  );
}

function MenuIcon(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function DesignSystemLayout() {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDrawerOpen(false);
  }, [location.pathname]);

  return (
    <Flex h="100%" minH="0" bg="bg.default" color="fg" direction="column">
      {/* Mobile: hamburger bar */}
      <Flex
        display={{ base: "flex", md: "none" }}
        align="center"
        px="4"
        py="3"
        borderBottomWidth="1px"
        borderColor="border.muted"
        bg="bg.default"
      >
        <Drawer.Root
          open={drawerOpen}
          onOpenChange={(e) => setDrawerOpen(e.open)}
          placement="start"
          size="xs"
        >
          <Drawer.Trigger asChild>
            <IconButton aria-label="Open menu" variant="ghost" size="sm">
              <MenuIcon />
            </IconButton>
          </Drawer.Trigger>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Components</Drawer.Title>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Drawer.CloseTrigger>
              </Drawer.Header>
              <Drawer.Body pt="0" px="3">
                <NavLinks location={location} onNavigate={() => setDrawerOpen(false)} />
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Drawer.Root>
        <Text fontWeight="semibold" fontSize="sm" ml="2">
          GDS Docs
        </Text>
      </Flex>

      <Flex flex="1" minH="0">
        {/* Desktop: sidebar — oma scrollaus, ei liiku contentin mukana */}
        <Box
          as="nav"
          display={{ base: "none", md: "block" }}
          w="56"
          flexShrink={0}
          h="full"
          minH="0"
          borderRightWidth="1px"
          borderColor="border.muted"
          py="6"
          px="3"
          overflowY="auto"
          overflowX="hidden"
        >
          <NavLinks location={location} />
        </Box>

        <Box flex="1" overflow="auto" minW="0">
          <Box maxW="4xl" px={{ base: 4, md: 8 }} py={{ base: 4, md: 8 }}>
            <Outlet />
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}