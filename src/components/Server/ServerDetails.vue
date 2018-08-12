<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{ serverDescription }}</p>
    </div>

</template>

<script>
import { eventBus } from "../../main";

export default {
  name: "ServerDetails",
  data: function() {
    return {
      serverDescription: "Server Details are currently not updated"
    };
  },
  created() {
    eventBus.$on('descriptionWasChanged', this.setDescription)
  },
  methods: {
    setDescription(description) {
      this.serverDescription = description;
    }
  }
};
</script>

<style scoped>
</style>
