import { createEffect } from "solid-js";

export type ValidityOptions = boolean | string;

export const validity = (
  element: HTMLInputElement,
  getOptions: () => ValidityOptions
) => {
  createEffect(() => {
    const options = getOptions();
    element.setCustomValidity(options ? String(options) : "");
  });
};

declare module "solid-js" {
  namespace JSX {
    interface Directives {
      validity: ValidityOptions;
    }
  }
}
