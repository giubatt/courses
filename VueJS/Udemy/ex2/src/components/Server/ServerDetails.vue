<template>
<div class="col-xs-12 col-sm-6">
  <template v-if="!server.id">
    <p>Server Details are currently not updated</p>
  </template>
  <template v-else>
    <h2>Server {{server.id}}</h2>
    <h4>Status: {{server.status}}</h4>
    <hr>
    <button type="button" name="button" @click="changeStatus()">Change Status</button>
  </template>

</div>
</template>

<script>
import {
  eventBus
} from '../../main';

export default {
  data() {
    return {
      server: {
        id: 0,
        status: ''
      }
    }
  },
  created() {
    eventBus.$on('serverChanged', server => {
      console.log(server);
      this.server = server;
    });
  },
  methods: {
    changeStatus() {
      this.server.status = `This doesn't look like anything to me`;
    }
  }
}
</script>

<style>

</style>
