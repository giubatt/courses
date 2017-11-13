<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-md-12">
        <transition name="fade"
                    :duration="300"
                    mode="out-in">
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';

  export default {
    components: {
      appHeader: Header,
    },
    created() {
      this.$store.dispatch('stocks/initStocks');
    },
  };
</script>

<style>

</style>
