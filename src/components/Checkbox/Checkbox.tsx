import ICON_CHECKMARK from "@spectrum-css/icon/medium/Checkmark100.svg";
import ICON_DASH from "@spectrum-css/icon/medium/Dash100.svg";
import {
  batch,
  Component,
  ComponentProps,
  createEffect,
  createSignal,
  Show,
} from "solid-js";
import { createMutable } from "solid-js/store";
import { Dynamic } from "solid-js/web";
import { Appear } from "../Appear";
import { Icon, IconProps } from "../Icon";
import { CHECKBOX } from "./Checkbox.css";

export type CheckboxState = {
  selected?: boolean;
  indeterminate?: boolean;
};

export type CheckboxProps = {
  state?: CheckboxState;
  label?: string;
  emphasized?: boolean;
  invalid?: boolean | string;
  disabled?: boolean;
  readonly?: boolean;

  Root?: "label" | Component<ComponentProps<"label">>;
  Input?: "input" | Component<ComponentProps<"input">>;
  IconSelected?: typeof Icon | false;
  IconIndeterminate?: typeof Icon | false;
  Label?: "span" | Component<ComponentProps<"span">> | false;

  rootProps?: ComponentProps<"label">;
  inputProps?: ComponentProps<"input">;
  iconSelectedProps?: IconProps;
  iconIndeterminateProps?: IconProps;
  labelProps?: ComponentProps<"span">;
};

export const checkboxInputOnClick = (state: CheckboxState) => {
  batch(() => {
    state.selected = state.indeterminate ? true : !state.selected;
    state.indeterminate = false;
  });
};

export const Checkbox = (props: CheckboxProps) => {
  const state = createMutable(props.state ?? {});
  const [getInputElement, setInputElement] = createSignal<HTMLInputElement>();

  createEffect(() => {
    getInputElement()?.setCustomValidity(
      props.invalid ? String(props.invalid) : ""
    );
  });

  return (
    <Dynamic
      {...(props.rootProps ?? {})}
      component={props.Root ?? "label"}
      classList={{
        [CHECKBOX.ROOT]: true,
        [CHECKBOX.EMPHASIZED]: props.emphasized,
        [CHECKBOX.READONLY]: props.readonly,
        ...props.rootProps?.classList,
      }}
    >
      <Dynamic
        ref={setInputElement}
        type="checkbox"
        checked={state.selected}
        indeterminate={state.indeterminate}
        disabled={props.disabled}
        onClick={[checkboxInputOnClick, state]}
        {...(props.inputProps ?? {})}
        component={props.Input ?? "input"}
        classList={{
          [CHECKBOX.INPUT]: true,
          ...props.inputProps?.classList,
        }}
        tabIndex={props.readonly ? -1 : props.inputProps?.tabIndex}
      />

      <Show when={props.IconSelected !== false}>
        <Appear
          when={state.selected && !state.indeterminate}
          transition={CHECKBOX.ICON_TRANSITION}
        >
          <Dynamic
            src={ICON_CHECKMARK}
            {...(props.iconSelectedProps ?? {})}
            component={props.IconSelected ?? Icon}
            classList={{
              [CHECKBOX.ICON]: true,
              ...props.iconSelectedProps?.classList,
            }}
          />
        </Appear>
      </Show>

      <Show when={props.IconIndeterminate !== false}>
        <Appear
          when={state.indeterminate}
          transition={CHECKBOX.ICON_TRANSITION}
        >
          <Dynamic
            src={ICON_DASH}
            {...(props.iconIndeterminateProps ?? {})}
            component={props.IconIndeterminate ?? Icon}
            classList={{
              [CHECKBOX.ICON]: true,
              ...props.iconIndeterminateProps?.classList,
            }}
          />
        </Appear>
      </Show>

      <Show when={props.label}>
        <Dynamic
          children={props.label}
          {...(props.labelProps ?? {})}
          component={props.Label ?? "span"}
          classList={{
            [CHECKBOX.LABEL]: true,
            ...props.labelProps?.classList,
          }}
        />
      </Show>
    </Dynamic>
  );
};
