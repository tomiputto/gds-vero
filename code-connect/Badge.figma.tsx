import figma from "@figma/code-connect"
import { Badge } from "@chakra-ui/react"

// Figma "color" property maps to colorPalette in code.
// GDS primary: colorPalette="brand". Semantic states use bg/fg tokens directly (see BadgePage.tsx).

figma.connect(
  Badge,
  "https://www.figma.com/design/vtiyOtk3Ro41iNAH9l3yhp/GDS-1.0-PROD?node-id=128-1634",
  {
    props: {
      variant: figma.enum("variant", {
        solid: "solid",
        subtle: "subtle",
        outline: "outline",
        surface: "surface",
        plain: "plain",
      }),
      size: figma.enum("size", {
        xs: "xs",
        sm: "sm",
        md: "md",
        lg: "lg",
      }),
    },
    example: ({ variant, size }) => (
      <Badge colorPalette="brand" variant={variant} size={size}>
        Label
      </Badge>
    ),
  }
)
