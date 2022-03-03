<template>
  <v-row class="main-containers">
    <v-col class="text-center">
      <div class="donut"></div>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'CircleLoader',
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.donut {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #7983ff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: donut-spin 1.2s linear infinite;
  margin: 0 auto;
}
@keyframes donut-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
