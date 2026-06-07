import figma from "@figma/code-connect"
import { Button } from "@chakra-ui/react"

figma.connect(
  Button,
  "https://www.figma.com/design/vtiyOtk3Ro41iNAH9l3yhp/GDS-1.0-PROD?node-id=148-1720",
  {
    props: {
      variant: figma.enum("variant", {
        solid: "solid",
        subtle: "subtle",
        surface: "surface",
        outline: "outline",
        ghost: "ghost",
        plain: "plain",
      }),
      size: figma.enum("size", {
        "2xs": "2xs",
        xs: "xs",
        sm: "sm",
        md: "md",
        lg: "lg",
        xl: "xl",
        "2xl": "2xl",
      }),
    },
    example: ({ variant, size }) => (
      <Button colorPalette="brand" variant={variant} size={size}>
        Label
      </Button>
    ),
  }
)
