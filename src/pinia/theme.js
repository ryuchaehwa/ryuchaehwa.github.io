import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("theme", {
  state: () => {
    return {
      currentThemeClass: ref("theme-dark"), // theme-dark, theme-light
      currentThemeIconClass: ref("icon-dark"), // icon-dark, icon-light
    };
  },

  getters: {
    getCurrentThemeClass: (state) => {
      state.currentThemeClass;
    },
  },

  actions: {
    setCurrentTheme(payload) {
      this.currentTheme = payload;
      this.currentThemeIconClass = payload;
    },
  },
});
