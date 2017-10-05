<template>
<div class="row">
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server v-for="index in 5" :id="index"></app-server>
      <!-- <li class="list-group-item" >
        Server #{{ index }}
      </li> -->
    </ul>
  </div>
  <div class="col-xs-12 col-sm-6">
    <p>Server Details are currently not updated</p>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="css">
</style>
