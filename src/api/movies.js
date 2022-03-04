import axios from "axios";

export const API_BASE_URL = "http://localhost:3000";

export const MOVIES_URL = "movies";

export const getMovies = async () => {
  return await axios.get(`${API_BASE_URL}/${MOVIES_URL}`);
};
