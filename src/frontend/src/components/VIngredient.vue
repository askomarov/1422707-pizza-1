<template>
  <li class="ingredients__item">
    <AppDrag
      :transfer-data="{ [this.ingredient]: this.item.count }"
      :isDraggble="this.item.count !== MAX_INGREDIENT_COUNT"
    >
      <span class="filling" :class="`filling--${item.class}`">{{
        item.name
      }}</span>
      <VIngredientCounter
        :value="item.count"
        :id="ingredient"
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
      ingredient: this.item.class,
    };
  },
  methods: {},
};
</script>

<style></style>
