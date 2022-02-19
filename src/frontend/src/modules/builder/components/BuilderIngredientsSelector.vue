<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">
        <BuilderSouceSelector
          :sauces="sauces"
          :selectedSouce="selectedSouce"
          @changeSouce="changeSouce"
        ></BuilderSouceSelector>

        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <li
              class="ingredients__item"
              v-for="item in ingredients"
              :key="item.id"
            >
              <AppDrag :transfer-data="item" :draggable="isDraggable">
                <span class="filling" :class="`filling--${item.ingredient}`">{{
                  item.name
                }}</span>
                <VIngredientCounter
                  :value="item.ingredient"
                  @changeIngredients="changeIngredients"
                  @disableDragging="isDraggable = !$event"
                ></VIngredientCounter>
              </AppDrag>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { MAX_INGREDIENT_COUNT, MIN_INGREDIENT_COUNT } from "@/common/constants";
import AppDrag from "@/components/AppDrag.vue";
import VIngredientCounter from "@/components/VIngredientCounter.vue";
import BuilderSouceSelector from "@/modules/builder/components/BuilderSouceSelector.vue";

export default {
  name: "BuilderIngredientsSelector",
  components: {
    VIngredientCounter,
    BuilderSouceSelector,
    AppDrag,
  },
  props: {
    sauces: {
      type: Array,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    selectedIngredients: {
      type: Array,
      required: true,
    },
    selectedSouce: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isDraggable: true,
    };
  },
  methods: {
    changeIngredients(name, counter) {
      this.$emit("changeIngredients", name, counter);
    },
    changeSouce(value) {
      this.$emit("changeSouce", value);
    },
  },
  // computed: {
  //   isDraggable() {
  //     return (
  //       this.selectedIngredients.ingredient.count >= MIN_INGREDIENT_COUNT &&
  //       this.selectedIngredients.ingredient.count < MAX_INGREDIENT_COUNT
  //     );
  //   },
  // },
};
</script>

<style></style>
