import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

//Product router
import Detail from "../views/product/Detail.vue";
import Store from  "../views/product/Store.vue";
import Blog from  "../views/product/Blog.vue";
import About from  "../views/product/About.vue";
import Contact from  "../views/product/Contact.vue";

//Cart router
import Cart from "../views/cart/Cart.vue";
import Checkout from "../views/cart/Checkout.vue";
import Wishlist from "../views/cart/Wishlist.vue";

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
    path: "/store",
    component: Store,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  },

  //Cart router
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/checkout",
    component: Checkout,
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
