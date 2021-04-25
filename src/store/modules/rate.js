export default {
  actions: {
    async fetchRates({ commit }, currency = "EUR") {
      const cachedRates = JSON.parse(localStorage.getItem(currency));
      const currentTime = Date.now();
      let response;

      if (cachedRates && cachedRates.expires > currentTime) {
        response = cachedRates.data;
      } else {
        const data = await fetch(
          "https://api.ratesapi.io/api/latest?base=" + currency
        );
        response = await data.json();

        // Caching response in localStorage for one hour
        const expireTime = 60 * 60 * 1000;
        let expireDate = currentTime + expireTime;
        let storeRate = {
          currency: currency,
          data: response,
          expires: expireDate,
        };

        localStorage.setItem(currency, JSON.stringify(storeRate));
      }

      commit("SET_RATES", response);
    },
  },
  mutations: {
    SET_RATES(state, rates) {
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
