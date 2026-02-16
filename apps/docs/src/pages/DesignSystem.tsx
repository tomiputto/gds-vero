import {
  Alert,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Field,
  Flex,
  Heading,
  HStack,
  Input,
  Separator,
  SimpleGrid,
  Spacer,
  Stack,
  Switch,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <Box>
      <Heading size="lg" mb="1">
        {title}
      </Heading>
      {description && (
        <Text color="fg.muted" textStyle="sm" mb="4">
          {description}
        </Text>
      )}
      <Box
        p="6"
        bg="bg.muted"
        borderRadius="lg"
        borderWidth="1px"
        borderColor="border.muted"
      >
        {children}
      </Box>
    </Box>
  );
}

export function DesignSystem() {
  return (
    <Box minH="100vh" bg="bg.default" color="fg">
      <Box maxW="6xl" mx="auto" px="6" py="8">
        <VStack align="stretch" gap="10">
          <Box>
            <Heading size="2xl" mb="2">
              GDS Design System
            </Heading>
            <Text color="fg.muted" fontSize="lg">
              Chakra UI v3 components with GDS theme
            </Text>
          </Box>

          <Separator />

          <Section
            title="Button"
            description="Buttons in different variants and sizes"
          >
            <VStack align="flex-start" gap="6">
              <Box>
                <Text textStyle="sm" fontWeight="medium" mb="2">
                  Variants
                </Text>
                <HStack wrap="wrap" gap="3">
                  <Button variant="solid">Solid</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="subtle">Subtle</Button>
                  <Button variant="surface">Surface</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="plain">Plain</Button>
                </HStack>
              </Box>
              <Box>
                <Text textStyle="sm" fontWeight="medium" mb="2">
                  Sizes
                </Text>
                <HStack wrap="wrap" gap="3">
                  <Button size="xs">xs</Button>
                  <Button size="sm">sm</Button>
                  <Button size="md">md</Button>
                  <Button size="lg">lg</Button>
                  <Button size="xl">xl</Button>
                </HStack>
              </Box>
              <Box>
                <Text textStyle="sm" fontWeight="medium" mb="2">
                  Color palette (GDS brand from Figma)
                </Text>
                <HStack wrap="wrap" gap="3">
                  <Button colorPalette="brand">Brand</Button>
                </HStack>
              </Box>
              <HStack gap="3">
                <Button disabled>Disabled</Button>
                <Button loading>Loading</Button>
              </HStack>
            </VStack>
          </Section>

          <Section
            title="Badge"
            description="Labels and status indicators"
          >
            <VStack align="flex-start" gap="4">
              <HStack wrap="wrap" gap="3">
                <Badge colorPalette="brand">Brand</Badge>
                <Box as="span" px="2" py="0.5" borderRadius="md" bg="bg.success" color="fg.success" fontSize="xs" fontWeight="medium">Success</Box>
                <Box as="span" px="2" py="0.5" borderRadius="md" bg="bg.error" color="fg.error" fontSize="xs" fontWeight="medium">Error</Box>
                <Box as="span" px="2" py="0.5" borderRadius="md" bg="bg.warning" color="fg.warning" fontSize="xs" fontWeight="medium">Warning</Box>
              </HStack>
              <Box>
                <Text textStyle="sm" fontWeight="medium" mb="2">
                  Variants
                </Text>
                <HStack wrap="wrap" gap="3">
                  <Badge variant="solid" colorPalette="brand">Solid</Badge>
                  <Badge variant="outline" colorPalette="brand">Outline</Badge>
                  <Badge variant="subtle" colorPalette="brand">Subtle</Badge>
                  <Badge variant="surface" colorPalette="brand">Surface</Badge>
                </HStack>
              </Box>
              <Box>
                <Text textStyle="sm" fontWeight="medium" mb="2">
                  Sizes
                </Text>
                <HStack gap="3">
                  <Badge colorPalette="brand" size="xs">xs</Badge>
                  <Badge colorPalette="brand" size="sm">sm</Badge>
                  <Badge colorPalette="brand" size="md">md</Badge>
                  <Badge colorPalette="brand" size="lg">lg</Badge>
                </HStack>
              </Box>
            </VStack>
          </Section>

          <Section
            title="Input"
            description="Text inputs with field labels"
          >
            <Stack gap="6" maxW="md">
              <Field.Root>
                <Field.Label>Email</Field.Label>
                <Input placeholder="Enter your email" />
              </Field.Root>
              <Field.Root>
                <Field.Label>With helper</Field.Label>
                <Input placeholder="Username" />
                <Field.HelperText>Choose a unique username</Field.HelperText>
              </Field.Root>
              <Field.Root invalid>
                <Field.Label>Invalid field</Field.Label>
                <Input placeholder="Required" />
                <Field.ErrorText>This field is required</Field.ErrorText>
              </Field.Root>
              <HStack gap="4">
                <Input placeholder="size xs" size="xs" flex="1" />
                <Input placeholder="size sm" size="sm" flex="1" />
                <Input placeholder="size md" size="md" flex="1" />
              </HStack>
              <Input placeholder="Disabled" disabled />
            </Stack>
          </Section>

          <Section
            title="Checkbox & Switch"
            description="Form controls"
          >
            <VStack align="flex-start" gap="6">
              <Box>
                <Text textStyle="sm" fontWeight="medium" mb="3">
                  Checkbox
                </Text>
                <Stack gap="2">
                  <Checkbox.Root colorPalette="brand" defaultChecked>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>Accept terms</Checkbox.Label>
                  </Checkbox.Root>
                  <Checkbox.Root colorPalette="brand">
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>Subscribe to newsletter</Checkbox.Label>
                  </Checkbox.Root>
                  <Checkbox.Root colorPalette="brand" disabled>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>Disabled</Checkbox.Label>
                  </Checkbox.Root>
                </Stack>
              </Box>
              <Box>
                <Text textStyle="sm" fontWeight="medium" mb="3">
                  Switch
                </Text>
                <Stack gap="2">
                  <Switch.Root colorPalette="brand" defaultChecked>
                    <Switch.HiddenInput />
                    <Switch.Control />
                    <Switch.Label>Enable notifications</Switch.Label>
                  </Switch.Root>
                  <Switch.Root colorPalette="brand">
                    <Switch.HiddenInput />
                    <Switch.Control />
                    <Switch.Label>Dark mode</Switch.Label>
                  </Switch.Root>
                </Stack>
              </Box>
            </VStack>
          </Section>

          <Section
            title="Alert"
            description="Feedback messages"
          >
            <Stack gap="4">
              <Alert.Root status="success">
                <Alert.Indicator />
                <Alert.Content>
                  <Alert.Title>Success</Alert.Title>
                  <Alert.Description>
                    Your changes have been saved.
                  </Alert.Description>
                </Alert.Content>
              </Alert.Root>
              <Alert.Root status="error">
                <Alert.Indicator />
                <Alert.Content>
                  <Alert.Title>Error</Alert.Title>
                  <Alert.Description>
                    Something went wrong. Please try again.
                  </Alert.Description>
                </Alert.Content>
              </Alert.Root>
              <Alert.Root status="warning">
                <Alert.Indicator />
                <Alert.Title>Your session is about to expire</Alert.Title>
              </Alert.Root>
              <Alert.Root status="info">
                <Alert.Indicator />
                <Alert.Title>New feature available</Alert.Title>
              </Alert.Root>
            </Stack>
          </Section>

          <Section
            title="Card"
            description="Content containers"
          >
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="6">
              <Card.Root>
                <Card.Header>
                  <Card.Title>Card title</Card.Title>
                  <Card.Description>
                    Short description for this card
                  </Card.Description>
                </Card.Header>
                <Card.Body>
                  <Text color="fg.muted" textStyle="sm">
                    Card body content. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </Text>
                </Card.Body>
                <Card.Footer>
                  <Button size="sm" variant="outline" colorPalette="brand">Cancel</Button>
                  <Spacer />
                  <Button size="sm" colorPalette="brand">Save</Button>
                </Card.Footer>
              </Card.Root>
              <Card.Root variant="outline">
                <Card.Body gap="2">
                  <Card.Title>Outline card</Card.Title>
                  <Card.Description>
                    This card uses the outline variant.
                  </Card.Description>
                  <Button size="sm" mt="2" colorPalette="brand">Action</Button>
                </Card.Body>
              </Card.Root>
              <Card.Root variant="elevated">
                <Card.Body gap="2">
                  <Card.Title>Elevated card</Card.Title>
                  <Card.Description>
                    This card has a subtle shadow.
                  </Card.Description>
                </Card.Body>
              </Card.Root>
            </SimpleGrid>
          </Section>

          <Section
            title="Tabs"
            description="Tabbed navigation"
          >
<Tabs.Root colorPalette="brand" defaultValue="one" variant="line">
            <Tabs.List>
                <Tabs.Trigger value="one">Tab one</Tabs.Trigger>
                <Tabs.Trigger value="two">Tab two</Tabs.Trigger>
                <Tabs.Trigger value="three">Tab three</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="one">
                <Box py="4">
                  <Text>Content for tab one. You can put any components here.</Text>
                </Box>
              </Tabs.Content>
              <Tabs.Content value="two">
                <Box py="4">
                  <Text>Content for tab two.</Text>
                </Box>
              </Tabs.Content>
              <Tabs.Content value="three">
                <Box py="4">
                  <Text>Content for tab three.</Text>
                </Box>
              </Tabs.Content>
            </Tabs.Root>
          </Section>

          <Section
            title="Layout (Stack, Flex, Grid)"
            description="Spacing and alignment"
          >
            <VStack align="stretch" gap="6">
              <Box>
                <Text textStyle="sm" fontWeight="medium" mb="2">
                  HStack
                </Text>
                <HStack gap="4" p="3" bg="bg.muted" borderRadius="md">
                  <Box w="10" h="10" bg="brand.solid" borderRadius="md" />
                  <Box w="10" h="10" bg="brand.subtle" borderRadius="md" />
                  <Box w="10" h="10" bg="brand.muted" borderRadius="md" />
                </HStack>
              </Box>
              <Box>
                <Text textStyle="sm" fontWeight="medium" mb="2">
                  VStack
                </Text>
                <VStack gap="2" p="3" bg="bg.muted" borderRadius="md" align="flex-start">
                  <Box w="full" h="3" bg="brand.solid" borderRadius="sm" />
                  <Box w="80%" h="3" bg="brand.subtle" borderRadius="sm" />
                  <Box w="60%" h="3" bg="brand.muted" borderRadius="sm" />
                </VStack>
              </Box>
              <Box>
                <Text textStyle="sm" fontWeight="medium" mb="2">
                  SimpleGrid
                </Text>
                <SimpleGrid columns={4} gap="3">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <Flex
                      key={n}
                      h="12"
                      bg="bg.muted"
                      borderRadius="md"
                      align="center"
                      justify="center"
                    >
                      <Text textStyle="sm">{n}</Text>
                    </Flex>
                  ))}
                </SimpleGrid>
              </Box>
            </VStack>
          </Section>
        </VStack>
      </Box>
    </Box>
  );
}
