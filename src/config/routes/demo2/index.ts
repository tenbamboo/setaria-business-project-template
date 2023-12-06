const BaseTemplate = import("@/components/BaseTemplate.vue");

export default [
  {
    path: "/demo2",
    name: "demo2",
    component: BaseTemplate,
    children: [
      {
        path: "demo2-1",
        name: "demo2-1",
        component: import("@/views/demo2/demo2-1.vue"),
      },
      {
        path: "demo2-2",
        name: "demo2-2",
        component: import("@/views/demo2/demo2-2.vue"),
      },
    ],
  },
];
