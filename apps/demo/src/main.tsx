import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, useTheme } from "next-themes";
import { GDSProvider } from "@gdesignsystem/react";
import { Box, Button, HStack, Text, Theme } from "@chakra-ui/react";
import { CheckIcon } from "@gdesignsystem/icons";

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
      <Box as="header" borderBottomWidth="1px" borderColor="border.muted" px="6" py="4">
        <Text fontWeight="semibold" textStyle="lg">
          GDS Demo
        </Text>
      </Box>
      <Box p="6" maxW="xl">
        <Box bg="bg.muted" color="fg" p="6" borderRadius="lg" borderWidth="1px" borderColor="border.muted">
          <Text textStyle="md" mb="3">
            This page uses the GDS design system with Chakra UI v3 and Figma tokens.
          </Text>
          <Text color="fg.muted" textStyle="sm" mb="4">
            Semantic tokens like <code>fg</code>, <code>bg.default</code>, and <code>brand</code> keep styles consistent with your Figma design.
          </Text>
          <HStack gap="3">
            <Button colorPalette="brand">
              <CheckIcon /> Primary action
            </Button>
            <Button variant="outline">Secondary</Button>
          </HStack>
        </Box>
      </Box>
    </Theme>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <GDSProvider>
        <App />
      </GDSProvider>
    </ThemeProvider>
  </React.StrictMode>
);
