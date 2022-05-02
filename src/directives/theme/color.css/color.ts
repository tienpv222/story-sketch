import { StyleRgb } from "/src/utils/style";

export const createBaseColor = (createRgb: () => StyleRgb) => {
  return {
    100: createRgb(),
    200: createRgb(),
    300: createRgb(),
    400: createRgb(),
    500: createRgb(),
    600: createRgb(),
    700: createRgb(),
    800: createRgb(),
    900: createRgb(),
    1000: createRgb(),
    1100: createRgb(),
    1200: createRgb(),
    1300: createRgb(),
    1400: createRgb(),
  } as const;
};

export const createColor = (createRgb: () => StyleRgb) => {
  return {
    400: createRgb(),
    500: createRgb(),
    600: createRgb(),
    700: createRgb(),
  } as const;
};
