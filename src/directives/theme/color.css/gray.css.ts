import { THEME } from "../theme.css";
import { createSpectrumStyle } from "/src/utils/styles";

const { createRgb, addStyle } = createSpectrumStyle(MODULE_PATH);

const createGray = () => {
  return {
    50: createRgb(),
    75: createRgb(),
    100: createRgb(),
    200: createRgb(),
    300: createRgb(),
    400: createRgb(),
    500: createRgb(),
    600: createRgb(),
    700: createRgb(),
    800: createRgb(),
    900: createRgb(),
  } as const;
};

export const GRAY = createGray();

export const STATIC_GRAY = createGray();

addStyle({
  [THEME.ROOT]: {
    [STATIC_GRAY[50]]: "254, 254, 254",
    [STATIC_GRAY[75]]: "254, 254, 254",
    [STATIC_GRAY[100]]: "254, 254, 254",
    [STATIC_GRAY[200]]: "235, 235, 235",
    [STATIC_GRAY[300]]: "217, 217, 217",
    [STATIC_GRAY[400]]: "179, 179, 179",
    [STATIC_GRAY[500]]: "146, 146, 146",
    [STATIC_GRAY[600]]: "110, 110, 110",
    [STATIC_GRAY[700]]: "71, 71, 71",
    [STATIC_GRAY[800]]: "34, 34, 34",
    [STATIC_GRAY[900]]: "0, 0, 0",
  },

  [THEME.LIGHT]: {
    [GRAY[50]]: "255, 255, 255",
    [GRAY[75]]: "253, 253, 253",
    [GRAY[100]]: "248, 248, 248",
    [GRAY[200]]: "230, 230, 230",
    [GRAY[300]]: "213, 213, 213",
    [GRAY[400]]: "177, 177, 177",
    [GRAY[500]]: "144, 144, 144",
    [GRAY[600]]: "109, 109, 109",
    [GRAY[700]]: "70, 70, 70",
    [GRAY[800]]: "34, 34, 34",
    [GRAY[900]]: "0, 0, 0",
  },

  [THEME.DARK]: {
    [GRAY[50]]: "29, 29, 29",
    [GRAY[75]]: "38, 38, 38",
    [GRAY[100]]: "50, 50, 50",
    [GRAY[200]]: "63, 63, 63",
    [GRAY[300]]: "84, 84, 84",
    [GRAY[400]]: "112, 112, 112",
    [GRAY[500]]: "144, 144, 144",
    [GRAY[600]]: "178, 178, 178",
    [GRAY[700]]: "209, 209, 209",
    [GRAY[800]]: "235, 235, 235",
    [GRAY[900]]: "255, 255, 255",
  },
});
