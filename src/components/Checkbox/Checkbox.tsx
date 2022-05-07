import ICON_CHECKMARK from "@spectrum-css/icon/medium/Checkmark100.svg?inline";
import ICON_DASH from "@spectrum-css/icon/medium/Dash100.svg?inline";
import { ComponentProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import { CHECKBOX } from "./Checkbox.css";
import { CheckboxIcon, CheckboxIconProps } from "./CheckboxIcon";
import { CheckboxInput, CheckboxInputProps } from "./CheckboxInput";
import {
  createMutableMemo,
  getRootProps,
  getSubProps,
  SubProps,
} from "/src/utils/solid";

export type CheckboxState = {
  selected?: boolean;
  indeterminate?: boolean;
};

export type CheckboxProps = {
  state?: CheckboxState;
  label: string;
  emphasized?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
} & ComponentProps<"label"> &
  SubProps<"Input", CheckboxInputProps> &
  SubProps<"IconSelected", CheckboxIconProps> &
  SubProps<"IconIndeterminate", CheckboxIconProps> &
  SubProps<"Label", "span">;

export const Checkbox = (props: CheckboxProps) => {
  const state = createMutableMemo(() => props.state ?? {});
  const rootProps = getRootProps(props, [
    "state",
    "label",
    "emphasized",
    "invalid",
    "disabled",
    "readOnly",
  ]);
  const inputProps = getSubProps(props, "Input");
  const iconSelectedProps = getSubProps(props, "IconSelected");
  const iconIndeterminateProps = getSubProps(props, "IconIndeterminate");
  const labelProps = getSubProps(props, "Label");

  return (
    <label
      classList={{
        [CHECKBOX.ROOT]: true,
        [CHECKBOX.EMPHASIZED]: props.emphasized,
        [CHECKBOX.READ_ONLY]: props.readOnly,
      }}
      {...rootProps}
    >
      <Dynamic
        component={props.Input ?? CheckboxInput}
        state={state}
        invalid={props.invalid}
        checked={state.selected}
        indeterminate={state.indeterminate}
        disabled={props.disabled}
        tabIndex={props.readOnly ? -1 : undefined}
        aria-label={props.Label === false ? props.label : undefined}
        {...inputProps}
      />

      <Dynamic
        component={props.IconSelected ?? CheckboxIcon}
        when={state.selected && !state.indeterminate}
        Icon_src={ICON_CHECKMARK}
        {...iconSelectedProps}
      />

      <Dynamic
        component={props.IconIndeterminate ?? CheckboxIcon}
        when={state.indeterminate}
        Icon_src={ICON_DASH}
        {...iconIndeterminateProps}
      />

      <Dynamic
        component={props.Label ?? "span"}
        children={props.label}
        {...labelProps}
        classList={{
          [CHECKBOX.LABEL]: true,
          ...labelProps.classList,
        }}
      />
    </label>
  );
};
