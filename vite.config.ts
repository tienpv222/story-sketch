import { defineConfig } from "vite";
import pluginSolid from "vite-plugin-solid";
import pluginAutoImport from "unplugin-auto-import/vite";
import pluginIcons from "unplugin-icons/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";

const transformIcon = (svg: string) => {
  return svg.replace("<svg", '<svg fill="currentColor"');
};

export default defineConfig({
  plugins: [
    pluginSolid(),
    pluginAutoImport({
      imports: {
        "/src/directives/theme": ["theme"],
      },
      dts: false,
    }),
    pluginIcons({
      compiler: "solid",
      customCollections: {
        "spectrum-workflow": FileSystemIconLoader(
          "./node_modules/@adobe/spectrum-css-workflow-icons/18",
          transformIcon
        ),
        "spectrum-ui": FileSystemIconLoader(
          "./node_modules/@spectrum-css/icon/medium",
          transformIcon
        ),
      },
    }),
  ],
});
