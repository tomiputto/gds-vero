import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Steps,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@gds/icons";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";

const steps = [
  { title: "Step 1", description: "Step 1 description" },
  { title: "Step 2", description: "Step 2 description" },
  { title: "Step 3", description: "Step 3 description" },
];

export function StepsPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="xl" mb="2">
          Steps
        </Heading>
        <Text color="fg.muted">
          Stepper for multi-step flows.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Steps with prev/next"
        code={`import { Button, ButtonGroup, Steps } from "@chakra-ui/react";

<Steps.Root defaultStep={1} count={steps.length} colorPalette="brand">
  <Steps.List>
    {steps.map((step, index) => (
      <Steps.Item key={index} index={index} title={step.title}>
        <Steps.Indicator />
        <Steps.Title>{step.title}</Steps.Title>
        <Steps.Separator />
      </Steps.Item>
    ))}
  </Steps.List>
  {steps.map((step, index) => (
    <Steps.Content key={index} index={index}>{step.description}</Steps.Content>
  ))}
  <Steps.CompletedContent>All steps complete!</Steps.CompletedContent>
  <ButtonGroup size="sm" variant="outline">
    <Steps.PrevTrigger asChild><Button colorPalette="brand">Prev</Button></Steps.PrevTrigger>
    <Steps.NextTrigger asChild><Button colorPalette="brand">Next</Button></Steps.NextTrigger>
  </ButtonGroup>
</Steps.Root>`}
      >
        <Steps.Root defaultStep={1} count={steps.length} colorPalette="brand">
          <Steps.List>
            {steps.map((step, index) => (
              <Steps.Item key={index} index={index} title={step.title}>
                <Steps.Indicator />
                <Steps.Title>{step.title}</Steps.Title>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>
          {steps.map((step, index) => (
            <Steps.Content key={index} index={index}>
              {step.description}
            </Steps.Content>
          ))}
          <Steps.CompletedContent>All steps complete!</Steps.CompletedContent>
          <ButtonGroup size="sm" variant="outline" mt="4">
            <Steps.PrevTrigger asChild>
              <Button colorPalette="brand">
                <ChevronLeftIcon /> Prev
              </Button>
            </Steps.PrevTrigger>
            <Steps.NextTrigger asChild>
              <Button colorPalette="brand">
                Next <ChevronRightIcon />
              </Button>
            </Steps.NextTrigger>
          </ButtonGroup>
        </Steps.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Steps should have a logical order and current step announced (e.g. step 2 of 3).", rule: "4.1.3" },
          { text: "Prev/Next triggers should be disabled at first/last step when linear.", rule: "4.1.2" },
        ]}
      />
    </VStack>
  );
}
