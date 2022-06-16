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
        class="counter--orange ingredients__counter"
        @changeMinusIngredients="changeMinusIngredients"
        @changePlusIngredients="changePlusIngredients"
        :maxCounter="MAX_INGREDIENT_COUNT"
      />
    </AppDrag>
  </li>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Builder");
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
      modClass: "",
      ingredient: this.item.class,
    };
  },
  methods: {
    ...mapActions(["increaseCounter", "decreaseCounter"]),
    changePlusIngredients() {
      this.increaseCounter(this.ingredient);
    },
    changeMinusIngredients() {
      this.decreaseCounter(this.ingredient);
    },
  },
};
</script>

<style></style>
