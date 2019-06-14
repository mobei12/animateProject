import bodymovin from "../../static/js/bodymovin"
const animationData = require('../../static/lotties/data.json');
const animationData1 = require('../../static/lotties/data1.json');
var animation = bodymovin.loadAnimation({
    container: document.getElementById("first"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    //path: 'lotties/data.json',//文件路径
    animationData:animationData //文件数据
  });
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById("second"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    //path: 'lotties/data.json',//文件路径
    animationData:animationData1 //文件数据
  });