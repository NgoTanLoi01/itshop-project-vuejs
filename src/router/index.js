// index.js:
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

import Detail from "@/views/product/Detail.vue";


const routes = [
  {
    path: "/",
    component: Home,
    children: [
      { path: "", component: Home }
    ]
  },
  {
    path: "/detail",
    component: Detail
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;


