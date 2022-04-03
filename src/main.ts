import Vue from "vue";
import router from "@/router";
import VueRouter from "vue-router";
import Meta from "vue-meta";
import store from "./store";
import App from "./App.vue";
import VueCompositionApi from "@vue/composition-api"

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Meta);
Vue.use(VueCompositionApi);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
