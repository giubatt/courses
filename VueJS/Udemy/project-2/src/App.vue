<template>
<div class="container">
  <app-header :quotes="quotes.length" :maxQuotes="maxQuotes"></app-header>
  <hr>
  <app-add-quote @quoteAdded="addQuote"></app-add-quote>
  <hr>
  <app-quote-list @quoteDeleted="deleteQuote" :quotes="quotes"></app-quote-list>
  <hr>
  <app-footer></app-footer>
</div>
</template>

<script>
import Footer from './footer/Footer.vue';
import Header from './header/Header.vue';
import AddQuote from './quotes/AddQuote.vue';
import QuoteList from './quotes/QuoteList.vue';

export default {
  data() {
    return {
      quotes: [
        'Test quote',
        'Test quote',
        'Test quote',
        'Test quote',
        'Test quote',
        'Test quote',
        'Test quote',
      ],
      maxQuotes: 10
    }
  },
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-add-quote': AddQuote,
    'app-quote-list': QuoteList
  },
  methods: {
    addQuote(quote) {
      if (this.quotes.length < this.maxQuotes) {
        this.quotes.push(quote);
      } else {
        alert('Please delete quotes first!');
      }
    },
    deleteQuote(i) {
      this.quotes.splice(i, 1);
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
