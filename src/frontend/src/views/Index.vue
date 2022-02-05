<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <div class="content__dough">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите тесто</h2>

            <div class="sheet__content dough">
              <label
                v-for="(item, index) in doughs"
                class="dough__input"
                :class="`dough__input--${item.doughClassMod}`"
                :key="index"
              >
                <input
                  type="radio"
                  name="dought"
                  :value="item.doughClassMod"
                  class="visually-hidden"
                  :checked="item.isChecked"
                />
                <b>{{ item.name }}</b>
                <span>{{ item.description }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="content__diameter">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите размер</h2>

            <div class="sheet__content diameter">
              <label
                v-for="(item, index) in sizes"
                v-bind:key="index"
                class="diameter__input"
                :class="`diameter__input--${item.sizeClassMod}`"
              >
                <input
                  type="radio"
                  name="diameter"
                  :value="item.sizeClassMod"
                  class="visually-hidden"
                  :checked="item.isChecked"
                />
                <span>{{ item.size }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="content__ingredients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">
              Выберите ингредиенты
            </h2>

            <div class="sheet__content ingredients">
              <div class="ingredients__sauce">
                <p>Основной соус:</p>
                <label
                  v-for="(item, index) in sauces"
                  v-bind:key="index"
                  class="radio ingredients__input"
                >
                  <input
                    type="radio"
                    name="sauce"
                    :value="`соус ${item.name}`"
                    checked
                  />
                  <span>{{ item.name }}</span>
                </label>
                <!-- <label class="radio ingredients__input">
                  <input type="radio" name="sauce" value="tomato" checked />
                  <span>Томатный</span>
                </label>
                <label class="radio ingredients__input">
                  <input type="radio" name="sauce" value="creamy" />
                  <span>Сливочный</span>
                </label> -->
              </div>

              <div class="ingredients__filling">
                <p>Начинка:</p>

                <ul class="ingredients__list">
                  <li
                    class="ingredients__item"
                    v-for="item in ingredients"
                    :key="item.id"
                  >
                    <span
                      class="filling"
                      :class="`filling--${item.ingredient}`"
                      >{{ item.name }}</span
                    >

                    <div class="counter counter--orange ingredients__counter">
                      <button
                        type="button"
                        class="counter__button counter__button--minus"
                        disabled
                      >
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input
                        type="text"
                        name="counter"
                        class="counter__input"
                        value="0"
                      />
                      <button
                        type="button"
                        class="counter__button counter__button--plus"
                      >
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

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

export default {
  name: "IndexHome",
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
