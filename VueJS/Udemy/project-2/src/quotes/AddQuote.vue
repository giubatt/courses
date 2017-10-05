<template>
<form>
  <div class="row justify-content-center">
    <div class="col-8">
      <label>Quote</label>
      <textarea class="form-control" rows="3" v-model="quote"></textarea>
      <button class="btn btn-primary" @click.prevent="createNew()">Add Quote</button>
    </div>
  </div>

</form>
</template>

<script>
export default {
  data() {
    return {
      quote: ''
    }
  },
  methods: {
    createNew() {
      if (this.quote) {
        this.$emit('quoteAdded', this.quote);
        this.quote = '';
      }
    }
  }
}
</script>

<style lang="css" scoped>
  textarea {
    margin-bottom: 5px;
  }

  form {
    margin-bottom: 20px;
  }
</style>
