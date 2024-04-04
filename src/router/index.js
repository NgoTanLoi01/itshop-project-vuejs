import { createRouter, createWebHistory } from "vue-router";
import Master from "../views/Master.vue";

import Product from "../views/pages/Product.vue";

const routes = [
  {
    path: "/",
    name: "Master",
    component: Master,
  },
  //Product routes
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
