<template>
  <div class="panel panel-default center-block">
    <div class="panel-heading">
      <h3>{{question}}</h3>
    </div>
    <div class="panel-body">
      <div class="row">
        <div class="col-xs-6"
             v-for="(choice, index) in choices"
             :key="index">
          <button type="button"
                  class="btn btn-primary"
                  @click="giveAnswer(choice)">
            {{choice}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'question',
    data () {
      return {
        choices: [0, 0, 0, 0],
        answer: 0,
        question: ''
      }
    },
    created () {
      this.choices.forEach((number, index, arr) => {
        while (arr.includes(number)) {
          number = Math.round(Math.random() * 100)
        }
        arr[index] = number
      })

      this.answer = this.choices[Math.floor(Math.random() * this.choices.length)]

      const num1 = this.answer + Math.round(Math.random() * 50 + 5)
      const num2 = num1 - this.answer
      this.question = `What is ${num1} - ${num2}`
    },
    methods: {
      giveAnswer (number) {
        if (number !== this.answer) {
          window.alert('Wrong! Try again.')
        } else {
          this.$emit('correct')
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .panel {
    height: 300px;
    width: 700px;
  }

  button {
    width: 100px;
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 30px;
  }
</style>
