import Vue from "vue";
import router from "@/router";
import VueRouter from "vue-router";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
