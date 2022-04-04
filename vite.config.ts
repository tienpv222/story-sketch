import { defineConfig } from "vite";
import pluginSolid from "vite-plugin-solid";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [pluginSolid(), vanillaExtractPlugin()],
});
