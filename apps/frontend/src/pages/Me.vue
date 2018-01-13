<template>
  <div class="capsule cart">
    <h1>我的订单</h1>
    <div class="orderitems" v-for="(order, orderIdx) in orders" :key="orderIdx" >
      <div>
        <div v-for="(item, itemIdx) in order.items" :key="itemIdx" class="carttext">
          <h4>{{ item.name }} x {{ item.count }}</h4>
          <p>价格：<strong>{{ item.price * item.count }}</strong></p>
        </div>
      </div>
      <p>地址:{{order.address}}</p>
      <div class="cartinfo">
        <div>
          <p>姓名:{{order.name}}</p>
          <p>手机:{{order.phone}}</p>
        </div>
        <div>
          <h5>{{order.status}}</h5>
          <button @click="pay(orderIdx)" v-if="order.status === '未付款'">支付</button>
        </div>
      </div>
    </div>
    <div v-if="orders.length == 0" class="center">
      <h3>你的订单列表为空</h3>
      <router-link to="/"><button>去商城首页</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    orders() {
      return this.$store.state.orders;
    },
  },
  methods: {
    pay(orderIdx) {
      this.$store.commit('payForOrder', orderIdx);
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
.center{
  text-align: center;
}
.cart > * {
  padding: 50px;
  background: white;
  border-radius: 3px;
  padding-bottom: 80px;
  max-width: 900px;
  margin: auto;
}
h1 {
  margin-top: 10px;
  text-align: center;
}
.cart.empty h1,
.cart.empty h3 {
  margin-bottom: 15px;
}

.orderitems {
  padding: 30px;
  border-bottom: 1px solid #ccc;
}

.carttext {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}


.cartinfo {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.orderitems > * {
  padding: 5px;
}

.cartinfo h5 {
  text-align: right;
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
