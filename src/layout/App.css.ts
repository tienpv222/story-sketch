import { createAppStyle } from "../utils/styles";
import "@fontsource/source-sans-3/500.css";
import { SIZE } from "../directives/theme";

const { createClass, addStyle } = createAppStyle(MODULE_PATH);

export const APP = {
  ROOT: createClass(),
  NAV: createClass(),
};

addStyle({
  [APP.ROOT]: {
    width: "100vw",
    height: "100vh",
    fontFamily: '"Source Sans 3"',
  },

  [APP.NAV]: {
    width: SIZE[500],
    display: "flex",
    flexFlow: "column",
  },
});
