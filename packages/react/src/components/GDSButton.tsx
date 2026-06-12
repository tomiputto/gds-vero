import { Button, type ButtonProps } from "@chakra-ui/react";

export type GDSButtonProps = ButtonProps;

/** Vero.fi-aligned defaults: brand green, solid, md, pill shape (borderRadius full). */
export function GDSButton({
  colorPalette = "brand",
  variant = "solid",
  size = "md",
  borderRadius = "full",
  ...props
}: GDSButtonProps) {
  return (
    <Button
      colorPalette={colorPalette}
      variant={variant}
      size={size}
      borderRadius={borderRadius}
      {...props}
    />
  );
}
