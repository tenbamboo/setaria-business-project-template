const BaseTemplate = import("@/components/BaseTemplate.vue");

export default [
  {
    path: "/demo1",
    name: "demo1",
    component: BaseTemplate,
    children: [
      {
        path: "demo1-1",
        name: "demo1-1",
        component: import("@/views/demo1/demo1-1.vue"),
      },
      {
        path: "demo1-2",
        name: "demo1-2",
        component: import("@/views/demo1/demo1-2.vue"),
      },
    ],
  },
];
