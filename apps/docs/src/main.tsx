import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, useTheme } from "next-themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GDSProvider, GDSButton, GDSText as Text } from "@gdesignsystem/react";
import { Box, Flex, HStack, Theme } from "@chakra-ui/react";
import { DesignSystemLayout } from "./components/DesignSystemLayout";
import { DesignSystemOverview } from "./pages/design-system/DesignSystemOverview";
import { TokensPage } from "./pages/design-system/TokensPage";
import { StartUsingGdsPage } from "./pages/design-system/StartUsingGdsPage";
import { ExternalWebsitePage } from "./pages/design-system/ExternalWebsitePage";
import { ChakraV3ApiPage } from "./pages/design-system/ChakraV3ApiPage";
import { ForAIAgentsPage } from "./pages/design-system/ForAIAgentsPage";
import { AccessibilityPage } from "./pages/design-system/AccessibilityPage";
import { TextPage } from "./pages/design-system/TextPage";
import { ColorsPage } from "./pages/design-system/ColorsPage";
import { IconsPage } from "./pages/design-system/IconsPage";
import { SpacingPage } from "./pages/design-system/SpacingPage";
import { RadiusPage } from "./pages/design-system/RadiusPage";
import { AccordionPage } from "./pages/design-system/AccordionPage";
import { AlertPage } from "./pages/design-system/AlertPage";
import { AvatarPage } from "./pages/design-system/AvatarPage";
import { ButtonPage } from "./pages/design-system/ButtonPage";
import { BadgePage } from "./pages/design-system/BadgePage";
import { CardPage } from "./pages/design-system/CardPage";
import { CheckboxSwitchPage } from "./pages/design-system/CheckboxSwitchPage";
import { DialogPage } from "./pages/design-system/DialogPage";
import { InputPage } from "./pages/design-system/InputPage";
import { LayoutPage } from "./pages/design-system/LayoutPage";
import { MenuPage } from "./pages/design-system/MenuPage";
import { SpinnerPage } from "./pages/design-system/SpinnerPage";
import { SplitterPage } from "./pages/design-system/SplitterPage";
import { SwitchPage } from "./pages/design-system/SwitchPage";
import { TabsPage } from "./pages/design-system/TabsPage";
import { TooltipPage } from "./pages/design-system/TooltipPage";
import { TablePage } from "./pages/design-system/TablePage";
import { TextareaPage } from "./pages/design-system/TextareaPage";
import { SelectPage } from "./pages/design-system/SelectPage";
import { RadioGroupPage } from "./pages/design-system/RadioGroupPage";
import { ProgressPage } from "./pages/design-system/ProgressPage";
import { PaginationPage } from "./pages/design-system/PaginationPage";
import { NumberInputPage } from "./pages/design-system/NumberInputPage";
import { LinkPage } from "./pages/design-system/LinkPage";
import { ImagePage } from "./pages/design-system/ImagePage";
import { FlexPage } from "./pages/design-system/FlexPage";
import { GridPage } from "./pages/design-system/GridPage";
import { DrawerPage } from "./pages/design-system/DrawerPage";
import { SeparatorPage } from "./pages/design-system/SeparatorPage";
import { BreadcrumbPage } from "./pages/design-system/BreadcrumbPage";
import { BoxPage } from "./pages/design-system/BoxPage";
import { ActionBarPage } from "./pages/design-system/ActionBarPage";
import { CheckboxCardPage } from "./pages/design-system/CheckboxCardPage";
import { ComboboxPage } from "./pages/design-system/ComboboxPage";
import { FieldPage } from "./pages/design-system/FieldPage";
import { FieldsetPage } from "./pages/design-system/FieldsetPage";
import { FileUploadPage } from "./pages/design-system/FileUploadPage";
import { PasswordInputPage } from "./pages/design-system/PasswordInputPage";
import { RadioCardPage } from "./pages/design-system/RadioCardPage";
import { RatingPage } from "./pages/design-system/RatingPage";
import { ScrollAreaPage } from "./pages/design-system/ScrollAreaPage";
import { SegmentGroupPage } from "./pages/design-system/SegmentGroupPage";
import { TagsInputPage } from "./pages/design-system/TagsInputPage";
import { ListboxPage } from "./pages/design-system/ListboxPage";
import { TreeViewPage } from "./pages/design-system/TreeViewPage";
import { HoverCardPage } from "./pages/design-system/HoverCardPage";
import { PopoverPage } from "./pages/design-system/PopoverPage";
import { CarouselPage } from "./pages/design-system/CarouselPage";
import { CollapsiblePage } from "./pages/design-system/CollapsiblePage";
import { StepsPage } from "./pages/design-system/StepsPage";
import { EmptyStatePage } from "./pages/design-system/EmptyStatePage";
import { ProgressCirclePage } from "./pages/design-system/ProgressCirclePage";
import { StatusPage } from "./pages/design-system/StatusPage";
import { SkeletonPage } from "./pages/design-system/SkeletonPage";
import { ToastPage } from "./pages/design-system/ToastPage";
import { ClipboardPage } from "./pages/design-system/ClipboardPage";
import { DataListPage } from "./pages/design-system/DataListPage";
import { IconPage } from "./pages/design-system/IconPage";
import { IconButtonPage } from "./pages/design-system/IconButtonPage";
import { MarqueePage } from "./pages/design-system/MarqueePage";
import { QrCodePage } from "./pages/design-system/QrCodePage";
import { StatPage } from "./pages/design-system/StatPage";
import { TimelinePage } from "./pages/design-system/TimelinePage";
import { SliderPage } from "./pages/design-system/SliderPage";
import { PinInputPage } from "./pages/design-system/PinInputPage";
import { InputGroupPage } from "./pages/design-system/InputGroupPage";

