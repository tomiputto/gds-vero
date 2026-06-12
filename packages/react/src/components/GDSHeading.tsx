import { Heading, type HeadingProps } from "@chakra-ui/react";

export type GDSHeadingProps = HeadingProps;

/** vero.fi heading scale in `@gds-vero/theme` — matches `as` when `size` is omitted. */
const VERO_HEADING_SIZE_BY_AS = {
  h1: "4xl",
  h2: "3xl",
  h3: "2xl",
  h4: "xl",
  h5: "lg",
  h6: "md",
} as const satisfies Record<string, NonNullable<HeadingProps["size"]>>;

/** Vero.fi-aligned defaults: Arial, semibold. h1→4xl (42px), h2→3xl (34px), h3→2xl (24px). */
export function GDSHeading({
  fontWeight = "semibold",
  color = "fg",
  fontFamily = "heading",
  as,
  size,
  ...props
}: GDSHeadingProps) {
  const resolvedSize =
    size ??
    (typeof as === "string" && as in VERO_HEADING_SIZE_BY_AS
      ? VERO_HEADING_SIZE_BY_AS[as as keyof typeof VERO_HEADING_SIZE_BY_AS]
      : undefined);

  return (
    <Heading
      as={as}
      size={resolvedSize}
      fontWeight={fontWeight}
      color={color}
      fontFamily={fontFamily}
      {...props}
    />
  );
}
