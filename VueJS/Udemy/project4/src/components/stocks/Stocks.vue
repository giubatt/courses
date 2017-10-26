<template>
  <div>
    <app-stock v-for="(stock, key) in stocks"
               :key="key"
               :stock="stock"></app-stock>
  </div>
</template>

<script>
  import Stock from './Stock';

  export default {
    components: {
      appStock: Stock,
    },
    computed: {
      stocks() {
        return this.$store.getters['stocks/getStocks'];
      },
    },
  };
</script>
