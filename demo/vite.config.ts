import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  resolve: {
    alias: {
      "@hazembraiek/react-text-highlight": path.resolve(
        __dirname,
        "../src/index.ts",
      ),
      "@src": path.resolve(__dirname, "../src"),
    },
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
