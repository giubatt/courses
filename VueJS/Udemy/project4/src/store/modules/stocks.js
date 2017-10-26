import defaultStocks from '../../data/stocks';

export default {
  namespaced: true,
  state: {
    stocks: [],
  },
  mutations: {
    set(state, stocks) {
      state.stocks = stocks;
    },
    randomStocks() {

    },
  },
  actions: {
    initStocks({ commit }) {
      commit('set', defaultStocks);
    },
    randomizeStocks({ commit }) {
      commit('randomStocks');
    },
  },
  getters: {
    getStocks(state) {
      return state.stocks;
    },
  },
};
