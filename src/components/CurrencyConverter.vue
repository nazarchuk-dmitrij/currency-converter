<template>
  <div class="converter">
    <h2 class="converter__heading">Currency Converter</h2>
    <div class="converter__row">
      <span class="converter__title">From</span>
      <div class="converter__currency-item">
        <Flag :currency="currencyFrom" />
        <select
          name="currencyFromSelect"
          v-model="currencyFrom"
          class="converter__select"
          v-on:change="updateRates(currencyFrom)"
        >
          <option
            v-for="currency in currencies"
            :key="currency"
            :value="currency"
          >
            {{ currency }}
          </option>
        </select>
      </div>
      <input
        type="text"
        v-model="currencyFromAmount"
        placeholder="100"
        class="converter__input"
        v-on:keyup="convertCurrencyFrom"
      />
    </div>

    <button
      class="converter__switch-button"
      type="button"
      v-on:click="switchCurrencies"
    >
      Switch
    </button>

    <div class="converter__row">
      <span class="converter__title">To</span>
      <div class="converter__currency-item">
        <Flag :currency="currencyTo" />
        <select
          name="currencyToSelect"
          v-model="currencyTo"
          class="converter__select"
          v-on:change="updateRates(currencyFrom)"
        >
          <option
            v-for="currency in currencies"
            :key="currency"
            :value="currency"
          >
            {{ currency }}
          </option>
        </select>
      </div>
      <input
        type="text"
        v-model="currencyToAmount"
        placeholder="120"
        class="converter__input"
        v-on:keyup="convertCurrencyTo"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Flag from "./Flag";

export default {
  components: { Flag },
  data() {
    return {
      currencyFrom: "EUR",
      currencyTo: "USD",
      currencyFromAmount: "",
      currencyToAmount: "",
      /* probably should have gotten this array from API request,
         but don't have time anymore to change that
      */
      currencies: [
        "EUR",
        "USD",
        "GBP",
        "HKD",
        "IDR",
        "ILS",
        "DKK",
        "INR",
        "CHF",
        "MXN",
        "CZK",
        "SGD",
        "THB",
        "HRK",
        "MYR",
        "NOK",
        "CNY",
        "BGN",
        "PHP",
        "SEK",
        "PLN",
        "ZAR",
        "CAD",
        "ISK",
        "BRL",
        "RON",
        "NZD",
        "TRY",
        "JPY",
        "RUB",
        "KRW",
        "HUF",
        "AUD",
      ],
    };
  },
  computed: mapGetters(["allRates"]),
  methods: {
    ...mapActions(["fetchRates"]),
    switchCurrencies: function () {
      const oldCurrencyFrom = this.currencyFrom;
      const oldCurrencyFromAmount = this.currencyFromAmount;
      this.currencyFrom = this.currencyTo;
      this.currencyTo = oldCurrencyFrom;
      this.currencyFromAmount = this.currencyToAmount;
      this.currencyToAmount = oldCurrencyFromAmount;
      this.fetchRates(this.currencyFrom);
    },
    updateRates: function (currencyFrom) {
      this.fetchRates(currencyFrom);
      this.convertCurrencyFrom();
    },
    convertCurrencyFrom() {
      this.currencyToAmount = this.calculateConversion(
        this.currencyFrom,
        this.currencyTo,
        this.currencyFromAmount
      );
    },
    convertCurrencyTo() {
      this.currencyFromAmount = this.calculateConversion(
        this.currencyTo,
        this.currencyFrom,
        this.currencyToAmount
      );
    },
    calculateConversion(sourceCurrency, targetCurrency, sourceAmount) {
      if (this.allRates && this.allRates.rates) {
        const rates = this.allRates.rates;
        const result =
          this.allRates.base === sourceCurrency
            ? sourceAmount * rates[targetCurrency]
            : sourceAmount / rates[sourceCurrency];
        return result.toFixed(2);
      } else {
        console.log("Could not fetch exchange rate");
        return 0;
      }
    },
  },
  async mounted() {
    this.fetchRates();
  },
};
</script>

<style scoped>
.converter {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 40px 40px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px #555;
}
.converter__heading {
  margin-bottom: 15px;
}
.converter__row {
  display: flex;
  width: 100%;
  align-items: center;
}
.converter__switch-button {
  width: 120px;
  margin: 20px 0;
  padding: 5px;
  border: 1px solid #ccc;
  background: #eee;
  border-radius: 5px;
}
.converter__title {
  width: 50px;
}
.converter__currency-item {
  display: flex;
  align-items: center;
}
.converter__select {
  margin-right: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
@media all and (max-width: 425px) {
  .converter {
    padding: 10px 15px 20px;
  }
  .converter__row {
    flex-direction: column;
  }
  .converter__select {
    margin: 10px 0;
  }
}
.converter__select,
.converter__input,
.converter__switch-button {
  height: 2em;
  font-size: 1em;
  line-height: 1.2em;
  outline: none;
}
.converter__select:hover,
.converter__input:hover,
.converter__switch-button:hover {
  box-shadow: 0px 0px 3px 1px #aaa;
}
.converter__select:focus,
.converter__input:focus,
.converter__switch-button:focus {
  border-color: #000;
}
.converter__input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
