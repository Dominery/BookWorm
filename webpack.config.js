const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var babelpolyfill = require('babel-polyfill')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.ts',
  },
  output: {
    path: resolve('dist'),
    filename: 'js/[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader /* , 'style-loader' */, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader /* , 'style-loader' */, 'css-loader', 'sass-loader'],
      }, // 图片
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        options: {
          // 小于 10K 的图片转成 base64 编码的 dataURL 字符串写到代码中
          limit: 10000,
          // 其他的图片转移到
          name: 'images/[name].[ext]',
          esModule: false,
        },
      },
      // 字体文件
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'fonts/[name]-[hash:4].[ext]',
              esModule: false,
            },
          },
        ],
        type: 'javascript/auto',
      },
    ],
  },
  devtool: false,
  resolve: {
    // 先尝试 ts 后缀的 TypeScript 源码文件
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      styles: resolve('src/assets/styles'),
      components: resolve('src/components'),
      utils: resolve('src/utils'),
      images: resolve('src/assets/images'),
      service: resolve('src/service'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: ' [name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/template/index.html',
    }),
  ],
}
