import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        // @/a/b === src/a/b
        find: "@/",
        replacement: `${path.resolve(__dirname, "src")}/`,
      },
      {
        // ~/a/b === src/a/b
        find: "~/",
        replacement: `${path.resolve(__dirname, "src")}/`,
      },
      {
        // ~mode  === node_modules/mode
        find: /~([^\/]+)/,
        replacement: `${path.resolve(__dirname, "node_modules/$1")}/`,
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        }),
      ],
    }),
  ],
});
