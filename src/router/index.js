import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("../views/routerView/index.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/home/index.vue"),
      },
      {
        path: "/mint",
        name: "mint",
        component: () => import("../views/mint/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

export default router;
