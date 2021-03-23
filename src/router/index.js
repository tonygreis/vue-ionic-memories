import { createRouter, createWebHistory } from "@ionic/vue-router";
import Memories from "../pages/MemoriesPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/memories",
  },
  {
    path: "/memories",
    component: Memories,
  },
  {
    path: "/memories/add",
    component: () => import("../pages/AddMemoryPage.vue"),
  },
  {
    path: "/memories/:id",
    component: () => import("../pages/MemoryDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
