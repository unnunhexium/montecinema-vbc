import axios from "axios";

export const API_BASE_URL = "http://localhost:3000";

export const MOVIES_URL = "movies";
export const SCREENINGS_URL = "seances";

export const getMovies = async () => {
  return await axios.get(`${API_BASE_URL}/${MOVIES_URL}`);
};

export const getScreenings = async () => {
  return await axios.get(`${API_BASE_URL}/${SCREENINGS_URL}`);
};

export const getMovieDetails = async (id) => {
  return await axios.get(`${API_BASE_URL}/${MOVIES_URL}/${id}`);
};
