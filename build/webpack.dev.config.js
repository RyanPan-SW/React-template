const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MinCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: [path.join(__dirname, "../src/index.js")],
    vendor: ["react", "react-router-dom", "redux", "react-dom", "react-redux"]
  },
  mode: "development",
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].[hash].js",
    chunkFilename: "[name].[chunkhash].js"
  },
  devtool: "inline-source-map",
  resolve: {
    alias: {
      pages: path.resolve(__dirname, "../src/pages"),
      components: path.resolve(__dirname, "../src/components"),
      router: path.resolve(__dirname, "../src/router"),
      actions: path.resolve(__dirname, "../src/redux/actions"),
      reducers: path.resolve(__dirname, "../src/redux/reducers"),
      images: path.resolve(__dirname, "../src/images")
    }
  },
  /*src目录下面的以.js结尾的文件，要使用babel解析*/
  /*cacheDirectory是用来缓存编译结果，下次编译加速*/
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader?cacheDirectory=true"]
      },
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader?modules", 'postcss-loader'],
        use: [
          { loader: MinCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]--[hash:base64:5]"
              },
              sourceMap: true
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif)/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "../public/index.html")
    }),
    new MinCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css"
    })
  ],
  // browserslist: [">1%", "last 2 versions"],
  // webpack-dev-server
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    compress: true, // gzip压缩
    host: "0.0.0.0", // 允许ip访问
    hot: true, // 热更新
    historyApiFallback: true, // 解决启动后刷新404
    port: 8000, // 端口
    proxy: {
      // 配置代理服务
      "/api": {
        target: "http://localhost:8000",
        pathRewrite: { "^/api": "" }, // 可转换
        changeOrigin: true
      }
    }
  }
};
