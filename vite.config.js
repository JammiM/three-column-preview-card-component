import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [],
  server: {
    port: 3000,
  },
  base: process.env.VITE_BASE || "/three-column-preview-card-component",
});
