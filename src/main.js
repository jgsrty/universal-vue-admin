// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
//normalize.css
import "normalize.css/normalize.css";
// element
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
//sotre
import store from "./store";
//storage
import storage from "./tools/storage";
//permission
import "@/permission";
//global css
import "@/style/index.css";

Vue.config.productionTip = false;
Vue.prototype.Storage = storage;
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
