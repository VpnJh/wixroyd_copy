import { defineStore } from "pinia";
import { THEMEENUM } from "@/stores";
// @ts-ignore
export const useConfigStore = defineStore("appConfig", {
  state: () => ({
    theme: THEMEENUM.light,
    lang: "en"
  }),
  getters: {},
  actions: {
    changeLang(language) {
      this.lang = language;
    }
  },
  persist: {
    enabled: true // 这个配置代表存储生效，而且是整个store都存储
  }
});
