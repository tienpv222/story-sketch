import { CSSObject, injectGlobal } from "@emotion/css";
import hash from "@emotion/hash";

export type StyleClass = `_${string}`;
export type StyleVar = `--${string}`;
export type StyleRgb = `--rgb-${string}`;

export const createModuleUid = (modulePath: string) => {
  let id = 0;
  return () => hash(`${modulePath}${++id}`);
};

export const createModuleStyle = (moduleUrl: string, layer: string) => {
  const createUid = createModuleUid(moduleUrl);

  return {
    createClass: () => `_${createUid()}` as StyleClass,
    createVar: () => `--${createUid()}` as StyleVar,
    createRgb: () => `--rgb-${createUid()}` as StyleRgb,
    addStyle: (style: string | CSSObject) => addStyle(style, layer),
  };
};

export const addStyle = (style: string | CSSObject, layer: string) => {
  if (typeof style === "string") {
    injectGlobal(`@layer ${layer} {${style}}`);
  } else {
    injectGlobal({
      [`@layer ${layer}`]: resolveStyle(style),
    });
  }
};

export const resolveStyle = (style: CSSObject): CSSObject => {
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

export const createTokens = <TYPE, NAMES extends readonly (number | string)[]>(
  creator: () => TYPE,
  names: NAMES
) => {
  return Object.fromEntries(
    names.map((value) => [value, creator()])
  ) as Readonly<Record<NAMES[number], TYPE>>;
};
