import {
  BODY_TEXT_STYLE,
  bodyTextEditableSizes,
  bodyTextNativeSelectSizes,
  bodyTextNumberInputSizes,
  bodyTextPinInputSizes,
  bodyTextRootSizes,
  bodyTextSegmentItemSizes,
  bodyTextSelectSlotSizes,
  bodyTextSlotSizes,
  bodyTextTagsInputSizes,
} from "./vero-body-text";

/**
 * Form-related slot recipe typography overrides (vero.fi body = 18px).
 * Chakra defaults map md-sized controls to textStyle "sm" (12px).
 */
export const veroFormSlotRecipes = {
  field: {
    base: {
      label: { ...BODY_TEXT_STYLE, fontWeight: "medium" },
      helperText: { ...BODY_TEXT_STYLE, color: "fg.muted" },
      errorText: { ...BODY_TEXT_STYLE, color: "fg.error", fontWeight: "medium" },
    },
  },
  fieldset: {
    base: {
      legend: { ...BODY_TEXT_STYLE, fontWeight: "semibold" },
      helperText: { ...BODY_TEXT_STYLE, color: "fg.muted" },
      errorText: { ...BODY_TEXT_STYLE, color: "fg.error", fontWeight: "medium" },
    },
  },
  checkbox: {
    variants: {
      size: bodyTextSlotSizes("label"),
    },
  },
  radioGroup: {
    base: {
      label: BODY_TEXT_STYLE,
    },
    variants: {
      size: bodyTextSlotSizes("item"),
    },
  },
  switch: {
    base: {
      label: { ...BODY_TEXT_STYLE, lineHeight: "1" },
    },
  },
  numberInput: {
    variants: {
      size: bodyTextNumberInputSizes(),
    },
  },
  pinInput: {
    variants: {
      size: bodyTextPinInputSizes(),
    },
  },
  nativeSelect: {
    variants: {
      size: bodyTextNativeSelectSizes(),
      variant: {
        outline: {
          field: {
            bg: "bg.default",
            borderWidth: "1px",
            borderColor: "border",
            borderRadius: "md",
            focusVisibleRing: "inside",
            "--focus-color": "focusRing",
          },
        },
      },
    },
  },
  select: {
    base: {
      label: BODY_TEXT_STYLE,
    },
    variants: {
      size: bodyTextSelectSlotSizes(["trigger", "content"]),
    },
  },
  combobox: {
    base: {
      label: BODY_TEXT_STYLE,
    },
    variants: {
      size: bodyTextSelectSlotSizes(["input", "content", "trigger"]),
    },
  },
  tagsInput: {
    base: {
      label: BODY_TEXT_STYLE,
      input: BODY_TEXT_STYLE,
    },
    variants: {
      size: bodyTextTagsInputSizes(),
    },
  },
  listbox: {
    base: {
      label: BODY_TEXT_STYLE,
      content: BODY_TEXT_STYLE,
    },
  },
  editable: {
    base: {
      preview: BODY_TEXT_STYLE,
      input: BODY_TEXT_STYLE,
      textarea: BODY_TEXT_STYLE,
    },
    variants: {
      size: bodyTextEditableSizes(),
    },
  },
  segmentGroup: {
    base: {
      item: {
        ...BODY_TEXT_STYLE,
      },
      itemText: {
        ...BODY_TEXT_STYLE,
      },
    },
    variants: {
      size: bodyTextSegmentItemSizes(),
    },
  },
  checkboxCard: {
    base: {
      root: {
        bg: "bg.default",
        borderRadius: "xl",
        borderColor: "border.emphasized",
      },
      label: BODY_TEXT_STYLE,
      description: { ...BODY_TEXT_STYLE, color: "fg.muted" },
    },
    variants: {
      variant: {
        outline: {
          root: {
            bg: "bg.default",
            borderColor: "border.emphasized",
          },
        },
      },
      size: bodyTextRootSizes(),
    },
  },
  radioCard: {
    base: {
      item: {
        borderRadius: "xl",
        borderColor: "border.emphasized",
      },
      label: BODY_TEXT_STYLE,
      itemText: BODY_TEXT_STYLE,
      itemDescription: { ...BODY_TEXT_STYLE, color: "fg.muted" },
    },
    variants: {
      size: bodyTextSlotSizes("item"),
    },
  },
} as const;
