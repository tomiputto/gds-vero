import { describe, expect, it } from "vitest";
import { fonts, fontSizes } from "./figma-tokens";
import { system } from "./system";
import { textStyles } from "./textStyles";

describe("vero.fi typography", () => {
  it("uses Arial for both body and heading fonts", () => {
    expect(fonts.body).toMatch(/^Arial/);
    expect(fonts.heading).toMatch(/^Arial/);
  });

  it("maps heading sizes to vero.fi h1–h4 scale", () => {
    expect(fontSizes["4xl"]).toBe("42px");
    expect(fontSizes["3xl"]).toBe("34px");
    expect(fontSizes["2xl"]).toBe("24px");
    expect(fontSizes.xl).toBe("20px");
    expect(fontSizes.md).toBe("18px");
  });

  it("uses 18px body text with line-height 1.5", () => {
    expect(textStyles.body.fontSize).toBe("md");
    expect(textStyles.body.lineHeight).toBe("1.5");
  });

  it("uses semibold (600) for display/headline text styles", () => {
    expect(textStyles.display.fontWeight).toBe("semibold");
    expect(textStyles.headline.fontWeight).toBe("semibold");
    expect(textStyles.title.fontWeight).toBe("semibold");
  });

  it("applies vero.fi fixed heading sizes (h1–h3)", () => {
    const headingRecipe = system.getRecipe("heading");
    expect(headingRecipe.base?.fontFamily).toBe("heading");
    expect(headingRecipe.variants?.size?.["4xl"]).toMatchObject({
      fontSize: "4xl",
      lineHeight: "1.25",
    });
    expect(headingRecipe.variants?.size?.["3xl"]).toMatchObject({
      fontSize: "3xl",
      lineHeight: "1.25",
    });
    expect(headingRecipe.variants?.size?.["2xl"]).toMatchObject({
      fontSize: "2xl",
      lineHeight: "1.25",
    });
  });

  it("applies vero.fi card title styles", () => {
    const cardRecipe = system.getSlotRecipe("card");
    expect(cardRecipe.base?.title).toMatchObject({
      fontSize: "xl",
      marginTop: "0",
      marginBottom: "10px",
      textStyle: "none",
    });
    expect(cardRecipe.base?.description?.fontSize).toBe("md");
  });
});
