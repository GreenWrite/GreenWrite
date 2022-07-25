import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar } from "quasar";

import App from "./App.vue";
import router from "./router";
import axios from "axios";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar);
app.config.globalProperties.$axios = axios;

app.mount("#app");
