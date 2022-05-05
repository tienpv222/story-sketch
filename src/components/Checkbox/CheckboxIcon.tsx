import { Dynamic } from "solid-js/web";
import { Appear, AppearProps } from "../Appear";
import { Icon, IconProps } from "../Icon";
import { CHECKBOX } from "./Checkbox.css";
import { getRootProps, getSubProps, SubProps } from "/src/utils/solid";

export type CheckboxIconProps = AppearProps & SubProps<"Icon", IconProps>;

export const CheckboxIcon = (props: CheckboxIconProps) => {
  const rootProps = getRootProps(props);
  const iconProps = getSubProps(props, "Icon");

  return (
    <Appear transition={CHECKBOX.ICON_TRANSITION} {...rootProps}>
      <Dynamic
        component={props.Icon ?? Icon}
        {...iconProps}
        classList={{
          [CHECKBOX.ICON]: true,
          ...iconProps.classList,
        }}
      />
    </Appear>
  );
};
