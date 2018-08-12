import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    showDescription(description) {
      this.$emit('descriptionWasChanged', description);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
