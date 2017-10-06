// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

Vue.filter("wordLength", value => {
  return `${value} (${value.length})`;
});

Vue.mixin({
  computed: {
    reverseTextMixin() {
      return this.text
        .split("")
        .reverse()
        .join("");
    },
    textLengthMixin() {
      return `${this.text} (${this.text.length})`;
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
