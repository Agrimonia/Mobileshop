<template>
  <main class="capsule">
    <app-banner img="bk-sale" title="促销" bkcolor="#1ba079"/>
    <div class="contain">
      <aside-filter :pricerange.sync="highprice" :sale="true"/>
      <transition-group name="items" tag="section" class="content">
        <product-item
          v-for="(item, index) in products"
          :key="index"
          :item="item"
          :index="index"
        />
      </transition-group>
    </div>
  </main>
</template>

<script>
import AsideFilter from '@/components/AsideFilter';
import AppBanner from '@/components/AppBanner';
import ProductItem from '@/components/ProductItem';

export default {
  components: {
    AsideFilter,
    AppBanner,
    ProductItem,
  },
  data() {
    return {
      highprice: 300,
    };
  },
  computed: {
    products() {
      return this.$store.getters.sale.filter(el => el.price < this.highprice);
    },
  },
};
</script>

<style>
/* no grid support */
aside {
  float: left;
  width: 19.1489%;
}

.content {
  /*no grid support*/
  float: right;
  width: 79.7872%;
  /* grid */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 0 !important;
}

@supports (display: grid) {
  .capsule > * {
    width: auto;
    margin: 0;
  }
}
</style>
