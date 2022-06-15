import pizza from "@/static/pizza.json";
import { normalizePizzas } from "@/common/helpers.js";
// import { uniqueId } from "lodash";

import {
  GET_DOUGH_ID,
  GET_SAUCES_ID,
  GET_SIZE_ID,
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  GET_PIZZA_NAME,
  RESET_PIZZA,
  SET_PIZZA_PRICE,
  SET_ORDER_INGREDIENTS,
  SET_EDIT_PIZZA,
} from "@/store/mutation-types.js";

const setupState = () => ({
  doughList: normalizePizzas(pizza).dough,
  sauces: normalizePizzas(pizza).sauces,
  sizes: normalizePizzas(pizza).sizes,
  ingredients: normalizePizzas(pizza).ingredients.map((item) => ({
    ...item,
    count: 0,
  })),
  orderedPizza: {
    // id: uniqueId(),
    price: 0,
    dough: pizza.dough[0],
    sauce: pizza.sauces[0],
    size: pizza.sizes[0],
    ingredients: [],
    pizzaName: "",
  },
});
export default {
  namespaced: true,
  state: setupState(),

  getters: {
    ingredientsPrice(state) {
      return state.ingredients.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);
    },
    pizzaPrice(state, getters) {
      return (
        (state.orderedPizza.dough.price +
          state.orderedPizza.sauce.price +
          getters.ingredientsPrice) *
        state.sizes.find(({ id }) => state.orderedPizza.size.id === id)
          .multiplier
      );
    },
  },
  mutations: {
    [SET_PIZZA_PRICE](state, value) {
      state.orderedPizza.price = value;
    },
    [RESET_PIZZA](state) {
      Object.assign(state, setupState());
    },
    [GET_DOUGH_ID](state, id) {
      state.orderedPizza.dough = state.doughList[id - 1];
    },
    [GET_SAUCES_ID](state, id) {
      state.orderedPizza.sauce = state.sauces[id - 1];
    },
    [GET_SIZE_ID](state, id) {
      state.orderedPizza.size = state.sizes[id - 1];
    },
    [GET_PIZZA_NAME](state, name) {
      state.orderedPizza.pizzaName = name;
    },
    [INCREASE_COUNTER](state, id) {
      const currentIngredient = state.ingredients.find(
        (item) => item.class === id
      );
      if (currentIngredient) {
        ++currentIngredient.count;
      }
    },
    [DECREASE_COUNTER](state, id) {
      const currentIngredient = state.ingredients.find(
        (item) => item.class === id
      );
      if (currentIngredient) {
        --currentIngredient.count;
      }
    },
    [SET_ORDER_INGREDIENTS](state, payload) {
      state.orderedPizza.ingredients = payload;
    },
    [SET_EDIT_PIZZA](state, pizza) {
      state.orderedPizza.id = pizza.id;
      state.orderedPizza.price = pizza.price;
      state.orderedPizza.dough = pizza.dough;
      state.orderedPizza.sauce = pizza.sauce;
      state.orderedPizza.size = pizza.size;
      state.orderedPizza.pizzaName = pizza.pizzaName;
      state.ingredients = [];
      pizza.ingredients.forEach((item) => {
        state.ingredients.push({
          ...item,
        });
      });
    },
  },

  actions: {
    setOrderPizzaIngredients({ commit }, payload) {
      commit(SET_ORDER_INGREDIENTS, payload);
    },
    setPizzaPrice({ commit }, value) {
      commit(SET_PIZZA_PRICE, value);
    },
    resetState({ commit }) {
      commit(RESET_PIZZA);
    },
    setDoughtID({ commit }, id) {
      commit(GET_DOUGH_ID, id);
    },
    setSaucesID({ commit }, id) {
      commit(GET_SAUCES_ID, id);
    },
    setSizeID({ commit }, id) {
      commit(GET_SIZE_ID, id);
    },
    increaseCounter({ commit }, id) {
      commit(INCREASE_COUNTER, id);
    },
    decreaseCounter({ commit }, id) {
      commit(DECREASE_COUNTER, id);
    },
    getPizzaName({ commit }, name) {
      commit(GET_PIZZA_NAME, name);
    },
    editPizza({ commit }, pizza) {
      commit(SET_EDIT_PIZZA, pizza);
    },
  },
};
