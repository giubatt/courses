<template>
  <div class="panel panel-default center-block">
    <div class="panel-body">
      <h1>That's Correct!</h1>
      <hr>
      <button class="btn btn-primary"
              @click="nextQuestion">
        Next Question
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'question',
    methods: {
      nextQuestion () {
        this.$emit('next')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .panel {
    width: 700px;
    background-color: rgba(20, 120, 20, 0.6);
    color: white;
    height: 300px;
  }

  h1 {
    font-size: 70px;
  }

  button {
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
</style>
