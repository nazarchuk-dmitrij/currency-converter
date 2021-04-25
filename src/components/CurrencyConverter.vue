<template>
  <div class="converter">
    <h2 class="converter__heading">Currency Converter</h2>
    <div class="converter__row">
      <span class="converter__title">From</span>
      <select
        name="currencyFromSelect"
        v-model="currencyFrom"
        class="converter__select"
      >
        <option
          v-for="currency in currencies"
          :key="currency"
          :value="currency"
        >
          {{ currency }}
        </option>
      </select>
      <input
        type="text"
        v-model="currencyFromAmount"
        placeholder="100"
        class="converter__input"
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
      <select
        name="currencyToSelect"
        v-model="currencyTo"
        class="converter__select"
      >
        <option
          v-for="currency in currencies"
          :key="currency"
          :value="currency"
        >
          {{ currency }}
        </option>
      </select>
      <input
        type="text"
        v-model="currencyToAmount"
        placeholder="120"
        class="converter__input"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currencyFrom: "EUR",
      currencyTo: "USD",
      currencyFromAmount: "",
      currencyToAmount: "",
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
  computed: {},
  methods: {
    switchCurrencies: function () {
      const oldCurrencyFrom = this.currencyFrom;
      const oldCurrencyFromAmount = this.currencyFromAmount;
      this.currencyFrom = this.currencyTo;
      this.currencyTo = oldCurrencyFrom;
      this.currencyFromAmount = this.currencyToAmount;
      this.currencyToAmount = oldCurrencyFromAmount;
    },
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
.converter__select {
  margin-right: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
