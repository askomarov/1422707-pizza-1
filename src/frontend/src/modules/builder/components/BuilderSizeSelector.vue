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
            :value="item.sizeClassMod"
            class="visually-hidden"
            :checked="item.isChecked"
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
  },
};
</script>

<style></style>
