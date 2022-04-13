import pizzas from "@/static/pizza.json";
import { normalizePizzas } from "@/common/helpers.js";

export default {
  namespaced: true,
  state: {
    pizzas: normalizePizzas(pizzas),
  },

  getters: {
    // filteredTasksList(state) { }
  },

  mutations: {
    // setTasksList(state, payload) {    }
  },
  actions: {
    // getTasksList(context, payload) {    }
  },
};
