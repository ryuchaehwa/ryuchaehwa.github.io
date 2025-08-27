import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { createPinia } from "pinia";
import { router } from "./router/index.js";

const pinia = createPinia();
let app = createApp(App);

app
  .use(PrimeVue, { theme: { preset: Aura } })
  .use(pinia)
  .use(router)
  .mount("#app");
