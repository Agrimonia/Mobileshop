import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/Index';
import Men from '@/pages/Men';
import Women from '@/pages/Women';
import Sale from '@/pages/Sale';
import Cart from '@/pages/Cart';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/men',
      name: 'Men',
      component: Men,
    },
    {
      path: '/women',
      name: 'Women',
      component: Women,
    },
    {
      path: '/sale',
      name: 'Sale',
      component: Sale,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/me',
      beforeEnter: (to, from, next) => {
        if (!this.a.app.$store.getters.logined) {
          next('/login');
        }
        next();
      },
    },
    {
      path: '/login',
    },
    {
      path: '/signup',
    },
  ],
});
