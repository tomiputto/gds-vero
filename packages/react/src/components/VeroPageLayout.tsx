import type { ReactNode } from "react";
import { Box, Grid, type BoxProps } from "@chakra-ui/react";
import {
  VERO_COLUMN_GAP,
  VERO_CONTENT_WIDTH,
  VERO_PAGE_PADDING_X,
  VERO_PAGE_PADDING_Y,
  VERO_SIDEBAR_BREAKPOINT,
  VERO_SIDEBAR_WIDTH,
  type VeroContentWidth,
} from "../vero-page-layout";

export type VeroPageLayoutProps = Omit<BoxProps, "width"> & {
  children: ReactNode;
  /** Optional aside — stacks below main until `lg`, then fixed-width right column. */
  sidebar?: ReactNode;
  /**
   * Content max-width preset. Default **`default`** (1152px / `6xl`).
   * Use `narrow` for forms, `wide` for directories — not arbitrary `maxW`.
   */
  contentWidth?: VeroContentWidth;
};

/**
 * vero.fi service page content region — centered max-width, consistent padding,
 * optional sidebar column. Pair with {@link VeroAppShell} and {@link VeroMainHeader}.
 */
export function VeroPageLayout({
  children,
  sidebar,
  contentWidth = "default",
  ...props
}: VeroPageLayoutProps) {
  const maxW = VERO_CONTENT_WIDTH[contentWidth];

  return (
    <Box
      as="main"
      flex="1"
      w="full"
      py={VERO_PAGE_PADDING_Y}
      {...props}
    >
      <Box mx="auto" w="full" maxW={maxW} px={VERO_PAGE_PADDING_X}>
        {sidebar ? (
          <Grid
            templateColumns={{
              base: "1fr",
              [VERO_SIDEBAR_BREAKPOINT]: `minmax(0, 1fr) ${VERO_SIDEBAR_WIDTH}`,
            }}
            gap={VERO_COLUMN_GAP}
            alignItems="start"
          >
            <Box minW="0">{children}</Box>
            <Box as="aside" w={{ base: "full", [VERO_SIDEBAR_BREAKPOINT]: VERO_SIDEBAR_WIDTH }}>
              {sidebar}
            </Box>
          </Grid>
        ) : (
          children
        )}
      </Box>
    </Box>
  );
}
