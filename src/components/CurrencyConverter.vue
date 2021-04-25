<template>
  <div class="converter">
    <div class="converter__row">
      <span class="converter__title">From</span>
      <input type="button" v-model="currencyFrom" class="converter__button" />
      <input
        type="text"
        v-model="currencyFromAmount"
        placeholder="100"
        class="converter__input"
      />
    </div>

    <div class="converter__row">
      <span class="converter__title">To</span>
      <input type="button" v-model="currencyTo" class="converter__button" />
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
    };
  },
  methods: {},
};
</script>

<style scoped>
.converter {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: #fff;
}
.converter__row {
  display: flex;
  width: 100%;
  align-items: center;
}
.converter__row:first-of-type {
  margin-bottom: 20px;
}
.converter__title {
  width: 50px;
}
.converter__button {
  width: 80px;
  padding: 5px;
  margin-right: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.converter__input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
