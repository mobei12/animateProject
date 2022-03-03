<template>
  <v-row class="main-containers">
    <v-col class="text-center">
      <svg id="icon" width="500px" height="200px">
        <g id="icon1">
          <rect x="225" y="75" width="50" height="50"></rect>
        </g>
        <g id="icon2">
          <rect x="225" y="75" width="50" height="50" rx="25" ry="25"></rect>
        </g>
        <g id="icon3">
          <path d="M150 0 L75 200 L225 200 Z" />
        </g>
      </svg>
    </v-col>
  </v-row>
</template>
<script>
import SVGMorpheus from '@/static/js/svg-morpheus'
export default {
  name: 'SvgDemo',
  data() {
    return {
      index: 0,
    }
  },
  mounted() {
    this.initSvg()
  },
  methods: {
    initSvg(index = 0) {
      const svgs = document.querySelectorAll('g')
      const svgMorpheus = new SVGMorpheus('#icon')
      svgMorpheus.to(svgs[index].id)
      index++
      if (!svgs[index]) {
        index = 0
        document.body.style.fill = '#' + (Math.random() + '').slice(-6)
      }
      setTimeout(() => {
        this.initSvg()
      }, 2000)
    },
  },
}
</script>
<style lang="scss" scoped>
.main-containers {
}
</style>
