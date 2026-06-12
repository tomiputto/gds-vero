/**
 * Canonical vero.fi page layout tokens — use via VeroPageLayout / VeroAppShell.
 * Do not invent ad-hoc maxW values in apps; pick a width preset below.
 */

/** Content max-width presets (Chakra token names → px at default theme). */
export const VERO_CONTENT_WIDTH = {
  /** 672px — login, narrow forms, centered flows */
  narrow: "2xl",
  /** 1152px — default vero.fi service / content page */
  default: "6xl",
  /** 1280px — directories, wide tables, data-heavy views */
  wide: "7xl",
  /** Full bleed with horizontal padding only */
  full: "full",
} as const;

export type VeroContentWidth = keyof typeof VERO_CONTENT_WIDTH;

/** Horizontal page padding: 16px → 24px (md) → 32px (lg). */
export const VERO_PAGE_PADDING_X = { base: "4", md: "6", lg: "8" } as const;

/** Vertical main padding: 24px → 32px (md). */
export const VERO_PAGE_PADDING_Y = { base: "6", md: "8" } as const;

/** Sidebar column width on lg+ (288px). Stacks below main on smaller viewports. */
export const VERO_SIDEBAR_WIDTH = "72";

/** Gap between main column and sidebar. */
export const VERO_COLUMN_GAP = { base: "6", lg: "8" } as const;

/** Breakpoint at which main + sidebar render side by side. */
export const VERO_SIDEBAR_BREAKPOINT = "lg";
