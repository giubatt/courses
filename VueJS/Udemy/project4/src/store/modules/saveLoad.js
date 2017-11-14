import { HTTP } from '../../services/http'

export default {
  namespaced: true,
  mutations: {
    load(state, data) {},
  },
  actions: {
    save({ rootGetters }) {
      const data = {
        funds: rootGetters['portfolio/funds'],
        stockPortfolio: rootGetters['portfolio/stockPortfolio'],
        stocks: rootGetters['stocks/getStocks'],
      }
      HTTP.put(`data.json`, data)
    },
    load({ commit }) {
      HTTP.get(`data.json`).then(res => {
        if (res.data) {
          commit('portfolio/load', res.data, { root: true })
          commit('stocks/load', res.data, { root: true })
        }
      })
    },
  },
}
