import { useState, type ReactNode } from "react";
import {
  Box,
  chakra,
  CloseButton,
  Drawer,
  Flex,
  HStack,
  Link,
  Menu,
  Portal,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon, GlobeIcon, MenuIcon, SearchIcon } from "@gds-vero/icons";

const HeaderActionButton = chakra("button");

/** 8px green strip above active audience tab (vero.fi). */
const TOP_BAR_TAB_OFFSET = "2";
import { GDSButton } from "./GDSButton";
import { GDSText } from "./GDSText";
import type {
  VeroAudienceTab,
  VeroLanguageOption,
  VeroMainHeaderLink,
  VeroMainHeaderProps,
  VeroNavItem,
} from "./vero-main-header-types";

const DEFAULT_AUDIENCE_TABS: VeroAudienceTab[] = [
  { id: "henkilo", label: "Henkilöasiakkaat", href: "https://www.vero.fi/henkiloasiakkaat/", isActive: true },
  { id: "yritys", label: "Yritysasiakkaat", href: "https://www.vero.fi/yritysasiakkaat/" },
];

const DEFAULT_LANGUAGES: VeroLanguageOption[] = [
  { id: "fi", label: "Suomeksi (FI)", href: "https://www.vero.fi/", isActive: true },
  { id: "sv", label: "På svenska (SV)", href: "https://www.vero.fi/sv/" },
  { id: "en", label: "In English (EN)", href: "https://www.vero.fi/en/" },
];

const DEFAULT_OMAVERO_ITEMS: VeroMainHeaderLink[] = [
  { id: "login", label: "Kirjaudu OmaVeroon", href: "https://www.vero.fi/omavero/" },
  { id: "register", label: "Luo OmaVero-tunnus", href: "https://www.vero.fi/omavero/rekisteroidy/" },
];

const DEFAULT_NAV_ITEMS: VeroNavItem[] = [
  { id: "etusivu", label: "Etusivu", href: "https://www.vero.fi/henkiloasiakkaat/", isActive: true },
  {
    id: "verokortti",
    label: "Verokortti ja veroilmoitus",
    menuItems: [
      { id: "verokortti", label: "Verokortti", href: "https://www.vero.fi/henkiloasiakkaat/verokortti-ja-veroilmoitus/verokortti/" },
      { id: "veroilmoitus", label: "Veroilmoitus", href: "https://www.vero.fi/henkiloasiakkaat/verokortti-ja-veroilmoitus/veroilmoitus/" },
    ],
  },
  {
    id: "vahennykset",
    label: "Vähennykset",
    menuItems: [
      { id: "kotitalous", label: "Kotitalousvähennys", href: "https://www.vero.fi/henkiloasiakkaat/vahennykset/kotitalousvahennys/" },
    ],
  },
  {
    id: "omaisuus",
    label: "Omaisuus ja asuminen",
    menuItems: [
      { id: "asuminen", label: "Asuminen", href: "https://www.vero.fi/henkiloasiakkaat/omaisuus-ja-asuminen/asuminen/" },
    ],
  },
  {
    id: "maksut",
    label: "Maksut ja palautukset",
    menuItems: [
      { id: "maksaminen", label: "Veron maksaminen", href: "https://www.vero.fi/henkiloasiakkaat/maksut-ja-palautukset/veron-maksaminen/" },
    ],
  },
];

/** No underline on header links (overrides Chakra link recipe defaults). */
const headerLinkProps = {
  textDecoration: "none",
  _hover: { textDecoration: "none" },
  _focus: { textDecoration: "none" },
  _focusVisible: { textDecoration: "none" },
  _active: { textDecoration: "none" },
} as const;

