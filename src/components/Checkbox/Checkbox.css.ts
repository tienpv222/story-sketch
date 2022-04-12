import { FONT, GRAY, MOTION, SIZE } from "/src/directives/theme.css";
import { createSpectrumStyle } from "/src/utils/spectrum-style";

const { createClass, createVar, addStyle } = createSpectrumStyle(
  import.meta.url
);

export const CHECKBOX = createClass();
export const CHECKBOX_INTERDETERMINATE = createClass();
export const CHECKBOX_EMPHASIZED = createClass();
export const CHECKBOX_INVALID = createClass();

export const CHECKBOX_INPUT = createClass();
export const CHECKBOX_BOX = createClass();
export const CHECKBOX_ICON = createClass();
export const CHECKBOX_LABEL = createClass();

export const CHECKBOX_BOX_SIZE = createVar();
export const CHECKBOX_BOX_PADDING = createVar();
export const CHECKBOX_BOX_COLOR = createVar();
export const CHECKBOX_LABEL_COLOR = createVar();

addStyle({
  [CHECKBOX]: {
    [CHECKBOX_BOX_SIZE]: SIZE[175],
    [CHECKBOX_BOX_PADDING]: SIZE[25],
    [CHECKBOX_BOX_COLOR]: GRAY[600],
    [CHECKBOX_LABEL_COLOR]: GRAY[800],
    height: SIZE[400],
    display: "inline-flex",
    alignItems: "center",
    userSelect: "none",

    "&:hover": {
      [CHECKBOX_BOX_COLOR]: GRAY[700],
      [CHECKBOX_LABEL_COLOR]: GRAY[900],
    },

    "&:active": {
      [CHECKBOX_BOX_COLOR]: GRAY[800],
      [CHECKBOX_LABEL_COLOR]: GRAY[900],
    },
  },

  [CHECKBOX_INPUT]: {
    display: "none",
  },

  [CHECKBOX_BOX]: {
    width: CHECKBOX_BOX_SIZE,
    height: CHECKBOX_BOX_SIZE,
    border: `${CHECKBOX_BOX_PADDING} solid ${CHECKBOX_BOX_COLOR}`,
    borderRadius: SIZE[25],
    background: "white",
    transition: `${MOTION.MICRO} ${MOTION.IN_OUT}`,
  },

  [CHECKBOX_ICON]: {
    width: CHECKBOX_BOX_SIZE,
    height: CHECKBOX_BOX_SIZE,
    padding: CHECKBOX_BOX_PADDING,
    marginLeft: `calc(-1 * ${CHECKBOX_BOX_SIZE})`,
    transform: "scale(0)",
    color: "transparent",
    transition: `${MOTION.MICRO} ${MOTION.IN_OUT}`,
  },

  [CHECKBOX_LABEL]: {
    paddingLeft: SIZE[125],
    fontSize: FONT[100],
    color: CHECKBOX_LABEL_COLOR,
  },

  [`${CHECKBOX_INTERDETERMINATE}, ${CHECKBOX_INPUT}:checked ~`]: {
    [CHECKBOX_BOX]: {
      borderWidth: `calc(${CHECKBOX_BOX_SIZE} / 2)`,
      background: GRAY[600],
    },

    [CHECKBOX_ICON]: {
      color: "white",
      transform: "none",
    },
  },
});
