<template>
<div @click="changeServer()">
  Server #{{ server.id }} -- {{server.status}}
</div>
</template>

<script>
import {
  eventBus
} from '../../main';

export default {
  props: {
    server: Object
  },
  methods: {
    changeServer() {
      eventBus.$emit('serverChanged', this.server);
    }
  },
}
</script>

<style lang="css">
</style>
