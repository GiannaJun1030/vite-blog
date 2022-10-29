import { createApp } from 'vue';

import setStore from '@/store/index';
import initRouter from '@/router/index';

import 'element-plus/dist/index.css';
import './style.css';
import App from './App.vue';

async function bootstrap() {
  const app = createApp(App);

  // 注册router
  initRouter(app);

  // 注册pinia
  setStore(app);

  // 挂载
  app.mount('#app');
}

bootstrap();
