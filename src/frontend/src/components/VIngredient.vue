<template>
  <li class="ingredients__item">
    <AppDrag
      :transfer-data="item"
      :isDraggble="quantity !== MAX_INGREDIENT_COUNT"
    >
      <span class="filling" :class="`filling--${item.ingredient}`">{{
        item.name
      }}</span>
      <VIngredientCounter
        :value="item.ingredient"
        :ingredientCounter="item.count"
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
  },
  data() {
    return {
      MAX_INGREDIENT_COUNT,
      ingredient: this.item,
    };
  },
  computed: {
    quantity() {
      return this.ingredient.count;
    },
  },
  methods: {
    changeIngredients(name, counter) {
      this.$emit("changeIngredients", name, counter);
    },
  },
};
</script>

<style></style>
