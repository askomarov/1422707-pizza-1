<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>
      <div class="sheet__content dough">
        <label
          v-for="dough in doughList"
          class="dough__input"
          :class="`dough__input--${dough.class}`"
          :key="dough.id"
        >
          <VRadioButton
            :value="dough.class"
            :checked="dough.id === doughID"
            @change="setDoughtID(dough.id)"
            name="dough"
            class="visually-hidden"
          >
          </VRadioButton>

          <b>{{ dough.name }}</b>
          <span>{{ dough.description }}</span>
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
  name: "BuilderDoughSelector",
  components: {
    VRadioButton,
  },
  computed: {
    ...mapState(["doughList", "doughID"]),
  },
  methods: {
    ...mapActions(["setDoughtID"]),
  },
};
</script>

<style></style>
