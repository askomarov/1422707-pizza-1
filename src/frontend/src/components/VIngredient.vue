<template>
  <li class="ingredients__item">
    <AppDrag
      :transfer-data="{ [this.ingredient]: this.ingredientCounter }"
      :isDraggble="this.ingredientCounter !== MAX_INGREDIENT_COUNT"
    >
      <span class="filling" :class="`filling--${item.class}`">{{
        item.name
      }}</span>
      <VIngredientCounter
        :value="ingredientCounter"
        @changeIngredients="changeIngredients"
      ></VIngredientCounter>
    </AppDrag>
  </li>
</template>

<script>
import { MAX_INGREDIENT_COUNT } from "@/common/constants.js";
import AppDrag from "@/components/AppDrag.vue";
import VIngredientCounter from "@/components/VIngredientCounter.vue";

export default {
  name: "VIngredient",
  components: { VIngredientCounter, AppDrag },
  props: {
    item: {
      type: Object,
      reqiured: true,
    },
    selectedIngredients: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      MAX_INGREDIENT_COUNT,
      ingredient: this.item.class,
      ingredientCounter: 0,
    };
  },
  methods: {
    changeIngredients(value) {
      this.ingredientCounter = value;
      this.$emit("changeIngredients", this.ingredient, this.ingredientCounter);
    },
  },
  watch: {
    selectedIngredients: function (value) {
      if (Object.keys(this.selectedIngredients).includes(this.ingredient)) {
        if (value[this.ingredient] <= 3) {
          this.ingredientCounter = value[this.ingredient];
        }
      }
    },
  },
};
</script>

<style></style>
