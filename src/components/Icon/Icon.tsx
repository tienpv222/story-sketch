import { ComponentProps, splitProps } from "solid-js";
import { ICON } from "./css";

export type IconProps = ComponentProps<"div"> & {
  src?: string;
};

export const Icon = (props: IconProps) => {
  const [, attrs] = splitProps(props, ["src"]);

  return (
    <div
      {...attrs}
      classList={{ [ICON.ROOT]: true }}
      style={{ [ICON.SRC]: `url(${props.src})` }}
    />
  );
};
