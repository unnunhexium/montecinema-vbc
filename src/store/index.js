import Vue from "vue";
import Vuex from "vuex";
import { getMovies, getScreenings } from "@/api/movies";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    screenings: [],
    movieTitle: "",
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setScreenings(state, screenings) {
      state.screenings = screenings;
    },
    setMovieTitle(state, movieTitle) {
      state.movieTitle = movieTitle;
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
    async setMovieTitle({ commit }, title) {
      commit("setMovieTitle", title);
    },
  },
  getters: {
    movies: (state) => state.movies,
    screenings: (state) => state.screenings,
    genres: (state) => {
      return [...new Set(state.movies.map((movie) => movie.genre.name))];
    },
    movieTitle: (state) => state.movieTitle,
  },
});
