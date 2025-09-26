import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import { router } from "./router/index";
import "./assets/fonts.css";
import "./assets/css/main.css";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css";
// import "./assets/scss/main.scss";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import AnimateOnScroll from "primevue/animateonscroll";
import koLang from "./langs/ko.json";
import enLang from "./langs/en.json";

const pinia = createPinia();
const app = createApp(App);

app.directive("animateonscroll", AnimateOnScroll);

app.provide("ko", koLang);
app.provide("en", enLang);

app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(pinia);
app.use(PrimeVue, { theme: { preset: Aura } });
app.use(router);
app.mount("#app");
