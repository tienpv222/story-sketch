import { createEffect, createSignal, JSX, untrack } from "solid-js";
import { APPEARED } from "./Appear.css";
import { raf } from "/src/utils/common";

export type AppearProps = {
  when?: boolean;
  transition: string;
  children?: JSX.Element;
};

export const Appear = (props: AppearProps) => {
  const [getElement, setElement] = createSignal<HTMLElement | null>(null);
  const transitions = props.transition.split(/\s*,\s*/);
  const transitionings = new Set<string>();

  const onTransitionEnd = (event: TransitionEvent) => {
    transitionings.delete(event.propertyName);
    if (transitionings.size) return;

    if (props.when) {
      getElement()!.removeEventListener("transitionend", onTransitionEnd);
    } else {
      setElement(null);
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

      if (!transitionings.size) {
        transitions.forEach(transitionings.add, transitionings);
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
