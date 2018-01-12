import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      username: '',
      name: '',
      token: '',
      phone: '12345',
      address: ['add1', 'add2', 'add3'],
    },
    orders: [],
    cartTotal: 0,
    cart: {},
    sale: false,
    products: [
      {
        name: '绒面靴',
        price: 149.99,
        category: 'women',
        sale: true,
        article: 'shoe',
        img: 'shoe1.png',
      },
      {
        name: '花纹棉夹克',
        price: 39.99,
        category: 'women',
        sale: false,
        article: 'jacket',
        img: 'jacket1.png',
      },
      {
        name: '长款黑夹克',
        price: 49.99,
        category: 'men',
        sale: true,
        article: 'jacket',
        img: 'jacket2.png',
      },
      {
        name: '黑色棉帽',
        price: 12.99,
        category: 'men',
        sale: true,
        article: 'hats',
        img: 'hat1.png',
      },
      {
        name: '青色针织衫',
        price: 29.99,
        category: 'women',
        sale: false,
        article: 'sweater',
        img: 'sweater1.png',
      },
      {
        name: '蓝白格子衬衫',
        price: 18.99,
        category: 'men',
        sale: false,
        article: 'shirt',
        img: 'shirt1.png',
      },
      {
        name: '橙色针织衫',
        price: 28.99,
        category: 'men',
        sale: false,
        article: 'sweater',
        img: 'sweater2.png',
      },
      {
        name: '经典浅蓝衬衫',
        price: 49.99,
        category: 'men',
        sale: false,
        article: 'shirt',
        img: 'shirt2.png',
      },
      {
        name: '迷彩夹克',
        price: 59.99,
        category: 'women',
        sale: true,
        article: 'jacket',
        img: 'jacket3.png',
      },
      {
        name: '金色薄夹克',
        price: 129.99,
        category: 'women',
        sale: false,
        article: 'jacket',
        img: 'jacket4.png',
      },
      {
        name: '绿色羊毛衫',
        price: 80.99,
        category: 'women',
        sale: false,
        article: 'jacket',
        img: 'sweater4.png',
      },
      {
        name: '灰色羊毛衫',
        price: 59.99,
        category: 'men',
        sale: true,
        article: 'jacket',
        img: 'sweater5.png',
      },
    ],
  },
  getters: {
    women: state => (state.products.filter(item => item.category === 'women')),
    men: state => (state.products.filter(item => item.category === 'men')),
    sale: state => (state.products.filter(item => item.sale === true)),
    logined: state => state.user.token !== '',
  },
  mutations: {
    switchSale: (state) => {
      state.sale = !state.sale;
    },
    clearCartCount: (state) => {
      state.cartTotal = 0;
    },
    clearCartContents: (state) => {
      state.cart = {};
    },
    addItem: (state, item) => {
      state.cartTotal += 1;
      if (item.name in state.cart) {
        state.cart[item.name].count += 1;
      } else {
        const stateItem = Object.assign({}, item);
        stateItem.count = 1;
        state.cart[item.name] = stateItem;
      }
    },
    setUserInfo: (state, payload) => {
      state.user.username = payload.username || state.user.username;
      state.user.name = payload.name || state.user.name;
      state.user.token = payload.token || state.user.token;
      state.user.phone = payload.phone || state.user.phone;
      state.user.address = payload.address || state.user.address;
    },
    newOrder: (state, order) => {
      state.orders.push(order);
    },
  },
});
