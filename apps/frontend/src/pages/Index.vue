<template>
  <main class="capsule">
    <app-banner/>
    <div class="contain">
      <aside-filter :pricerange.sync="highprice"/>
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
      return this.$store.state.products.filter((el) => {
        if (this.$store.state.sale) {
          return el.price < this.highprice && el.sale;
        }
        return el.price < this.highprice;
      });
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
