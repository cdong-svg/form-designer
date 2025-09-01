import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";
import path from "node:path";

export default defineConfig(({ command }) => {
  const enableMock = command === "serve";
  return {
    base: "/form-designer/",
    plugins: [
      vue(),
      viteMockServe({
        mockPath: "mock",
        localEnabled: enableMock,
        prodEnabled: false,
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    build: {
      outDir: "docs",
    },
    server: {
      port: 5173,
      host: true,
    },
  };
});
