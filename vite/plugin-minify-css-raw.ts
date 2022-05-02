import { minify } from "csso";
import MagicString from "magic-string";
import { Plugin } from "vite";
import fs from "fs";

export const IDENTIFIER_REGEX = /\.css\?raw$/;

export const pluginCssCleanRaw = (): Plugin => {
  return {
    name: "vite-plugin-minify-css-raw",
    transform(_code, id) {
      if (!IDENTIFIER_REGEX.test(id)) return null;

      const css = fs.readFileSync(id.slice(0, -4));
      const styles = minify(String(css)).css;
      const stringified = JSON.stringify(styles);
      const codeStr = new MagicString(`export default ${stringified};`);

      return {
        code: codeStr.toString(),
        map: codeStr.generateMap(),
      };
    },
  };
};
