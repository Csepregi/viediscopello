import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Using ES Module export
export default defineConfig({
  server: {
    port: 8080,
    host: '0.0.0.0'
  },
  plugins: [reactRouter(), tsconfigPaths()],
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
