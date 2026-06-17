import { defineConfig } from "vite";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    visualizer({
      open: true, // Automatically opens the report in your browser after building
      filename: "stats.html", // Name of the file to be generated
      gzipSize: true, // Shows what the size will be after server compression
      brotliSize: true, // Shows optimized size for modern browsers
    }),
  ],
  server: {
    port: 3000,
  },
  css: {
    postcss: "./postcss.config.js",
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/scss/_variables.scss" as *;`,
      },
    },
  },
  build: {
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: process.env.VITE_BASE || "/three-column-preview-card-component",
});
