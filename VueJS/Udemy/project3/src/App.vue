<template>
  <div id="app">
    <div class="container">
      <h1>Super Quiz</h1>
      <hr>
      <transition name="flip"
                  mode="out-in">
        <component :is="component"
                   @next="nextQuestion()"
                   @correct="correctAnswer()"></component>
      </transition>
    </div>
  </div>
</template>

<script>
  import Question from './components/Question.vue'
  import Congrats from './components/Congrats.vue'

  export default {
    name: 'app',
    components: {
      appQuestion: Question,
      appCongrats: Congrats
    },
    data () {
      return {
        grats: false
      }
    },
    computed: {
      component () {
        return this.grats ? 'app-congrats' : 'app-question'
      }
    },
    methods: {
      correctAnswer () {
        this.grats = true
      },
      nextQuestion () {
        this.grats = false
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .flip-enter-active {
    animation: flip-in 0.5s ease-out forwards;
  }

  .flip-leave-active {
    animation: flip-out 0.5s ease-out forwards;
  }

  .flip-enter,
  .flip-leave {
    transform: scaleX(1)
  }

  @keyframes flip-out {
    from {
      transform: rotateY(0deg)
    }
    to {
      transform: rotateY(90deg)
    }
  }

  @keyframes flip-in {
    from {
      transform: rotateY(90deg)
    }
    to {
      transform: rotateY(0deg)
    }
  }
</style>
