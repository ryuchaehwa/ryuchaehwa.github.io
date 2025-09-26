import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("theme", {
  state: () => {
    return {
      currentTheme: ref(0), // 0: dark, 1: light
    };
  },

  getters: {
    getCurrentTheme: (state) => state.currentTheme,
    getCurrentThemeClass: (state) => {
      let currentThemeClass = "";

      if (state.currentTheme === 0) {
        currentThemeClass = "theme-dark";
      } else {
        currentThemeClass = "theme-light";
      }

      return currentThemeClass;
    },
  },

  actions: {
    setCurrentTheme(payload) {
      console.log("setCurrentTheme", payload);
      state.currentTheme = payload;
    },
  },
});
