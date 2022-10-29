import { createRouter, createWebHistory } from 'vue-router';
import type { App } from 'vue';

const routers = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/login.vue'),
    meta: {
      title: '登录',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routers,
});

export default function (app: App) {
  app.use(router);
}
