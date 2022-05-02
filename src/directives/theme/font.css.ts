// https://spectrum.adobe.com/page/typography/

import { THEME } from "./theme.css";
import { createSpectrumStyle } from "/src/utils/styles";

const { createVar, addStyle } = createSpectrumStyle(MODULE_PATH);

export const FONT = {
  50: createVar(),
  75: createVar(),
  100: createVar(),
  200: createVar(),
  300: createVar(),
  400: createVar(),
  500: createVar(),
  600: createVar(),
  700: createVar(),
  800: createVar(),
  900: createVar(),
  1000: createVar(),
  1100: createVar(),
  1200: createVar(),
  1300: createVar(),
} as const;

addStyle({
  [THEME.ROOT]: {
    [FONT[50]]: "11px",
    [FONT[75]]: "12px",
    [FONT[100]]: "14px",
    [FONT[200]]: "16px",
    [FONT[300]]: "18px",
    [FONT[400]]: "20px",
    [FONT[500]]: "22px",
    [FONT[600]]: "25px",
    [FONT[700]]: "28px",
    [FONT[800]]: "32px",
    [FONT[900]]: "36px",
    [FONT[1000]]: "40px",
    [FONT[1100]]: "45px",
    [FONT[1200]]: "50px",
    [FONT[1300]]: "60px",
  },
});
