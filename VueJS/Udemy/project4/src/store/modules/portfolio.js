export default {
  namespaced: true,
  state: {
    funds: 5000,
    stocks: [],
  },
  mutations: {
    buyStock(state, { stockId, quantity, stockPrice }) {
      const record = state.stocks.find(element => element.id === stockId);
      if (record) {
        record.quantity += quantity;
      } else {
        state.stocks.push({
          id: stockId,
          quantity,
        });
      }
      state.funds -= quantity * stockPrice;
    },
    sellStock(state, { stockId, quantity, stockPrice }) {
      const record = state.stocks.find(element => element.id === stockId);
      if (record.quantity > quantity) {
        record.quantity -= quantity;
        state.funds += quantity * stockPrice;
      } else {
        state.stocks.splice(state.stocks.indexOf(record), 1);
        state.funds += record.quantity * stockPrice;
      }
    },
  },
  actions: {
    sellStock({ commit, state }, order) {
      const record = state.stocks.find(element => element.id === order.stockId);
      if (record.quantity >= order.quantity) {
        commit('sellStock', order);
      }
    },
    buyStock({ commit, state }, order) {
      if (order.quantity * order.stockPrice < state.funds) {
        commit('buyStock', order);
      }
    },
  },
  getters: {
    stockPortfolio(state, getters, rootState, rootGetters) {
      return state.stocks.map((stock) => {
        const record = rootGetters['stocks/getStocks'].find(element => element.id === stock.id);
        return {
          id: stock.id,
          quantity: stock.quantity,
          name: record.name,
          price: record.price,
        };
      });
    },
    funds(state) {
      return state.funds;
    },
  },
};
