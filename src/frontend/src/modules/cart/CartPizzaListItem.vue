<template>
  <li class="cart-list__item">
    <div class="product cart-list__product">
      <img
        src="@/assets/img/product.svg"
        class="product__img"
        width="56"
        height="56"
        :alt="getPizzaName"
      />
      <div class="product__text">
        <h2>{{ getPizzaName }}</h2>
        <ul>
          <li>{{ pizza.size.name }}, {{ getDoughName }}</li>
          <li>Соус: {{ pizza.sauce.name.toLowerCase() }}</li>
          <li>Начинка: {{ getIngredientsList }}</li>
        </ul>
      </div>
    </div>
    <VIngredientCounter
      :value="pizza.count"
      :id="pizza.id"
      :modClassBtn="modClassBtn"
      @changePlusIngredients="increasePizzaCount"
      @changeMinusIngredients="decreasePizzaCount"
    >
    </VIngredientCounter>

    <div class="cart-list__price">
      <b>{{ getPizzaPrice }} ₽</b>
    </div>

    <div class="cart-list__button">
      <button type="button" class="cart-list__edit" @click="changePizza">
        Изменить
      </button>
    </div>
  </li>
</template>

<script>
// import { mapState, mapGetters, mapActions } from "vuex";
import { mapActions } from "vuex";
import VIngredientCounter from "../../components/VIngredientCounter.vue";
export default {
  components: { VIngredientCounter },
  name: "CartPizzaListItem",
  props: {
    pizza: {
      type: Object,
      reqiured: true,
    },
  },
  data() {
    return {
      modClassBtn: "counter__button--orange",
    };
  },
  computed: {
    getPizzaName() {
      if (this.pizza !== undefined) {
        return this.pizza.pizzaName;
      }
      return "pizza name";
    },
    getDoughName() {
      if (this.pizza.dough.id === 1) {
        return "на тонком тесте";
      }
      return "на толстом тесте";
    },
    getIngredientsList() {
      let igreString = [];
      let ingrNotZero = this.pizza.ingredients.filter((v) => v.count >= 1);
      ingrNotZero.forEach((i) => {
        for (let [key, value] of Object.entries(i)) {
          if (key === "name") {
            igreString.push(value);
          }
        }
      });
      return igreString.join(", ").toLowerCase();
    },
    getPizzaPrice() {
      return this.pizza.price * this.pizza.count;
    },
  },
  methods: {
    ...mapActions("Cart", [
      "increaseCounter",
      "decreaseCounter",
      "updateTotalPriceOrder",
      "editPizza",
    ]),
    increasePizzaCount() {
      this.increaseCounter(this.pizza);
      this.updateTotalPriceOrder();
    },
    decreasePizzaCount() {
      this.decreaseCounter(this.pizza);
      this.updateTotalPriceOrder();
    },
    changePizza() {
      console.log("changePizza");
      this.editPizza(this.pizza);
      this.$router.push({ name: "Index" });
    },
  },
};
</script>

<style></style>
