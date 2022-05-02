import RESET_CSS from "the-new-css-reset/css/reset.css?raw";
import { createSpectrumStyle } from "/src/utils/styles";

const { createClass, addStyle } = createSpectrumStyle(MODULE_PATH);

export const THEME = {
  ROOT: createClass(),
  LIGHT: createClass(),
  DARK: createClass(),
};

// goober fails without ending semicolon
addStyle(RESET_CSS.replaceAll("}", ";}"));
