import { getMovies, getScreenings } from "@/api/movies";


const movies = {
    namespaced: true,
    state: {
        movies: [],
        screenings: [],
        movieTitle: "",
        selectedMovie: {},
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
    },
    getters: {
        movies: (state) => state.movies,
        screenings: (state) => state.screenings,
        genres: (state) => {
            return [...new Set(state.movies.map((movie) => movie.genre.name))];
        },
        movieTitle: (state) => state.movieTitle,
        selectedMovie: (state) => state.selectedMovie,
    },
}

export default movies;
