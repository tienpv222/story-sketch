import { createModuleStyle } from "./style";

export enum StyleLayer {
  SPECTRUM = "spectrum",
  DEMO = "demo",
  APP = "app",
}

export const createSpectrumStyle = (modulePath: string) => {
  return createModuleStyle(modulePath, StyleLayer.SPECTRUM);
};

export const createDemoStyle = (modulePath: string) => {
  return createModuleStyle(modulePath, StyleLayer.DEMO);
};

export const createAppStyle = (modulePath: string) => {
  return createModuleStyle(modulePath, StyleLayer.APP);
};
