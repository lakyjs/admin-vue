import type { Router } from 'vue-router';

import { useUserStore } from '@/store';
export function createPermissionGuard(router: Router) {
  const userStore = useUserStore();

  router.beforeEach(async (to, _from, next) => {
    const token = userStore.getToken;

    if (!token && !to.meta.ignoreAuth) {
      next({
        path: '/login',
        replace: true,
      });
      return;
    }

    if (to.name === 'login' && token) {
      next('/');
      return;
    }

    next();
  });
}
