const path = require('path')
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common.js')
const { srcPath, distPath } = require('./paths')
const {merge} = require('webpack-merge')

module.exports = merge(webpackCommonConf,{
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify('development')
    })
  ],
  devServer: {
    port: 8080,
    open: true,  // 自动打开浏览器
    compress: true,  // 启动 gzip 压缩

    hot: true,

    // 设置代理
    proxy: {
        // 将本地 /api/xxx 代理到 localhost:3000/api/xxx
        '/api': 'http://localhost:3000',

        // 将本地 /api2/xxx 代理到 localhost:3000/xxx
        '/api2': {
            target: 'http://localhost:3000',
            pathRewrite: {
                '/api2': ''
            }
        }
    }
  }
})