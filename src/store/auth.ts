import { defineStore } from "pinia";

interface UserInfo {
  username: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    token: "" as string,
    user: null as UserInfo | null,
  }),
  actions: {
    setAuth(token: string, user: UserInfo) {
      this.isAuthenticated = true;
      this.token = token;
      this.user = user;
    },
    logout() {
      this.isAuthenticated = false;
      this.token = "";
      this.user = null;
    },
  },
  persist: false,
});
