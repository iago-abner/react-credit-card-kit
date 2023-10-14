//vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc'

export default defineConfig ({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "library",

      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
  plugins: [react()],
});
