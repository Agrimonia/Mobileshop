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
        <h3>订单信息</h3>
      <div v-if="logined" class="pay capsule">
        <div>
          <label for="email">姓名</label>
          <input type="text" v-model="name"/>
        </div>
        <div>
          <label for="email">手机</label>
          <input type="text" v-model="phone"/>
        </div>
        <div>
        <label>地址</label>
          <select v-model="addressSelect">
            <option value="new">新地址</option>
            <option v-for="(addr, idx) in userInfo.address" :key="idx" :value="addr">{{addr}}</option>
          </select>
        </div>
        <div>
          <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text" name="address" v-model="addressInput" :disabled="customAddrDisabled">
        </div>
        <button class="add" @click="placeOrder">立即下单</button>
      </div>
      <div v-else>
        <router-link to="/login">
          <button class="add">您还未登录，无法继续下一步，点击前往登录</button>
        </router-link>
      </div>
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
      name: '',
      phone: '',
      addressSelect: '',
      addressInput: '',
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.$store.state.cartTotal;
    },
    logined() {
      return this.$store.getters.logined;
    },
    total() {
      return Object.values(this.cart)
        .reduce((acc, el) => acc + (el.count * el.price), 0)
        .toFixed(2);
    },
    userInfo() {
      return this.$store.state.user;
    },
    customAddrDisabled() {
      return this.addressSelect !== 'new';
    },
  },
  methods: {
    placeOrder() {
      this.$store.commit('newOrder', {
        items: this.cart,
        name: this.name,
        phone: this.phone,
        address: this.addressSelect === 'new' ? this.addressInput : this.addressSelect,
        status: '未付款',
      });
      this.$store.commit('clearCartContents');
      this.$store.commit('clearCartCount');
      this.$router.push('me');
    },
  },
  filters: {
    usdollar(value) {
      return `${value}元`;
    },
  },
  mounted() {
    this.name = this.userInfo.name;
    this.phone = this.userInfo.phone;
  },
};
</script>

<style scoped>
.pay {
  color: black;
  background-color: white;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  max-width: 350px;
}

select {
  width: 80%;
}
input {
  width: 80%;
}
input[type="text"] {
  align-self: flex-end;
}
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
