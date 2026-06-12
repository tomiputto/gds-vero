import {
  BODY_TEXT_STYLE,
  FIELD_LABEL_STYLE,
  CAPTION_TEXT_STYLE,
  bodyTextColorPickerInputSizes,
  bodyTextTagLabelSizes,
} from "./vero-body-text";

const DATE_PICKER_TEXT_BASE = {
  label: {
    ...FIELD_LABEL_STYLE,
  },
  input: {
    ...BODY_TEXT_STYLE,
  },
  content: {
    ...BODY_TEXT_STYLE,
  },
  viewTrigger: {
    ...BODY_TEXT_STYLE,
    fontWeight: "semibold",
  },
  rangeText: {
    ...BODY_TEXT_STYLE,
    fontWeight: "semibold",
  },
  tableHeader: {
    ...BODY_TEXT_STYLE,
    fontWeight: "medium",
    color: "fg.muted",
    textTransform: "uppercase",
  },
  tableCellTrigger: {
    ...BODY_TEXT_STYLE,
  },
  monthSelect: {
    ...BODY_TEXT_STYLE,
  },
  yearSelect: {
    ...BODY_TEXT_STYLE,
  },
  clearTrigger: {
    ...CAPTION_TEXT_STYLE,
  },
} as const;

/**
 * Picker / tag slot recipes — vero.fi 18px body typography.
 * Chakra defaults use textStyle "sm" (12px) or "xs" on inputs, labels, and tags.
 */
export const veroPickerSlotRecipes = {
  colorPicker: {
    base: {
      label: {
        ...BODY_TEXT_STYLE,
      },
      trigger: {
        ...BODY_TEXT_STYLE,
      },
      valueText: {
        ...BODY_TEXT_STYLE,
      },
      channelInput: {
        ...BODY_TEXT_STYLE,
      },
      channelText: {
        ...BODY_TEXT_STYLE,
      },
      formatSelect: {
        ...BODY_TEXT_STYLE,
      },
      channelSliderLabel: {
        ...BODY_TEXT_STYLE,
      },
      channelSliderValueText: {
        ...BODY_TEXT_STYLE,
      },
      formatTrigger: {
        ...BODY_TEXT_STYLE,
      },
      content: {
        ...BODY_TEXT_STYLE,
      },
    },
    variants: {
      size: bodyTextColorPickerInputSizes(),
    },
  },
  tag: {
    base: {
      root: {
        ...BODY_TEXT_STYLE,
      },
      label: {
        ...BODY_TEXT_STYLE,
      },
    },
    variants: {
      size: bodyTextTagLabelSizes(),
    },
  },
  datePicker: {
    base: DATE_PICKER_TEXT_BASE,
  },
} as const;
