import { Component, JSX } from "solid-js";

declare module "solid-js" {
  namespace JSX {
    interface InputHTMLAttributes<T> {
      indeterminate?: boolean;
    }
  }
}

declare module "solid-js/web" {
  export function Dynamic<T>(
    props: T & {
      component?: Component<T> | string | keyof JSX.IntrinsicElements | false;
      children?: any;
    }
  ): JSX.Element;
}
