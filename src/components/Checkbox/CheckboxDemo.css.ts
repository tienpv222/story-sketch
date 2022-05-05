import { SIZE } from "/src/directives/theme";
import { createDemoStyle } from "/src/utils/styles";

const { createClass, addStyle } = createDemoStyle(MODULE_PATH);

export const CHECKBOX_DEMO = {
  ROOT: createClass(),
};

addStyle({
  [CHECKBOX_DEMO.ROOT]: {
    display: "inline-grid",
    gridTemplateColumns: "auto auto auto",
    gap: SIZE[100],
    columnGap: SIZE[500],
  },
});
