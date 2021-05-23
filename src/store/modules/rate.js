export default {
  actions: {
    async fetchRates({ commit, state }, currency = "EUR") {
      const cachedRates = JSON.parse(localStorage.getItem(currency));
      const currentTime = Date.now();
      let response;

      if (cachedRates && cachedRates.expires > currentTime) {
        response = cachedRates.data;
      } else {
        const data = await fetch(state.apiURL + "?base=" + currency)
          .then((response) => {
            return response.json();
          })
          .catch((error) => {
            console.log(error);
          });

        response = await data;

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
    apiURL: "https://api.exchangerate.host/latest",
  },
  getters: {
    allRates(state) {
      return state.rates;
    },
  },
};
