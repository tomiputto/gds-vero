import { useState, useEffect } from "react";
import {
  Box,
  CloseButton,
  Drawer,
  Flex,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link, Outlet, useLocation } from "react-router-dom";

const NAV_ITEMS: Array<{ path: string; label: string; section?: string }> = [
  { path: "/", label: "Overview", section: "Guides" },
  { path: "/guides/tokens", label: "Tokens", section: "Guides" },
  { path: "/guides/external-website", label: "Using GDS outside the repo", section: "Guides" },
  { path: "/guides/for-ai-agents", label: "For AI agents", section: "Guides" },
  { path: "/guides/chakra-v3-api", label: "Chakra v3 API", section: "Guides" },
  { path: "/accessibility", label: "Accessibility", section: "Guides" },
  { path: "/accordion", label: "Accordion", section: "Components" },
  { path: "/action-bar", label: "Action Bar", section: "Components" },
  { path: "/alert", label: "Alert", section: "Components" },
  { path: "/avatar", label: "Avatar", section: "Components" },
  { path: "/badge", label: "Badge", section: "Components" },
  { path: "/box", label: "Box", section: "Components" },
  { path: "/breadcrumb", label: "Breadcrumb", section: "Components" },
  { path: "/button", label: "Button", section: "Components" },
  { path: "/card", label: "Card", section: "Components" },
  { path: "/carousel", label: "Carousel", section: "Components" },
  { path: "/checkbox", label: "Checkbox", section: "Components" },
  { path: "/checkbox-card", label: "Checkbox Card", section: "Components" },
  { path: "/clipboard", label: "Clipboard", section: "Components" },
  { path: "/collapsible", label: "Collapsible", section: "Components" },
  { path: "/combobox", label: "Combobox", section: "Components" },
  { path: "/data-list", label: "Data List", section: "Components" },
  { path: "/dialog", label: "Dialog", section: "Components" },
  { path: "/drawer", label: "Drawer", section: "Components" },
  { path: "/empty-state", label: "Empty State", section: "Components" },
  { path: "/field", label: "Field", section: "Components" },
  { path: "/fieldset", label: "Fieldset", section: "Components" },
  { path: "/file-upload", label: "File Upload", section: "Components" },
  { path: "/flex", label: "Flex", section: "Components" },
  { path: "/grid", label: "Grid", section: "Components" },
  { path: "/hover-card", label: "Hover Card", section: "Components" },
  { path: "/icon", label: "Icon", section: "Components" },
  { path: "/icon-button", label: "Icon Button", section: "Components" },
  { path: "/image", label: "Image", section: "Components" },
  { path: "/input", label: "Input", section: "Components" },
  { path: "/layout", label: "Layout", section: "Components" },
  { path: "/link", label: "Link", section: "Components" },
  { path: "/listbox", label: "Listbox", section: "Components" },
  { path: "/marquee", label: "Marquee", section: "Components" },
  { path: "/menu", label: "Menu", section: "Components" },
  { path: "/number-input", label: "Number Input", section: "Components" },
  { path: "/pagination", label: "Pagination", section: "Components" },
  { path: "/password-input", label: "Password Input", section: "Components" },
  { path: "/popover", label: "Popover", section: "Components" },
  { path: "/progress", label: "Progress", section: "Components" },
  { path: "/progress-circle", label: "Progress Circle", section: "Components" },
  { path: "/qr-code", label: "QR Code", section: "Components" },
  { path: "/radio", label: "Radio", section: "Components" },
  { path: "/radio-card", label: "Radio Card", section: "Components" },
  { path: "/rating", label: "Rating", section: "Components" },
  { path: "/slider", label: "Slider", section: "Components" },
  { path: "/pin-input", label: "Pin Input", section: "Components" },
  { path: "/input-group", label: "Input Group", section: "Components" },
  { path: "/scroll-area", label: "Scroll Area", section: "Components" },
  { path: "/segment-group", label: "Segment Group", section: "Components" },
  { path: "/select", label: "Select", section: "Components" },
  { path: "/separator", label: "Separator", section: "Components" },
  { path: "/skeleton", label: "Skeleton", section: "Components" },
  { path: "/spinner", label: "Spinner", section: "Components" },
  { path: "/splitter", label: "Splitter", section: "Components" },
  { path: "/stat", label: "Stat", section: "Components" },
  { path: "/status", label: "Status", section: "Components" },
  { path: "/steps", label: "Steps", section: "Components" },
  { path: "/switch", label: "Switch", section: "Components" },
  { path: "/table", label: "Table", section: "Components" },
  { path: "/tags-input", label: "Tags Input", section: "Components" },
  { path: "/tabs", label: "Tabs", section: "Components" },
  { path: "/textarea", label: "Textarea", section: "Components" },
  { path: "/timeline", label: "Timeline", section: "Components" },
  { path: "/toast", label: "Toast", section: "Components" },
  { path: "/tooltip", label: "Tooltip", section: "Components" },
  { path: "/tree-view", label: "Tree View", section: "Components" },
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
  let lastSection: string | undefined;
  return (
    <VStack align="stretch" gap="0">
      {NAV_ITEMS.map(({ path, label, section }) => {
        const showSection = section != null && section !== lastSection;
        if (showSection) lastSection = section;
        const isActive =
          path === "/" ? location.pathname === "/" : location.pathname === path;
        return (
          <Box key={path}>
            {showSection && (
              <Text
                fontWeight="semibold"
                fontSize="xs"
                color="fg.muted"
                textTransform="uppercase"
                letterSpacing="wider"
                mt={section === "Guides" ? "0" : "4"}
                mb="2"
                px="2"
              >
                {section}
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
