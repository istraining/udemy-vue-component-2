<template>
  <span>
    Server #{{ server.id }} - {{ server.status }}<br/>
    <button @click="showDescription">Show Server Description</button>
  </span>
</template>

<script>
  import { eventBus } from '../../main';

  export default {
    props: {
      server: Object
    },
    name: "ServerItem",
    methods: {
      showDescription() {
        eventBus.showDescription(this.server.description)
      }
    }
  }
</script>

<style scoped>

</style>