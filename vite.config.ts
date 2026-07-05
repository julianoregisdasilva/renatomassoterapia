import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
 build: {
    // Relative path string (relative to project root)
    outDir: "dist",
    // Optional: Forces Vite to empty the folder before building
    emptyOutDir: true,
  },

  // Tells Vite the base public path when served in development or production, ensuring assets are correctly loaded on GitHub Pages.
  base: "/",  
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
