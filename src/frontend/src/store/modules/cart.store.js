import misc from "@/static/misc.json";
import { normalizeMisc } from "@/common/helpers";
import {
  SET_PIZZA_PRICE_CART,
  ADD_NEW_PIZZA,
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  UPDATE_TOTAL_CART_PRICE,
  SET_ADDITIONAL_GOODS_COUNTER,
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
    // additionalGoods: (state) => {
    //   return (state.adds = normalizeMisc(misc));
    // },
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
    getTotalCartPrice(state) {
      return state.totalPizzaPrice + state.totalCartPrice;
    },
  },

  mutations: {
    [SET_PIZZA_PRICE_CART](state, value) {
      state.totalPizzaPrice = value;
    },
    [ADD_NEW_PIZZA](state, payload) {
      state.orderPizzaList.push(payload);
      payload.count = 1;
    },
    [INCREASE_COUNTER](state, id) {
      state.orderPizzaList.map((pizza) => {
        if (pizza.id === id) {
          pizza.count++;
        }
      });
    },
    [DECREASE_COUNTER](state, id) {
      state.orderPizzaList.map((pizza) => {
        if (pizza.id === id) {
          pizza.count = pizza.count - 1;
          if (pizza.count === 0) {
            state.orderPizzaList.splice(state.orderPizzaList.indexOf(pizza), 1);
          }
        }
      });
    },
    [SET_ADDITIONAL_GOODS_COUNTER](state, payload) {
      state.additionalGoods.map((item) => {
        if (item.id === payload.id) {
          item.count = payload.count;
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
    increaseCounter({ commit }, id) {
      commit(INCREASE_COUNTER, id);
    },
    decreaseCounter({ commit }, id) {
      commit(DECREASE_COUNTER, id);
    },
    increaseAddCounter({ commit, rootState }, payload) {
      commit(SET_ADDITIONAL_GOODS_COUNTER, payload);
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
  },
};
