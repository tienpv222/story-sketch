import ICON_CHECKMARK from "@spectrum-css/icon/medium/Checkmark100.svg";
import ICON_DASH from "@spectrum-css/icon/medium/Dash100.svg";
import { ComponentProps, Show } from "solid-js";
import { createMutable } from "solid-js/store";
import { Dynamic } from "solid-js/web";
import { CHECKBOX } from "./Checkbox.css";
import { CheckboxIcon, CheckboxIconProps } from "./CheckboxIcon";
import { CheckboxInput, CheckboxInputProps } from "./CheckboxInput";
import { getRootProps, getSubProps, SubProps } from "/src/utils/solid";

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
  const state = createMutable(props.state ?? {});
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
      <Show when={props.Input !== null}>
        <Dynamic
          component={props.Input ?? CheckboxInput}
          state={state}
          invalid={props.invalid}
          checked={state.selected}
          indeterminate={state.indeterminate}
          disabled={props.disabled}
          aria-label={props.Label === null ? props.label : undefined}
          {...inputProps}
          tabIndex={props.readOnly ? -1 : inputProps.tabIndex}
        />
      </Show>

      <Show when={props.IconSelected !== null}>
        <Dynamic
          component={props.IconSelected ?? CheckboxIcon}
          when={state.selected && !state.indeterminate}
          Icon_src={ICON_CHECKMARK}
          {...iconSelectedProps}
        />
      </Show>

      <Show when={props.IconIndeterminate !== null}>
        <Dynamic
          component={props.IconSelected ?? CheckboxIcon}
          when={state.indeterminate}
          Icon_src={ICON_DASH}
          {...iconIndeterminateProps}
        />
      </Show>

      <Show when={props.Label !== null}>
        <Dynamic
          component={props.Label ?? "span"}
          children={props.label}
          {...labelProps}
          classList={{
            [CHECKBOX.LABEL]: true,
            ...labelProps.classList,
          }}
        />
      </Show>
    </label>
  );
};
