import { createApp } from "vue";
import router from "@/routers";
import { createVfm } from "vue-final-modal";
import App from "./App.vue";

// assets
import "vue-final-modal/style.css";
import "@/assets/scss/style.scss";

const vfm = createVfm();

const app = createApp(App);

app.use(router);
app.use(vfm);

app.mount("#app");
