import { defaultClient } from "./client";

export const API_BASE_URL = "http://localhost:3000";

export const MOVIES_URL = "movies";
export const SCREENINGS_URL = "seances";
export const HALL_URL = "halls";
export const RESERVATION_URL = "reservations";

export const getMovies = async () => {
  return await defaultClient.get(`${API_BASE_URL}/${MOVIES_URL}`);
};

export const getScreenings = async () => {
  return await defaultClient.get(`${API_BASE_URL}/${SCREENINGS_URL}`);
};

export const getMovieDetails = async (id) => {
  return await defaultClient.get(`${API_BASE_URL}/${MOVIES_URL}/${id}`);
};

export const getHallDetails = async (id) => {
  return await defaultClient.get(`${API_BASE_URL}/${HALL_URL}/${id}`);
};

export const getReservationDetails = async (id) => {
  return await defaultClient.get(`${API_BASE_URL}/${RESERVATION_URL}/${id}`);
};

export const getScreeningDetails = async (id) => {
  return await defaultClient.get(`${API_BASE_URL}/${SCREENINGS_URL}/${id}`);
};
