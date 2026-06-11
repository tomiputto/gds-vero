import { describe, expect, it } from "vitest";
import { gdsTheme } from "./theme";
import { system } from "./system";

describe("@gds-vero/theme recipes (smoke)", () => {
  it("uses GDS body text style (18px) for md-sized inputs, not Chakra sm (12px)", () => {
    const inputRecipe = system.getRecipe("input");
    expect(inputRecipe.variants?.size?.md).toMatchObject({
      textStyle: "body",
      fontSize: "md",
    });
  });

  it("uses body typography on form field and control defaults", () => {
    const field = system.getSlotRecipe("field");
    const checkbox = system.getSlotRecipe("checkbox");
    const select = system.getSlotRecipe("select");

    expect(field.base?.label).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(checkbox.variants?.size?.md?.label).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(select.base?.label).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(select.variants?.size?.md?.trigger).toMatchObject({ textStyle: "body", fontSize: "md" });

    const mdDefaults = ["field", "checkbox", "radioGroup", "combobox", "select", "tagsInput"] as const;
    for (const name of mdDefaults) {
      const recipe = system.getSlotRecipe(name);
      const mdJson = JSON.stringify(recipe.variants?.size?.md ?? {});
      expect(mdJson, `${name} md size should not use textStyle sm`).not.toContain('"textStyle":"sm"');
    }
  });

  it("applies larger border radius to card slot recipe", () => {
    const cardRecipe = system.getSlotRecipe("card");
    expect(cardRecipe.base?.root?.borderRadius).toBe("xl");
    expect(cardRecipe.base?.root?.borderColor).toBe("border.emphasized");
    expect(cardRecipe.variants?.variant?.outline?.root?.borderColor).toBe("border.emphasized");
  });

  it("uses 18px body text on dialog and alert slots (not Chakra sm)", () => {
    const dialog = system.getSlotRecipe("dialog");
    const alert = system.getSlotRecipe("alert");

    expect(dialog.base?.content).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(dialog.base?.body).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(dialog.base?.title?.fontSize).toBe("xl");
    expect(dialog.base?.title?.textStyle).toBe("none");

    expect(alert.base?.root).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(alert.base?.title).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(alert.variants?.size?.md?.root).toMatchObject({ textStyle: "body", fontSize: "md" });

    const alertMdJson = JSON.stringify(alert.variants?.size?.md ?? {});
    expect(alertMdJson).not.toContain('"textStyle":"sm"');
  });

  it("uses 18px body text on card description and body slots (not Chakra sm)", () => {
    const cardRecipe = system.getSlotRecipe("card");
    expect(cardRecipe.base?.description).toMatchObject({
      textStyle: "body",
      fontSize: "md",
    });
    expect(cardRecipe.base?.body).toMatchObject({
      textStyle: "body",
      fontSize: "md",
    });
    expect(cardRecipe.base?.title?.fontSize).toBe("xl");
    expect(cardRecipe.variants?.size?.md?.title?.textStyle).toBe("none");
  });

  it("defines Vero-aligned global styles and component recipes", () => {
    expect(gdsTheme).toMatchObject({
      globalCss: {
        html: {
          colorPalette: "brand",
          bg: "bg.subtle",
        },
        body: {
          bg: "bg.subtle",
        },
      },
      theme: {
        recipes: {
          button: {
            defaultVariants: {
              size: "md",
              variant: "solid",
            },
          },
          link: {
            defaultVariants: {
              variant: "underline",
            },
          },
          input: {
            variants: {
              variant: {
                outline: {
                  focusRingColor: "focusRing",
                },
              },
            },
          },
        },
        slotRecipes: {
          card: {
            base: {
              root: {
                borderRadius: "xl",
              },
            },
          },
        },
      },
    });
  });
});
