import { createApp } from "vue";
import App from "./App.vue";

import router from "@/routers";
import { createVfm } from "vue-final-modal";
import clickOutside from "@/directive/clickOutside";

// assets
import "vue-final-modal/style.css";
import "@/assets/scss/style.scss";

const vfm = createVfm();

const app = createApp(App);

app.use(router);
app.use(vfm);
app.directive("click-outside", clickOutside);

app.mount("#app");
