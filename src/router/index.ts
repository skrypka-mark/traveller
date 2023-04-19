import { createRouter, createWebHistory } from 'vue-router';
import { SharedElementRouteGuard } from 'v-shared-element';
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

router.beforeEach(SharedElementRouteGuard);

export default router;
