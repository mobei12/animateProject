import bodymovin from "../../static/js/bodymovin"
const animationData = require('../../static/lotties/data1.json');
var animation = bodymovin.loadAnimation({
    container: document.getElementById("main"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    //path: 'lotties/data.json',//文件路径
    animationData:animationData //文件数据
  });