import { cdn } from "./cdn";
import vue from "@vitejs/plugin-vue";
import { viteBuildInfo } from "./info";
import svgLoader from "vite-svg-loader";
import { configCompressPlugin } from "./compress";
import removeNoMatch from "vite-plugin-router-warn";
import { visualizer } from "rollup-plugin-visualizer";
import removeConsole from "vite-plugin-remove-console";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";
import vueJsx from "@vitejs/plugin-vue-jsx";
import dynamicImport from "vite-plugin-dynamic-import";
import { nodePolyfills } from "vite-plugin-node-polyfills";
export function getPluginsList(VITE_CDN, VITE_COMPRESSION) {
  const lifecycle = process.env.npm_lifecycle_event;
  return [
    vue(),
    nodePolyfills(),
    dynamicImport({
      filter(id) {
        // `node_modules` is exclude by default, so we need to include it explicitly
        // https://github.com/vite-plugin/vite-plugin-dynamic-import/blob/v1.3.0/src/index.ts#L133-L135
        if (id.includes("/node_modules/foo")) {
          return true;
        }
      }
    }),
    vueJsx(),
    AutoImport({
      resolvers: [VantResolver()]
    }),
    Components({
      resolvers: [VantResolver()]
    }),
    // 按下Command(⌘)+Shift(⇧)，然后点击页面元素会自动打开本地IDE并跳转到对应的代码位置
    viteBuildInfo(),
    /**
     * 开发环境下移除非必要的vue-router动态路由警告No match found for location with path
     * 非必要具体看 https://github.com/vuejs/router/issues/521 和 https://github.com/vuejs/router/issues/359
     * vite-plugin-router-warn只在开发环境下启用，只处理vue-router文件并且只在服务启动或重启时运行一次，性能消耗可忽略不计
     */
    removeNoMatch(),
    svgLoader(),
    VITE_CDN ? cdn : null,
    configCompressPlugin(VITE_COMPRESSION),
    // 线上环境删除console
    removeConsole(),
    // 打包分析
    lifecycle === "report"
      ? visualizer({ open: true, brotliSize: true, filename: "report.html" })
      : null
  ];
}
