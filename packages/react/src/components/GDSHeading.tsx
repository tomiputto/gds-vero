import { Heading, type HeadingProps } from "@chakra-ui/react";

export type GDSHeadingProps = HeadingProps;

/** Vero.fi-aligned defaults: Arial, semibold. h1→4xl (42px), h2→3xl (34px), h3→2xl (24px). */
export function GDSHeading({
  fontWeight = "semibold",
  color = "fg",
  fontFamily = "heading",
  ...props
}: GDSHeadingProps) {
  return <Heading fontWeight={fontWeight} color={color} fontFamily={fontFamily} {...props} />;
}
