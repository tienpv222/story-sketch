import { batch, ComponentProps } from "solid-js";
import { CheckboxState } from "./Checkbox";
import { CHECKBOX } from "./Checkbox.css";
import { getRootProps } from "/src/utils/solid";

export type CheckboxInputProps = {
  state: CheckboxState;
  invalid?: boolean;
} & ComponentProps<"input">;

export const checkboxInputOnClick = (
  state: CheckboxState,
  event: MouseEvent
) => {
  event.preventDefault();

  setTimeout(batch, 0, () => {
    state.selected = state.indeterminate ? true : !state.selected;
    state.indeterminate = false;
  });
};

export const CheckboxInput = (props: CheckboxInputProps) => {
  const rootProps = getRootProps(props, ["state", "invalid"]);

  return (
    <input
      use:validity={props.invalid}
      classList={{ [CHECKBOX.INPUT]: true }}
      type="checkbox"
      onClick={[checkboxInputOnClick, props.state]}
      {...rootProps}
    />
  );
};
