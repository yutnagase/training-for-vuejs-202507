import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../pages/IndexPage.vue") },
  {
    path: "/address-form",
    component: () => import("../pages/AddressForm.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
