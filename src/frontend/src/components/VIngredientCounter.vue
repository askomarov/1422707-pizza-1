<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="counter <= MIN_INGREDIENT_COUNT"
      @click="decreaseCounter(id)"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="counter"
      :max="MAX_INGREDIENT_COUNT"
    />
    <button
      type="button"
      :disabled="counter >= MAX_INGREDIENT_COUNT"
      class="counter__button counter__button--plus"
      @click="increaseCounter(id)"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Builder");
import {
  MAX_INGREDIENT_COUNT,
  MIN_INGREDIENT_COUNT,
} from "@/common/constants.js";
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
  },
  data() {
    return {
      MAX_INGREDIENT_COUNT,
      MIN_INGREDIENT_COUNT,
      counter: this.value,
    };
  },
  methods: {
    ...mapActions(["increaseCounter", "decreaseCounter"]),
  },
  watch: {
    value: function (value) {
      this.counter = value;
    },
  },
};
</script>

<style></style>
