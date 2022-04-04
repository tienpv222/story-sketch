import { ComponentProps, splitProps } from "solid-js";
import { useRecipe } from "../utils/vanilla-extract";
import {
  actionButtonLabelStyle,
  actionButtonRecipe,
  ACTION_BUTTON_ICON,
  ACTION_BUTTON_ICON_SRC,
} from "./ActionButton.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

export const ActionButton = useRecipe(actionButtonRecipe)(
  (
    props: ComponentProps<"button"> &
      (
        | {
            label: string;
            icon?: string;
          }
        | {
            label?: string;
            icon: string;
          }
      )
  ) => {
    const [, attrs] = splitProps(props, ["label", "icon"]);

    return (
      <button {...attrs}>
        {props.icon && (
          <div
            class={ACTION_BUTTON_ICON}
            style={assignInlineVars({
              [ACTION_BUTTON_ICON_SRC]: `url(${props.icon})`,
            })}
          />
        )}

        {props.label && (
          <span
            class={actionButtonLabelStyle({
              icon: !!props.icon,
            })}
          >
            {props.label}
          </span>
        )}
      </button>
    );
  }
);

export type ActionButtonProps = ComponentProps<typeof ActionButton>;
