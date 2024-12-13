import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userInfo: {},
    menu: {}
  }),
  getters: {
    getUsers: (state) => state.userInfo,
  },
  actions: {
    updateUserInfo() {
      // 获取用户信息
      this.userInfo = {}
    },

    updateMenu() {
      // 获取菜单信息
      this.menu = {}
    }
  },
})