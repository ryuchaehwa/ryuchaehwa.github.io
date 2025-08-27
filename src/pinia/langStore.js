import { defineStore } from "pinia";

import langKo from "../data/localization/ko.json";
import langEn from "../data/localization/en.json";

export const useLangStore = defineStore("lang", {
  state: () => ({
    currentLang: undefined,
    ko: langKo,
    en: langEn,
  }),

  getters: {
    getCurrentLang(state) {
      return state.ko;
    },
  },

  actions: {
    setCurrentLang(value) {
      if (value === 0) {
        this.currentLang = this.ko;
      } else {
        this.currentLang = this.en;
      }
    },
  },
});
