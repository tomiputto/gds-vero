import { describe, expect, it } from "vitest";
import React from "react";
import { Heading, Text } from "@chakra-ui/react";

// These wrapper components use classic JSX runtime and rely on `React` being in scope at runtime.
// Provide it globally for the test environment.
(globalThis as any).React = React;

describe("@gdesignsystem/react wrappers (smoke)", () => {
  it("GDSText forwards props to Chakra Text", async () => {
    const { GDSText } = await import("./components/GDSText");
    const element = GDSText({ color: "fg.muted", children: "Hello" } as any);

    expect(React.isValidElement(element)).toBe(true);
    expect(element.type).toBe(Text);
    expect(element.props.color).toBe("fg.muted");
    expect(element.props.children).toBe("Hello");
  });

  it("GDSHeading forwards props to Chakra Heading", async () => {
    const { GDSHeading } = await import("./components/GDSHeading");
    const element = GDSHeading({ color: "fg", children: "Title" } as any);

    expect(React.isValidElement(element)).toBe(true);
    expect(element.type).toBe(Heading);
    expect(element.props.color).toBe("fg");
    expect(element.props.children).toBe("Title");
  });
});

