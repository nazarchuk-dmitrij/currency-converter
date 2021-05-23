<template>
  <div class="error" v-if="requestFailed">
    {{ messageHeader }} <br>
    {{ errorMessage }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      messageHeader: "Something went wrong. Please try again later."
    }
  },
  computed: mapGetters(["requestFailed", "errorMessage"])
};
</script>
<style scoped>
.error {
  color: #F00;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
}
</style>