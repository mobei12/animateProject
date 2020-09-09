import lottie from "../../static/js/lottie"
import $ from "jquery";
//const animationData = require('../../static/lotties/data.json');
//const animationData = require('../../static/lotties/28861-connection-style-2.json');
const animationData = require('../../static/lotties/sjxt.json');

lottie.loadAnimation({
  container: document.getElementById("main"), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  //path: 'https://assets9.lottiefiles.com/datafiles/gUENLc1262ccKIO/data.json' // the path to the animation json
  animationData:animationData //文件数据 animationData和path不能同时存在
});
$('#main').on('click',function(){
  lottie.pause()
})
