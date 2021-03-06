import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/watch",
    name: "watch",
    component: () => import("../views/Watch.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
