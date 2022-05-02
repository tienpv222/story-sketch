import { batch } from "solid-js";
import { createMutable } from "solid-js/store";
import { Checkbox, CheckboxState } from "./Checkbox";
import { CHECKBOX_DEMO } from "./CheckboxDemo.css";

export const CheckboxDemo = () => {
  const onIndeterminateClick = (state: CheckboxState) => {
    batch(() => {
      if (state.indeterminate) {
        state.selected = true;
        state.indeterminate = false;
      } else if (state.selected) {
        state.selected = false;
      } else {
        state.indeterminate = true;
      }
    });
  };

  const createIndeterminateState = () => {
    return createMutable<CheckboxState>({ indeterminate: true });
  };

  const state = {
    default: createIndeterminateState(),
    emphasized: createIndeterminateState(),
    invalid: createIndeterminateState(),
    readonly: createIndeterminateState(),
    standalone: createIndeterminateState(),
  };

  return (
    <div class={CHECKBOX_DEMO.ROOT}>
      <p>Default</p>
      <Checkbox label="Default" />
      <Checkbox
        state={state.default}
        label="Indeterminate"
        inputProps={{ onClick: [onIndeterminateClick, state.default] }}
      />

      <p>Emphasized</p>
      <Checkbox label="Default" emphasized />
      <Checkbox
        state={state.emphasized}
        label="Indeterminate"
        emphasized
        inputProps={{ onClick: [onIndeterminateClick, state.emphasized] }}
      />

      <p>Invalid</p>
      <Checkbox label="Default" invalid />
      <Checkbox
        state={state.invalid}
        label="Indeterminate"
        invalid="any"
        inputProps={{ onClick: [onIndeterminateClick, state.invalid] }}
      />

      <p>Disabled</p>
      <Checkbox label="Default" disabled />
      <Checkbox
        state={{ indeterminate: true }}
        label="Indeterminate"
        disabled
      />

      <p>Readonly</p>
      <Checkbox label="Default" readonly />
      <Checkbox
        state={state.readonly}
        label="Indeterminate"
        readonly
        inputProps={{ onClick: [onIndeterminateClick, state.readonly] }}
      />

      <p>Standalone</p>
      <div>
        <Checkbox />
      </div>
      <div>
        <Checkbox
          state={state.standalone}
          inputProps={{ onClick: [onIndeterminateClick, state.standalone] }}
        />
      </div>
    </div>
  );
};
