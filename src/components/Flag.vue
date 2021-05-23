<template>
  <div class="flag-wrapper">
    <div class="flag" :class="flagClass"></div>
  </div>
</template>

<script>
export default {
  props: {
    currency: String,
  },
  computed: {
    flagClass() {
      return "flag--" + this.currency.slice(0, -1);
    },
  },
};
</script>
<style scoped>
.flag-wrapper {
  width: 42px;
  display: flex;
  justify-content: center;
  margin-right: 5px;
}
.flag {
  content: "";
  background-image: url(../assets/flags-sprite.png);
  background-repeat: no-repeat;
  background-position-x: 0;
  display: inline-block;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgb(220, 220, 220);
  width: 42px;
  height: 29px;
  border-radius: 5px;
}
.flag--CH {
  background-position-x: -7px;
  width: 28px;
}
.flag--ZA {
  background-position-y: 0px;
}
.flag--BR {
  background-position-y: -29px;
}
.flag--CA {
  background-position-y: -58px;
}
.flag--MX {
  background-position-y: -87px;
}
.flag--US {
  background-position-y: -116px;
}
.flag--CN {
  background-position-y: -145px;
}
.flag--HK {
  background-position-y: -174px;
}
.flag--IN {
  background-position-y: -203px;
}
.flag--ID {
  background-position-y: -232px;
}
.flag--JP {
  background-position-y: -261px;
}
.flag--MY {
  background-position-y: -290px;
}
.flag--PH {
  background-position-y: -319px;
}
.flag--SG {
  background-position-y: -348px;
}
.flag--KR {
  background-position-y: -377px;
}
.flag--TH {
  background-position-y: -406px;
}
.flag--BG {
  background-position-y: -435px;
}
.flag--HR {
  background-position-y: -464px;
}
.flag--CZ {
  background-position-y: -493px;
}
.flag--DK {
  background-position-y: -522px;
}
.flag--HU {
  background-position-y: -551px;
}
.flag--IS {
  background-position-y: -580px;
}
.flag--NO {
  background-position-y: -609px;
}
.flag--PL {
  background-position-y: -638px;
}
.flag--RO {
  background-position-y: -667px;
}
.flag--RU {
  background-position-y: -696px;
}
.flag--SE {
  background-position-y: -725px;
}
.flag--CH {
  background-position-y: -754px;
}
.flag--TR {
  background-position-y: -783px;
}
.flag--GB {
  background-position-y: -812px;
}
.flag--IL {
  background-position-y: -841px;
}
.flag--AU {
  background-position-y: -870px;
}
.flag--NZ {
  background-position-y: -899px;
}
.flag--EU {
  background-position-y: -928px;
}
</style>
