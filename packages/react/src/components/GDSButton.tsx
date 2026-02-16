import { Button, type ButtonProps } from "@chakra-ui/react";

export type GDSButtonProps = ButtonProps;

export function GDSButton(props: GDSButtonProps) {
  return <Button {...props} />;
}
