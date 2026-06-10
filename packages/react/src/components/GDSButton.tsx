import { Button, type ButtonProps } from "@chakra-ui/react";

export type GDSButtonProps = ButtonProps;

/** Vero.fi-aligned defaults: brand green, solid, md (10px × 20px padding, 16px text). */
export function GDSButton({
  colorPalette = "brand",
  variant = "solid",
  size = "md",
  ...props
}: GDSButtonProps) {
  return <Button colorPalette={colorPalette} variant={variant} size={size} {...props} />;
}
