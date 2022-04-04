import { ComponentProps, JSX, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import { useRecipe } from "../utils/vanilla-extract";
import { themeRecipe } from "./Theme.css";

export const Theme = useRecipe(themeRecipe)(
  <T extends keyof JSX.IntrinsicElements>(
    props: { as?: T } & ComponentProps<T>
  ) => {
    const [, attrs] = splitProps(props, ["as"]);

    return <Dynamic component={props.as || "div"} {...attrs} />;
  }
);
