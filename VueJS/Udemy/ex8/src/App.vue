<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text"
                 class="form-control"
                 v-model="user.username">
        </div>
        <div class="form-group">
          <label for="email">Mail</label>
          <input type="text"
                 class="form-control"
                 v-model="user.email">
        </div>
        <button class="btn btn-primary"
                @click="submit()">Submit</button>
        <hr>
        <button class="btn btn-primary"
                @click="fetchData()">Get Data</button>
        <br>
        <br>
        <ul class="list-group">
          <li class="list-group-item"
              v-for="(user,index) in users"
              :key="index">
            {{user.username}} - {{user.email}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          username: '',
          email: ''
        },
        users: []
      }
    },
    methods: {
      submit () {
        // console.log(this.user)
        this.$http.post('', this.user)
          .then((response) => {
            console.log(response)
          }, (error) => {
            console.log(error)
          })
      },
      fetchData () {
        this.$http.get('')
          .then(users => {
            return users.json()
          })
          .then(users => {
            this.users = []
            for (var key in users) {
              if (users.hasOwnProperty(key)) {
                this.users.push(users[key])
              }
            }
            console.log(this.users)
          })
      }
    }
  }
</script>

<style>

</style>
