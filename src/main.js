import { createApp } from "vue";
import router from "@/routers";
import App from "./App.vue";

// assets
import "@/assets/scss/style.scss";

const app = createApp(App);
app.use(router);
app.mount("#app");
