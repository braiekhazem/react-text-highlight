import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), dts(), cssInjectedByJsPlugin()],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
      "@src": path.resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "react-text-highlight",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [/^react($|\/)/, /^react-dom($|\/)/, "rc-tooltip", "classnames"],
      output: {
        globals: {
          react: "React",
          "react/jsx-runtime": "ReactJSXRuntime",
          "react-dom": "ReactDOM",
          "rc-tooltip": "RcTooltip",
          classnames: "classnames",
        },
      },
    },
    sourcemap: false,
    emptyOutDir: false,
  },

  server: {
    port: 3000,
  },
});
