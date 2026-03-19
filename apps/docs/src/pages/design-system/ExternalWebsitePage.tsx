import { Box, Code, Heading, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { GDSText as Text } from "@gdesignsystem/react";
export function ExternalWebsitePage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Using GDS outside the repo
        </Heading>
        <Text color="fg.muted">
          How to build a website (or app) that lives outside the GDS monorepo but still uses GDS packages and stays in sync with design system updates.
        </Text>
        <Text color="fg.muted" mt="2">
          You don’t need a parent workspace or the same directory. Publish the GDS packages to a package registry (npm, GitHub Packages, etc.) and install them in any project with <Code>pnpm add @gdesignsystem/react @gdesignsystem/theme</Code>—the app can live in any repo or folder. You usually don’t need <Code>@gdesignsystem/tokens</Code> unless the app uses token files or raw token values directly.
        </Text>
      </Box>

      <Section
        title="Option: Parent workspace"
        description="Put your app at the same directory level as GDS (e.g. gds/demo next to gds/GDS) and use a parent pnpm workspace so your app can depend on GDS via workspace:*."
      >
        <VStack align="stretch" gap="3" textStyle="sm" color="fg.muted">
          <Text fontWeight="semibold" color="fg">1. Create a parent workspace</Text>
          <Text>In the parent folder (e.g. <Code>gds/</Code>), add <Code>pnpm-workspace.yaml</Code>:</Text>
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
{`packages:
  - "GDS/packages/*"
  - "GDS/apps/*"
  - "demo"   # your app`}
          </Box>
          <Text fontWeight="semibold" color="fg" mt="2">2. Add your app</Text>
          <Text>Create your app (e.g. <Code>gds/demo/</Code>) with a <Code>package.json</Code> that lists GDS as workspace dependencies:</Text>
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
{`"dependencies": {
  "@gdesignsystem/react": "workspace:*",
  "@gdesignsystem/icons": "workspace:*",
  "@chakra-ui/react": "^3.33.0",
  "react": "^19.2.0",
  "react-dom": "^19.2.0"
}`}
          </Box>
          <Text fontWeight="semibold" color="fg" mt="2">3. Install and run</Text>
          <Text>From the parent folder run <Code>pnpm install</Code>, then run your app (e.g. <Code>cd demo && pnpm dev</Code>). Your app will use the live GDS packages; when you update GDS, the changes are reflected in your app when the dev server is running.</Text>
        </VStack>
      </Section>

      <Section
        title="Vite: tokens and fs access"
        description="If your app uses Vite, add the same GDS tokens plugin so tokens.raw.json is loaded and watched, and allow Vite to read the GDS directory."
      >
        <VStack align="stretch" gap="3" textStyle="sm" color="fg.muted">
          <Text>Point the plugin at the GDS repo (e.g. <Code>resolve(__dirname, \"../GDS\")</Code>) for <Code>packages/tokens/figma/tokens.raw.json</Code>. Set <Code>server.fs.allow</Code> to the GDS root so Vite can resolve the linked packages. See the <Code>gds/demo</Code> app in the parent workspace for a full example.</Text>
        </VStack>
      </Section>

      <Section
        title="Summary"
        description="Quick reference."
      >
        <VStack align="stretch" gap="2" textStyle="sm" color="fg.muted">
          <Text>• <strong>No workspace needed:</strong> Publish GDS packages to a registry and <Code>pnpm add @gdesignsystem/react</Code> (etc.) in any project, any repo.</Text>
          <Text>• <strong>With a workspace:</strong> Keep your site in a sibling folder to <Code>GDS</Code> (e.g. <Code>gds/demo</Code>), add a parent <Code>pnpm-workspace.yaml</Code>, and use <Code>workspace:*</Code> for <Code>@gdesignsystem/react</Code> and <Code>@gdesignsystem/icons</Code>.</Text>
          <Text>• Run <Code>pnpm install</Code> (from parent if using workspace); run your app from its folder. With a workspace, GDS updates are picked up when the dev server is running.</Text>
        </VStack>
      </Section>
    </VStack>
  );
}