import {
  BODY_TEXT_STYLE,
  OVERLAY_TITLE_STYLE,
  bodyTextNavSlotSizes,
  emptyStateTitleSizes,
} from "./vero-body-text";

const PROGRESS_TEXT_BASE = {
  root: {
    ...BODY_TEXT_STYLE,
  },
  label: {
    ...BODY_TEXT_STYLE,
    fontWeight: "medium",
  },
  valueText: {
    ...BODY_TEXT_STYLE,
    fontWeight: "medium",
  },
} as const;

/**
 * Feedback / status slot recipes — vero.fi 18px body typography.
 * Chakra defaults use textStyle "sm" (12px) or "xs" on toast, progress, status, etc.
 */
export const veroFeedbackSlotRecipes = {
  toast: {
    base: {
      title: {
        ...BODY_TEXT_STYLE,
        fontWeight: "medium",
      },
      description: {
        ...BODY_TEXT_STYLE,
        opacity: "0.8",
      },
      actionTrigger: {
        ...BODY_TEXT_STYLE,
        fontWeight: "medium",
      },
      closeTrigger: {
        ...BODY_TEXT_STYLE,
      },
    },
  },
  progress: {
    base: PROGRESS_TEXT_BASE,
  },
  progressCircle: {
    base: PROGRESS_TEXT_BASE,
  },
  emptyState: {
    base: {
      title: {
        ...OVERLAY_TITLE_STYLE,
      },
      description: {
        ...BODY_TEXT_STYLE,
        color: "fg.muted",
      },
    },
    variants: {
      size: emptyStateTitleSizes(),
    },
  },
  status: {
    base: {
      root: {
        ...BODY_TEXT_STYLE,
      },
    },
    variants: {
      size: bodyTextNavSlotSizes(["root"]),
    },
  },
} as const;
