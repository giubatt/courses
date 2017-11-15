<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address: {{email}}</p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        email: '',
      }
    },
    created() {
      axios
        .get('users.json')
        .then(res => {
          console.log(res)
          const data = res.data
          this.email = Object.values(data)[0].email
        })
        .catch(console.log)
    },
  }
</script>


<style scoped>
  h1,
  p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>
