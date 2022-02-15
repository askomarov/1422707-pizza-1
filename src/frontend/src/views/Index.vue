<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>
        <BuilderDoughSelector :doughs="doughs"></BuilderDoughSelector>
        <BuilderSizeSelector :sizes="sizes"></BuilderSizeSelector>
        <BuilderIngredientsSelector
          :sauces="sauces"
          :ingredients="ingredients"
        ></BuilderIngredientsSelector>

        <div class="content__pizza">
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input
              type="text"
              name="pizza_name"
              placeholder="Введите название пиццы"
            />
          </label>

          <div class="content__constructor">
            <div class="pizza pizza--foundation--big-tomato">
              <div class="pizza__wrapper">
                <div class="pizza__filling pizza__filling--ananas"></div>
                <div class="pizza__filling pizza__filling--bacon"></div>
                <div class="pizza__filling pizza__filling--cheddar"></div>
              </div>
            </div>
          </div>

          <div class="content__result">
            <p>Итого: 0 ₽</p>
            <button type="button" class="button" disabled>Готовьте!</button>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
//  Импортируем JSON данные и статусы для фильтров.
import pizza from "@/static/pizza.json";
import misc from "@/static/misc.json";
import user from "@/static/user.json";

import { doughWeight, doughSizes, ingredientsList } from "@/common/helpers";
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector.vue";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector.vue";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector.vue";

export default {
  name: "IndexHome",
  components: {
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
  },
  data() {
    return {
      pizza,
      user,
      misc,
    };
  },
  computed: {
    doughs() {
      return this.pizza.dough.map((item, index) => {
        return {
          id: item.id,
          name: item.name,
          image: item.image,
          description: item.description,
          price: item.price,
          isChecked: index === 0,
          doughClassMod: doughWeight.find((i) => i.name === item.name).value,
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
        };
      });
    },
    sauces() {
      return this.pizza.sauces.map((item) => {
        return {
          id: item.id,
          name: item.name,
          price: item.price,
        };
      });
    },
    sizes() {
      return this.pizza.sizes.map((item, index) => {
        return {
          id: item.id,
          size: item.name,
          image: item.image,
          multiplier: item.multiplier,
          isChecked: index === 0,
          sizeClassMod: doughSizes.find((i) => i.name === item.name).value,
        };
      });
    },
  },
};
</script>

<style></style>
