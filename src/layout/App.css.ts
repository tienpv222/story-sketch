import { SIZE } from "../directives/theme.css";
import { createModuleStyle } from "../utils/style";

const { createClass, addStyle } = createModuleStyle(import.meta.url, "app");

export const APP = createClass();

addStyle({
  [APP]: {
    width: "100vw",
    height: "100vh",
    padding: SIZE[115],
    // display: "flex",
    gap: SIZE[115],
  },
});
