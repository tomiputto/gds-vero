import { defineSlotRecipe } from "@chakra-ui/react";
import { BODY_TEXT_STYLE, bodyTextNavSlotSizes } from "./vero-body-text";

/**
 * Navigation / data-display slot recipes — vero.fi 18px body typography.
 * Chakra defaults use textStyle "sm" (12px) or "xs" on triggers, cells, and lists.
 */
export const veroNavSlotRecipes = {
  tabs: {
    base: {
      content: {
        ...BODY_TEXT_STYLE,
      },
      trigger: {
        ...BODY_TEXT_STYLE,
      },
    },
    variants: {
      size: bodyTextNavSlotSizes(["trigger"]),
    },
  },
  table: {
    base: {
      root: {
        ...BODY_TEXT_STYLE,
      },
      cell: {
        ...BODY_TEXT_STYLE,
      },
      columnHeader: {
        ...BODY_TEXT_STYLE,
        fontWeight: "medium",
      },
      caption: {
        ...BODY_TEXT_STYLE,
        fontWeight: "medium",
      },
      footer: {
        ...BODY_TEXT_STYLE,
        fontWeight: "medium",
      },
    },
    variants: {
      size: bodyTextNavSlotSizes(["root", "cell", "columnHeader"]),
    },
  },
  breadcrumb: {
    base: {
      list: {
        ...BODY_TEXT_STYLE,
      },
      link: {
        ...BODY_TEXT_STYLE,
      },
      item: {
        ...BODY_TEXT_STYLE,
      },
    },
    variants: {
      size: bodyTextNavSlotSizes(["list", "link", "item"]),
    },
  },
  /** Chakra ships Pagination component but no default theme recipe — define full slots. */
  pagination: defineSlotRecipe({
    className: "chakra-pagination",
    slots: ["root", "item", "prevTrigger", "nextTrigger", "ellipsis"],
    base: {
      root: {
        display: "inline-flex",
        alignItems: "center",
        gap: "1",
        ...BODY_TEXT_STYLE,
      },
      item: {
        ...BODY_TEXT_STYLE,
      },
      prevTrigger: {
        ...BODY_TEXT_STYLE,
      },
      nextTrigger: {
        ...BODY_TEXT_STYLE,
      },
      ellipsis: {
        ...BODY_TEXT_STYLE,
      },
    },
  }),
} as const;
