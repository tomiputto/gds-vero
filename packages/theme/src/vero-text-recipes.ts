import {
  BODY_TEXT_STYLE,
  bodyTextRecipeSizes,
  veroAvatarTextSizes,
} from "./vero-body-text";

const BADGE_SIZES = ["xs", "sm", "md", "lg"] as const;
const KBD_SIZES = ["sm", "md", "lg"] as const;

/**
 * Inline / text slot recipes — vero.fi body typography.
 * Chakra defaults use textStyle "xs" or "sm" (12px) on badges, blockquotes, lists, etc.
 */
export const veroTextSlotRecipes = {
  blockquote: {
    base: {
      root: {
        ...BODY_TEXT_STYLE,
      },
      content: {
        ...BODY_TEXT_STYLE,
      },
      caption: {
        ...BODY_TEXT_STYLE,
        color: "fg.muted",
      },
    },
  },
  list: {
    base: {
      root: {
        ...BODY_TEXT_STYLE,
      },
      item: {
        ...BODY_TEXT_STYLE,
      },
    },
  },
  avatar: {
    variants: {
      size: veroAvatarTextSizes(),
    },
  },
} as const;

/** Regular recipes (badge, kbd, code) — merged into theme.recipes. */
export const veroTextRecipes = {
  badge: {
    base: {
      ...BODY_TEXT_STYLE,
    },
    variants: {
      size: bodyTextRecipeSizes(BADGE_SIZES),
    },
  },
  kbd: {
    base: {
      ...BODY_TEXT_STYLE,
      fontWeight: "medium",
      fontFamily: "mono",
    },
    variants: {
      size: bodyTextRecipeSizes(KBD_SIZES),
    },
  },
  code: {
    base: {
      ...BODY_TEXT_STYLE,
      fontFamily: "mono",
    },
    variants: {
      size: bodyTextRecipeSizes(BADGE_SIZES),
    },
  },
} as const;
