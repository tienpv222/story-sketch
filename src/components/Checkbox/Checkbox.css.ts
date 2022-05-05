import { APPEARED } from "../Appear/Appear.css";
import { BLUE, FONT, GRAY, MOTION, RED, SIZE } from "/src/directives/theme";
import { createSpectrumStyle } from "/src/utils/styles";

const { createClass, createVar, addStyle } = createSpectrumStyle(MODULE_PATH);

export const CHECKBOX = {
  ROOT: createClass(),
  INPUT: createClass(),
  ICON: createClass(),
  LABEL: createClass(),

  SELECTED: createClass(),
  EMPHASIZED: createClass(),
  READ_ONLY: createClass(),

  INPUT_SIZE: createVar(),
  INPUT_RADIUS: createVar(),
  INPUT_COLOR: createVar(),
  INPUT_COLOR_DEFAULT: createVar(),
  INPUT_COLOR_HOVER: createVar(),
  INPUT_COLOR_DOWN: createVar(),
  INPUT_MEDIUM: createVar(),
  INPUT_DARK: createVar(),
  LABEL_COLOR_DEFAULT: createVar(),
  LABEL_COLOR_HOVER: createVar(),

  ICON_TRANSITION: "transform, background-color",
};

addStyle({
  [CHECKBOX.ROOT]: {
    [CHECKBOX.INPUT_SIZE]: SIZE[175],
    [CHECKBOX.INPUT_RADIUS]: SIZE[25],
    height: SIZE[400],
    display: "inline-flex",
    alignItems: "center",
    userSelect: "none",
  },

  [CHECKBOX.READ_ONLY]: {
    pointerEvents: "none",
    userSelect: "text",
  },

  [CHECKBOX.INPUT]: {
    [CHECKBOX.INPUT_COLOR]: CHECKBOX.INPUT_COLOR_DEFAULT,
    [CHECKBOX.INPUT_COLOR_DEFAULT]: GRAY[700],
    [CHECKBOX.INPUT_COLOR_HOVER]: GRAY[800],
    [CHECKBOX.INPUT_COLOR_DOWN]: GRAY[900],
    width: CHECKBOX.INPUT_SIZE,
    height: CHECKBOX.INPUT_SIZE,
    position: "relative",
    border: `${CHECKBOX.INPUT_RADIUS} solid ${CHECKBOX.INPUT_COLOR}`,
    borderRadius: CHECKBOX.INPUT_RADIUS,
    background: GRAY[75],
    transitionProperty: "border-width, background",
    transitionDuration: MOTION.MICRO,
    transitionTimingFunction: MOTION.IN_OUT,

    "&:focus-visible": {
      outline: `${SIZE[25]} solid ${BLUE[400]}`,
      outlineOffset: SIZE[25],
    },

    [`${CHECKBOX.ROOT}:hover > &, &:focus-visible`]: {
      [CHECKBOX.INPUT_COLOR]: CHECKBOX.INPUT_COLOR_HOVER,
    },

    [`${CHECKBOX.ROOT}:active > &, &&:active`]: {
      [CHECKBOX.INPUT_COLOR]: CHECKBOX.INPUT_COLOR_DOWN,
    },

    "&:checked, &:indeterminate": {
      borderWidth: `calc(${CHECKBOX.INPUT_SIZE} / 2)`,
      background: CHECKBOX.INPUT_COLOR,

      [`${CHECKBOX.EMPHASIZED} > &`]: {
        [CHECKBOX.INPUT_COLOR_DEFAULT]: BLUE[500],
        [CHECKBOX.INPUT_COLOR_HOVER]: BLUE[600],
        [CHECKBOX.INPUT_COLOR_DOWN]: BLUE[700],
      },
    },

    "&&:invalid": {
      [CHECKBOX.INPUT_COLOR_DEFAULT]: RED[500],
      [CHECKBOX.INPUT_COLOR_HOVER]: RED[600],
      [CHECKBOX.INPUT_COLOR_DOWN]: RED[700],
    },

    "&&:disabled": {
      [CHECKBOX.INPUT_COLOR]: GRAY[400],
    },
  },

  [CHECKBOX.ICON]: {
    width: CHECKBOX.INPUT_SIZE,
    height: CHECKBOX.INPUT_SIZE,
    marginLeft: `calc(-1 * ${CHECKBOX.INPUT_SIZE})`,
    padding: CHECKBOX.INPUT_RADIUS,
    transform: "scale(0)",
    transitionProperty: CHECKBOX.ICON_TRANSITION,
    transitionDuration: MOTION.MICRO,
    transitionTimingFunction: MOTION.IN_OUT,
    pointerEvents: "none",

    [`&${APPEARED}`]: {
      transform: "none",
      background: GRAY[75],
    },
  },

  [CHECKBOX.LABEL]: {
    [CHECKBOX.LABEL_COLOR_DEFAULT]: GRAY[800],
    [CHECKBOX.LABEL_COLOR_HOVER]: GRAY[900],
    paddingLeft: SIZE[125],
    fontSize: FONT[100],
    color: CHECKBOX.LABEL_COLOR_DEFAULT,

    [`${CHECKBOX.ROOT}:where(:hover, :active) > &,
      ${CHECKBOX.INPUT}:where(:active, :focus-visible) ~ &`]: {
      color: CHECKBOX.LABEL_COLOR_HOVER,
    },

    [`${CHECKBOX.INPUT}:invalid ~ &`]: {
      [CHECKBOX.LABEL_COLOR_DEFAULT]: RED[600],
      [CHECKBOX.LABEL_COLOR_HOVER]: RED[700],
    },

    [`${CHECKBOX.INPUT}:disabled ~ &`]: {
      color: GRAY[500],
    },
  },
});
