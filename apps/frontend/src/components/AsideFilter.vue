<template>
  <aside>
    <div class="sidearea">
      <label for="pricerange">只显示<span>{{ pricerange }}</span>元以下商品</label>
      <input
        class="slider"
        id="pricerange"
        type="range"
        :value="pricerange"
        :min="min"
        step="1"
        :max="max"
        @input="$emit('update:pricerange', $event.target.value)"
      />
      <span class="min">${{ min }}</span>
      <span class="max">${{ max }}</span>
    </div>
    <filter-switch v-if="!sale"/>
  </aside>
</template>

<script>
import FilterSwitch from './FilterSwitch';

export default {
  name: 'AsideFilter',
  props: {
    sale: {
      type: Boolean,
      default: false,
    },
    pricerange: {
      type: [Number, String],
      default: 300,
    },
  },
  data() {
    return {
      min: 0,
      max: 400,
    };
  },
  components: {
    FilterSwitch,
  },
};
</script>

<style lang="scss" scoped>
aside {
  background: white;
  float: left;
  padding: 20px;
}

.sidearea {
  border-bottom: 1px solid #ccc;
  &:last-of-type {
    border: none;
  }
}

.callout {
  padding: 20px 0;
  h4 {
    padding-bottom: 10px;
  }
}

label {
  font-family: 'Playfair Display', serif;
  padding: 15px 0;
  text-align: center;
}

/*--input range--*/
.sidearea:first-of-type {
  padding-bottom: 40px;
}

label {
  font-family: 'Playfair Display', serif;
  padding: 15px 0;
  text-align: center;
}

span {
  font-family: 'Barlow', sans-serif;
}

.max {
  font-size: 12px;
  float: right;
  color: #565656;
}

.min {
  float: left;
  font-size: 12px;
  color: #565656;
}
</style>
