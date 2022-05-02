// https://spectrum.adobe.com/page/motion/

import { THEME } from "./theme.css";
import { createSpectrumStyle } from "/src/utils/styles";

const { createVar, addStyle } = createSpectrumStyle(MODULE_PATH);

export const MOTION = {
  OUT: createVar(),
  IN: createVar(),
  IN_OUT: createVar(),
  MICRO: createVar(),
  MACRO: createVar(),
} as const;

addStyle({
  [THEME.ROOT]: {
    [MOTION.OUT]: "cubic-bezier(0, 0, 0.4, 1)",
    [MOTION.IN]: "cubic-bezier(0.5, 0, 1, 1)",
    [MOTION.IN_OUT]: "cubic-bezier(0.45, 0, 0.4, 1)",
    [MOTION.MICRO]: "130ms",
    [MOTION.MACRO]: "250ms",
  },
});
