import axios from "axios";

export const API_BASE_URL = "http://localhost:3000";

export const fetchMovies = async () => {
  const response = await axios.get(`${API_BASE_URL}/movies`);
  return response.data;
};
