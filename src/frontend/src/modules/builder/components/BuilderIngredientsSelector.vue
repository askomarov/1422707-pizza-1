<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">
        <BuilderSouceSelector
          :sauces="sauces"
          :selectedSouce="selectedSouce"
          @changeSouce="changeSouce"
        />

        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <VIngredient
              v-for="item in ingredients"
              :key="item.id"
              :item="item"
              @changeIngredients="changeIngredients"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VIngredient from "@/components/VIngredient.vue";
import BuilderSouceSelector from "@/modules/builder/components/BuilderSouceSelector.vue";

export default {
  name: "BuilderIngredientsSelector",
  components: {
    BuilderSouceSelector,
    VIngredient,
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
  methods: {
    changeIngredients(name, counter) {
      this.$emit("changeIngredients", name, counter);
    },
    changeSouce(value) {
      this.$emit("changeSouce", value);
    },
  },
};
</script>

<style></style>
