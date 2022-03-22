import Vue from "vue";
import Vuex from "vuex";
import { getMovies, getScreenings } from "@/api/movies";
import * as authApi from "@/api/auth";
import { setAuthHeader, removeAuthHeader } from "@/api/client";

const AUTH_HEADER_STORAGE_KEY = "auth-header";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    screenings: [],
    movieTitle: "",
    authHeader: localStorage.getItem(AUTH_HEADER_STORAGE_KEY),
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
    setAuthHeader(state, { authHeader }) {
      state.authHeader = authHeader;
      localStorage.setItem(AUTH_HEADER_STORAGE_KEY, authHeader);
    },
    resetAuthHeader(state) {
      state.authHeader = null;
      localStorage.removeItem(AUTH_HEADER_STORAGE_KEY);
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
    async login({ commit, dispatch }, credentials) {
      await dispatch("logout");
      const response = await authApi.login(credentials);
      const authHeader = response.headers["authorization"];
      setAuthHeader(authHeader);
      commit("setAuthHeader", { authHeader });
    },
    async logout({ commit, getters }) {
      if (!getters.isLoggedIn) return;
      removeAuthHeader();
      commit("resetAuthHeader");
    },
    async register(ctx, credentials) {
      await authApi.register(credentials);
    },
  },
  getters: {
    movies: (state) => state.movies,
    screenings: (state) => state.screenings,
    genres: (state) => {
      return [...new Set(state.movies.map((movie) => movie.genre.name))];
    },
    movieTitle: (state) => state.movieTitle,
    isLoggedIn: (state) => !!state.authHeader,
  },
});
