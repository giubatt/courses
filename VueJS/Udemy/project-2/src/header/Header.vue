<template>
<div class="">
  <h3>Quotes Added</h3>
  <div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" :style="{width: percentage}">
      {{quotes}} / {{maxQuotes}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    quotes: Number,
    maxQuotes: Number
  },
  computed: {
    percentage() {
      return (this.quotes / this.maxQuotes) * 100 + '%';
    }
  }
}
</script>

<style lang="css">
  .progress-bar {
    transition: width 0.5s;
  }
</style>
