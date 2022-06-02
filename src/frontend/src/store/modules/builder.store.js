import pizza from "@/static/pizza.json";
import { normalizePizzas } from "@/common/helpers.js";
import { uniqueId } from "lodash";

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
} from "@/store/mutation-types.js";

const setupState = () => ({
  doughList: normalizePizzas(pizza).dough,
  sauces: normalizePizzas(pizza).sauces,
  sizes: normalizePizzas(pizza).sizes,
  ingredients: normalizePizzas(pizza).ingredients.map((item) => ({
    ...item,
    count: 0,
  })),
  pizzaName: "",
  orderPizzaPrice: 0,
  sizeID: pizza.sizes[0].id,
  doughID: pizza.dough[0].id,
  saucesID: pizza.sauces[0].id,
  orderedPizza: {
    id: uniqueId(),
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
    pizzaName(state) {
      return state.pizzaName;
    },
    ingredientsPrice(state) {
      return state.ingredients.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);
    },
    pizzaPrice(state, getters) {
      return (
        (state.doughList[0].price +
          state.sauces[0].price +
          getters.ingredientsPrice) *
        state.sizes.find(({ id }) => state.sizeID === id).multiplier
      );
    },
  },
  mutations: {
    [SET_PIZZA_PRICE](state, value) {
      state.orderPizzaPrice = value;
      state.orderedPizza.price = value;
    },
    [RESET_PIZZA](state) {
      Object.assign(state, setupState());
    },
    [GET_DOUGH_ID](state, id) {
      state.doughID = id;
      state.orderedPizza.dough = state.doughList[id - 1];
    },
    [GET_SAUCES_ID](state, id) {
      state.saucesID = id;
      state.orderedPizza.sauce = state.sauces[id - 1];
    },
    [GET_SIZE_ID](state, id) {
      state.sizeID = id;
      state.orderedPizza.size = state.sizes[id - 1];
    },
    [GET_PIZZA_NAME](state, name) {
      state.pizzaName = name;
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
    // getOrderPizza({ commit }) {

    // },
    // edit orderedPizza

    // editOrder({ commit, state }, pizza) {
    //   const dough = state.pizzaData.dough.find(
    //     (item) => item.id === pizza.dough.id
    //   );
    //   const sauce = state.pizzaData.sauces.find(
    //     (item) => item.id === pizza.sauces.id
    //   );
    //   const size = state.pizzaData.sizes.find(
    //     (item) => item.id === pizza.sizes.id
    //   );
    //   commit(GET_DOUGH_ID, dough.id);
    //   commit(GET_SAUCES_ID, sauce.id);
    //   commit(GET_SIZE_ID, size.id);
    // },
  },
};
