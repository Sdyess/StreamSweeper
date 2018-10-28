import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Top100 from '@/components/Top100';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Top',
      name: 'Top100',
      component: Top100,
    },
  ],
});
