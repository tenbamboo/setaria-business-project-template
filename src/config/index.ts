import routes from "./routes/";
import http from "./http/";
import i18n from "./i18n/";
import App from "../App.vue";
export default {
  el: "#app",
  render: App,
  routes,
  http,
  i18n,
};
