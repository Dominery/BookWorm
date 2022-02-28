const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {srcPath,distPath} = require('./paths')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    index: path.join(srcPath,'index.ts')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: srcPath,
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        include: srcPath,
         exclude: /node_modules/
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
  resolve: {
    // 先尝试 ts 后缀的 TypeScript 源码文件
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      styles: path.join(srcPath,'assets/styles'),
      components: path.join(srcPath,'components'),
      utils: path.join(srcPath,'utils'),
      images: path.join(srcPath,'assets/images'),
      service: path.join(srcPath,'service'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: ' [name].[hash:8].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(srcPath,'template/index.html')
    }),
  ],
}