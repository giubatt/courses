<template>
  <div>
    <app-stock v-for="(stock, key) in stocks"
               :key="key"
               :stock="stock"></app-stock>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Stock from './Stock';

  export default {
    computed: {
      ...mapGetters('portfolio', {
        stocks: 'stockPortfolio',
      }),
    },
    components: {
      appStock: Stock,
    },
  };
</script>
