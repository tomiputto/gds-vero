import { Box, Code, Heading, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { GDSText as Text } from "@gdesignsystem/react";
import { Link } from "react-router-dom";
export function ExternalWebsitePage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Using GDS outside the repo
        </Heading>
        <Text color="fg.muted">
          How to build a website (or app) that lives outside the GDS monorepo but still uses GDS packages and stays in sync with design system updates.
        </Text>
        <Text color="fg.muted" mt="2">
          You don’t need a parent workspace or the same directory. Publish the GDS packages to a package registry (npm, GitHub Packages, etc.) and install them in any project with <Code>pnpm add @gdesignsystem/react @gdesignsystem/theme</Code>—the app can live in any repo or folder. You usually don’t need <Code>@gdesignsystem/tokens</Code> unless the app uses token files or raw token values directly.
        </Text>
        <Text color="fg.muted" mt="2">
          If your project was created with <Code>npm create @gdesignsystem/app@latest</Code> or{" "}
          <Code>pnpm create @gdesignsystem/app@latest</Code>, you can sync
          Figma token updates locally with <Code>pnpm gds:tokens:sync</Code>. See{" "}
          <Link to="/guides/sync-design-tokens">
            <Code>Sync design tokens</Code>
          </Link>{" "}
          for the step-by-step guide.
        </Text>
      </Box>

      <Section
        title="Recommended path (outside the monorepo)"
        description="Use create-app for the easiest setup and token sync workflow."
      >
        <VStack align="stretch" gap="3" textStyle="sm" color="fg.muted">
          <Text>
            1. Create your app: <Code>npm create @gdesignsystem/app@latest my-project</Code> or{" "}
            <Code>pnpm create @gdesignsystem/app@latest my-project</Code> (includes agent rules and a11y lint)
          </Text>
          <Text>
            2. Export Figma MCP variable defs to <Code>.tmp/figma.variable_defs.json</Code>
          </Text>
          <Text>
            3. Sync tokens: <Code>pnpm gds:tokens:sync</Code>
          </Text>
          <Text>
            4. Start or restart app: <Code>pnpm dev</Code>
          </Text>
        </VStack>
      </Section>

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
  "@gdesignsystem/theme": "workspace:*",
  "@gdesignsystem/icons": "workspace:*",
  "@chakra-ui/react": "^3.0.0",
  "@emotion/react": "^11.0.0",
  "react": ">=18",
  "react-dom": ">=18"
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
          <Text>• <strong>Best default:</strong> create app with <Code>pnpm create @gdesignsystem/app@latest</Code> and use <Code>pnpm gds:tokens:sync</Code> for local token sync.</Text>
          <Text>• <strong>No workspace needed:</strong> You can still install published GDS packages directly in any project.</Text>
          <Text>• <strong>With a workspace:</strong> Use <Code>workspace:*</Code> dependencies for live local package development against the GDS repo.</Text>
        </VStack>
      </Section>
    </VStack>
  );
}