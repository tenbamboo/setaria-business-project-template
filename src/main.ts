// import { createApp } from "vue";

//
// import ElementPlus from "element-plus";
// import SetariaComponents from "setaria-components";
import { Framework } from "setaria-business-framework";

import "vxe-table/lib/style.css";
import "element-plus/dist/index.css";
import "setaria-components/dist/index.css";
import "./style.css";
import { getEnvParams } from "./utils";
import config from "./config/";

new Framework(config, getEnvParams()).mount();

// const app = createApp(App);

// app.use(ElementPlus);
// app.use(SetariaComponents);
// app.mount("#app");
