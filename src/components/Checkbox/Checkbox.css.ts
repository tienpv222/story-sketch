import { GRAY, MOTION, SIZE } from "/src/directives/theme.css";
import { createSpectrumStyle } from "/src/utils/spectrum-style";

const { createClass, createVar, addStyle } = createSpectrumStyle(
  import.meta.url
);

export const CHECKBOX = createClass();
export const CHECKBOX_CHECKED = createClass();

export const CHECKBOX_INPUT = createClass();
export const CHECKBOX_BOX = createClass();
export const CHECKBOX_ICON = createClass();
export const CHECKBOX_LABEL = createClass();

export const CHECKBOX_SIZE = createVar();
export const CHECKBOX_PADDING = createVar();

addStyle({
  [CHECKBOX]: {
    [CHECKBOX_SIZE]: SIZE[175],
    [CHECKBOX_PADDING]: SIZE[25],
    position: "relative",
    display: "inline-flex",
  },

  [CHECKBOX_INPUT]: {
    display: "none",
  },

  [CHECKBOX_BOX]: {
    width: CHECKBOX_SIZE,
    height: CHECKBOX_SIZE,
    border: `${CHECKBOX_PADDING} solid ${GRAY[600]}`,
    borderRadius: SIZE[25],
    background: "white",
    transition: `${MOTION.MICRO} ${MOTION.IN_OUT}`,

    [`${CHECKBOX_INPUT}:checked ~ &`]: {
      borderWidth: `calc(${CHECKBOX_SIZE} / 2)`,
      background: GRAY[600],
    },
  },

  [CHECKBOX_ICON]: {
    width: CHECKBOX_SIZE,
    height: CHECKBOX_SIZE,
    padding: CHECKBOX_PADDING,
    position: "absolute",
    transform: "scale(0)",
    color: "transparent",
    transition: `${MOTION.MICRO} ${MOTION.IN_OUT}`,

    [`${CHECKBOX_INPUT}:checked ~ &`]: {
      color: "white",
      transform: "none",
    },
  },
});
