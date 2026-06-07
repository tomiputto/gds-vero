import figma from "@figma/code-connect"
import { Field, Input } from "@chakra-ui/react"

figma.connect(
  Field.Root,
  "https://www.figma.com/design/vtiyOtk3Ro41iNAH9l3yhp/GDS-1.0-PROD?node-id=211-842",
  {
    props: {
      size: figma.enum("size", {
        "2xs": "2xs",
        xs: "xs",
        sm: "sm",
        md: "md",
        lg: "lg",
      }),
      invalid: figma.boolean(".isInvalid?"),
    },
    example: ({ size, invalid }) => (
      <Field.Root invalid={invalid}>
        <Field.Label>Label</Field.Label>
        <Input size={size} placeholder="Placeholder" />
        <Field.HelperText>Helper text</Field.HelperText>
        <Field.ErrorText>Error message</Field.ErrorText>
      </Field.Root>
    ),
  }
)
