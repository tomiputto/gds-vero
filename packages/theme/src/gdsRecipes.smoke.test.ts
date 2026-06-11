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

  it("uses 18px body text on P1 overlay slots: menu, popover, tooltip, drawer", () => {
    const menu = system.getSlotRecipe("menu");
    const popover = system.getSlotRecipe("popover");
    const tooltip = system.getSlotRecipe("tooltip");
    const drawer = system.getSlotRecipe("drawer");

    expect(menu.base?.content).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(menu.base?.item).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(menu.variants?.size?.md?.item).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(menu.variants?.size?.sm?.item).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(JSON.stringify(menu.variants?.size?.md ?? {})).not.toContain('"textStyle":"sm"');

    expect(popover.base?.content).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(popover.base?.body).toMatchObject({ textStyle: "body", fontSize: "md" });

    expect(tooltip.base?.content).toMatchObject({ textStyle: "body", fontSize: "md" });

    expect(drawer.base?.content).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(drawer.base?.body).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(drawer.base?.title?.fontSize).toBe("xl");
  });

  it("uses 18px body text on P2 nav slots: tabs, table, breadcrumb, pagination", () => {
    const tabs = system.getSlotRecipe("tabs");
    const table = system.getSlotRecipe("table");
    const breadcrumb = system.getSlotRecipe("breadcrumb");
    const pagination = system.getSlotRecipe("pagination");

    expect(tabs.base?.content).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(tabs.base?.trigger).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(tabs.variants?.size?.md?.trigger).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(JSON.stringify(tabs.variants?.size?.sm ?? {})).not.toContain('"textStyle":"sm"');

    expect(table.base?.root).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(table.base?.cell).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(table.base?.columnHeader).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(table.variants?.size?.md?.root).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(table.base?.caption?.textStyle).toBe("body");

    expect(breadcrumb.base?.list).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(breadcrumb.variants?.size?.md?.list).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(JSON.stringify(breadcrumb.variants?.size?.sm ?? {})).not.toContain('"textStyle":"xs"');

    expect(pagination).toBeDefined();
    expect(pagination.base?.root).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(pagination.base?.item).toMatchObject({ textStyle: "body", fontSize: "md" });
  });

  it("uses 18px body text on P3 feedback slots: toast, progress, emptyState, status", () => {
    const toast = system.getSlotRecipe("toast");
    const progress = system.getSlotRecipe("progress");
    const progressCircle = system.getSlotRecipe("progressCircle");
    const emptyState = system.getSlotRecipe("emptyState");
    const status = system.getSlotRecipe("status");

    expect(toast.base?.title).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(toast.base?.description).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(toast.base?.actionTrigger).toMatchObject({ textStyle: "body", fontSize: "md" });

    expect(progress.base?.root).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(progress.base?.valueText).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(progressCircle.base?.root).toMatchObject({ textStyle: "body", fontSize: "md" });

    expect(emptyState.base?.description).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(emptyState.variants?.size?.md?.title?.fontSize).toBe("xl");
    expect(emptyState.variants?.size?.sm?.title?.fontSize).toBe("md");

    expect(status.base?.root).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(status.variants?.size?.md?.root).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(JSON.stringify(status.variants?.size?.sm ?? {})).not.toContain('"textStyle":"xs"');
  });

  it("uses 18px body text on P4 picker slots: datePicker, colorPicker, tag", () => {
    const datePicker = system.getSlotRecipe("datePicker");
    const colorPicker = system.getSlotRecipe("colorPicker");
    const tag = system.getSlotRecipe("tag");

    expect(datePicker.base?.input).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(datePicker.base?.tableCellTrigger).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(datePicker.base?.tableHeader?.textStyle).toBe("body");

    expect(colorPicker.base?.label).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(colorPicker.base?.trigger).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(colorPicker.variants?.size?.md?.channelInput).toMatchObject({
      textStyle: "body",
      fontSize: "md",
    });
    expect(JSON.stringify(colorPicker.variants?.size?.sm ?? {})).not.toContain('"textStyle":"sm"');

    expect(tag.base?.label).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(tag.variants?.size?.md?.label).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(JSON.stringify(tag.variants?.size?.sm ?? {})).not.toContain('"textStyle":"xs"');
  });

  it("uses 18px body text on P5 content slots: accordion, collapsible, steps, timeline, stat, dataList", () => {
    const accordion = system.getSlotRecipe("accordion");
    const collapsible = system.getSlotRecipe("collapsible");
    const steps = system.getSlotRecipe("steps");
    const timeline = system.getSlotRecipe("timeline");
    const stat = system.getSlotRecipe("stat");
    const dataList = system.getSlotRecipe("dataList");

    expect(accordion.base?.itemTrigger).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(accordion.base?.itemBody).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(accordion.variants?.size?.sm?.itemTrigger).toMatchObject({ textStyle: "body", fontSize: "md" });

    expect(collapsible.base?.trigger).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(collapsible.base?.content).toMatchObject({ textStyle: "body", fontSize: "md" });

    expect(steps.base?.title).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(steps.variants?.size?.md?.title).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(JSON.stringify(steps.variants?.size?.md ?? {})).not.toContain('"textStyle":"sm"');

    expect(timeline.base?.description).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(timeline.variants?.size?.md?.title).toMatchObject({ textStyle: "body", fontSize: "md" });

    expect(stat.base?.label).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(stat.base?.helpText).toMatchObject({ textStyle: "body", fontSize: "md" });

    expect(dataList.base?.itemLabel).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(dataList.variants?.size?.md?.item).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(JSON.stringify(dataList.variants?.size?.sm ?? {})).not.toContain('"textStyle":"xs"');
  });

  it("uses 18px body text on P6 text slots: badge, kbd, code, blockquote, list, avatar, segmentGroup", () => {
    const badge = system.getRecipe("badge");
    const kbd = system.getRecipe("kbd");
    const code = system.getRecipe("code");
    const blockquote = system.getSlotRecipe("blockquote");
    const list = system.getSlotRecipe("list");
    const avatar = system.getSlotRecipe("avatar");
    const segmentGroup = system.getSlotRecipe("segmentGroup");

    expect(badge.base).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(badge.variants?.size?.md).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(JSON.stringify(badge.variants?.size?.sm ?? {})).not.toContain('"textStyle":"xs"');

    expect(kbd.base).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(kbd.variants?.size?.md).toMatchObject({ textStyle: "body", fontSize: "md" });

    expect(code.base).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(code.variants?.size?.md).toMatchObject({ textStyle: "body", fontSize: "md" });

    expect(blockquote.base?.content).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(blockquote.base?.caption).toMatchObject({ textStyle: "body", fontSize: "md" });

    expect(list.base?.root).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(list.base?.item).toMatchObject({ textStyle: "body", fontSize: "md" });

    expect(avatar.variants?.size?.md?.root?.["--avatar-font-size"]).toBe("fontSizes.md");
    expect(avatar.variants?.size?.md?.fallback).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(avatar.variants?.size?.sm?.root?.["--avatar-font-size"]).toBe("fontSizes.sm");

    expect(segmentGroup.base?.item).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(segmentGroup.variants?.size?.xs?.item).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(JSON.stringify(segmentGroup.variants?.size?.xs ?? {})).not.toContain('"textStyle":"xs"');
  });

  it("uses 18px body text on P7: link, heading, fileUpload, rating, hoverCard, slider, forms xs", () => {
    const link = system.getRecipe("link");
    const heading = system.getRecipe("heading");
    const fileUpload = system.getSlotRecipe("fileUpload");
    const hoverCard = system.getSlotRecipe("hoverCard");
    const slider = system.getSlotRecipe("slider");
    const floatingPanel = system.getSlotRecipe("floatingPanel");
    const combobox = system.getSlotRecipe("combobox");
    const pinInput = system.getSlotRecipe("pinInput");

    expect(link.base).toMatchObject({ textStyle: "body", fontSize: "md" });

    expect(heading.variants?.size?.sm?.textStyle).toBe("none");
    expect(heading.variants?.size?.xs?.fontSize).toBe("md");
    expect(JSON.stringify(heading.variants?.size?.sm ?? {})).not.toContain('"textStyle":"sm"');

    expect(fileUpload.base?.label).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(fileUpload.base?.dropzoneContent).toMatchObject({ textStyle: "body", fontSize: "md" });

    expect(hoverCard.base?.content).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(slider.base?.label).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(floatingPanel.base?.body).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(floatingPanel.base?.title?.fontSize).toBe("xl");

    expect(combobox.variants?.size?.xs?.input).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(pinInput.variants?.size?.["2xs"]?.input).toMatchObject({ textStyle: "body", fontSize: "md" });
  });

  it("registers toggle slot recipe with vero body typography", () => {
    const toggle = system.getSlotRecipe("toggle");
    expect(toggle).toBeDefined();
    expect(toggle.base?.root).toMatchObject({ textStyle: "body", fontSize: "md" });
    expect(toggle.variants?.size?.md?.root).toMatchObject({ textStyle: "body", fontSize: "md" });
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
