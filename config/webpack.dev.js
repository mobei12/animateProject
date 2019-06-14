const path = require("path"); //node内置path模块，该模块主要集成文件系统路径操作API
const util = require("./util");
const webpack = require("webpack"); //引入webpack
const config = {
  mode: "development", //webpack打包的模式，上述命令里有介绍，也可以在本配置中配置
  /*  entry: {
    about: path.resolve(__dirname, "../src/pages/index/index.js")
  }, */
  entry: util.getEntry("src/*/*.js"), //js的入口文件，支持多入口
  output: {
    //js打包压缩后的出口文件，多入口时对应的配置应做相对变化 注释②
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/, //正则表达式匹配图片规则
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, //限制打包图片的大小：
              //如果大于或等于8192Byte，则按照相应的文件名和路径打包图片；如果小于8192Byte，则将图片转成base64格式的字符串。
              name: "images/[name]-[hash:8].[ext]" //images:图片打包的文件夹；
              //[name].[ext]：设定图片按照本来的文件名和扩展名打包，不用进行额外编码
              //[hash:8]：一个项目中如果两个文件夹中的图片重名，打包图片就会被覆盖，加上hash值的前八位作为图片名，可以避免重名。
            }
          }
        ]
      }
    ]
  },
  plugins: Object.assign(
    [
      new webpack.HotModuleReplacementPlugin()
    ],
    util.getHtml("src/*/*.js")
  ),
  devServer: {
    //webpack-dev-server配置（仅开发环境需要）

    contentBase: path.join(__dirname, "./dist"), //编译打包文件的位置
    //publicPath: "/",
    port: 8088, //服务器端口号
    openPage: "index", //打开的目录
    proxy: {}, //代理列表
    hot: true, //热更新
    compress: true,
    historyApiFallback: true, //开启服务器history重定向模式
    watchOptions: {
      poll: false
    }
  }
};
module.exports = config;
