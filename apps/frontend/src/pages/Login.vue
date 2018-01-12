<template>
  <transition name="fade">
      <div class="payment capsule">
        <h3>用户登录</h3>
        <label for="email">用户名</label>
        <input type="text" v-model="username"/>
        <label for="email">密码</label>
        <input type="password" v-model="password"/>
        <button @click="submit" :disabled="username == '' || password == ''">登录</button>
        <hr>
        <router-link to="/signup">
          <button>注册帐号</button>
        </router-link>
      </div>
    </transition>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submit() {
      this.$store.commit('setUserLoginState', { username: this.username, token: 'test token' });
      this.$router.push('me');
    },
  },
};
</script>

<style scoped>
.payment {
  border: 1px solid #ccc;
  color: black;
  background-color: white;
  width: 500px;
  margin-top: 10px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  min-height: 350px;
  justify-content: space-between;
  text-align: center;
}
.statussubmit {
  text-align: center;
}
.stripe-card {
  border: 1px solid #ccc;
}
p {
  margin: 0 0 10px;
}
label {
  color: black;
  margin: 15px 0 5px;
  font-family: 'Playfair Display', sans-serif;
}
button {
  margin: 20px;
}
button[disabled] {
  color: #ccc;
  border-color: #ccc;
  &:hover {
    background: white;
    color: #ccc;
  }
}
.loadcontain {
  text-align: center;
}
.stripe-card {
  margin-bottom: 10px;
}
.cc-number {
  color: #3964e8;
  font-weight: bold;
}
/* -- transition --*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

