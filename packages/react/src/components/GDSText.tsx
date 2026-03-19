import { Text, type TextProps } from "@chakra-ui/react";

export type GDSTextProps = TextProps;

export function GDSText(props: GDSTextProps) {
  return <Text {...props} />;
}
