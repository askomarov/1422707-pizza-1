<template>
  <div class="counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="value <= MIN_INGREDIENT_COUNT"
      @click="$emit('decrementClick', $event)"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="value"
      :max="maxCounter"
    />
    <button
      type="button"
      :disabled="value >= maxCounter"
      class="counter__button counter__button--plus"
      :class="modClassBtn"
      @click="$emit('incrementClick', $event)"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
import { MIN_INGREDIENT_COUNT } from "@/common/constants.js";
export default {
  name: "VIngredientCounter",
  props: {
    value: {
      type: Number,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    modClassBtn: {
      type: String,
      required: false,
    },
    maxCounter: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      MIN_INGREDIENT_COUNT,
    };
  },
};
</script>

<style></style>
