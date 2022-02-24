<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>
        <BuilderDoughSelector
          :doughs="doughs"
          :selectedDough="order.dougth"
          @changeDough="changeDough"
        ></BuilderDoughSelector>
        <BuilderSizeSelector
          :sizes="sizes"
          :selectedSize="order.size"
          @changeSize="changeSize"
        ></BuilderSizeSelector>
        <BuilderIngredientsSelector
          :sauces="sauces"
          :selectedSouce="order.souce"
          @changeSouce="changeSouce"
          :ingredients="ingredients"
          :selectedIngredients="order.ingredients"
          @changeIngredients="changeIngredients"
        ></BuilderIngredientsSelector>

        <BuilderPizza
          :orderedPizza="order"
          :pizzaPrice="getPizzaPrice"
          :isBtnActive="isBtnActive()"
          @setPizzaName="setPizzaName"
          @onDrop="onDrop"
        ></BuilderPizza>
      </div>
    </form>
  </main>
</template>

<script>
//  Импортируем JSON данные и статусы для фильтров.
import pizza from "@/static/pizza.json";
import misc from "@/static/misc.json";
import user from "@/static/user.json";

import {
  doughWeight,
  doughSizes,
  ingredientsList,
  souceClassWord,
} from "@/common/helpers";

import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector.vue";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector.vue";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector.vue";
// import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView.vue";
import BuilderPizza from "@/modules/builder/components/BuilderPizza.vue";

export default {
  name: "IndexHome",
  components: {
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    // BuilderPizzaView,
    BuilderPizza,
  },
  data() {
    return {
      pizza,
      user,
      misc,
      order: {
        dougth: {
          name: "Толстое",
          price: 300,
          foundation: "big",
        },
        size: {
          name: "23 см",
          multiplier: 1,
        },
        ingredients: [],
        souce: {
          name: "Сливочный",
          price: 50,
          classWord: "creamy",
        },
        price: 0,
        pizzaName: "",
      },
    };
  },
  computed: {
    doughs() {
      return this.pizza.dough.map((item) => {
        return {
          id: item.id,
          name: item.name,
          image: item.image,
          description: item.description,
          price: item.price,
          doughClassMod: doughWeight.find((i) => i.name === item.name).value,
          foundation: doughWeight.find((i) => i.name === item.name).foundation,
        };
      });
    },
    ingredients() {
      return this.pizza.ingredients.map((item) => {
        return {
          id: item.id,
          name: item.name,
          image: item.image,
          price: item.price,
          ingredient: ingredientsList.find((i) => i.name === item.name).value,
          count: 0,
        };
      });
    },
    sauces() {
      return this.pizza.sauces.map((item) => {
        return {
          id: item.id,
          name: item.name,
          price: item.price,
          classWord: souceClassWord.find((i) => i.name === item.name)
            .foundation,
        };
      });
    },
    sizes() {
      return this.pizza.sizes.map((item) => {
        return {
          id: item.id,
          size: item.name,
          image: item.image,
          multiplier: item.multiplier,
          sizeClassMod: doughSizes.find((i) => i.name === item.name).value,
        };
      });
    },
    getPizzaPrice() {
      let newPizza = this.order;

      let ingredientsPrice = this.order.ingredients
        .map((item) => item.price * item.count)
        .reduce((prev, curr) => prev + curr, 0);

      newPizza.price =
        newPizza.size.multiplier *
        (newPizza.dougth.price + newPizza.souce.price + ingredientsPrice);
      return newPizza.price;
    },
  },
  methods: {
    changeDough(name) {
      this.order.dougth = this.doughs.find((i) => i.name === name);
    },
    changeIngredients(name, count) {
      let newIngredient = this.order.ingredients.find(
        (i) => i.ingredient === name
      );
      if (!newIngredient) {
        let newIngredient = this.ingredients.find((i) => i.ingredient === name);
        newIngredient.count = count;
        this.order.ingredients.push(newIngredient);
      } else {
        newIngredient.count = count;
        if (newIngredient.count === 0) {
          let numberOfEmpty = this.order.ingredients.indexOf(newIngredient);
          this.order.ingredients.splice(numberOfEmpty, 1);
        }
      }
    },
    changeSouce(name) {
      this.order.souce = this.sauces.find((i) => i.name === name);
    },
    changeSize(size) {
      let newIngredient = this.sizes.find((i) => i.size === size);
      this.order.size.name = newIngredient.size;
      this.order.size.multiplier = newIngredient.multiplier;
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
    onDrop(dropItem) {
      if (dropItem.count === 0) {
        let newIngredient = this.ingredients.find(
          (i) => i.name === dropItem.name
        );
        newIngredient.count = 1;
        this.order.ingredients.push(newIngredient);
      } else {
        let newIngredient = this.order.ingredients.find(
          (i) => i.name === dropItem.name
        );
        this.order.ingredients.forEach((element) => {
          if (element.name === newIngredient.name) {
            ++element.count;
          }
        });
      }
    },
  },
};
</script>

<style></style>
