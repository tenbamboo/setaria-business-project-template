declare module "*.vue" {
  import type { DefineComponent } from "vue";

  import type Vue from "vue";

  const component: DefineComponent<{}, {}, any> | Vue;

  export default component;
}
