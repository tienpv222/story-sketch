import { THEME } from "../theme.css";
import { createBaseColor, createColor } from "./color";
import { createSpectrumStyle } from "/src/utils/styles";

const { createRgb, addStyle } = createSpectrumStyle(MODULE_PATH);

export const BASE_BLUE = createBaseColor(createRgb);

export const BASE_STATIC_BLUE = createBaseColor(createRgb);

export const BLUE = createColor(createRgb);

export const STATIC_BLUE = {
  ...createColor(createRgb),
  200: createRgb(),
  300: createRgb(),
  800: createRgb(),
} as const;

addStyle({
  [THEME.ROOT]: {
    [BASE_STATIC_BLUE[100]]: "237, 248, 255",
    [BASE_STATIC_BLUE[200]]: "214, 238, 255",
    [BASE_STATIC_BLUE[300]]: "193, 228, 255",
    [BASE_STATIC_BLUE[400]]: "161, 212, 253",
    [BASE_STATIC_BLUE[500]]: "130, 193, 251",
    [BASE_STATIC_BLUE[600]]: "98, 173, 247",
    [BASE_STATIC_BLUE[700]]: "66, 151, 244",
    [BASE_STATIC_BLUE[800]]: "27, 127, 245",
    [BASE_STATIC_BLUE[900]]: "4, 105, 227",
    [BASE_STATIC_BLUE[1000]]: "0, 87, 190",
    [BASE_STATIC_BLUE[1100]]: "0, 72, 153",
    [BASE_STATIC_BLUE[1200]]: "0, 57, 120",
    [BASE_STATIC_BLUE[1300]]: "0, 43, 92",
    [BASE_STATIC_BLUE[1400]]: "0, 33, 71",

    [STATIC_BLUE[200]]: BASE_STATIC_BLUE[500],
    [STATIC_BLUE[300]]: BASE_STATIC_BLUE[600],
    [STATIC_BLUE[400]]: BASE_STATIC_BLUE[700],
    [STATIC_BLUE[500]]: BASE_STATIC_BLUE[800],
    [STATIC_BLUE[600]]: BASE_STATIC_BLUE[900],
    [STATIC_BLUE[700]]: BASE_STATIC_BLUE[1000],
    [STATIC_BLUE[800]]: BASE_STATIC_BLUE[1100],
  },

  [THEME.LIGHT]: {
    [BASE_BLUE[100]]: "224, 242, 255",
    [BASE_BLUE[200]]: "202, 232, 255",
    [BASE_BLUE[300]]: "181, 222, 255",
    [BASE_BLUE[400]]: "150, 206, 253",
    [BASE_BLUE[500]]: "120, 187, 250",
    [BASE_BLUE[600]]: "89, 167, 246",
    [BASE_BLUE[700]]: "56, 146, 243",
    [BASE_BLUE[800]]: "20, 122, 243",
    [BASE_BLUE[900]]: "2, 101, 220",
    [BASE_BLUE[1000]]: "0, 84, 182",
    [BASE_BLUE[1100]]: "0, 68, 145",
    [BASE_BLUE[1200]]: "0, 53, 113",
    [BASE_BLUE[1300]]: "0, 39, 84",
    [BASE_BLUE[1400]]: "0, 28, 60",

    [BLUE[400]]: BASE_BLUE[800],
    [BLUE[500]]: BASE_BLUE[900],
    [BLUE[600]]: BASE_BLUE[1000],
    [BLUE[700]]: BASE_BLUE[1100],
  },

  [THEME.DARK]: {
    [BASE_BLUE[100]]: "0, 56, 119",
    [BASE_BLUE[200]]: "0, 65, 138",
    [BASE_BLUE[300]]: "0, 77, 163",
    [BASE_BLUE[400]]: "0, 89, 194",
    [BASE_BLUE[500]]: "3, 103, 224",
    [BASE_BLUE[600]]: "19, 121, 243",
    [BASE_BLUE[700]]: "52, 143, 244",
    [BASE_BLUE[800]]: "84, 163, 246",
    [BASE_BLUE[900]]: "114, 183, 249",
    [BASE_BLUE[1000]]: "143, 202, 252",
    [BASE_BLUE[1100]]: "174, 219, 254",
    [BASE_BLUE[1200]]: "204, 233, 255",
    [BASE_BLUE[1300]]: "232, 246, 255",
    [BASE_BLUE[1400]]: "255, 255, 255",

    [BLUE[400]]: BASE_BLUE[700],
    [BLUE[500]]: BASE_BLUE[800],
    [BLUE[600]]: BASE_BLUE[900],
    [BLUE[700]]: BASE_BLUE[1000],
  },
});
