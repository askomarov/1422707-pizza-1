<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        :value="orderedPizza.pizzaName"
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
        :disabled="isBtnActive"
        @click.prevent="sendOrder"
      >
        Готовьте!
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView.vue";

export default {
  name: "BuilderPizza",
  components: { BuilderPizzaView },
  computed: {
    ...mapState("Builder", ["ingredients", "pizzaName", "orderedPizza"]),
    ...mapGetters("Builder", ["pizzaPrice", "ingredientsPrice"]),
    isBtnActive() {
      return this.orderedPizza.pizzaName.trim().length !== 0 &&
        this.ingredientsPrice !== 0
        ? false
        : true;
    },
  },
  methods: {
    ...mapActions("Builder", [
      "getPizzaName",
      "resetState",
      "setPizzaPrice",
      "setOrderPizzaIngredients",
    ]),
    ...mapActions("Cart", [
      "setTotalPizzaPrice",
      "addNewOrderPizza",
      "updateTotalPriceOrder",
    ]),
    setPizzaName(evt) {
      this.getPizzaName(evt.target.value);
    },
    sendOrder() {
      this.setOrderPizzaIngredients(this.ingredients);
      this.setPizzaPrice(this.pizzaPrice);
      this.updateTotalPriceOrder();
      this.addNewOrderPizza(this.orderedPizza);
      this.setTotalPizzaPrice(this.pizzaPrice);
      this.resetState();
    },
    setNewPizzaName() {
      let name = this.orderedPizza.pizzaName;
      return name ? "Введите название пиццы" : true;
    },
  },
};
</script>

<style></style>
