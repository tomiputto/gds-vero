import { describe, expect, it } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { GDSProvider } from "./GDSProvider";
import { GDSHeading } from "./components/GDSHeading";
import { GDSText } from "./components/GDSText";
import { VeroMainHeader } from "./components/VeroMainHeader";

describe("@gds-vero/react wrappers (smoke)", () => {
  it("GDSText renders content through React render path", () => {
    const html = renderToStaticMarkup(
      React.createElement(GDSProvider, null, React.createElement(GDSText, null, "Hello"))
    );
    expect(html).toContain("Hello");
  });

  it("GDSHeading defaults h1 to vero 42px scale when size omitted", () => {
    const html = renderToStaticMarkup(
      React.createElement(GDSProvider, null, React.createElement(GDSHeading, { as: "h1" }, "Page"))
    );
    expect(html).toContain("<h1");
    expect(html).toMatch(/42px|4\.2rem|fontSizes-4xl|4xl/);
  });

  it("GDSHeading renders semantic heading tag through React render path", () => {
    const html = renderToStaticMarkup(
      React.createElement(GDSProvider, null, React.createElement(GDSHeading, { as: "h2" }, "Title"))
    );
    expect(html).toContain("<h2");
    expect(html).toContain("Title");
  });

  it("VeroMainHeader renders landmark header through React render path", () => {
    const html = renderToStaticMarkup(
      React.createElement(GDSProvider, null, React.createElement(VeroMainHeader, null))
    );
    expect(html).toContain("<header");
    expect(html).toContain("vero.fi");
    expect(html).toContain("Henkilöasiakkaat");
  });
});

