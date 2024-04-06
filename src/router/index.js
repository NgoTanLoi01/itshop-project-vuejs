// index.js:
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
//Product router
import Detail from "../views/product/Detail.vue";
import Wishlist from "../views/product/Wishlist.vue"

// Login router
import Login from "../views/login/Login.vue";

const routes = [
  {
    path: "/",
    component: Home,
    children: [{ path: "", component: Home }],
  },
  // Product router
  {
    path: "/detail",
    component: Detail,
  },
  {
    path: "/wishlist",
    component: Wishlist,
  },
  //Login router
  {
    path: "/login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
