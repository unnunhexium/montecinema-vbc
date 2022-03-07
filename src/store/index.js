import Vue from "vue";
import Vuex from "vuex";
import { getMovies, getScreenings } from "@/api/movies";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    screenings: [],
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setScreenings(state, screenings) {
      state.screenings = screenings;
    },
  },
  actions: {
    async fetchMovies({ commit }) {
      const { data } = await getMovies();
      commit("setMovies", data);
    },
    async fetchScreenings({ commit }) {
      const { data } = await getScreenings();
      commit("setScreenings", data);
    },
  },
  getters: {
    movies: (state) => state.movies,
    screenings: (state) => state.screenings,
  },
});
