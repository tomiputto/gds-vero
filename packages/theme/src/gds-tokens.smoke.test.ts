import { describe, expect, it } from "vitest";
import { gdsColorTokens, gdsSemanticColors } from "./gds-tokens";

describe("@gds-vero/theme gds-tokens smoke", () => {
  it("has brand palette scale adapter (50..900) and focusRing", () => {
    const brand = (gdsColorTokens as any).brand;
    expect(brand).toBeTruthy();

    for (const step of ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"]) {
      expect(brand[step], `missing brand[${step}]`).toBeTruthy();
    }
    expect(brand.focusRing, "missing brand.focusRing").toBeTruthy();
  });

  it("overrides gray.fg palette to match GDS (not Chakra default gray.200 in light)", () => {
    const grayFg = (gdsColorTokens as any).gray?.fg?.value;
    expect(grayFg?._light).toBe("#333333");
    expect(grayFg?._dark).toBe("{colors.text.fg_inverted}");
  });

  it("exposes expected semantic color token routes", () => {
    const { fg, bg, border, focusRing } = gdsSemanticColors as any;

    expect(JSON.stringify(fg.DEFAULT?.value)).not.toContain("colors.gray.fg");
    expect(fg.DEFAULT?.value?.base).toBe("#333333");
    expect(fg.DEFAULT?.value?._light).toBe("{colors.text.fg}");
    expect(fg.muted?.value?.base).toBe("#474747");
    expect(fg.subtle?.value?.base).toBe("#a1a1aa");

    expect(fg.DEFAULT, "missing fg.DEFAULT").toBeTruthy();
    expect(fg.muted, "missing fg.muted").toBeTruthy();
    expect(fg.subtle, "missing fg.subtle").toBeTruthy();
    expect(fg.inverted, "missing fg.inverted").toBeTruthy();
    expect(fg.error, "missing fg.error").toBeTruthy();
    expect(fg.warning, "missing fg.warning").toBeTruthy();
    expect(fg.success, "missing fg.success").toBeTruthy();
    expect(fg.info, "missing fg.info").toBeTruthy();

    expect(bg.DEFAULT, "missing bg.DEFAULT").toBeTruthy();
    expect(bg.default?.value?.base).toBe("#ffffff");
    expect(bg.subtle?.value?.base).toBe("#eff4f0");
    expect(bg.default, "missing bg.default").toBeTruthy();
    expect(bg.subtle, "missing bg.subtle").toBeTruthy();
    expect(bg.muted, "missing bg.muted").toBeTruthy();
    expect(bg.emphasized, "missing bg.emphasized").toBeTruthy();
    expect(bg.panel, "missing bg.panel").toBeTruthy();
    expect(bg.inverted, "missing bg.inverted").toBeTruthy();
    expect(bg.error, "missing bg.error").toBeTruthy();
    expect(bg.warning, "missing bg.warning").toBeTruthy();
    expect(bg.success, "missing bg.success").toBeTruthy();
    expect(bg.info, "missing bg.info").toBeTruthy();

    expect(border.DEFAULT, "missing border.DEFAULT").toBeTruthy();
    expect(border.default?.value?.base).toBe("#c9e0ca");
    expect(border.emphasized?.value?.base).toBe("#c9e0ca");
    expect(border.default, "missing border.default").toBeTruthy();
    expect(border.subtle, "missing border.subtle").toBeTruthy();
    expect(border.muted, "missing border.muted").toBeTruthy();
    expect(border.emphasized, "missing border.emphasized").toBeTruthy();
    expect(border.inverted, "missing border.inverted").toBeTruthy();
    expect(border.error, "missing border.error").toBeTruthy();
    expect(border.warning, "missing border.warning").toBeTruthy();
    expect(border.success, "missing border.success").toBeTruthy();
    expect(border.info, "missing border.info").toBeTruthy();

    expect(focusRing, "missing focusRing").toBeTruthy();
  });
});

