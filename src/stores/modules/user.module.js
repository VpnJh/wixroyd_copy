// store/modules/user.ts
import { defineStore } from "pinia";

//@ts-ignore
export const useUserStore = defineStore("userStore", {
  state: () => ({
    token: null,
    userInfo: {}
  }),
  getters: {
    isLoginState: state => state.token != null
  },
  actions: {
    setToken(token) {
      this.token = token;
    },
    setUserInfo(userInfo) {
      this.userInfo = userInfo;
    }
  },
  persist: {
    enabled: true // 这个配置代表存储生效，而且是整个store都存储
  }
});
