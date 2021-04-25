<template>
  <div id="app">
    <CurrencyConverter />
  </div>
</template>

<script>
import CurrencyConverter from "./components/CurrencyConverter";

export default {
  name: "App",
  components: {
    CurrencyConverter,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  border: 0;
  font-family: "Roboto", sans-serif;
}
body {
  margin: 0;
  background: linear-gradient(to bottom, #11998e, #38ef7d);
}
#app {
  box-sizing: border-box;
  background: lighblue;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
