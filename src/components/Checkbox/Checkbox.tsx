import { ComponentProps, Show, splitProps } from "solid-js";
import IconCheckmark from "~icons/spectrum-ui/Checkmark100";
import IconDash from "~icons/spectrum-ui/Dash100";
import {
  CHECKBOX,
  CHECKBOX_BOX,
  CHECKBOX_ICON,
  CHECKBOX_INPUT,
  CHECKBOX_INTERDETERMINATE,
  CHECKBOX_LABEL,
} from "./Checkbox.css";

const inputAttrNames = [
  "checked",
  "disabled",
  "readonly",
  "onInput",
  "onChange",
] as const;

export type CheckboxProps = ComponentProps<"label"> &
  Pick<ComponentProps<"input">, typeof inputAttrNames[number]> & {
    label?: string;
    indeterminate?: boolean;
    emphasized?: boolean;
    invalid?: boolean;
  };

export const Checkbox = (props: CheckboxProps) => {
  const [, attrs] = splitProps(props, ["label"]);
  const [inputAttrs, labelAttrs] = splitProps(attrs, inputAttrNames);

  return (
    <label
      {...labelAttrs}
      classList={{
        [CHECKBOX]: true,
        [CHECKBOX_INTERDETERMINATE]: props.indeterminate,
      }}
    >
      <input {...inputAttrs} class={CHECKBOX_INPUT} type="checkbox" />

      <div class={CHECKBOX_BOX} />

      <Show
        when={props.indeterminate}
        children={<IconDash class={CHECKBOX_ICON} />}
        fallback={<IconCheckmark class={CHECKBOX_ICON} />}
      />

      <Show when={props.label}>
        <span class={CHECKBOX_LABEL}>{props.label}</span>
      </Show>
    </label>
  );
};
