// store/index.ts
import { createPinia } from "pinia";

// @ts-ignore
import piniaPluginPersist from "pinia-plugin-persist";
// 实例化pinia
export const pinia = createPinia();
pinia.use(piniaPluginPersist);
// 统一导出整个modules下的所有store
// 导出每个store它的一切逻辑
export * from "./modules/user.module.js"; // 用户信息
export * from "./modules/shoppingCart.module.js"; // 购物车
export * from "./modules/userAppConfig.module.js"; // app 参数配置
export * from "./modules/config.module.js"; // app 参数配置
