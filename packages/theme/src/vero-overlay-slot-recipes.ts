import { BODY_TEXT_STYLE } from "./vero-body-text";

/** Dialog title — vero.fi card-title scale (20px / xl), not Chakra textStyle lg (16px). */
const DIALOG_TITLE_STYLE = {
  textStyle: "none",
  fontFamily: "heading",
  fontSize: "xl",
  fontWeight: "semibold",
  lineHeight: "1.25",
} as const;

const ALERT_SIZE_KEYS = ["sm", "md", "lg"] as const;

/**
 * Dialog + Alert typography (vero.fi 18px body).
 * Chakra defaults use textStyle "sm" (12px) on dialog content and alert root.
 */
export const veroOverlaySlotRecipes = {
  dialog: {
    base: {
      content: {
        ...BODY_TEXT_STYLE,
      },
      title: DIALOG_TITLE_STYLE,
      description: {
        ...BODY_TEXT_STYLE,
        color: "fg.muted",
      },
      body: {
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
