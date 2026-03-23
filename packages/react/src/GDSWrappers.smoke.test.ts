import { describe, expect, it } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { GDSProvider } from "./GDSProvider";
import { GDSHeading } from "./components/GDSHeading";
import { GDSText } from "./components/GDSText";

describe("@gdesignsystem/react wrappers (smoke)", () => {
  it("GDSText renders content through React render path", () => {
    const html = renderToStaticMarkup(
      React.createElement(GDSProvider, null, React.createElement(GDSText, null, "Hello"))
    );
    expect(html).toContain("Hello");
  });

  it("GDSHeading renders semantic heading tag through React render path", () => {
    const html = renderToStaticMarkup(
      React.createElement(GDSProvider, null, React.createElement(GDSHeading, { as: "h2" }, "Title"))
    );
    expect(html).toContain("<h2");
    expect(html).toContain("Title");
  });
});

