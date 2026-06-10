/** GDS body text (18px) — use instead of Chakra textStyle "sm" (12px) on form controls. */
export const BODY_TEXT = "body" as const;

export const BODY_TEXT_STYLE = {
  textStyle: BODY_TEXT,
  fontSize: "md",
  lineHeight: "1.5",
} as const;

const FORM_SIZES = ["sm", "md", "lg", "xl", "2xl"] as const;

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
