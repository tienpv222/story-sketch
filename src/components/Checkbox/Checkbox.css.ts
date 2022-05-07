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
  INPUT_COLOR: createVar(),
  INPUT_COLOR_DEFAULT: createVar(),
  INPUT_COLOR_HOVER: createVar(),
  INPUT_COLOR_ACTIVE: createVar(),
  LABEL_COLOR_DEFAULT: createVar(),
  LABEL_COLOR_HOVER: createVar(),

  ICON_TRANSITION: "transform, background-color",
} as const;

addStyle({
  [CHECKBOX.ROOT]: {
    [CHECKBOX.INPUT_SIZE]: SIZE[175],
    height: SIZE[400],
    position: "relative",
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
    [CHECKBOX.INPUT_COLOR_ACTIVE]: GRAY[900],
    width: CHECKBOX.INPUT_SIZE,
    height: CHECKBOX.INPUT_SIZE,
    border: `${SIZE[25]} solid ${CHECKBOX.INPUT_COLOR}`,
    borderRadius: SIZE[25],
    outline: `${SIZE[25]} solid transparent`,
    outlineOffset: SIZE[25],
    boxShadow: `inset 0 0 ${CHECKBOX.INPUT_COLOR}`,
    background: GRAY[75],
    transition: "border, outline, box-shadow, background",
    transitionDuration: MOTION.MICRO,

    "&:focus-visible": {
      outlineColor: BLUE[400],
    },

    [`${CHECKBOX.ROOT}:hover > &, &:focus-visible`]: {
      [CHECKBOX.INPUT_COLOR]: CHECKBOX.INPUT_COLOR_HOVER,
    },

    [`${CHECKBOX.ROOT}:active > &, &&:active`]: {
      [CHECKBOX.INPUT_COLOR]: CHECKBOX.INPUT_COLOR_ACTIVE,
    },

    "&:where(:checked, :indeterminate)": {
      boxShadow: `inset 0 0 0 calc(${CHECKBOX.INPUT_SIZE} / 2 - ${SIZE[25]}) ${CHECKBOX.INPUT_COLOR}`,
      background: CHECKBOX.INPUT_COLOR,

      [`${CHECKBOX.EMPHASIZED} > &`]: {
        [CHECKBOX.INPUT_COLOR_DEFAULT]: BLUE[500],
        [CHECKBOX.INPUT_COLOR_HOVER]: BLUE[600],
        [CHECKBOX.INPUT_COLOR_ACTIVE]: BLUE[700],
      },
    },

    "&&:invalid": {
      [CHECKBOX.INPUT_COLOR_DEFAULT]: RED[500],
      [CHECKBOX.INPUT_COLOR_HOVER]: RED[600],
      [CHECKBOX.INPUT_COLOR_ACTIVE]: RED[700],
    },

    "&&:disabled": {
      [CHECKBOX.INPUT_COLOR]: GRAY[400],
    },
  },

  [CHECKBOX.ICON]: {
    width: CHECKBOX.INPUT_SIZE,
    height: CHECKBOX.INPUT_SIZE,
    padding: SIZE[25],
    position: "absolute",
    background: GRAY[75],
    transitionProperty: "background, transform",
    transitionDuration: MOTION.MICRO,
    pointerEvents: "none",

    [`&:not(${APPEARED})`]: {
      transform: "scale(0)",
      background: "none",
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