function ColorModeToggle() {
  const { theme, setTheme } = useTheme();
  const mode = theme === "dark" ? "dark" : "light";

  return (
    <HStack gap="3" align="center">
      <Text textStyle="sm" color="fg.muted">Mode: {mode}</Text>
      <GDSButton
        size="sm"
        variant="outline"
        onClick={() => setTheme(mode === "dark" ? "light" : "dark")}
      >
        Toggle theme
      </GDSButton>
    </HStack>
  );
}

function ThemeClassSync() {
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    const mode = resolvedTheme === "dark" ? "dark" : "light";
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(mode);
  }, [resolvedTheme]);
  return null;
}

function App() {
  const { resolvedTheme } = useTheme();
  const appearance = resolvedTheme === "dark" ? "dark" : "light";

  return (
    <>
      <ThemeClassSync />
      <Theme appearance={appearance} minH="100vh" bg="bg.default" color="fg">
        <Flex direction="column" h="100vh" overflow="hidden">
          <Box
            as="header"
            position="sticky"
            top="0"
            zIndex="10"
            flexShrink={0}
            bg="bg.default"
            borderBottomWidth="1px"
            borderColor="border.muted"
            px="6"
            py="3"
          >
            <HStack justify="space-between" w="full">
              <Text fontWeight="semibold">GDS Docs</Text>
              <ColorModeToggle />
            </HStack>
          </Box>
          <Box flex="1" minH="0" overflow="hidden">
            <Routes>
        <Route path="/" element={<DesignSystemLayout />}>
          <Route index element={<DesignSystemOverview />} />
          <Route path="guides/start-using-gds" element={<StartUsingGdsPage />} />
          <Route path="guides/tokens" element={<TokensPage />} />
          <Route path="guides/external-website" element={<ExternalWebsitePage />} />
          <Route path="guides/for-ai-agents" element={<ForAIAgentsPage />} />
          <Route path="guides/chakra-v3-api" element={<ChakraV3ApiPage />} />
          <Route path="accessibility" element={<AccessibilityPage />} />
          <Route path="styles/text" element={<TextPage />} />
          <Route path="styles/colors" element={<ColorsPage />} />
          <Route path="styles/icons" element={<IconsPage />} />
          <Route path="styles/spacing" element={<SpacingPage />} />
          <Route path="styles/radius" element={<RadiusPage />} />
          <Route path="accordion" element={<AccordionPage />} />
          <Route path="alert" element={<AlertPage />} />
          <Route path="avatar" element={<AvatarPage />} />
          <Route path="badge" element={<BadgePage />} />
          <Route path="button" element={<ButtonPage />} />
          <Route path="card" element={<CardPage />} />
          <Route path="checkbox" element={<CheckboxSwitchPage />} />
          <Route path="dialog" element={<DialogPage />} />
          <Route path="input" element={<InputPage />} />
          <Route path="layout" element={<LayoutPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="spinner" element={<SpinnerPage />} />
          <Route path="splitter" element={<SplitterPage />} />
          <Route path="switch" element={<SwitchPage />} />
          <Route path="tabs" element={<TabsPage />} />
          <Route path="tooltip" element={<TooltipPage />} />
          <Route path="table" element={<TablePage />} />
          <Route path="textarea" element={<TextareaPage />} />
          <Route path="select" element={<SelectPage />} />
          <Route path="radio" element={<RadioGroupPage />} />
          <Route path="progress" element={<ProgressPage />} />
          <Route path="pagination" element={<PaginationPage />} />
          <Route path="number-input" element={<NumberInputPage />} />
          <Route path="link" element={<LinkPage />} />
          <Route path="image" element={<ImagePage />} />
          <Route path="flex" element={<FlexPage />} />
          <Route path="grid" element={<GridPage />} />
          <Route path="drawer" element={<DrawerPage />} />
          <Route path="separator" element={<SeparatorPage />} />
          <Route path="breadcrumb" element={<BreadcrumbPage />} />
          <Route path="box" element={<BoxPage />} />
          <Route path="action-bar" element={<ActionBarPage />} />
          <Route path="checkbox-card" element={<CheckboxCardPage />} />
          <Route path="combobox" element={<ComboboxPage />} />
          <Route path="field" element={<FieldPage />} />
          <Route path="fieldset" element={<FieldsetPage />} />
          <Route path="file-upload" element={<FileUploadPage />} />
          <Route path="password-input" element={<PasswordInputPage />} />
          <Route path="radio-card" element={<RadioCardPage />} />
          <Route path="rating" element={<RatingPage />} />
          <Route path="scroll-area" element={<ScrollAreaPage />} />
          <Route path="segment-group" element={<SegmentGroupPage />} />
          <Route path="tags-input" element={<TagsInputPage />} />
          <Route path="listbox" element={<ListboxPage />} />
          <Route path="tree-view" element={<TreeViewPage />} />
          <Route path="hover-card" element={<HoverCardPage />} />
          <Route path="popover" element={<PopoverPage />} />
          <Route path="carousel" element={<CarouselPage />} />
          <Route path="collapsible" element={<CollapsiblePage />} />
          <Route path="steps" element={<StepsPage />} />
          <Route path="empty-state" element={<EmptyStatePage />} />
          <Route path="progress-circle" element={<ProgressCirclePage />} />
          <Route path="status" element={<StatusPage />} />
          <Route path="skeleton" element={<SkeletonPage />} />
          <Route path="toast" element={<ToastPage />} />
          <Route path="clipboard" element={<ClipboardPage />} />
          <Route path="data-list" element={<DataListPage />} />
          <Route path="icon" element={<IconPage />} />
          <Route path="icon-button" element={<IconButtonPage />} />
          <Route path="marquee" element={<MarqueePage />} />
          <Route path="qr-code" element={<QrCodePage />} />
          <Route path="stat" element={<StatPage />} />
          <Route path="timeline" element={<TimelinePage />} />
          <Route path="slider" element={<SliderPage />} />
          <Route path="pin-input" element={<PinInputPage />} />
          <Route path="input-group" element={<InputGroupPage />} />
        </Route>
            </Routes>
          </Box>
        </Flex>
      </Theme>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <GDSProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <App />
        </BrowserRouter>
      </GDSProvider>
    </ThemeProvider>
  </React.StrictMode>
);
