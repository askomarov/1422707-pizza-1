<template>
  <div class="ingredients__sauce">
    <p>Основной соус:</p>
    <label
      v-for="(item, index) in sauces"
      v-bind:key="index"
      class="radio ingredients__input"
    >
      <VRadioButton
        name="sauce"
        :value="item.name"
        :checked="item.name === selectedSouce.name"
        @change="changeSouce"
      />
      <span>{{ item.name }}</span>
    </label>
  </div>
</template>

<script>
import VRadioButton from "@/components/VRadioButton.vue";
export default {
  name: "BuilderSouceSelector",
  components: {
    VRadioButton,
  },
  props: {
    sauces: {
      type: Array,
      required: true,
    },
    selectedSouce: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeSouce(evt) {
      this.$emit("changeSouce", evt.target.value);
    },
  },
};
</script>

<style></style>
