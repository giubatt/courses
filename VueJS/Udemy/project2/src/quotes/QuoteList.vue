<template>
<div class="row">
  <div class="col-6 col-md-4 col-lg-3" v-for="(quote, i) in quotes" :key="i">
    <app-quote @click.native="deleteQuote(i)">
      {{quote}}
    </app-quote>
  </div>

</div>
</template>

<script>
import Quote from './Quote.vue';

export default {
  props: ['quotes'],
  components: {
    'app-quote': Quote
  },
  methods: {
    deleteQuote(i) {
      this.$emit('quoteDeleted', i);
    }
  }
}
</script>

<style lang="css">
</style>
