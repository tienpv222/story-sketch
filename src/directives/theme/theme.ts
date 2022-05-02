import { createEffect } from "solid-js";
import { THEME } from "./theme.css";

export type ThemeOptions = {
  color?: "light" | "dark";
};

export const themeMap = {
  light: THEME.LIGHT,
  dark: THEME.DARK,
};

export const theme = (element: HTMLElement, getOptions: () => ThemeOptions) => {
  const { classList } = element;

  createEffect(() => {
    const { color } = getOptions();
    classList.remove(THEME.LIGHT, THEME.DARK);
    if (color) classList.add(THEME.ROOT, themeMap[color]);
  });
};

declare module "solid-js" {
  namespace JSX {
    interface Directives {
      theme: ThemeOptions;
    }
  }
}
