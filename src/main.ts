import { createApp } from "vue";
import App from "./App.vue";
import "vant/lib/index.css";

import { Button, DatePicker } from "vant";

createApp(App).use(Button).use(DatePicker).mount("#app");
