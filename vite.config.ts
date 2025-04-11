import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  plugins: [reactRouter(), tsconfigPaths()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
