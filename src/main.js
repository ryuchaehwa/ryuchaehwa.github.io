import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router/index";
import "./assets/fonts.css";
import './assets/css/main.css'
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

import AnimateOnScroll from "primevue/animateonscroll";

const app = createApp(App);

app.directive("animateonscroll", AnimateOnScroll);

app.use(PrimeVue, { theme: { preset: Aura } });
app.use(router);
app.mount("#app");
