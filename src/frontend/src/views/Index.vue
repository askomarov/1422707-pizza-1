<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>
        <BuilderDoughSelector
          :doughs="pizzas.dough"
          :selectedDough="order.dough"
          @changeDough="changeDough"
        ></BuilderDoughSelector>

        <BuilderSizeSelector
          :sizes="pizzas.sizes"
          :selectedSize="order.size"
          @changeSize="changeSize"
        ></BuilderSizeSelector>

        <BuilderIngredientsSelector
          :ingredients="pizzas.ingredients"
          :sauces="pizzas.sauces"
          :selectedIngredients="order.ingredients"
          :selectedSouce="order.sauce"
          @changeSouce="changeSouce"
          @changeIngredients="changeIngredients"
        ></BuilderIngredientsSelector>

        <BuilderPizza
          :orderedPizza="order"
          :pizzaPrice="getPizzaPrice"
          :isBtnActive="isBtnActive()"
          @setPizzaName="setPizzaName"
          @sendOrder="sendOrder"
          @onDrop="onDrop"
        ></BuilderPizza>
      </div>
    </form>
  </main>
</template>

<script>
//  Импортируем JSON данные и статусы для фильтров.
import pizzas from "@/static/pizza.json";
import misc from "@/static/misc.json";
import user from "@/static/user.json";
import { normalizePizzas } from "@/common/helpers.js";

import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector.vue";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector.vue";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector.vue";
import BuilderPizza from "@/modules/builder/components/BuilderPizza.vue";

export default {
  name: "IndexHome",
  components: {
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderPizza,
  },
  data() {
    return {
      pizzas: normalizePizzas(pizzas),
      user,
      misc,
      order: {
        dough: {
          name: "light",
        },
        size: {
          name: "normal",
        },
        sauce: {
          name: "tomato",
        },
        ingredients: {},
        price: 0,
        pizzaName: "",
      },
    };
  },
  methods: {
    changeDough(dough) {
      this.order.dough.name = dough;
    },
    changeIngredients(ingredientName, ingredientCounter) {
      this.$set(this.order.ingredients, ingredientName, ingredientCounter);
      this.cleanEmptyIngredients();
    },
    cleanEmptyIngredients() {
      for (let propName in this.order.ingredients) {
        if (this.order.ingredients[propName] === 0) {
          delete this.order.ingredients[propName];
        }
      }
      return this.order.ingredients;
    },
    changeSouce(sauce) {
      this.order.sauce.name = sauce;
    },
    changeSize(size) {
      this.order.size.name = size;
    },
    setPizzaName(value) {
      this.order.pizzaName = value;
    },
    isBtnActive() {
      return this.order.pizzaName.trim().length !== 0 &&
        this.order.ingredients.length !== 0
        ? false
        : true;
    },
    onDrop(ingredient) {
      this.order.ingredients = { ...this.order.ingredients, ...ingredient };
      if (this.order.ingredients[Object.keys(ingredient)[0]] < 3) {
        this.order.ingredients[Object.keys(ingredient)[0]] += 1;
      }
      return this.order.ingredients;
    },
    sendOrder() {
      console.log("index vue");
      console.log(this.order);
      this.$emit("sendOrderPizza", this.order);
    },
  },
  computed: {
    doughPrice() {
      return this.pizzas.dough.find(
        (item) => item.class === this.order.dough.name
      ).price;
    },
    sizeMultiplier() {
      return this.pizzas.sizes.find(
        (item) => item.class === this.order.size.name
      ).multiplier;
    },
    saucePrice() {
      return this.pizzas.sauces.find(
        (item) => item.class === this.order.sauce.name
      ).price;
    },
    ingredientsPrice() {
      let result = 0;
      let keys = Object.keys(this.order.ingredients);
      for (let i = 0; i < keys.length; i++) {
        result +=
          this.pizzas.ingredients.find((item) => item.class === keys[i]).price *
          this.order.ingredients[keys[i]];
      }
      return result;
    },
    getPizzaPrice() {
      return (
        this.sizeMultiplier *
        (this.doughPrice + this.saucePrice + this.ingredientsPrice)
      );
    },
  },
};
</script>

<style></style>
