<template>
  <v-row class="main-containers">
    <v-col class="text-center">
      <v-icon x-large>mdi-cat</v-icon>
      <v-icon x-large>mdi-cat</v-icon>
      <v-icon x-large>mdi-cat</v-icon>
      <v-icon x-large>mdi-cat</v-icon>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'PointLoader',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.main-containers {
  min-height: 500px;
  .col {
    width: 500px;
    height: 550px;
    display: flex;
    justify-content: center;
    .v-icon {
      font-size: 10rem !important;
      animation: bouncing-loader 0.6s infinite alternate;
      &:nth-child(2) {
        animation-delay: 0.2s;
      }
      &:nth-child(3) {
        animation-delay: 0.4s;
      }
    }
  }
}
@keyframes bouncing-loader {
  to {
    opacity: 0.1;
    transform: translate3d(0, -1rem, 0);
  }
}
</style>
