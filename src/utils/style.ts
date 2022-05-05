import { CSSObject, injectGlobal } from "@emotion/css";
import hash from "@emotion/hash";

export type StyleClass = `_${string}`;
export type StyleVar = `--${string}`;
export type StyleRgb = `--rgb-${string}`;

const addStyle = (layer: string, style: string | CSSObject) => {
  if (typeof style === "string") {
    injectGlobal(`@layer ${layer} {${style}}`);
  } else {
    injectGlobal({
      [`@layer ${layer}`]: resolveStyle(style),
    });
  }
};

const resolveStyle = (style: CSSObject): CSSObject => {
  return Object.fromEntries(
    Object.entries(style).map(([key, value]) => {
      key = key.replaceAll("_", "._");

      if (typeof value === "string") {
        if (!/^--rgb-/.test(key)) {
          value = value.replaceAll(
            /(rgba\()?(--rgb-[\w\d]+)/g,
            (match, rgba, rgb) => (rgba ? match : `rgb(${rgb})`)
          );
        }

        value = value.replaceAll(/--[\w\d-]+/g, "var($&)");
      } else if (typeof value === "object" && value !== null) {
        value = resolveStyle(value as CSSObject);
      }

      return [key, value];
    })
  );
};

export const createModuleStyle = (modulePath: string, layer: string) => {
  let id = 0;
  const createUid = () => hash(`${modulePath}${++id}`);

  return {
    createClass: () => `_${createUid()}` as StyleClass,
    createVar: () => `--${createUid()}` as StyleVar,
    createRgb: () => `--rgb-${createUid()}` as StyleRgb,
    addStyle: (style: string | CSSObject) => addStyle(layer, style),
  };
};
