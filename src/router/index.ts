import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    component: MainPage
  }],
  scrollBehavior: (to, from) => {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
});

export default router;
