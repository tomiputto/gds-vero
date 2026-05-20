import { useState } from "react";
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
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    window.setTimeout(() => setLoading(false), 800);
  }

  return (
    <Box
      minH="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="bg.subtle"
      px="4"
      py="12"
    >
      <Card.Root maxW="md" w="full" variant="elevated">
        <Card.Header>
          <Card.Title>
            <GDSHeading size="2xl">Sign in</GDSHeading>
          </Card.Title>
          <Card.Description>
            <Text color="fg.muted">
              Enter your email and password to access your account.
            </Text>
          </Card.Description>
        </Card.Header>

        <form onSubmit={handleSubmit}>
          <Card.Body>
            <VStack gap="4" align="stretch">
              <Field.Root required>
                <Field.Label>Email</Field.Label>
                <Input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  bg="bg.default"
                />
              </Field.Root>

              <Field.Root required>
                <Field.Label>Password</Field.Label>
                <Input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  bg="bg.default"
                />
              </Field.Root>

              <Box display="flex" alignItems="center" justifyContent="space-between" gap="4">
                <Checkbox.Root
                  colorPalette="brand"
                  checked={remember}
                  onCheckedChange={(e) => setRemember(!!e.checked)}
                >
                  <Checkbox.HiddenInput name="remember" />
                  <Checkbox.Control />
                  <Checkbox.Label>Remember me</Checkbox.Label>
                </Checkbox.Root>

                <Link href="#" color="brand.fg" fontSize="sm">
                  Forgot password?
                </Link>
              </Box>
            </VStack>
          </Card.Body>

          <Card.Footer flexDirection="column" gap="4">
            <GDSButton
              type="submit"
              colorPalette="brand"
              width="full"
              loading={loading}
            >
              <LogInIcon />
              Sign in
            </GDSButton>

            <Text textAlign="center" fontSize="sm" color="fg.muted">
              Don&apos;t have an account?{" "}
              <Link href="#" color="brand.fg" fontWeight="medium">
                Create one
              </Link>
            </Text>
          </Card.Footer>
        </form>
      </Card.Root>
    </Box>
  );
}
