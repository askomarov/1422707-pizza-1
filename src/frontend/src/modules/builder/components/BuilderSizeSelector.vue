<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <label
          v-for="size in sizes"
          v-bind:key="size.id"
          class="diameter__input"
          :class="`diameter__input--${size.class}`"
        >
          <VRadioButton
            name="diameter"
            :value="size.class"
            class="visually-hidden"
            :checked="size.id === orderedPizza.size.id"
            @change="setSizeID(size.id)"
          />

          <span>{{ size.name }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("Builder");

import VRadioButton from "@/components/VRadioButton.vue";

export default {
  name: "BuilderSizeSelector",
  components: {
    VRadioButton,
  },
  computed: {
    ...mapState(["sizes", "orderedPizza"]),
  },
  methods: {
    ...mapActions(["setSizeID"]),
  },
};
</script>

<style></style>
