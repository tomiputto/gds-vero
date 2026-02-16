/**
 * Creates a GDS icon component that uses currentColor so colors
 * are controlled by Figma tokens (e.g. color="fg", color="brand.fg").
 * Uses Chakra's chakra.svg so token resolution works in the theme.
 */
import { chakra } from "@chakra-ui/react";
import type { SVGProps } from "react";

export interface GDSIconProps extends Omit<SVGProps<SVGSVGElement>, "cursor"> {
  size?: number | string;
  /** Chakra-style size (maps to width/height). */
  boxSize?: number | string;
}

const defaultProps: Partial<GDSIconProps> = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  stroke: "none",
  "aria-hidden": true,
};

export function createGDSIcon(
  displayName: string,
  path: React.ReactNode,
  opts?: { viewBox?: string; fill?: string; stroke?: string }
) {
  const Icon = (props: GDSIconProps) => {
    const { size = "1em", boxSize, ...rest } = props;
    const dimension = boxSize ?? size;
    return (
      <chakra.svg
        width={dimension}
        height={dimension}
        viewBox={opts?.viewBox ?? defaultProps.viewBox}
        fill={opts?.fill ?? defaultProps.fill}
        stroke={opts?.stroke ?? defaultProps.stroke}
        {...(rest as React.ComponentProps<typeof chakra.svg>)}
      >
        {path}
      </chakra.svg>
    );
  };
  Icon.displayName = displayName;
  return Icon;
}
