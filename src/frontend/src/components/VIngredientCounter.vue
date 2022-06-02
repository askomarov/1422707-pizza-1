<template>
  <div class="counter" :class="modClass">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="counter <= MIN_INGREDIENT_COUNT"
      @click="decreaseCounter()"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="counter"
      :max="maxCounter"
    />
    <button
      type="button"
      :disabled="counter >= maxCounter"
      class="counter__button counter__button--plus"
      :class="modClassBtn"
      @click="increaseCounter()"
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
    modClass: {
      type: String,
      required: false,
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
      counter: this.value,
    };
  },
  methods: {
    increaseCounter() {
      this.$emit("changePlusIngredients", ++this.counter);
    },
    decreaseCounter() {
      this.$emit("changeMinusIngredients", --this.counter);
    },
  },
  watch: {
    value: function (value) {
      this.counter = value;
    },
  },
};
</script>

<style></style>
