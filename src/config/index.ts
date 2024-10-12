import routes from "./routes/";
import http from "./http/";
import i18n from "./i18n/";
import App from "../App.vue";
import schema from "./schema/";
export default {
  el: "#app",
  render: App,
  routes,
  http,
  i18n,
  schema,
};
