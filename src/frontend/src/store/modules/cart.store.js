import Vue from "vue";
import { uniqueId } from "lodash";
import misc from "@/static/misc.json";
import { normalizeMisc } from "@/common/helpers";
import {
  SET_PIZZA_PRICE_CART,
  ADD_NEW_PIZZA,
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  UPDATE_TOTAL_CART_PRICE,
  INCREASE_ADDGOODS_COUNTER,
  DECREASE_ADDGOODS_COUNTER,
  RESET_CART,
} from "@/store/mutation-types.js";
export default {
  namespaced: true,
  state: {
    orderPizzaList: [],
    totalAdditionlPrice: 0,
    totalPizzaPrice: 0,
    totalCartPrice: 0,
    additionalGoods: normalizeMisc(misc),
  },

  getters: {
    gettotalPizzaPrice(state) {
      return state.orderPizzaList.reduce((acc, pizza) => {
        return acc + pizza.price * pizza.count;
      }, 0);
    },
    getTotalAdditionlPrice(state) {
      return state.additionalGoods.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);
    },
    getTotalCartPrice(state, getters) {
      return getters.gettotalPizzaPrice + getters.getTotalAdditionlPrice;
    },
  },

  mutations: {
    [SET_PIZZA_PRICE_CART](state, value) {
      state.totalPizzaPrice = value;
    },
    [ADD_NEW_PIZZA](state, payload) {
      let pizza = state.orderPizzaList.find((pizza) => pizza.id === payload.id);
      if (!state.orderPizzaList.length || !pizza) {
        state.orderPizzaList.push(payload);
        Vue.set(payload, "count", 1);
        Vue.set(payload, "id", uniqueId());
      } else {
        state.orderPizzaList.splice(state.orderPizzaList.indexOf(pizza), 1);
        Vue.set(payload, "count", pizza.count);
        state.orderPizzaList.push(payload);
      }
    },
    [INCREASE_COUNTER](state, payload) {
      state.orderPizzaList.map((pizza) => {
        if (pizza.id === payload.id) {
          pizza.count++;
        }
      });
    },
    [DECREASE_COUNTER](state, payload) {
      state.orderPizzaList.map((pizza) => {
        if (pizza.id === payload.id) {
          pizza.count = pizza.count - 1;
          if (pizza.count === 0) {
            state.orderPizzaList.splice(state.orderPizzaList.indexOf(pizza), 1);
          }
        }
      });
    },
    [INCREASE_ADDGOODS_COUNTER](state, payload) {
      state.additionalGoods.map((item) => {
        if (item.id === payload.id) {
          Vue.set(item, "count", ++item.count);
        }
      });
    },
    [DECREASE_ADDGOODS_COUNTER](state, payload) {
      state.additionalGoods.map((item) => {
        if (item.id === payload.id) {
          Vue.set(item, "count", --item.count);
        }
      });
    },
    [UPDATE_TOTAL_CART_PRICE](state) {
      let pizzaPrice = state.orderPizzaList.reduce((acc, pizza) => {
        return acc + pizza.price * pizza.count;
      }, 0);
      let additionalPrice = state.additionalGoods.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);
      state.totalPizzaPrice = pizzaPrice;
      state.totalAdditionlPrice = additionalPrice;
      state.totalCartPrice = pizzaPrice + additionalPrice;
    },
    [RESET_CART](state) {
      state.orderPizzaList = [];
      state.totalPizzaPrice = 0;
      state.totalAdditionlPrice = 0;
      state.totalCartPrice = 0;
      state.additionalGoods.forEach((item) => {
        item.count = 0;
      });
    },
  },
  actions: {
    setTotalPizzaPrice({ commit }, value) {
      commit(SET_PIZZA_PRICE_CART, value);
    },
    addNewOrderPizza({ commit }, payload) {
      commit(ADD_NEW_PIZZA, payload);
    },
    increaseCounter({ commit }, payload) {
      commit(INCREASE_COUNTER, payload);
    },
    decreaseCounter({ commit, state }, payload) {
      commit(DECREASE_COUNTER, payload);
      if (payload.count === 0 && state.orderPizzaList.length < 1) {
        commit(RESET_CART);
      }
    },
    increaseAddCounter({ commit, rootState }, payload) {
      commit(INCREASE_ADDGOODS_COUNTER, payload);
      commit(
        UPDATE_TOTAL_CART_PRICE,
        {
          rootData: rootState,
        },
        { root: false }
      );
    },
    decreaseAddCounter({ commit, rootState }, payload) {
      commit(DECREASE_ADDGOODS_COUNTER, payload);
      commit(
        UPDATE_TOTAL_CART_PRICE,
        {
          rootData: rootState,
        },
        { root: false }
      );
    },
    updateTotalPriceOrder({ commit, rootState }) {
      commit(
        UPDATE_TOTAL_CART_PRICE,
        {
          rootData: rootState,
        },
        { root: false }
      );
    },
    resetCartState({ commit }) {
      commit(RESET_CART);
    },
  },
};
