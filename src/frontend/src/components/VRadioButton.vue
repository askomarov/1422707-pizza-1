<template>
  <!-- <input type="radio" @change="changeValue" :checked="checked" :value="value" /> -->
  <input type="radio" v-on="$listeners" :checked="checked" />
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
