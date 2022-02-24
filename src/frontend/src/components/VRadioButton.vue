<template>
  <!-- <input type="radio" @change="changeValue" :checked="checked" :value="value" /> -->
  <input type="radio" v-on="$listeners" :checked="checked" :value="value" />
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    value: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // changeValue() {
    //   this.$emit("changeItemValue", this.value);
    // },
  },
};
</script>

<style></style>
