import { Plugin } from "vite";
import path from "path";
import MagicString from "magic-string";

export const MODULE_PATH_IDENTIFIER = "MODULE_PATH";
export const MODULE_PATH_REGEX = RegExp(MODULE_PATH_IDENTIFIER, "g");
export const DEFAULT_ROOT = "src";
export const DEFAULT_FILTER = /\.tsx?$/;

export const pluginModulePath = (options?: {
  root?: string;
  filter?: RegExp;
}): Plugin => {
  let root = "";
  let build = false;
  let sourcemap = false;
  const filter = options?.filter ?? DEFAULT_FILTER;

  return {
    name: "vite-plugin-module-path",
    configResolved(config) {
      root = path.join(config.root, options?.root ?? DEFAULT_ROOT);
      build = config.isProduction;
      sourcemap = !!config.build.sourcemap;
    },
    transform(code, id) {
      const trimmed = id.replace(/\?.*/, "");
      const modulePath = path.relative(root, trimmed);

      if (modulePath.startsWith(".")) return null;
      if (!filter.test(modulePath)) return null;

      const matches = [...code.matchAll(MODULE_PATH_REGEX)];
      if (!matches.length) return null;

      const stringified = JSON.stringify(modulePath);
      if (!build || !sourcemap) {
        return code.replaceAll(MODULE_PATH_IDENTIFIER, stringified);
      }

      const codeStr = new MagicString(code);
      for (const { index } of matches) {
        codeStr.overwrite(
          index!,
          index! + MODULE_PATH_IDENTIFIER.length,
          stringified
        );
      }

      return {
        code: codeStr.toString(),
        map: codeStr.generateMap(),
      };
    },
  };
};

declare global {
  const MODULE_PATH: string;
}
