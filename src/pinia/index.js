import { defineStore } from "pinia";
import { ref } from "vue";

import ko from "../langs/ko.json";
import en from "../langs/en.json";

export const useLangStore = defineStore("lang", {
  state: () => {
    return {
      currentLang: ref(0), // 0: ko , 1: en
      langObj: ref({}),
    };
  },

  getters: {
    getCurrentLang: (state) => state.currentLang,
  },

  actions: {
    setCurrentLang() {
      if (this.currentLang) this.currentLang;
    },
  },
});
