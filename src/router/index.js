// index.js:
import { createRouter, createWebHistory } from "vue-router";
import Master from "@/Master.vue";
import Detail from "@/home/Detail.vue";
import Home from "@/home/Home.vue";

const routes = [
  {
    path: "/",
    component: Master,
    children: [
      { path: "", component: Home } // Route con cho Master.vue
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


