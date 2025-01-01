import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { writeFileSync, readFileSync } from "fs";

// Replace <repository-name> with your GitHub repository name
export default defineConfig({
  server: {
    host: "0.0.0.0",
  },
  plugins: [
    react(),
    {
      name: "create-404",
      closeBundle() {
        const indexHtml = resolve(__dirname, "dist/index.html");
        const content = readFileSync(indexHtml, "utf-8");
        writeFileSync(resolve(__dirname, "dist/404.html"), content);
      },
    },
  ],
  base: "/portfolio/",
});
