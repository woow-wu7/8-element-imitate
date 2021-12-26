// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import "./packages/theme-chalk/index.scss";
// import ElementUI from "./index.js";
import App from "./App";
import DivineUi from "8-divine";

Vue.use(DivineUi);
// Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  render: (h) => h(App),
}).$mount("#app");
