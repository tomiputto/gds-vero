import figma from "@figma/code-connect"
import { Button, Card, Spacer } from "@chakra-ui/react"
import { GDSText as Text } from "@gdesignsystem/react"

figma.connect(
  Card.Root,
  "https://www.figma.com/design/vtiyOtk3Ro41iNAH9l3yhp/GDS-1.0-PROD?node-id=339-15634",
  {
    props: {
      variant: figma.enum("variant", {
        elevated: "elevated",
        outline: "outline",
        subtle: "subtle",
      }),
      size: figma.enum("size", {
        sm: "sm",
        md: "md",
        lg: "lg",
      }),
    },
    example: ({ variant, size }) => (
      <Card.Root variant={variant} size={size}>
        <Card.Header>
          <Card.Title>Card title</Card.Title>
          <Card.Description>Short description</Card.Description>
        </Card.Header>
        <Card.Body>
          <Text color="fg.muted" textStyle="body">Card body content.</Text>
        </Card.Body>
        <Card.Footer>
          <Button size="sm" variant="outline">Cancel</Button>
          <Spacer />
          <Button size="sm" colorPalette="brand">Save</Button>
        </Card.Footer>
      </Card.Root>
    ),
  }
)