function TopUtilityLink({
  href,
  label,
  icon,
  onClick,
  showLabelFrom = "xl",
}: {
  href?: string;
  label: string;
  icon: ReactNode;
  onClick?: () => void;
  showLabelFrom?: "lg" | "xl";
}) {
  const content = (
    <HStack gap="1.5" h="14" align="center" px={{ base: "2.5", md: "4" }} color="fg.inverted">
      {icon}
      <GDSText
        fontWeight="bold"
        fontSize="md"
        display={{ base: "none", [showLabelFrom]: "inline" }}
      >
        {label}
      </GDSText>
    </HStack>
  );

  if (onClick) {
    return (
      <HeaderActionButton
        type="button"
        onClick={onClick}
        aria-label={label}
        display="flex"
        alignItems="center"
        h="14"
        bg="transparent"
        border="0"
        cursor="pointer"
        _hover={{ opacity: 0.9 }}
      >
        {content}
      </HeaderActionButton>
    );
  }

  return (
    <Link
      href={href}
      {...headerLinkProps}
      display="flex"
      alignItems="center"
      h="14"
      _hover={{ ...headerLinkProps._hover, opacity: 0.9 }}
      aria-label={label}
    >
      {content}
    </Link>
  );
}

function AudienceTab({ tab }: { tab: VeroAudienceTab }) {
  const isActive = tab.isActive ?? false;

  return (
    <Link
      href={tab.href}
      {...headerLinkProps}
      aria-current={isActive ? "page" : undefined}
      display="flex"
      alignItems="center"
      flexShrink={0}
      whiteSpace="nowrap"
      h="14"
      px="4"
      bg={isActive ? "bg.default" : "transparent"}
      color={isActive ? "fg" : "fg.inverted"}
      borderTopRadius={isActive ? "lg" : undefined}
      borderTopLeftRadius={isActive ? "lg" : undefined}
      borderTopRightRadius={isActive ? "lg" : undefined}
    >
      <GDSText fontWeight="semibold" fontSize="md" whiteSpace="nowrap">
        {tab.label}
      </GDSText>
    </Link>
  );
}

