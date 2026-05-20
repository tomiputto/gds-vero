import { describe, expect, it } from "vitest";
import { gdsSemanticColors } from "./gds-tokens";
import { system } from "./system";

const FG_LIGHT = "#27272a";
const FG_DARK = "#fafafa";
const FG_MUTED_LIGHT = "#52525b";
const FG_MUTED_DARK = "#a1a1aa";
const FG_SUBTLE_LIGHT = "#a1a1aa";
const FG_SUBTLE_DARK = "#a1a1aa";

describe("fg semantic tokens", () => {
  it("does not reference colors.gray.fg (conflicts with Chakra palette gray.fg)", () => {
    const serialized = JSON.stringify(gdsSemanticColors.fg);
    expect(serialized).not.toContain("colors.gray.fg");
  });

  it("fg.DEFAULT uses base + gray.800 for light and fg_inverted for dark", () => {
    const def = gdsSemanticColors.fg.DEFAULT.value as Record<string, string>;
    expect(def.base).toBe(FG_LIGHT);
    expect(def._light).toBe("{colors.gray.800}");
    expect(def._dark).toBe("{colors.text.fg_inverted}");
  });

  it("fg.muted and fg.subtle include base fallbacks", () => {
    const muted = gdsSemanticColors.fg.muted.value as Record<string, string>;
    const subtle = gdsSemanticColors.fg.subtle.value as Record<string, string>;

    expect(muted.base).toBe(FG_MUTED_LIGHT);
    expect(muted._light).toBe("{colors.text.fg_muted}");
    expect(muted._dark).toBe("{colors.text.fg_subtle}");

    expect(subtle.base).toBe(FG_SUBTLE_LIGHT);
    expect(subtle._light).toBe("{colors.text.fg_subtle}");
    expect(subtle._dark).toBe("{colors.gray.400}");
  });

  it("maps semantic fg to Chakra CSS variables (resolved at runtime in the app)", () => {
    expect(system.tokens.getVar("colors.fg", "light")).toBe("var(--chakra-colors-fg)");
    expect(system.tokens.getVar("colors.fg", "dark")).toBe("var(--chakra-colors-fg)");
    expect(system.tokens.getVar("colors.fg.muted", "light")).toBe("var(--chakra-colors-fg-muted)");
    expect(system.tokens.getVar("colors.fg.subtle", "dark")).toBe("var(--chakra-colors-fg-subtle)");
  });

  it("registers fg CSS variables with expected light/dark values in theme config", () => {
    const css = system._config?.theme?.semanticTokens?.colors?.fg as Record<
      string,
      { value: string | Record<string, string> }
    >;
    expect(css?.DEFAULT?.value).toMatchObject({
      base: FG_LIGHT,
      _light: "{colors.gray.800}",
      _dark: "{colors.text.fg_inverted}",
    });
    expect(css?.muted?.value).toMatchObject({
      base: FG_MUTED_LIGHT,
      _dark: "{colors.text.fg_subtle}",
    });
    expect(css?.subtle?.value).toMatchObject({
      base: FG_SUBTLE_LIGHT,
      _dark: "{colors.gray.400}",
    });
  });
});
