export default {
  actions: {
    async fetchRates({ commit }, currency = "EUR") {
      const res = await fetch(
        "https://api.ratesapi.io/api/latest?base=" + currency
      );
      const rates = await res.json();

      commit("UPDATE_RATES", rates);
    },
  },
  mutations: {
    UPDATE_RATES(state, rates) {
      state.rates = rates;
    },
  },
  state: {
    rates: [],
  },
  getters: {
    allRates(state) {
      return state.rates;
    },
  },
};
