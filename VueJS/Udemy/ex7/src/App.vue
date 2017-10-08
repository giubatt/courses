<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1 -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <h3>Ex 1</h3>
        <p>Reversed text => {{'Reversed text' | reverse}}</p>

        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <h3>Ex 2</h3>
        <p>Test => {{'Text' | wordLength}}</p>

        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <h3>Ex 3</h3>
        <p>Test text => {{reverseText}}</p>
        <p>Test text => {{textLength}}</p>

        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        <h3>Ex 4</h3>
        <p>Test text => {{reverseTextMixin}}</p>
        <p>Test text => {{textLengthMixin}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        text: 'test text'
      }
    },
    filters: {
      reverse(value) {
        return value.split('').reverse().join('')
      }
    },
    computed: {
      reverseText() {
        return this.text.split('').reverse().join('')
      },
      textLength() {
        return `${this.text} (${this.text.length})`
      }
    }
  }
</script>

<style>

</style>
