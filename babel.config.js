module.export = (api) => {
  api.cache(true) //一度行った関数がキャッシュ化されるためビルド時間短縮可能。
  return {
    presets: [
      '@babel/preset-env',
      {
        targets: [
          //対象ブラウザ(https://github.com/browserslist/browserslist)
          'last 1 version',
          '> 1%',
          'IE 10',
          'maintained node versions',
          'not dead',
        ],
        useBuiltins: 'usage', //必要な機能のみを解析して実行
        corejs: 3,
      },
    ],
  }
}
