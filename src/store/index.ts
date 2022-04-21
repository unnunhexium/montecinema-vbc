import Vue from "vue";
import Vuex from "vuex";
import { getMovies, getScreenings } from "@/api/movies";
import * as authApi from "@/api/auth";
import { setAuthHeader, removeAuthHeader } from "@/api/client";

const AUTH_HEADER_STORAGE_KEY = "auth-header";
const AUTH_TOKEN = localStorage.getItem(AUTH_HEADER_STORAGE_KEY);

Vue.use(Vuex);

interface Movie {
  id: number,
  title: string,
  genre: { id: number; name: string }
}

const store = new Vuex.Store({
  state: {
    movies: [] as Movie[],
    screenings: [],
    movieTitle: "",
    selectedMovie: {},
    authHeader: AUTH_TOKEN,
    seatsAndTickets: []
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
    setSelectedMovie(state, selectedMovie) {
      state.selectedMovie = selectedMovie;
    },
    setAuthHeader(state, { authHeader }) {
      state.authHeader = authHeader;
      localStorage.setItem(AUTH_HEADER_STORAGE_KEY, authHeader);
    },
    resetAuthHeader(state) {
      state.authHeader = null;
      localStorage.removeItem(AUTH_HEADER_STORAGE_KEY);
    },
    setSeatsAndTickets(state, seatsAndTickets) {
      state.seatsAndTickets = seatsAndTickets;
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
    async setSelectedMovie({ commit }, payload) {
      commit("setSelectedMovie", payload);
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
    async setSeatsAndTickets({ commit }, payload) {
      commit("setSeatsAndTickets", payload)
    }
  },
  getters: {
    movies: (state) => state.movies,
    screenings: (state) => state.screenings,
    genres: (state) => {
      return [...new Set(state.movies.map((movie) => movie.genre.name))];
    },
    movieTitle: (state) => state.movieTitle,
    selectedMovie: (state) => state.selectedMovie,
    isLoggedIn: (state) => !!state.authHeader,
    seatsAndTickets: (state) => state.seatsAndTickets,
  },
});

if (AUTH_TOKEN) {
  setAuthHeader(AUTH_TOKEN);
}

export default store;
