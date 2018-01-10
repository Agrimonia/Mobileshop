import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Cart from '@/components/Cart';
import Checkout from '@/components/Checkout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/Checkout',
      name: 'Checkout',
      component: Checkout,
    },
  ],
});
