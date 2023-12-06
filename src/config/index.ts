import routes from "./routes/";
import http from "./http/";
import App from "../App.vue";
export default {
  el: "#app",
  render: App,
  routes,
  http,
};
