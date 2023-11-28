import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      // Specify ESLint options here
      cache: false, // Disable ESLint caching
      include: ["src/**/*.js", "src/**/*.jsx"], // Files to lint
      exclude: ["node_modules", "**/*.json"], // Files to ignore
      // ...other ESLint options
    }),
  ],
});
