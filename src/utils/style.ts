import { glob, CSSAttribute } from "goober";
import hash from "@emotion/hash";

export const createModuleUid = (moduleUrl: string) => {
  if (import.meta.env.DEV) {
    moduleUrl = moduleUrl.match(/[^?]+/)?.[0] ?? moduleUrl;
  }

  let id = 0;
  return () => hash(`${moduleUrl}${++id}`);
};

export const createModuleStyle = (moduleUrl: string, layer: string) => {
  const createVarUid = createModuleUid(moduleUrl);
  const createClassUid = createModuleUid(moduleUrl);

  return {
    createVar: () => `--${createVarUid()}`,
    createClass: () => `_${createClassUid()}`,
    addStyle(style: CSSAttribute | string) {
      addStyle(style, layer);
    },
  };
};

export const addStyle = (style: CSSAttribute | string, layer: string) => {
  if (typeof style === "string") {
    glob(`@layer ${layer} {${style}}`);
  } else {
    glob({
      [`@layer ${layer}`]: resolveStyle(style),
    });
  }
};

export const resolveStyle = (style: CSSAttribute): CSSAttribute => {
  return Object.fromEntries(
    Object.entries(style).map(([key, value]) => {
      key = key.replaceAll("_", "._");

      if (typeof value === "object" && value !== null) {
        value = resolveStyle(value);
      } else if (typeof value === "string") {
        value = value.replaceAll(/--[a-z0-9]+/g, "var($&)");
      }

      return [key, value];
    })
  );
};
