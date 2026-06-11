import {
  BODY_TEXT_STYLE,
  CAPTION_TEXT_STYLE,
  OVERLAY_TITLE_STYLE,
  bodyTextMenuItemSizes,
} from "./vero-body-text";

const ALERT_SIZE_KEYS = ["sm", "md", "lg"] as const;

/**
 * Overlay slot recipes — vero.fi 18px body typography.
 * Chakra defaults use textStyle "sm" (12px) or "xs" on content/items.
 */
export const veroOverlaySlotRecipes = {
  dialog: {
    base: {
      content: {
        ...BODY_TEXT_STYLE,
      },
      title: OVERLAY_TITLE_STYLE,
      description: {
        ...BODY_TEXT_STYLE,
        color: "fg.muted",
      },
      body: {
        ...BODY_TEXT_STYLE,
      },
    },
  },
  drawer: {
    base: {
      content: {
        ...BODY_TEXT_STYLE,
      },
      title: OVERLAY_TITLE_STYLE,
      description: {
        ...BODY_TEXT_STYLE,
        color: "fg.muted",
      },
      body: {
        ...BODY_TEXT_STYLE,
      },
    },
  },
  popover: {
    base: {
      content: {
        ...BODY_TEXT_STYLE,
      },
      header: {
        ...BODY_TEXT_STYLE,
      },
      body: {
        ...BODY_TEXT_STYLE,
      },
      footer: {
        ...BODY_TEXT_STYLE,
      },
    },
  },
  menu: {
    base: {
      content: {
        ...BODY_TEXT_STYLE,
      },
      item: {
        ...BODY_TEXT_STYLE,
      },
      itemText: {
        ...BODY_TEXT_STYLE,
      },
      itemGroupLabel: {
        ...BODY_TEXT_STYLE,
        fontWeight: "semibold",
      },
      itemCommand: {
        ...CAPTION_TEXT_STYLE,
        color: "fg.muted",
      },
    },
    variants: {
      size: bodyTextMenuItemSizes(),
    },
  },
  tooltip: {
    base: {
      content: {
        ...BODY_TEXT_STYLE,
      },
    },
  },
  alert: {
    base: {
      root: {
        ...BODY_TEXT_STYLE,
      },
      title: {
        ...BODY_TEXT_STYLE,
        fontWeight: "semibold",
      },
      description: {
        ...BODY_TEXT_STYLE,
        color: "fg.muted",
      },
    },
    variants: {
      size: Object.fromEntries(
        ALERT_SIZE_KEYS.map((size) => [size, { root: { ...BODY_TEXT_STYLE } }]),
      ),
    },
  },
} as const;
