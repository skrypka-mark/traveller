import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    component: MainPage
  }],
  scrollBehavior: (to, from, savedPosition) => {
    if(savedPosition) {
      return savedPosition;
    }
    if(to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
});

export default router;
