<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="quantity === MIN_INGREDIENT_COUNT"
      @click="decreaseCounter"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="quantity"
      :max="MAX_INGREDIENT_COUNT"
    />
    <button
      type="button"
      :disabled="quantity === MAX_INGREDIENT_COUNT"
      class="counter__button counter__button--plus"
      @click="increaseCounter"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
import {
  MAX_INGREDIENT_COUNT,
  MIN_INGREDIENT_COUNT,
} from "@/common/constants.js";
export default {
  name: "VIngredientCounter",
  props: {
    value: {
      type: String,
      required: true,
    },
    ingredientCounter: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      MAX_INGREDIENT_COUNT,
      MIN_INGREDIENT_COUNT,
      quantity: this.ingredientCounter,
    };
  },
  methods: {
    increaseCounter() {
      this.quantity += 1;
      this.$emit("changeIngredients", this.value, this.quantity);
    },
    decreaseCounter() {
      this.quantity -= 1;
      this.$emit("changeIngredients", this.value, this.quantity);
    },
  },
  watch: {
    ingredientCounter() {
      this.quantity = this.ingredientCounter;
    },
  },
};
</script>

<style></style>
