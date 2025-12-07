/**
 * Astro Configuration
 * @see https://astro.build/config
 */
import { defineConfig } from 'astro/config'

export default defineConfig({
  // Production URL - used for sitemap and canonical URLs
  site: 'https://thesubwaysurfers.vercel.app',

  // Minify HTML output (removes whitespace, comments)
  compressHTML: true,

  build: {
    // Inline all CSS into <style> tags - eliminates extra network request
    // Ideal for small sites where CSS < 10KB
    inlineStylesheets: 'always'
  },

  vite: {
    build: {
      // Enable CSS minification via esbuild
      cssMinify: true
    }
  }
})
