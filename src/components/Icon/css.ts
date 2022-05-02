import { createSpectrumStyle } from "/src/utils/styles";

const { createClass, createVar, addStyle } = createSpectrumStyle(MODULE_PATH);

export const ICON = {
  ROOT: createClass(),
  SRC: createVar(),
} as const;

const mask = `${ICON.SRC} 0 / 100% 100% no-repeat content-box`;

addStyle({
  [ICON.ROOT]: {
    mask,
    WebkitMask: mask,
  },
});
