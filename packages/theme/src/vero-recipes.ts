import { BODY_TEXT_STYLE, bodyTextSizeVariants } from "./vero-body-text";
import { veroFormSlotRecipes } from "./vero-form-slot-recipes";

/**
 * Chakra recipe overrides aligned with vero.fi (Verohallinto) visual patterns.
 * Colors come from semantic tokens; these adjust shape, spacing, and interaction.
 */

export const veroRecipes = {
  button: {
    base: {
      borderRadius: "full",
      fontWeight: "bold",
      textDecoration: "none",
      transitionDuration: "200ms",
      transitionTimingFunction: "ease-in-out",
      focusVisibleRing: "outside",
      focusRingColor: "focusRing",
    },
    variants: {
      size: {
        sm: {
          h: "auto",
          minH: "8",
          py: "2",
          px: "4",
          textStyle: "sm",
          gap: "2",
        },
        md: {
          h: "auto",
          minH: "10",
          py: "2.5",
          px: "5",
          textStyle: "lg",
          gap: "2",
        },
        lg: {
          h: "auto",
          minH: "12",
          py: "5",
          px: "7.5",
          textStyle: "xl",
          gap: "3",
        },
      },
      variant: {
        solid: {
          borderWidth: "0",
          bg: "colorPalette.solid",
          color: "colorPalette.contrast",
          _hover: {
            bg: "colorPalette.emphasized",
            textDecoration: "none",
          },
          _focusVisible: {
            bg: "colorPalette.emphasized",
          },
          _active: {
            bg: "colorPalette.emphasized",
          },
        },
        outline: {
          borderColor: "colorPalette.solid",
          color: "colorPalette.solid",
          _hover: {
            bg: "colorPalette.subtle",
          },
        },
        ghost: {
          color: "colorPalette.solid",
          _hover: {
            bg: "colorPalette.subtle",
          },
        },
        plain: {
          color: "colorPalette.solid",
          textDecoration: "underline",
          textUnderlineOffset: "2px",
          _hover: {
            color: "colorPalette.emphasized",
          },
        },
      },
    },
    defaultVariants: {
      size: "md",
      variant: "solid",
    },
  },
  link: {
    base: {
      fontWeight: "normal",
      transitionDuration: "200ms",
    },
    variants: {
      variant: {
        underline: {
          color: "brand.solid",
          textDecoration: "underline",
          textUnderlineOffset: "2px",
          textDecorationColor: "currentColor",
          _hover: {
            color: "brand.emphasized",
          },
        },
        plain: {
          color: "brand.solid",
          textDecoration: "underline",
          textUnderlineOffset: "2px",
          _hover: {
            color: "brand.emphasized",
          },
        },
      },
    },
    defaultVariants: {
      variant: "underline",
    },
  },
  heading: {
    base: {
      fontFamily: "heading",
      fontWeight: "semibold",
      color: "fg",
      lineHeight: "1.25",
    },
    variants: {
      size: {
        /** h1 – 42px / 4.2rem */
        "4xl": {
          fontSize: "4xl",
          lineHeight: "1.25",
        },
        /** h2 – 34px / 3.4rem */
        "3xl": {
          fontSize: "3xl",
          lineHeight: "1.25",
        },
        /** h3 – 24px / 2.4rem */
        "2xl": {
          fontSize: "2xl",
          lineHeight: "1.25",
        },
        /** h4 – 20px */
        xl: {
          fontSize: "xl",
          lineHeight: "1.25",
        },
        /** h5 – 16px */
        lg: {
          fontSize: "lg",
          lineHeight: "1.25",
        },
        /** h6 – 14px (body token md is 18px) */
        md: {
          fontSize: "14px",
          lineHeight: "1.25",
        },
        sm: {
          fontSize: "sm",
          lineHeight: "1.25",
        },
        xs: {
          fontSize: "xs",
          lineHeight: "1.25",
        },
      },
    },
  },
  input: {
    base: {
      borderRadius: "md",
      ...BODY_TEXT_STYLE,
    },
    variants: {
      size: bodyTextSizeVariants(),
      variant: {
        outline: {
          bg: "bg.default",
          borderWidth: "1px",
          borderColor: "border",
          focusVisibleRing: "inside",
          focusRingColor: "focusRing",
        },
      },
    },
  },
  textarea: {
    base: {
      ...BODY_TEXT_STYLE,
    },
    variants: {
      size: bodyTextSizeVariants(),
      variant: {
        outline: {
          bg: "bg.default",
          borderWidth: "1px",
          borderColor: "border",
          borderRadius: "md",
          focusVisibleRing: "inside",
          focusRingColor: "focusRing",
        },
      },
    },
  },
  badge: {
    base: {
      borderRadius: "sm",
      fontWeight: "normal",
    },
  },
} as const;

/** Slot recipes (Card, CheckboxCard, NativeSelect, …) — must live in theme.slotRecipes, not recipes. */
export const veroSlotRecipes = {
  card: {
    base: {
      root: {
        borderRadius: "xl",
        bg: "bg.default",
        borderColor: "border.emphasized",
      },
      title: {
        fontFamily: "heading",
        fontWeight: "semibold",
        /** vero.fi card title: 2rem (= 20px); use xl token (not rem — root is 18px) */
        textStyle: "none",
        fontSize: "xl",
        lineHeight: "1.25",
        marginTop: "0",
        marginBottom: "10px",
      },
      description: {
        color: "fg.muted",
        ...BODY_TEXT_STYLE,
      },
      body: {
        ...BODY_TEXT_STYLE,
      },
    },
    variants: {
      variant: {
        outline: {
          root: {
            borderWidth: "1px",
            borderColor: "border.emphasized",
          },
        },
        elevated: {
          root: {
            boxShadow: "sm",
          },
        },
      },
      size: {
        sm: {
          title: {
            textStyle: "none",
            fontSize: "xl",
            marginTop: "0",
            marginBottom: "10px",
          },
        },
        md: {
          root: {
            "--card-padding": "spacing.6",
          },
          title: {
            textStyle: "none",
            fontSize: "xl",
            marginTop: "0",
            marginBottom: "10px",
          },
        },
        lg: {
          title: {
            textStyle: "none",
            fontSize: "xl",
            marginTop: "0",
            marginBottom: "10px",
          },
        },
      },
    },
  },
  ...veroFormSlotRecipes,
} as const;
