<template>
  <div class="form-group">
    <div class="first-name">
      <label for="firstName">First Name</label>
      <input type="text"
             id="firstName"
             v-model="firstName"
             class="form-control"
             @input="nameChanged">
    </div>
    <div class="last-name">
      <label for="lastName">Last Name</label>
      <input type="text"
             id="lastName"
             v-model="lastName"
             class="form-control"
             @input="nameChanged">
    </div>
  </div>
</template>

<script lang="js">
  export default  {
    name: 'full-name',
    props: ['value'],
    data() {
      return {
        firstName: '',
        lastName: ''
      }
    },
    methods: {
      nameChanged(event) {
        this.$emit('input', this.fullName)
      }
    },
    computed: {
      fullName() {
        return `${this.firstName} ${this.lastName}`
      },
      firstName() {
        return value.split(' ')[0]
      },
      lastName() {
        return value.split(' ')[1]
      }
    }
  }
</script>

<style scoped>
  div.form-group {
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: "first-name last-name";
  }

  .first-name {
    grid-area: first-name;
  }

  .last-name {
    grid-area: last-name;
  }
</style>
