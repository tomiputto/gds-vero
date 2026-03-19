import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

function isHexColor(value: string) {
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(value);
}

describe("@gdesignsystem/tokens smoke", () => {
  it("tokens.raw.json has expected semantic/brand keys and hex values", () => {
    const tokensPath = fileURLToPath(
      new URL("../figma/tokens.raw.json", import.meta.url),
    );
    const tokensRaw = JSON.parse(readFileSync(tokensPath, "utf8")) as unknown as {
      colors?: Record<string, string>;
    };

    const colors = tokensRaw.colors ?? {};

    const expectedHexKeys = [
      // brand/primary
      "brand/primary/base",
      "brand/primary/hover",
      "brand/primary/active",
      "brand/primary/muted",
      "brand/primary/subtle",
      "brand/primary/onPrimary",
      "brand/primary/bg",
      "brand/primary/focusRing",
      // semantic text
      "text/fg_inverted",
      "text/fg_muted",
      "text/fg_subtle",
      "text/fg_error",
      "text/fg_warning",
      "text/fg_success",
      "text/fg_info",
      // semantic backgrounds
      "bg/inverted",
      "bg/error",
      "bg/warning",
      "bg/success",
      "bg/info",
      // semantic borders
      "border/inverted",
      "border/error",
      "border/warning",
      "border/success",
      "border/info",
      // gray scale (directly used by theme adapters)
      "gray/fg",
      "gray/400",
      "gray/600",
      "gray/700",
      "gray/800",
      "gray/900",
      "gray/950",
    ];

    for (const key of expectedHexKeys) {
      const v = colors[key];
      expect(v, `missing colors["${key}"]`).toBeTruthy();
      expect(typeof v).toBe("string");
      expect(isHexColor(v)).toBe(true);
    }
  });
});

