import { describe, expect, it } from "vitest";
import { gdsTheme } from "./theme";

describe("@gdesignsystem/theme recipes (smoke)", () => {
  it("sets global brand color palette", () => {
    const colorPalette = (gdsTheme as any).globalCss?.html?.colorPalette;
    expect(colorPalette).toBe("brand");
  });

  it("input outline recipe uses focusRingColor='focusRing'", () => {
    const focusRingColor = (gdsTheme as any).theme?.recipes?.input?.variants?.variant?.outline?.focusRingColor;
    expect(focusRingColor).toBe("focusRing");
  });

  it("textarea outline recipe uses focusRingColor='focusRing'", () => {
    const focusRingColor = (gdsTheme as any).theme?.recipes?.textarea?.variants?.variant?.outline?.focusRingColor;
    expect(focusRingColor).toBe("focusRing");
  });
});

