<template>
  <div class="ingredients__sauce">
    <p>Основной соус:</p>
    <label
      v-for="sauce in sauces"
      :key="sauce.id"
      class="radio ingredients__input"
    >
      <VRadioButton
        name="sauce"
        :value="orderedPizza.sauce.class"
        :checked="sauce.id === orderedPizza.sauce.id"
        @change="setSaucesID(sauce.id)"
      />
      <span>{{ sauce.name }}</span>
    </label>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("Builder");

import VRadioButton from "@/components/VRadioButton.vue";

export default {
  name: "BuilderSouceSelector",
  components: {
    VRadioButton,
  },
  computed: {
    ...mapState(["sauces", "orderedPizza"]),
  },
  methods: {
    ...mapActions(["setSaucesID"]),
  },
};
</script>

<style></style>
