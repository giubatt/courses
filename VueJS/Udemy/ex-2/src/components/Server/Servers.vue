<template>
<div class="col-xs-12 col-sm-6">
  <ul class="list-group">
    <li class="list-group-item" v-for="server in servers">
      <app-server :server="server"></app-server>
    </li>
  </ul>
</div>
</template>

<script>
import {
  eventBus
} from '../../main';
import Server from './Server.vue';

export default {
  data() {
    return {
      servers: [{
          id: 1,
          status: 'Normal'
        },
        {
          id: 2,
          status: 'Critical'
        },
        {
          id: 3,
          status: 'Burning'
        },
        {
          id: 4,
          status: 'Send Help'
        },
        {
          id: 5,
          status: 'Everything is fine'
        },
      ]
    }
  },
  components: {
    'app-server': Server
  }
}
</script>

<style>

</style>
