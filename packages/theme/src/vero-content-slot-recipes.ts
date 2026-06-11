import {
  BODY_TEXT_STYLE,
  CAPTION_TEXT_STYLE,
  bodyTextNavSlotSizes,
} from "./vero-body-text";

const STEPS_SIZES = ["xs", "sm", "md", "lg"] as const;
const TIMELINE_SIZES = ["sm", "md", "lg", "xl"] as const;

function bodyTextStepsSizes() {
  return Object.fromEntries(
    STEPS_SIZES.map((size) => [
      size,
      {
        list: { ...BODY_TEXT_STYLE },
        title: { ...BODY_TEXT_STYLE, fontWeight: "medium" },
      },
    ]),
  );
}

function bodyTextTimelineTextSizes() {
  return Object.fromEntries(
    TIMELINE_SIZES.map((size) => [
      size,
      {
        title: { ...BODY_TEXT_STYLE, fontWeight: "medium" },
        description: { ...BODY_TEXT_STYLE, color: "fg.muted" },
      },
    ]),
  );
}

/**
 * Disclosure / content slot recipes — vero.fi 18px body typography.
 * Chakra defaults use textStyle "sm" (12px) or "xs" on triggers, labels, and list items.
 */
export const veroContentSlotRecipes = {
  accordion: {
    base: {
      itemTrigger: {
        ...BODY_TEXT_STYLE,
        fontWeight: "medium",
      },
      itemBody: {
        ...BODY_TEXT_STYLE,
      },
    },
    variants: {
      size: bodyTextNavSlotSizes(["itemTrigger"]),
    },
  },
  collapsible: {
    base: {
      trigger: {
        ...BODY_TEXT_STYLE,
        fontWeight: "medium",
      },
      content: {
        ...BODY_TEXT_STYLE,
      },
    },
  },
  steps: {
    base: {
      title: {
        ...BODY_TEXT_STYLE,
        fontWeight: "medium",
      },
      description: {
        ...BODY_TEXT_STYLE,
        color: "fg.muted",
      },
      list: {
        ...BODY_TEXT_STYLE,
      },
    },
    variants: {
      size: bodyTextStepsSizes(),
    },
  },
  timeline: {
    base: {
      title: {
        ...BODY_TEXT_STYLE,
        fontWeight: "medium",
      },
      description: {
        ...BODY_TEXT_STYLE,
        color: "fg.muted",
      },
      content: {
        ...BODY_TEXT_STYLE,
      },
    },
    variants: {
      size: bodyTextTimelineTextSizes(),
    },
  },
  stat: {
    base: {
      label: {
        ...BODY_TEXT_STYLE,
        color: "fg.muted",
      },
      helpText: {
        ...BODY_TEXT_STYLE,
        color: "fg.muted",
      },
      valueUnit: {
        ...CAPTION_TEXT_STYLE,
        color: "fg.muted",
      },
    },
  },
  dataList: {
    base: {
      root: {
        ...BODY_TEXT_STYLE,
      },
      item: {
        ...BODY_TEXT_STYLE,
      },
      itemLabel: {
        ...BODY_TEXT_STYLE,
      },
      itemValue: {
        ...BODY_TEXT_STYLE,
      },
    },
    variants: {
      size: bodyTextNavSlotSizes(["item", "itemLabel", "itemValue"]),
    },
  },
} as const;
