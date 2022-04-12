import { createEffect } from "solid-js";
import { THEME_DARK, THEME_LIGHT } from "./theme.css";

export type ThemeOptions = {
  color?: "light" | "dark";
};

export const themeMap = {
  light: THEME_LIGHT,
  dark: THEME_DARK,
};

export const theme = (element: HTMLElement, getOptions: () => ThemeOptions) => {
  const { classList } = element;

  createEffect(() => {
    const { color } = getOptions();
    classList.remove(THEME_LIGHT, THEME_DARK);
    if (color) classList.add(themeMap[color]);
  });
};

declare module "solid-js" {
  namespace JSX {
    interface Directives {
      theme: ThemeOptions;
    }
  }
}
