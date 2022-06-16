<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">
        <BuilderSouceSelector />

        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <VIngredient
              v-for="item in ingredients"
              :key="item.class"
              :item="item"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("Builder");

import VIngredient from "@/components/VIngredient.vue";
import BuilderSouceSelector from "@/modules/builder/components/BuilderSouceSelector.vue";

export default {
  name: "BuilderIngredientsSelector",
  components: {
    BuilderSouceSelector,
    VIngredient,
  },
  computed: {
    ...mapState(["ingredients"]),
  },
  methods: {},
};
</script>

<style></style>
