import { describe, expect, it } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { GDSProvider } from "./GDSProvider";
import { GDSButton } from "./components/GDSButton";
import { GDSText } from "./components/GDSText";
import { VeroMainHeader } from "./components/VeroMainHeader";
import { VeroAppShell } from "./components/VeroAppShell";
import { VeroPageLayout } from "./components/VeroPageLayout";

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

  it("GDSButton renders with pill borderRadius through GDSProvider", () => {
    const html = renderToStaticMarkup(
      React.createElement(
        GDSProvider,
        null,
        React.createElement(GDSButton, null, "Ota yhteyttä")
      )
    );
    expect(html).toContain("Ota yhteyttä");
    expect(html).toMatch(/border-radius:\s*9999px|radii-full|borderRadius.*full|rounded-full/i);
  });

  it("VeroPageLayout renders main landmark", () => {
    const html = renderToStaticMarkup(
      React.createElement(
        GDSProvider,
        null,
        React.createElement(VeroPageLayout, null, "Content")
      )
    );
    expect(html).toContain("<main");
    expect(html).toContain("Content");
  });

  it("VeroAppShell renders header and children", () => {
    const html = renderToStaticMarkup(
      React.createElement(
        GDSProvider,
        null,
        React.createElement(
          VeroAppShell,
          { topBarEnd: null },
          React.createElement(VeroPageLayout, null, "Body")
        )
      )
    );
    expect(html).toContain("<header");
    expect(html).toContain("Body");
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

