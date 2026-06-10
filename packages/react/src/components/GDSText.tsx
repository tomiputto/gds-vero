import { Text, type TextProps } from "@chakra-ui/react";

export type GDSTextProps = TextProps;

/** Vero.fi-aligned defaults: body text style (18px Arial). */
export function GDSText({ textStyle = "body", ...props }: GDSTextProps) {
  return <Text textStyle={textStyle} {...props} />;
}
