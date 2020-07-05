const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
const commonConf = require('./webpack.common') //共通ファイル
const outputFile = '[name].[chunkhash]'
const assetFile = '[contenthash]'

//開発環境用の設定ファイル
module.exports = () =>
  webpackMerge(commonConf({ outputFile, assetFile }), {
    mode: 'production', //production,noneなど
    plugins: [
      //ある程度必要な物は決まってくる
      new HtmlWebpackPlugin({
        //scriptタグを自動で出力
        template: './src/index.html',
        inject: 'body',
        minify: {
          //https://github.com/jantimon/html-webpack-plugin#minificationhttps://github.com/jantimon/html-webpack-plugin#minification
          collapseWhitespace: true, //空白
          removeComments: true, //comment
          removeRedundantAttributes: true, //不要な属性
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        },
      }),
    ],
    optimization: {
      minimizer: [
        new TerserPlugin(), //javascriptのminify
        new OptimizeCssPlugin(), //cssのminify
      ],
    },
  })
