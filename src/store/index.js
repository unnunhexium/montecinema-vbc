import Vue from "vue";
import Vuex from "vuex";
import user from "@/store/modules/user";
import movies from "@/store/modules/movies";
import checkout from "@/store/modules/checkout";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { checkout, user, movies },
})
