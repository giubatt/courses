<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <br>
      <button @click="component = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
      <button @click="component = 'appGreen'" class="btn btn-success">Load Green Template</button>
      <button @click="component = 'appRed'" class="btn btn-danger">Load Red Template</button>
      <hr>
      <component :is="component">
        <h1>Component is {{component}}</h1>
      </component>
      <!-- <app-blue>
        <h1>Blue Component</h1>
      </app-blue>
      <app-green>
        <h2>Green Component</h2>
      </app-green>
      <app-red>
        <h3>Red Component</h3>
      </app-red> -->
    </div>
  </div>
</div>
</template>

<script>
import Blue from './components/Blue.vue';
import Green from './components/Green.vue';
import Red from './components/Red.vue';

export default {
  data() {
    return {
      component: 'appBlue'
    }
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
}
</script>

<style>
</style>
