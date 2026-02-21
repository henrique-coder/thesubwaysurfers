import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://subwaysurfers.henriquecoder.com",
  compressHTML: true,
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
