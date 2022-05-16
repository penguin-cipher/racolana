import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/message",
      name: "Message",
      component: () => import("../views/MessageView.vue"),
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("../views/CartItems.vue"),
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("../views/DashBoard.vue"),
    },
    {
      path: "/transaction",
      name: "Transaction",
      component: () => import("../views/TransactionsView.vue"),
    },
    {
      path: "/settings",
      name: "Settings",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/settingsView.vue"),
    },
  ],
});

export default router;
