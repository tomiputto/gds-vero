import figma from "@figma/code-connect"
import { Button, Dialog, IconButton, Portal } from "@chakra-ui/react"
import { XIcon } from "@gds-vero/icons"

figma.connect(
  Dialog.Root,
  "https://www.figma.com/design/vtiyOtk3Ro41iNAH9l3yhp/GDS-1.0-PROD?node-id=376-7174",
  {
    props: {
      size: figma.enum("size", {
        xs: "xs",
        sm: "sm",
        md: "md",
        lg: "lg",
        xl: "xl",
        full: "full",
      }),
    },
    example: ({ size }) => (
      <Dialog.Root size={size}>
        <Dialog.Trigger asChild>
          <Button variant="outline">Open</Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Dialog title</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>Content here.</Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Dialog.ActionTrigger>
                <Button colorPalette="brand">Confirm</Button>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <IconButton size="sm" variant="ghost" aria-label="Close">
                  <XIcon />
                </IconButton>
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    ),
  }
)
