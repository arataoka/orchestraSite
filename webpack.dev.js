const HtmlWebpackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const webpackMerge = require('webpack-merge')
const commonConf = require('./webpack.common') //共通ファイル
const outputFile = '[name]'
const assetFile = '[name]'

//開発環境用の設定ファイル
module.exports = () =>
  webpackMerge(commonConf({ outputFile, assetFile }), {
    mode: 'development', //production,noneなど
    devtool: 'source-map', //ソースマップの設定
    plugins: [
      //ある程度必要な物は決まってくる
      new HtmlWebpackPlugin({
        //scriptタグを自動で出力
        template: './src/index.html',
        inject: 'body',
      }),
      new StyleLintPlugin({
        emitErrors: true,
        quiet: false,
        syntax: 'scss',
      }),
    ],
  })
