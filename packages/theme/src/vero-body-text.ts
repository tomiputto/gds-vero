/** GDS body text (18px) — use instead of Chakra textStyle "sm" (12px) on form controls. */
export const BODY_TEXT = "body" as const;

export const BODY_TEXT_STYLE = {
  textStyle: BODY_TEXT,
  fontSize: "md",
  lineHeight: "1.5",
} as const;

/** Secondary/meta copy in overlays (shortcuts, hints) — caption scale, not 12px Chakra sm on controls. */
export const CAPTION_TEXT_STYLE = {
  textStyle: "caption",
  fontSize: "sm",
  lineHeight: "1.33",
} as const;

/** Dialog/drawer title — vero.fi 20px (xl), not Chakra textStyle lg (16px). */
export const OVERLAY_TITLE_STYLE = {
  textStyle: "none",
  fontFamily: "heading",
  fontSize: "xl",
  fontWeight: "semibold",
  lineHeight: "1.25",
} as const;

const FORM_SIZES = ["xs", "sm", "md", "lg", "xl", "2xl"] as const;
const SELECT_SIZES = ["xs", "sm", "md", "lg"] as const;
const PIN_INPUT_SIZES = ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"] as const;
const NATIVE_SELECT_SIZES = ["xs", "sm", "md", "lg", "xl"] as const;
const EDITABLE_SIZES = ["sm", "md", "lg"] as const;
const NUMBER_INPUT_SIZES = ["xs", "sm", "md", "lg"] as const;
const MENU_SIZES = ["sm", "md"] as const;
const NAV_SIZES = ["sm", "md", "lg"] as const;
const TAG_SIZES = ["sm", "md", "lg", "xl"] as const;
const PICKER_INPUT_SIZES = ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"] as const;
const BADGE_SIZES = ["xs", "sm", "md", "lg"] as const;
const KBD_SIZES = ["sm", "md", "lg"] as const;
const SEGMENT_SIZES = ["xs", "sm", "md", "lg", "xl", "2xl"] as const;

/** Recipe size variants (badge, code, kbd) — each size uses body typography. */
export function bodyTextRecipeSizes(sizes: readonly string[]) {
  return Object.fromEntries(sizes.map((size) => [size, { ...BODY_TEXT_STYLE }]));
}

/** SegmentGroup xs–2xl — item and itemText use body typography. */
export function bodyTextSegmentItemSizes() {
  return Object.fromEntries(
    SEGMENT_SIZES.map((size) => [
      size,
      {
        item: { ...BODY_TEXT_STYLE },
        itemText: { ...BODY_TEXT_STYLE },
      },
    ]),
  );
}

/** Avatar initials — body on md+, caption on smaller sizes (fits circle). */
export function veroAvatarTextSizes() {
  const captionSizes = ["2xs", "xs", "sm"] as const;
  const bodySizes = ["md", "lg", "xl", "2xl"] as const;
  return {
    ...Object.fromEntries(
      captionSizes.map((size) => [
        size,
        {
          root: { "--avatar-font-size": "fontSizes.sm" },
          fallback: { ...CAPTION_TEXT_STYLE },
        },
      ]),
    ),
    ...Object.fromEntries(
      bodySizes.map((size) => [
        size,
        {
          root: { "--avatar-font-size": "fontSizes.md" },
          fallback: { ...BODY_TEXT_STYLE },
        },
      ]),
    ),
  };
}

/** sm/md/lg slot recipes (tabs, table, breadcrumb). */
export function bodyTextNavSlotSizes(slots: string[]) {
  return Object.fromEntries(
    NAV_SIZES.map((size) => [
      size,
      Object.fromEntries(slots.map((slot) => [slot, { ...BODY_TEXT_STYLE }])),
    ]),
  );
}

/** Tag sm/md/lg/xl — label uses body typography. */
export function bodyTextTagLabelSizes() {
  return Object.fromEntries(
    TAG_SIZES.map((size) => [size, { label: { ...BODY_TEXT_STYLE } }]),
  );
}

/** ColorPicker channelInput — all sizes use body typography. */
export function bodyTextColorPickerInputSizes() {
  return Object.fromEntries(
    PICKER_INPUT_SIZES.map((size) => [size, { channelInput: { ...BODY_TEXT_STYLE } }]),
  );
}

