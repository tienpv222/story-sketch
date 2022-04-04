import { createVar, style, styleVariants } from "@vanilla-extract/css";
import { createRecipe } from "../utils/vanilla-extract";
import { theme } from "./Theme.css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

export const actionButtonRecipe = createRecipe({
  base: {
    height: theme.size[400],
    display: "inline-flex",
    alignItems: "center",
    background: theme.color.gray75,
    border: `${theme.size[10]} solid ${theme.color.gray400}`,
    borderRadius: theme.size[50],
    ":hover": {
      background: theme.color.gray50,
      borderColor: theme.color.gray500,
    },
    ":focus-visible": {
      background: theme.color.gray50,
      outline: `${theme.color.blue400} solid ${theme.size[25]}`,
      outlineOffset: calc.negate(theme.size[10]),
    },
    ":active": {
      background: theme.color.gray200,
    },
  },
  variants: {
    quiet: {},
    selected: {},
    emphasized: {},
  },
});

export const ACTION_BUTTON_ICON_SRC = createVar();

export const ACTION_BUTTON_ICON = style({
  width: theme.size[225],
  height: theme.size[225],
  margin: `0 ${theme.size[75]}`,
  background: theme.color.gray700,
  WebkitMask: `${ACTION_BUTTON_ICON_SRC} 0 / 100% 100% no-repeat`,
  selectors: {
    [`.${actionButtonRecipe.style()}:is(:hover, :focus-visible) &`]: {
      background: theme.color.gray900,
    },
  },
});

export const actionButtonLabelStyle = recipe({
  base: {
    margin: `0 ${theme.size[130]}`,
  },
  variants: {
    icon: {
      true: {
        marginLeft: 0,
      },
    },
  },
});
