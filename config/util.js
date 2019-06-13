const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");

// 获取所有入口文件
const getEntry = function(globPath) {
  let entries = {};
  glob.sync(globPath).forEach(function(entry) {
    let pathname = entry .split("/") .splice(-2) .join("/") .split(".")[0];
    entries[pathname] = [(path.resolve(__dirname,entry).replace("config", ""))];
  });
  return entries;
};
const getHtml = function(globPath) {
  let htmls = [];

  glob.sync(globPath).forEach(function(entry) {
    let pathname = entry .split("/") .splice(-2) .join("/") .split(".")[0];
    let conf = {
      filename: pathname + ".html",
      template: "src/pages/" + pathname + ".html",
      chunks:[pathname]//只加载当前文件
    };
    htmls.push(new HtmlWebpackPlugin(conf));
  });
  return htmls;
};
module.exports = {
  getEntry,
  getHtml
};
