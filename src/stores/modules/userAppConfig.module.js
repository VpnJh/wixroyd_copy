// store/modules/user.ts
import { defineStore } from "pinia";
export const THEMEENUM = Object.freeze({
  light: "light",
  dark: "dark"
});
// @ts-ignore
export const useAppConfigStore = defineStore("appConfig", {
  state: () => ({
    theme: THEMEENUM.light,
    lang: "en",
    chatBlock: false
  }),
  getters: {
    getTheme: state => state.theme,
    getLang: state => state.lang,
    getChatBlock: state => state.chatBlock
  },
  actions: {
    changeChatBlock(isBoolean) {
      this.chatBlock = isBoolean;
    },
    changeLang(language) {
      this.lang = language;
    }
  },
  persist: {
    enabled: true // 这个配置代表存储生效，而且是整个store都存储
  }
});
