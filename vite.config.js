import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    target: "esnext",
    minify: "esbuild",
    cssMinify: true,
  },
  server: { port: 3000, open: true },
});
