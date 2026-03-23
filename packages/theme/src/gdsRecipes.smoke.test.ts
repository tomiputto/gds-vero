import { describe, expect, it } from "vitest";
import { gdsTheme } from "./theme";

describe("@gdesignsystem/theme recipes (smoke)", () => {
  it("defines expected global and recipe focus-ring contract", () => {
    expect(gdsTheme).toMatchObject({
      globalCss: {
        html: {
          colorPalette: "brand",
        },
      },
      theme: {
        recipes: {
          input: {
            variants: {
              variant: {
                outline: {
                  focusRingColor: "focusRing",
                },
              },
            },
          },
          textarea: {
            variants: {
              variant: {
                outline: {
                  focusRingColor: "focusRing",
                },
              },
            },
          },
        },
      },
    });
  });
});

