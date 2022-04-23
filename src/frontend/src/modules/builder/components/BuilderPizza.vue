<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        @input="setPizzaName"
      />
    </label>
    <BuilderPizzaView />
    <div class="content__result">
      <p>Итого: {{ pizzaPrice }} ₽</p>
      <button
        type="button"
        class="button"
        :disabled="isBtnActive()"
        @click.prevent="sendOrder"
      >
        Готовьте!
      </button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapActions } = createNamespacedHelpers("Builder");
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView.vue";

export default {
  name: "BuilderPizza",
  components: { BuilderPizzaView },
  computed: {
    ...mapState(["ingredients", "pizzaName"]),
    ...mapGetters(["pizzaPrice", "ingredientsPrice"]),
  },
  methods: {
    ...mapActions(["getPizzaName"]),
    setPizzaName(evt) {
      this.getPizzaName(evt.target.value);
    },
    isBtnActive() {
      return this.pizzaName.trim().length !== 0 && this.ingredientsPrice !== 0
        ? false
        : true;
    },
  },
};
</script>

<style></style>
