<template>
  <div class="capsule cart">

    <div v-if="cartTotal > 0">
      <h1>购物车</h1>
      <div class="cartitems"
        v-for="(item, index) in cart"
        :key="index">
        <div class="carttext">
          <h4>{{ item.name }}</h4>
          <p>{{ item.price | usdollar }} x {{ item.count }}</p>
          <p>价格：<strong>{{ item.price * item.count }}</strong></p>
        </div>
        <img class="cartimg" :src="`/static/${item.img}`" :alt="`Image of ${item.name}`">
      </div>
      <div class="total">
        <h3>总价：{{ total | usdollar }}</h3>
      </div>
      <button class="add">前往付款</button>
    </div>

    <div v-else-if="cartTotal === 0 && success === false" class="empty">
      <h1>购物车</h1>
      <h3>你的购物车是空的</h3>
      <router-link to="/"><button>去商城首页</button></router-link>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      success: false,
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.$store.state.cartTotal;
    },
    total() {
      return Object.values(this.cart)
        .reduce((acc, el) => acc + (el.count * el.price), 0)
        .toFixed(2);
    },
  },
  filters: {
    usdollar(value) {
      return `${value}元`;
    },
  },
};
</script>

<style scoped>
.cart > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 50px;
  background: white;
  border-radius: 3px;
  margin-top: 10px;
  padding-bottom: 80px;
}

.cart.empty h1,
.cart.empty h3 {
  margin-bottom: 15px;
}

.cartitems {
  padding: 30px;
  border-bottom: 1px solid #ccc;
  width: 500px;
}

.carttext {
  width: 250px;
  float: left;
}

.carttext p,
.carttext h4 {
  padding: 5px;
}

.cartimg {
  width: 100px;
  border: 1px solid #ccc;
  float: right;
}

.total {
  margin: 20px 0;
}
</style>
