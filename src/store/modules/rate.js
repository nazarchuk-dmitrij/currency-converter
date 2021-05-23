export default {
  actions: {
    async fetchRates({ commit, state, dispatch }, currency = "EUR") {
      const cachedRates = JSON.parse(localStorage.getItem(currency));
      const currentTime = Date.now();
      let data;

      if (cachedRates && cachedRates.expires > currentTime) {
        data = cachedRates.data;
        commit("SET_RATES", data);
        commit("SET_ERROR", false);
      } else {
        try {
          let getBaseUrl = state.apiUrl + "?base=" + currency;
          const response = await fetch(
            getBaseUrl
          )
          .then((res) => {
            if (res.ok) return res.json();
            throw new Error(`Error: ${res.status}.`);
          });

          data = await response;
          dispatch("cacheRates", { currency, data, currentTime });

          commit("SET_ERROR", false);
          commit("SET_RATES", data);
        } catch (message) {
          const isError = true;
          commit("SET_ERROR", { isError, message });
        }
      }
    },
    cacheRates({}, {currency, data, currentTime}) {
      // Caching response in localStorage for one hour
      const expireTime = 60 * 60 * 1000;
      let expireDate = currentTime + expireTime;
      let storeRate = {
        currency: currency,
        data: data,
        expires: expireDate,
      };

      localStorage.setItem(currency, JSON.stringify(storeRate));
   }
  },
  mutations: {
    SET_RATES(state, rates) {
      state.rates = rates;
    },
    SET_ERROR(state, { isError, message }) {
      state.requestError = isError;
      state.errorText = message;
    }
  },
  state: {
    apiUrl: "https://api.exchangerate.host/latest",
    rates: [],
    requestError: false,
    errorText: ""
  },
  getters: {
    allRates(state) {
      return state.rates;
    },
    requestFailed(state) {
      return state.requestError;
    },
    errorMessage(state) {
      return state.errorText;
    }
  },
};
