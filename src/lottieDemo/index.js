import bodymovin from "../../static/js/bodymovin"
const animationData = require('../../static/lotties/data.json');
var animation = bodymovin.loadAnimation({
    container: document.getElementById("main"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: 'https://assets2.lottiefiles.com/packages/lf20_FyqMgR.json',//文件路径
    //animationData:animationData //文件数据
  });
