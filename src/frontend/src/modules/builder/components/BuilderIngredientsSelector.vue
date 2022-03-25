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
              :key="item.class"
              :item="item"
              @changeIngredients="changeIngredients"
              :selectedIngredients="selectedIngredients"
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
  data() {
    return {
      ingredientsToOrder: {},
    };
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
      type: Object,
      required: true,
    },
    selectedSouce: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeIngredients(name, counter) {
      this.$set(this.ingredientsToOrder, name, counter);
      this.$emit("changeIngredients", name, counter);
    },
    changeSouce(value) {
      this.$emit("changeSouce", value);
    },
  },
};
</script>

<style></style>
