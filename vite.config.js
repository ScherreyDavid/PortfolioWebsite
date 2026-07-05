import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// @vitejs/plugin-react-swc uses SWC to transform JSX in .js/.jsx files without
// needing a separate babel config, which is more robust for a vanilla React 17
// codebase that has no babel.config.* (the babel-based plugin refused to
// transform JSX inside src/index.js during build).
// Port kept at 3000 so CRA-style `npm start` still lands on the same URL.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: false,
  },
  preview: {
    port: 3000,
  },
  optimizeDeps: {
    // These packages ship ESM/CJS mixes that benefit from prebundling.
    include: [
      "@tsparticles/react",
      "@tsparticles/slim",
      "react-pdf",
      "react-parallax-tilt",
      "typewriter-effect",
    ],
  },
  build: {
    sourcemap: false,
    outDir: "dist",
  },
});
