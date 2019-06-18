import lottie from "../../static/js/lottie"
const animationData = require('../../static/lotties/data.json');

lottie.loadAnimation({
  container: document.getElementById("main"), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  //path: 'https://assets2.lottiefiles.com/packages/lf20_FyqMgR.json' // the path to the animation json
  animationData:animationData //文件数据
});
