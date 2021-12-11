module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./src/assets/csss/global.scss";`,
      },
    },
  },
};
