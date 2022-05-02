import { THEME } from "../theme.css";
import { createBaseColor, createColor } from "./color";
import { createSpectrumStyle } from "/src/utils/styles";

const { createRgb, addStyle } = createSpectrumStyle(MODULE_PATH);

export const BASE_RED = createBaseColor(createRgb);
export const BASE_STATIC_RED = createBaseColor(createRgb);
export const RED = createColor(createRgb);
export const STATIC_RED = {
  ...createColor(createRgb),
  800: createRgb(),
} as const;

addStyle({
  [THEME.ROOT]: {
    [BASE_STATIC_RED[100]]: "255, 242, 240",
    [BASE_STATIC_RED[200]]: "255, 230, 225",
    [BASE_STATIC_RED[300]]: "255, 214, 206",
    [BASE_STATIC_RED[400]]: "255, 191, 178",
    [BASE_STATIC_RED[500]]: "255, 164, 147",
    [BASE_STATIC_RED[600]]: "255, 133, 111",
    [BASE_STATIC_RED[700]]: "250, 100, 78",
    [BASE_STATIC_RED[800]]: "237, 64, 48",
    [BASE_STATIC_RED[900]]: "217, 28, 21",
    [BASE_STATIC_RED[1000]]: "187, 2, 2",
    [BASE_STATIC_RED[1100]]: "154, 0, 0",
    [BASE_STATIC_RED[1200]]: "124, 0, 0",
    [BASE_STATIC_RED[1300]]: "97, 0, 0",
    [BASE_STATIC_RED[1400]]: "77, 0, 0",

    [STATIC_RED[400]]: BASE_STATIC_RED[800],
    [STATIC_RED[500]]: BASE_STATIC_RED[900],
    [STATIC_RED[600]]: BASE_STATIC_RED[1000],
    [STATIC_RED[700]]: BASE_STATIC_RED[1100],
    [STATIC_RED[800]]: BASE_STATIC_RED[1200],
  },

  [THEME.LIGHT]: {
    [BASE_RED[100]]: "255, 235, 231",
    [BASE_RED[200]]: "255, 221, 214",
    [BASE_RED[300]]: "255, 205, 195",
    [BASE_RED[400]]: "255, 183, 169",
    [BASE_RED[500]]: "255, 155, 136",
    [BASE_RED[600]]: "255, 124, 101",
    [BASE_RED[700]]: "247, 92, 70",
    [BASE_RED[800]]: "234, 56, 41",
    [BASE_RED[900]]: "211, 21, 16",
    [BASE_RED[1000]]: "180, 0, 0",
    [BASE_RED[1100]]: "147, 0, 0",
    [BASE_RED[1200]]: "116, 0, 0",
    [BASE_RED[1300]]: "89, 0, 0",
    [BASE_RED[1400]]: "67, 0, 0",

    [RED[400]]: BASE_RED[800],
    [RED[500]]: BASE_RED[900],
    [RED[600]]: BASE_RED[1000],
    [RED[700]]: BASE_RED[1100],
  },

  [THEME.DARK]: {
    [BASE_RED[100]]: "123, 0, 0",
    [BASE_RED[200]]: "141, 0, 0",
    [BASE_RED[300]]: "165, 0, 0",
    [BASE_RED[400]]: "190, 4, 3",
    [BASE_RED[500]]: "215, 25, 19",
    [BASE_RED[600]]: "234, 56, 41",
    [BASE_RED[700]]: "246, 88, 67",
    [BASE_RED[800]]: "255, 117, 94",
    [BASE_RED[900]]: "255, 149, 129",
    [BASE_RED[1000]]: "255, 176, 161",
    [BASE_RED[1100]]: "255, 201, 189",
    [BASE_RED[1200]]: "255, 222, 216",
    [BASE_RED[1300]]: "255, 241, 238",
    [BASE_RED[1400]]: "255, 255, 255",

    [RED[400]]: BASE_RED[600],
    [RED[500]]: BASE_RED[700],
    [RED[600]]: BASE_RED[800],
    [RED[700]]: BASE_RED[900],
  },
});
