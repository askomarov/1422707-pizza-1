import Vue from "vue";
import Vuex from "vuex";
import builder from "./modules/builder";
import cart from "./modules/cart";
import orders from "./modules/orders";
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  // start
  state: {
    pizza: {},
  },
  // end
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Builder: builder,
    Cart: cart,
    Orders: orders,
    Auth: auth,
  },
});
