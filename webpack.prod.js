const path = require('path')
const webpack = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const {srcPath,distPath} = require('./paths')

const webpackCommonConf = require('./webpack.common.js')

module.exports = merge(webpackCommonConf,{
  mode: 'production',
  /* entry: {
    discover: path.join(srcPath,'pages','discover','index.tsx'),
    bookshelf: path.join(srcPath,'pages','bookshelf','index.tsx'),
    category: path.join(srcPath, 'pages','categoryPage','index.tsx')
  }, */
  output: {
    path: distPath,
    filename: '[name].[hash:8].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      ENV: JSON.stringify('production')
    })
  ],
  optimization: {
    // 压缩css
    minimizer: [ 
      `...`, // 压缩js
      new CssMinimizerPlugin(),],

    // 分割代码块
    splitChunks: {
      chunks: 'all',
      /**
       * initial 入口 chunk，对于异步导入的文件不处理
          async 异步 chunk，只对异步导入的文件处理
          all 全部 chunk
        */
       // 缓存分组
      cacheGroups: {
          // 第三方模块
          vendor: {
              name: 'vendor', // chunk 名称
              priority: 1, // 权限更高，优先抽离，重要！！！
              test: /node_modules/,
              minSize: 0,  // 大小限制
              minChunks: 1  // 最少复用过几次
          },

          // 公共的模块
          common: {
              name: 'common', // chunk 名称
              priority: 0, // 优先级
              minSize: 0,  // 公共模块的大小限制
              minChunks: 2  // 公共模块最少复用过几次
          }
      }
    }
  }
})