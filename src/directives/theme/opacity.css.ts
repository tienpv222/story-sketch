import { THEME } from "./theme.css";
import { createSpectrumStyle } from "/src/utils/styles";

const { createVar, addStyle } = createSpectrumStyle(MODULE_PATH);

export const OPACITY = {
  100: createVar(),
  90: createVar(),
  80: createVar(),
  70: createVar(),
  60: createVar(),
  55: createVar(),
  50: createVar(),
  42: createVar(),
  40: createVar(),
  30: createVar(),
  25: createVar(),
  20: createVar(),
  15: createVar(),
  10: createVar(),
  8: createVar(),
  7: createVar(),
  6: createVar(),
  5: createVar(),
  4: createVar(),
  0: createVar(),
} as const;

addStyle({
  [THEME.ROOT]: {
    [OPACITY[100]]: 1,
    [OPACITY[90]]: 0.9,
    [OPACITY[80]]: 0.8,
    [OPACITY[70]]: 0.7,
    [OPACITY[60]]: 0.6,
    [OPACITY[55]]: 0.55,
    [OPACITY[50]]: 0.5,
    [OPACITY[42]]: 0.42,
    [OPACITY[40]]: 0.4,
    [OPACITY[30]]: 0.3,
    [OPACITY[25]]: 0.25,
    [OPACITY[20]]: 0.2,
    [OPACITY[15]]: 0.15,
    [OPACITY[10]]: 0.1,
    [OPACITY[8]]: 0.08,
    [OPACITY[7]]: 0.07,
    [OPACITY[6]]: 0.06,
    [OPACITY[5]]: 0.05,
    [OPACITY[4]]: 0.04,
    [OPACITY[0]]: 0.0,
  },
});
