<template>
  <div id="app">
    <App-layout>
      <router-view />
    </App-layout>
  </div>
</template>

<script>
import AppLayout from "@/layouts/AppLayout.vue";
export default {
  name: "App",
  components: {
    AppLayout,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
