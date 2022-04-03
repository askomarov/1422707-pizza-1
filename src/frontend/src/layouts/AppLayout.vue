<template>
  <div class="app-layout">
    <component :is="layout">
      <slot />
    </component>
  </div>
</template>

<script>
export default {
  name: "AppLayout",
  computed: {
    layout() {
      const layout = this.$route.meta?.layout || "AppLayoutDefault";
      console.log(this.$route.meta?.layout);
      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>
