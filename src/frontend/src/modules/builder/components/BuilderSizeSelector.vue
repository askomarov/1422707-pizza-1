<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <label
          v-for="item in sizes"
          v-bind:key="item.id"
          class="diameter__input"
          :class="`diameter__input--${item.sizeClassMod}`"
        >
          <VRadioButton
            name="diameter"
            :value="item.size"
            class="visually-hidden"
            :checked="item.size === selectedSize.name"
            @change="changeSize"
          ></VRadioButton>

          <span>{{ item.size }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import VRadioButton from "@/components/VRadioButton.vue";

export default {
  name: "BuilderSizeSelector",
  components: {
    VRadioButton,
  },
  props: {
    sizes: {
      type: Array,
      required: true,
    },
    selectedSize: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeSize(evt) {
      this.$emit("changeSize", evt.target.value);
    },
  },
};
</script>

<style></style>
