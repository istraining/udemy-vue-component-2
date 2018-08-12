<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in servers">
                <server-item :server="server"></server-item>
            </li>
        </ul>
    </div>
</template>

<script>
import ServerItem from "./ServerItem.vue";

export default {
  name: "Servers",
  components: {
    ServerItem
  },
  data: function() {
    return {
      servers: [
        {
          id: 1,
          status: "disabled",
          description: "short description about id 1"
        },
        {
          id: 2,
          status: "disabled",
          description: "short description about id 2"
        },
        {
          id: 3,
          status: "enabled",
          description: "short description about id 3"
        },
        {
          id: 4,
          status: "disabled",
          description: "short description about id 4"
        },
        {
          id: 5,
          status: "enabled",
          description: "short description about id 5"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
