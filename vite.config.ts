import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@Components": path.resolve(__dirname, "src/Components"),
      "@Assets": path.resolve(__dirname, "src/assets"),
      "@Store": path.resolve(__dirname, "src/Store"),
      "@Layout": path.resolve(__dirname, "src/Layout"),
      "@app-types": path.resolve(__dirname, "/src/types"),
    },
  },
  plugins: [react(), tailwindcss()],
});
