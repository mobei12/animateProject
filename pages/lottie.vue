<template>
  <v-row class="main-containers">
    <v-col class="lottie-containers1" @click="changeLottie('lottie1')"> </v-col>
    <v-col class="lottie-containers2" @click="changeLottie('lottie2')"> </v-col>
  </v-row>
</template>

<script>
import lottie from 'lottie-web'
import data3 from '@/assets/lottie/data3.json'
export default {
  name: 'LottiePage',
  data() {
    return {
      lottie1: null,
      lottie2: null,
      lottie1Animation: true,
      lottie2Animation: true,
    }
  },
  mounted() {
    this.initLottie()
    this.initLottie2()
  },
  methods: {
    changeLottie(lottie) {
      if (this[lottie + 'Animation']) this[lottie].pause()
      else this[lottie].play()
      this[lottie + 'Animation'] = !this[lottie + 'Animation']
    },
    /**
     * @description 初始化动画
     */
    initLottie() {
      const container = document.querySelector('.lottie-containers1')
      this.lottie1 = lottie.loadAnimation({
        container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: data3,
      })
    },
    initLottie2() {
      const container2 = document.querySelector('.lottie-containers2')
      this.lottie2 = lottie.loadAnimation({
        container2,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets9.lottiefiles.com/datafiles/gUENLc1262ccKIO/data.json', // t//文件数据 animationData和path不能同时存在
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.main-containers {
  min-width: 500px;
  margin: 0 auto;
  .col {
    width: 500px;
    height: 550px;
  }
}
</style>
