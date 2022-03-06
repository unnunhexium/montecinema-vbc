import Vue from "vue";
import Vuex from "vuex";
import { getMovies } from "@/api/movies";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
  },
  actions: {
    async fetchMovies({ commit }) {
      const { data } = await getMovies();
      commit("setMovies", data);
    },
  },
});