/** EmptyState title — vero heading scale per size; indicator textStyle left for icon sizing. */
export function emptyStateTitleSizes() {
  return {
    sm: {
      title: {
        ...BODY_TEXT_STYLE,
        fontFamily: "heading",
        fontWeight: "semibold",
      },
    },
    md: {
      title: { ...OVERLAY_TITLE_STYLE },
    },
    lg: {
      title: {
        textStyle: "none",
        fontFamily: "heading",
        fontSize: "2xl",
        fontWeight: "semibold",
        lineHeight: "1.25",
      },
    },
  };
}

/** Menu sm/md — all item text uses body typography. */
export function bodyTextMenuItemSizes() {
  return Object.fromEntries(
    MENU_SIZES.map((size) => [
      size,
      {
        item: { ...BODY_TEXT_STYLE },
        itemText: { ...BODY_TEXT_STYLE },
      },
    ]),
  );
}

/** Recipe size variants where each size uses body typography. */
export function bodyTextSizeVariants() {
  return Object.fromEntries(FORM_SIZES.map((size) => [size, { ...BODY_TEXT_STYLE }]));
}

/** Slot-recipe size variants, e.g. bodyTextSlotSizes("input") → { md: { input: BODY_TEXT_STYLE }, ... } */
export function bodyTextSlotSizes(slot: string) {
  return Object.fromEntries(
    FORM_SIZES.map((size) => [size, { [slot]: { ...BODY_TEXT_STYLE } }]),
  );
}

/** Multiple slots per size, e.g. bodyTextSlotsPerSize(["trigger", "content"]) */
export function bodyTextSlotsPerSize(slots: string[]) {
  return Object.fromEntries(
    FORM_SIZES.map((size) => [
      size,
      Object.fromEntries(slots.map((slot) => [slot, { ...BODY_TEXT_STYLE }])),
    ]),
  );
}

/** Size variants that set typography on the root slot (checkboxCard, radioCard). */
export function bodyTextRootSizes() {
  return Object.fromEntries(
    FORM_SIZES.map((size) => [size, { root: { ...BODY_TEXT_STYLE } }]),
  );
}

/** PinInput 2xs–2xl — input slot body typography. */
export function bodyTextPinInputSizes() {
  return Object.fromEntries(
    PIN_INPUT_SIZES.map((size) => [size, { input: { ...BODY_TEXT_STYLE } }]),
  );
}

/** NativeSelect xs–xl — field and indicator body typography. */
export function bodyTextNativeSelectSizes() {
  return Object.fromEntries(
    NATIVE_SELECT_SIZES.map((size) => [
      size,
      {
        field: { ...BODY_TEXT_STYLE },
        indicator: { ...BODY_TEXT_STYLE },
      },
    ]),
  );
}

/** NumberInput xs–lg — input and stepper controls. */
export function bodyTextNumberInputSizes() {
  return Object.fromEntries(
    NUMBER_INPUT_SIZES.map((size) => [
      size,
      {
        input: { ...BODY_TEXT_STYLE },
        control: { ...BODY_TEXT_STYLE },
      },
    ]),
  );
}

/** Editable sm–lg — root slot body typography. */
export function bodyTextEditableSizes() {
  return Object.fromEntries(
    EDITABLE_SIZES.map((size) => [size, { root: { ...BODY_TEXT_STYLE } }]),
  );
}

/** Select/combobox/tagsInput xs–lg size keys. */
export function bodyTextSelectSlotSizes(slots: string[]) {
  return Object.fromEntries(
    SELECT_SIZES.map((size) => [
      size,
      Object.fromEntries(slots.map((slot) => [slot, { ...BODY_TEXT_STYLE }])),
    ]),
  );
}

/** TagsInput xs–lg — root, input, itemPreview. */
export function bodyTextTagsInputSizes() {
  return Object.fromEntries(
    SELECT_SIZES.map((size) => [
      size,
      {
        root: { ...BODY_TEXT_STYLE },
        input: { ...BODY_TEXT_STYLE },
        itemPreview: { ...BODY_TEXT_STYLE },
      },
    ]),
  );
}
