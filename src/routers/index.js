import { createRouter, createWebHistory } from "vue-router";
export default createRouter({
  history: createWebHistory(), //해쉬값 제거 방식
  routes: [
    {
      path: "/",
      component: () => import("@/pages/Elements.vue"),
    },
    {
      path: "/email",
      component: () => import("@/pages/EmailPage.vue"),
    },
    {
      path: "/module",
      component: () => import("@/pages/Module.vue"),
    },
  ],
});
