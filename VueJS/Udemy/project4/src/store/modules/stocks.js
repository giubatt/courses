import defaultStocks from '../../data/stocks'

export default {
  namespaced: true,
  state: {
    stocks: [],
  },
  mutations: {
    set(state, stocks) {
      state.stocks = stocks
    },
    randomStocks(state) {
      state.stocks = state.stocks.map(stock => {
        const result = Object.assign({}, stock)
        result.price = Math.round(result.price * (0.6 + Math.random()))
        return result
      })
    },
    load(state, { stocks }) {
      state.stocks = stocks
    },
  },
  actions: {
    initStocks({ commit }) {
      commit('set', defaultStocks)
    },
    randomizeStocks({ commit }) {
      commit('randomStocks')
    },
  },
  getters: {
    getStocks(state) {
      return state.stocks
    },
  },
}
