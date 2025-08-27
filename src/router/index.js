import { createMemoryHistory, createRouter } from "vue-router";

import LandingMain from "@/components/common/LandingMain.vue";
import MainComponent from "@/components/common/MainComponent.vue";

const routes = [
  {
    path: "/",
    component: LandingMain,
  },
  {
    path: "/main",
    component: MainComponent,
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
