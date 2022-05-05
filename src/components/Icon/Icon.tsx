import { ComponentProps, splitProps } from "solid-js";
import { ICON } from "./Icon.css";
import { getRootProps } from "/src/utils/solid";

export type IconProps = {
  src?: string;
} & ComponentProps<"div">;

export const Icon = (props: IconProps) => {
  const rootProps = getRootProps(props, ["src"]);

  return (
    <div
      style={{ [ICON.SRC]: `url(${props.src})` }}
      classList={{ [ICON.ROOT]: true }}
      {...rootProps}
    />
  );
};
