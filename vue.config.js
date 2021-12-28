module.exports = {
  devServer: {
    open: true
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./src/assets/csss/global.scss";`,
      },
    },
  },
};
