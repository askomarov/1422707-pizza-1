import pizza from "@/static/pizza.json";
import { normalizePizzas } from "@/common/helpers.js";
const pizzas = normalizePizzas(pizza);
import {
  GET_DOUGH_ID,
  GET_SAUCES_ID,
  GET_SIZE_ID,
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  GET_PIZZA_NAME,
} from "@/store/mutation-types.js";

const ingredients = pizza.ingredients.map((item) => ({
  ...item,
  count: 0,
}));

export default {
  namespaced: true,
  state: {
    pizzaData: pizzas,
    doughList: pizza.dough,
    sauces: pizza.sauces,
    sizes: pizza.sizes,
    ingredients: ingredients,
    pizzaName: "",
    orderPizzaPrice: 0,
    sizeID: pizza.sizes[0].id,
    doughID: pizza.dough[0].id,
    saucesID: pizza.sauces[0].id,
  },

  getters: {
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
    [GET_DOUGH_ID](state, id) {
      state.doughID = id;
    },
    [GET_SAUCES_ID](state, id) {
      state.saucesID = id;
    },
    [GET_SIZE_ID](state, id) {
      state.sizeID = id;
    },
    [GET_PIZZA_NAME](state, name) {
      state.pizzaName = name;
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
  },

  actions: {
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
