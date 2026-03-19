import { Box, Code, Heading, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { GDSText as Text } from "@gdesignsystem/react";
export function StartUsingGdsPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Start using GDS
        </Heading>
        <Text color="fg.muted">
          Step-by-step setup for a new React app with GDS.
        </Text>
      </Box>

      <Section
        title="1. Create a project folder on your machine"
        description="Create or choose the folder where your new project will live."
      >
        <Text color="fg.muted" textStyle="sm">
          Example: create a folder like <Code>my-app</Code> and open a terminal in it.
        </Text>
      </Section>

      <Section
        title="2. Install the React template"
        description="Choose one of these commands based on where you want the app."
      >
        <VStack align="stretch" gap="3" textStyle="sm" color="fg.muted">
          <Text fontWeight="semibold" color="fg">
            Into the current folder:
          </Text>
          <Box
            as="pre"
            p="4"
            borderRadius="md"
            bg="bg.subtle"
            borderWidth="1px"
            borderColor="border.muted"
            fontSize="xs"
            fontFamily="mono"
            whiteSpace="pre-wrap"
            overflowX="auto"
          >
            {`npm create vite@latest . -- --template react-ts`}
          </Box>
          <Text fontWeight="semibold" color="fg">
            Create a new folder "Demo":
          </Text>
          <Box
            as="pre"
            p="4"
            borderRadius="md"
            bg="bg.subtle"
            borderWidth="1px"
            borderColor="border.muted"
            fontSize="xs"
            fontFamily="mono"
            whiteSpace="pre-wrap"
            overflowX="auto"
          >
            {`npm create vite@latest demo -- --template react-ts`}
          </Box>
        </VStack>
      </Section>

      <Section
        title="3. Clean up React default CSS"
        description='Prompt: "I will install my own design system next, so remove all unnecessary CSS."'
      >
        <Text color="fg.muted" textStyle="sm">
          Remove template CSS (such as default Vite React styles) so UI starts from a clean
          base before adding GDS.
        </Text>
      </Section>

      <Section
        title="4. After the React template is installed, add the GDS install script"
        description="Add this to the scripts section in package.json:"
      >
        <Box
          as="pre"
          p="4"
          borderRadius="md"
          bg="bg.subtle"
          borderWidth="1px"
          borderColor="border.muted"
          fontSize="xs"
          fontFamily="mono"
          whiteSpace="pre-wrap"
          overflowX="auto"
        >
          {`{
  "scripts": {
    "dev": "...",
    "build": "...",
    "setup:gds": "rm -rf node_modules package-lock.json && npm cache verify && npm install react react-dom && npm install @chakra-ui/react @emotion/react && npm install @gdesignsystem/tokens@latest && npm install @gdesignsystem/theme@latest @gdesignsystem/icons@latest @gdesignsystem/react@latest"
  }
}`}
        </Box>
      </Section>

      <Section title="5. Install GDS" description="Run the setup script from your project root.">
        <Box
          as="pre"
          p="4"
          borderRadius="md"
          bg="bg.subtle"
          borderWidth="1px"
          borderColor="border.muted"
          fontSize="xs"
          fontFamily="mono"
          whiteSpace="pre-wrap"
          overflowX="auto"
        >
          {`npm run setup:gds`}
        </Box>
      </Section>

      <Section
        title="6. Create a permanent project rule"
        description='Prompt: "Create a permanent project rule that from now on all UI must be implemented exclusively using GDS components and styles."'
      >
        <VStack align="stretch" gap="2" textStyle="sm" color="fg.muted">
          <Text>
            In this repository, add a persistent AI/project rule so future tasks always use
            GDS components and styles for UI implementation.
          </Text>
        </VStack>
      </Section>
    </VStack>
  );
}