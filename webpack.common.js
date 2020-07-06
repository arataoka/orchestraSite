const path = require('path')
// const { ProvidePlugin } = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //cssを分離
const StyleLintPlugin = require('stylelint-webpack-plugin') //style-lint

//webstorm->preferences->langages&frameworks->webpackでpathを指定することでエイリアス等が効くようになる(dev)
module.exports = ({ outputFile, assetFile }) => ({
  entry: './src/js/index.js', // エントリーポイント（配列：出力を一つのファイルに, {}:出力を複数ファイル）
  output: {
    path: path.resolve(__dirname, 'dist'), //出力先 ディレクトリ
    filename: `${outputFile}.js`, //出力ファイル名
  },
  module: {
    //その他カスタム設定
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, //これらは既に変換済み
        loader: 'babel-loader', //ES6をES5に変換 設定はbabel.config.jslファイルに記載
      },
      {
        enforce: 'pre', //一番最初に実行させる。
        test: /\.js$/,
        exclude: /node_modules/, //これらは既に変換済み
        loader: 'eslint-loader', //文法チェック .eslintrcに設定
        options: {
          fix: true, //セミコロン(never or always)
        },
      },
      {
        test: /\.scss$/, //対象となる拡張子
        use: [
          //下から実行される
          // 'style-loader', //javascript内にバンドルされたcssをhtmlに注入
          MiniCssExtractPlugin.loader, //cssを分けて生成 or style-loader_
          'css-loader', //cssをバンドル
          'postcss-loader',
          'sass-loader', //sass->css
        ],
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|eot)$/, //画像
        use: {
          //省略可能
          loader: 'file-loader',
          options: {
            name: `${assetFile}.[ext]`, //name->contenthashでハッシュ化可能
            outputPath: 'images',
            publicPath: 'images',
          },
        },
      },
      {
        test: /\.html$/,
        use: ['html-loader'], //html内の画像を読み込む
      },
    ],
  },
  plugins: [
    //ある程度必要な物は決まってくる
    new MiniCssExtractPlugin({
      //cssを分けて生成
      filename: `${outputFile}.css`,
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
    }),
    // new ProvidePlugin({
    //     jQuery: 'jquery',
    //     $: 'jquery',
    // }),
  ],
  resolve: {
    alias: {
      '@scss': path.resolve(__dirname, 'src/scss'), //scss内では~@img/で入力可能
      '@imgs': path.resolve(__dirname, 'src/images'),
    },
    extensions: ['.js', '.scss'], //拡張子の省略
    modules: [path.resolve(__dirname, 'src'), 'node_modules'], //node_modulesとsrcのpathの記述が不要になる
  },
})
