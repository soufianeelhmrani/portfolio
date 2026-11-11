import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base keeps the build portable (GitHub Pages, Netlify, Vercel, sub-folders).
export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
  },
});
