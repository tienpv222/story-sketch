import { createModuleStyle } from "./style";

export const SPECTRUM_STYLE_LAYER = "spectrum";

export const createSpectrumStyle = (moduleUrl: string) => {
  return createModuleStyle(moduleUrl, SPECTRUM_STYLE_LAYER);
};
