import { Box, Heading, VStack } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { LoginScreen } from "../../components/LoginScreen";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";

const LOGIN_CODE = `import { useState } from "react";
import {
  Box,
  Card,
  Checkbox,
  Field,
  Input,
  Link,
  VStack,
} from "@chakra-ui/react";
import { GDSButton, GDSHeading, GDSText as Text } from "@gdesignsystem/react";
import { LogInIcon } from "@gdesignsystem/icons";

export function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="bg.subtle" px="4">
      <Card.Root maxW="md" w="full" variant="elevated">
        <Card.Header>
          <Card.Title><GDSHeading size="2xl">Sign in</GDSHeading></Card.Title>
          <Card.Description>
            <Text color="fg.muted">Enter your email and password.</Text>
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <VStack gap="4" align="stretch">
            <Field.Root required>
              <Field.Label>Email</Field.Label>
              <Input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Field.Root>
            <Field.Root required>
              <Field.Label>Password</Field.Label>
              <Input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Field.Root>
          </VStack>
        </Card.Body>
        <Card.Footer>
          <GDSButton colorPalette="brand" width="full">
            <LogInIcon /> Sign in
          </GDSButton>
        </Card.Footer>
      </Card.Root>
    </Box>
  );
}`;

export function LoginPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          Login screen
        </Heading>
        <Text color="fg.muted">
          A simple sign-in layout using GDS semantic tokens, Chakra v3 Field and Card APIs,{" "}
          <code>GDSButton</code>, and <code>LogInIcon</code>.
        </Text>
      </Box>

      <Section
        title="Preview"
        description="Centered card on a subtle background"
        code={LOGIN_CODE}
      >
        <Box
          borderRadius="lg"
          overflow="hidden"
          borderWidth="1px"
          borderColor="border.muted"
          minH="520px"
        >
          <LoginScreen />
        </Box>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Associate labels with inputs via Field.Root; use required on fields that must be filled.", rule: "3.3.2" },
          { text: "Submit with a real form and button type=\"submit\" so keyboard users can sign in with Enter.", rule: "2.1.1" },
          { text: "Use autocomplete attributes (email, current-password) for password managers.", rule: "1.3.5" },
        ]}
      />
    </VStack>
  );
}
