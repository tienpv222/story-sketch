import { batch } from "solid-js";
import { createMutable } from "solid-js/store";
import { Checkbox, CheckboxState } from "./Checkbox";
import { CHECKBOX_DEMO } from "./CheckboxDemo.css";

export const CheckboxDemo = () => {
  const onIndeterminateClick = (state: CheckboxState, event: MouseEvent) => {
    event.preventDefault();

    setTimeout(batch, 0, () => {
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
        Input_onClick={[onIndeterminateClick, state.default]}
      />

      <p>Emphasized</p>
      <Checkbox label="Default" emphasized />
      <Checkbox
        state={state.emphasized}
        label="Indeterminate"
        emphasized
        Input_onClick={[onIndeterminateClick, state.emphasized]}
      />

      <p>Invalid</p>
      <Checkbox label="Default" invalid />
      <Checkbox
        state={state.invalid}
        label="Indeterminate"
        invalid
        Input_onClick={[onIndeterminateClick, state.invalid]}
      />

      <p>Disabled</p>
      <Checkbox label="Default" disabled />
      <Checkbox
        state={{ indeterminate: true }}
        label="Indeterminate"
        disabled
      />

      <p>Readonly</p>
      <Checkbox label="Default" readOnly />
      <Checkbox
        state={state.readonly}
        label="Indeterminate"
        readOnly
        Input_onClick={[onIndeterminateClick, state.readonly]}
      />

      <p>Standalone</p>
      <div>
        <Checkbox label="Default" Label={false} />
      </div>
      <div>
        <Checkbox
          state={state.standalone}
          label="Indeterminate"
          Input_onClick={[onIndeterminateClick, state.standalone]}
          Label={false}
        />
      </div>
    </div>
  );
};
