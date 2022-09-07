/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss.ts";

/// build打包📦配置
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  // npm run bulid的📦配置
  build: {
    rollupOptions,
    minify: "terser",
    sourcemap: true, // 输出单独 source文件
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
    //  cssCodeSplit 这个选项是为了决定在编译的时候是否要独立输出 css 当使用unocss的时候就需要将这个选项设为true
    cssCodeSplit: true, // 追加
  },
  // vite的插件配置
  plugins: [
    /// 使用@vitejs/plugin-vue插件 支持模版编译和sfc
    vue(),
    // 添加JSX插件
    vueJsx(),
    // 使用unoCss的原子化css 这里无需配置了 因为config/unocss.ts已经配置了 直接写成unocss即可
    // 引入已经写好的unocss
    Unocss(),
  ],
  // 使用vitest的配置
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});
