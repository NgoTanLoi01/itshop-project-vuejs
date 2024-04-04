import { createRouter, createWebHistory } from 'vue-router';
import MasterPage from '../Master.vue';

const routes = [
  {
    path: '/',
    name: 'master',
    component: MasterPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
