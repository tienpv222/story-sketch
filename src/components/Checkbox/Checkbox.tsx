import { ComponentProps, createSignal } from "solid-js";
import IconCheckmark from "~icons/spectrum-ui/Checkmark100";
import {
  CHECKBOX,
  CHECKBOX_BOX,
  CHECKBOX_ICON,
  CHECKBOX_INPUT,
  CHECKBOX_LABEL,
} from "./Checkbox.css";

export type CheckboxProps = ComponentProps<"label"> & {
  checked?: boolean;
};

export const Checkbox = (props: CheckboxProps) => {
  const [checked, setChecked] = createSignal(false);

  return (
    <label class={CHECKBOX}>
      <input class={CHECKBOX_INPUT} type="checkbox" />
      <div class={CHECKBOX_BOX} />
      <IconCheckmark class={CHECKBOX_ICON} />
      <span class={CHECKBOX_LABEL}></span>
    </label>
  );
};