function BottomNavItem({ item }: { item: VeroNavItem }) {
  const isActive = item.isActive ?? false;

  const itemStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1",
    h: "14",
    px: "4",
    flexShrink: 0,
    bg: isActive ? "bg.subtle" : "transparent",
    borderLeftWidth: isActive ? "1px" : "0",
    borderRightWidth: isActive ? "1px" : "0",
    borderColor: isActive ? "border.emphasized" : "transparent",
    color: "fg",
    _hover: { bg: isActive ? "bg.subtle" : "bg.muted" },
  } as const;

  if (item.menuItems?.length) {
    return (
      <Menu.Root>
        <Menu.Trigger asChild>
          <HeaderActionButton
            type="button"
            {...itemStyles}
            cursor="pointer"
            border="0"
            fontFamily="inherit"
          >
            <GDSText fontWeight="semibold" fontSize="md" whiteSpace="nowrap">
              {item.label}
            </GDSText>
            <ChevronDownIcon boxSize="4" aria-hidden />
          </HeaderActionButton>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {item.menuItems.map((menuItem) => (
                <Menu.Item key={menuItem.id} value={menuItem.id} asChild>
                  <Link href={menuItem.href} {...headerLinkProps}>
                    {menuItem.label}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    );
  }

  return (
    <Link href={item.href} {...headerLinkProps} aria-current={isActive ? "page" : undefined}>
      <Box {...itemStyles}>
        <GDSText fontWeight="semibold" fontSize="md" whiteSpace="nowrap" textAlign="center">
          {item.label}
        </GDSText>
      </Box>
    </Link>
  );
}

function NavDrawerContent({
  navItems,
  audienceTabs,
  showAudienceTabs,
  onNavigate,
}: {
  navItems: VeroNavItem[];
  audienceTabs: VeroAudienceTab[];
  showAudienceTabs: boolean;
  onNavigate: () => void;
}) {
  return (
    <VStack align="stretch" gap="0">
      {showAudienceTabs && (
        <Box borderBottomWidth="1px" borderColor="border.muted" pb="2" mb="2">
          <GDSText px="4" py="2" fontWeight="bold" fontSize="xs" color="fg.muted" textTransform="uppercase">
            Asiakasryhmät
          </GDSText>
          {audienceTabs.map((tab) => {
            const isActive = tab.isActive ?? false;
            return (
              <Link
                key={tab.id}
                href={tab.href}
                {...headerLinkProps}
                display="block"
                px="4"
                py="3"
                bg={isActive ? "bg.subtle" : undefined}
                aria-current={isActive ? "page" : undefined}
                onClick={onNavigate}
              >
                <GDSText fontWeight="semibold">{tab.label}</GDSText>
              </Link>
            );
          })}
        </Box>
      )}

      {navItems.map((item) => {
        const isActive = item.isActive ?? false;

        if (item.menuItems?.length) {
          return (
            <Box key={item.id} borderBottomWidth="1px" borderColor="border.muted">
              <GDSText px="4" pt="3" pb="1" fontWeight="semibold" fontSize="sm">
                {item.label}
              </GDSText>
              <VStack align="stretch" gap="0" pb="2">
                {item.menuItems.map((menuItem) => (
                  <Link
                    key={menuItem.id}
                    href={menuItem.href}
                    {...headerLinkProps}
                    display="block"
                    px="4"
                    py="2.5"
                    onClick={onNavigate}
                  >
                    <GDSText>{menuItem.label}</GDSText>
                  </Link>
                ))}
              </VStack>
            </Box>
          );
        }

        return (
          <Link
            key={item.id}
            href={item.href}
            {...headerLinkProps}
            display="block"
            px="4"
            py="3"
            bg={isActive ? "bg.subtle" : undefined}
            borderBottomWidth="1px"
            borderColor="border.muted"
            aria-current={isActive ? "page" : undefined}
            onClick={onNavigate}
          >
            <GDSText fontWeight="semibold">{item.label}</GDSText>
          </Link>
        );
      })}
    </VStack>
  );
}

/**
 * Vero.fi-style site header: brand top bar (logo, audience tabs, utilities) and secondary navigation.
 * On wide screens the sub-nav is inline; on narrow screens it moves into a drawer.
 */
export function VeroMainHeader({
  logoHref = "https://www.vero.fi",
  logoLabel = "vero.fi",
  audienceTabs = DEFAULT_AUDIENCE_TABS,
  searchHref = "https://www.vero.fi/haku/",
  searchLabel = "Hae",
  onSearchClick,
  languageLabel = "Suomeksi (FI)",
  languages = DEFAULT_LANGUAGES,
  omaVeroLabel = "OmaVero",
  omaVeroItems = DEFAULT_OMAVERO_ITEMS,
  navItems = DEFAULT_NAV_ITEMS,
  topBarEnd,
}: VeroMainHeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const showAudienceInDrawer = useBreakpointValue({ base: true, xl: false }) ?? true;
  const activeLanguage = languages.find((lang) => lang.isActive) ?? languages[0];

  return (
    <Box as="header" w="full">
      <Flex
        bg="brand.solid"
        color="fg.inverted"
        align="flex-end"
        justify="space-between"
        gap="2"
        px={{ base: "4", md: "5" }}
        pt={TOP_BAR_TAB_OFFSET}
        minH="16"
        flexWrap="nowrap"
      >
        <Link
          href={logoHref}
          {...headerLinkProps}
          _hover={{ ...headerLinkProps._hover, opacity: 0.9 }}
          flexShrink={0}
          alignSelf="center"
        >
          <Flex h="14" align="center" px="2">
            <GDSText fontWeight="bold" fontSize="md" color="fg.inverted">
              {logoLabel}
            </GDSText>
          </Flex>
        </Link>

        <HStack
          as="nav"
          aria-label="Asiakasryhmät"
          gap="0"
          display={{ base: "none", xl: "flex" }}
          flexShrink={0}
          ml={{ xl: "4" }}
        >
          {audienceTabs.map((tab) => (
            <AudienceTab key={tab.id} tab={tab} />
          ))}
        </HStack>

        <Box flex="1" display={{ base: "none", xl: "block" }} />

        <HStack gap="0" flexShrink={0} align="center" alignSelf="center" h="14">
          <TopUtilityLink
            href={onSearchClick ? undefined : searchHref}
            onClick={onSearchClick}
            label={searchLabel}
            icon={<SearchIcon boxSize="6" color="fg.inverted" aria-hidden />}
          />

          <Menu.Root>
            <Menu.Trigger asChild>
              <HeaderActionButton
                type="button"
                display="flex"
                alignItems="center"
                h="14"
                bg="transparent"
                border="0"
                cursor="pointer"
                aria-label="Kielivalinta"
              >
                <HStack gap="1.5" align="center" px={{ base: "2.5", md: "4" }} color="fg.inverted">
                  <GlobeIcon boxSize="6" color="fg.inverted" aria-hidden />
                  <GDSText
                    fontWeight="bold"
                    fontSize="md"
                    display={{ base: "none", xl: "inline" }}
                  >
                    {activeLanguage?.label ?? languageLabel}
                  </GDSText>
                </HStack>
              </HeaderActionButton>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  {languages.map((lang) => (
                    <Menu.Item key={lang.id} value={lang.id} asChild>
                      <Link
                        href={lang.href}
                        {...headerLinkProps}
                        aria-current={lang.isActive ? "page" : undefined}
                      >
                        {lang.label}
                      </Link>
                    </Menu.Item>
                  ))}
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>

          <Menu.Root>
            <Menu.Trigger asChild>
              <Flex h="14" align="center" px={{ base: "1", md: "2" }}>
                <GDSButton
                  size="sm"
                  bg="bg.default"
                  color="fg"
                  borderRadius="full"
                  px={{ base: "2.5", xl: "4" }}
                  py="1.5"
                  h="8"
                  minH="8"
                  fontSize="md"
                  aria-label={omaVeroLabel}
                  _hover={{ bg: "bg.muted" }}
                >
                  <Box as="span" display={{ base: "none", sm: "inline" }}>
                    {omaVeroLabel}
                  </Box>
                  <ChevronDownIcon boxSize="4" aria-hidden />
                </GDSButton>
              </Flex>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  {omaVeroItems.map((item) => (
                    <Menu.Item key={item.id} value={item.id} asChild>
                      <Link href={item.href} {...headerLinkProps}>
                        {item.label}
                      </Link>
                    </Menu.Item>
                  ))}
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>

          {topBarEnd}
        </HStack>
      </Flex>

      {/* Desktop sub-navigation */}
      <Box
        as="nav"
        aria-label="Päävalikko"
        bg="bg.default"
        borderBottomWidth="1px"
        borderColor="border.muted"
        display={{ base: "none", xl: "block" }}
      >
        <Flex wrap="wrap">
          {navItems.map((item) => (
            <BottomNavItem key={item.id} item={item} />
          ))}
        </Flex>
      </Box>

      {/* Narrow screens: drawer for sub-navigation (and audience tabs when hidden) */}
      <Box
        display={{ base: "block", xl: "none" }}
        bg="bg.default"
        borderBottomWidth="1px"
        borderColor="border.muted"
        px="4"
        py="2"
      >
        <Drawer.Root open={drawerOpen} onOpenChange={(e) => setDrawerOpen(e.open)} placement="start">
          <Drawer.Trigger asChild>
            <GDSButton variant="ghost" size="sm" colorPalette="brand">
              <MenuIcon aria-hidden />
              Valikko
            </GDSButton>
          </Drawer.Trigger>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Valikko</Drawer.Title>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" aria-label="Sulje valikko" />
                </Drawer.CloseTrigger>
              </Drawer.Header>
              <Drawer.Body px="0">
                <NavDrawerContent
                  navItems={navItems}
                  audienceTabs={audienceTabs}
                  showAudienceTabs={showAudienceInDrawer}
                  onNavigate={() => setDrawerOpen(false)}
                />
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Drawer.Root>
      </Box>
    </Box>
  );
}

export type { VeroMainHeaderProps } from "./vero-main-header-types";
export type {
  VeroAudienceTab,
  VeroLanguageOption,
  VeroMainHeaderLink,
  VeroNavItem,
  VeroNavMenuItem,
} from "./vero-main-header-types";
