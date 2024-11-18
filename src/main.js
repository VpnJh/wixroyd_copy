import "@/assets/styles/main.css";
import "@/assets/styles/tailwind.css";
import { createApp } from "vue";
import router, { cacheWhiteList } from "./router";
import { pinia } from "@/stores";
import App from "./App.vue";
import { Lazyload } from "vant";
const app = createApp(App);
// 注册时可以配置额外的选项
app.use(Lazyload, {
  lazyComponent: true
});
app.config.globalProperties.$cacheWhiteList = cacheWhiteList;
app.use(pinia);
app.use(router);
app.mount("#app");
