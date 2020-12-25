module.exports = {
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'], //コンテンツから使われていないCSSを削除する設定。つまり実際に使われているCSSしかファイルにバンドルしないようにする。
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
