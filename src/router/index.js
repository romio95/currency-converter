import Vue from 'vue'
import Router from 'vue-router';

// modules
import List from '@/modules/list/index.vue'
import Converter from '@/modules/converter/index.vue'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/list',
      name: 'list',
      component: List,
    },
    {
      path: '/converter',
      name: 'converter',
      component: Converter,
    },
    {
      path: '/*',
      redirect: {name: 'list'}
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    let el = document.querySelector('.app');
    if (to.path !== from.path) {
      if (savedPosition) {
        return savedPosition
      } else {
        el.scrollLeft = 0;
        el.scrollTop = 0;

        return {x: 0, y: 0}
      }
    }
  }
});

export default router;
