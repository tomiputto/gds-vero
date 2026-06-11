import { defineSlotRecipe } from "@chakra-ui/react";
import {
  BODY_TEXT_STYLE,
  CAPTION_TEXT_STYLE,
  OVERLAY_TITLE_STYLE,
  bodyTextNavSlotSizes,
} from "./vero-body-text";

/**
 * Remaining slot recipes — file upload, overlays, sliders, ratings (P7).
 */
export const veroMiscSlotRecipes = {
  fileUpload: {
    base: {
      label: {
        ...BODY_TEXT_STYLE,
        fontWeight: "medium",
      },
      dropzoneContent: {
        ...BODY_TEXT_STYLE,
      },
      item: {
        ...BODY_TEXT_STYLE,
      },
      itemName: {
        ...BODY_TEXT_STYLE,
        fontWeight: "medium",
      },
      itemSizeText: {
        ...CAPTION_TEXT_STYLE,
        color: "fg.muted",
      },
      fileText: {
        ...BODY_TEXT_STYLE,
      },
    },
  },
  ratingGroup: {
    variants: {
      size: {
        /** xs default uses textStyle sm (12px) for star em-sizing — bump to body scale. */
        xs: {
          item: {
            textStyle: "none",
            fontSize: "md",
            lineHeight: "1",
          },
        },
      },
    },
  },
  hoverCard: {
    base: {
      content: {
        ...BODY_TEXT_STYLE,
      },
    },
  },
  slider: {
    base: {
      root: {
        ...BODY_TEXT_STYLE,
      },
      label: {
        ...BODY_TEXT_STYLE,
        fontWeight: "medium",
      },
      valueText: {
        ...BODY_TEXT_STYLE,
      },
      marker: {
        ...CAPTION_TEXT_STYLE,
        color: "fg.muted",
      },
    },
  },
  floatingPanel: {
    base: {
      title: OVERLAY_TITLE_STYLE,
      body: {
        ...BODY_TEXT_STYLE,
      },
    },
  },
  actionBar: {
    base: {
      content: {
        ...BODY_TEXT_STYLE,
      },
      selectionTrigger: {
        ...BODY_TEXT_STYLE,
      },
    },
  },
  /** Chakra ships Toggle but no default theme recipe — toolbar pressed-state button. */
  toggle: defineSlotRecipe({
    className: "chakra-toggle",
    slots: ["root", "indicator"],
    base: {
      root: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2",
        ...BODY_TEXT_STYLE,
        cursor: "button",
        userSelect: "none",
        borderRadius: "l2",
        focusVisibleRing: "outside",
      },
      indicator: {
        display: "inline-flex",
        alignItems: "center",
        ...BODY_TEXT_STYLE,
      },
    },
    variants: {
      size: bodyTextNavSlotSizes(["root"]),
    },
    defaultVariants: {
      size: "md",
    },
  }),
} as const;
