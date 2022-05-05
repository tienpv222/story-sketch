import pluginAutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";
import pluginSolid from "vite-plugin-solid";
import { pluginCssCleanRaw } from "./vite/plugin-minify-css-raw";
import { pluginModulePath } from "./vite/plugin-module-path";

export default defineConfig({
  plugins: [
    pluginSolid(),
    pluginCssCleanRaw(),
    pluginModulePath(),
    pluginAutoImport({
      imports: {
        "/src/directives/theme": ["theme"],
        "/src/directives/classes": ["classes"],
        "/src/directives/validity": ["validity"],
      },
      dts: false,
    }),
  ],
});
