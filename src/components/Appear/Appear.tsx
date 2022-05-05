import { createEffect, createSignal, JSX, untrack } from "solid-js";
import { APPEARED } from "./Appear.css";
import { raf } from "/src/utils/common";

export type AppearProps = {
  when?: boolean;
  transition?: string;
  children?: JSX.Element;
};

export const getTransitionProps = (transition = "") => {
  return transition.split(",").map((prop) => prop.trim());
};

export const Appear = (props: AppearProps) => {
  const [getElement, setElement] = createSignal<HTMLElement>();
  const transitionProps = getTransitionProps(props.transition);
  const transitioningProps = new Set<string>();

  const onTransitionEnd = (event: TransitionEvent) => {
    transitioningProps.delete(event.propertyName);
    if (transitioningProps.size) return;

    if (props.when) {
      getElement()?.removeEventListener("transitionend", onTransitionEnd);
    } else {
      setElement();
    }
  };

  createEffect(() => {
    const { when } = props;

    untrack(() => {
      let element = getElement();
      if (!when && !element) return;

      if (!element) {
        let { children } = props;
        while (typeof children === "function") children = children();
        if (!(children instanceof HTMLElement)) return;

        element = setElement(children);
      }

      if (!transitioningProps.size) {
        transitionProps.forEach(Set.prototype.add, transitioningProps);
        element.addEventListener("transitionend", onTransitionEnd);
      }

      if (when) {
        raf(() => element?.classList.add(APPEARED));
      } else {
        element.classList.remove(APPEARED);
      }
    });
  });

  return getElement;
};
