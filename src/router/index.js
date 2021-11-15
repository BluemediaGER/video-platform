import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Watch from "../views/Watch.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/watch",
    name: "watch",
    component: Watch,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
